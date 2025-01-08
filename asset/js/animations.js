document.addEventListener('DOMContentLoaded', function() {
    const visibleContainers = new WeakMap();
    const animationComplete = new WeakMap();

    // Observer para los contenedores
    const containerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            visibleContainers.set(entry.target, entry.isIntersecting);
            
            if (entry.isIntersecting) {
                checkAndAnimateChildren(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    // Función para verificar si un elemento tiene animaciones
    function hasAnimations(element) {
        const style = window.getComputedStyle(element);
        const hasInviewClass = element.classList.contains('__inview-text01') || 
                             element.classList.contains('__inview-span01') ||
                             element.classList.contains('__pc-inview-span01') ||
                             element.classList.contains('__sp-inview-span01');
        
        return style.animation !== 'none' || 
               style.transition !== 'none' || 
               hasInviewClass;
    }

    // Función para esperar a que terminen las animaciones de un elemento
    function waitForAnimation(element) {
        return new Promise(resolve => {
            if (!hasAnimations(element)) {
                resolve();
                return;
            }

            if (animationComplete.get(element)) {
                resolve();
                return;
            }

            const handleAnimationEnd = () => {
                animationComplete.set(element, true);
                element.removeEventListener('animationend', handleAnimationEnd);
                element.removeEventListener('transitionend', handleAnimationEnd);
                resolve();
            };

            // Para elementos con clases especiales de entrada
            if (element.classList.contains('__inview-text01') || 
                element.classList.contains('__inview-span01') ||
                element.classList.contains('__pc-inview-span01') ||
                element.classList.contains('__sp-inview-span01')) {
                // Damos tiempo extra para estas animaciones específicas
                setTimeout(handleAnimationEnd, 2000);
            } else {
                element.addEventListener('animationend', handleAnimationEnd);
                element.addEventListener('transitionend', handleAnimationEnd);
            }
        });
    }

    // Función para verificar si todos los padres están visibles y sus animaciones completadas
    async function areParentsReady(element) {
        let currentElement = element.parentElement;
        while (currentElement && currentElement !== document.body) {
            if (!visibleContainers.get(currentElement)) {
                return false;
            }
            await waitForAnimation(currentElement);
            currentElement = currentElement.parentElement;
        }
        return true;
    }

    // Función para verificar y animar elementos hijo
    async function checkAndAnimateChildren(container) {
        const elements = container.querySelectorAll('.fontRed, .fontRedIntro');
        
        for (const element of elements) {
            if (await areParentsReady(element)) {
                if (element.classList.contains('fontRed')) {
                    element.classList.add('animate');
                } else if (element.classList.contains('fontRedIntro')) {
                    // Esperamos un poco más para los elementos fontRedIntro
                    await new Promise(resolve => setTimeout(resolve, 500));
                    element.style.opacity = '1';
                }
            }
        }
    }

    // Función para configurar la observación de todos los contenedores padre
    function observeAllParents(element) {
        let currentElement = element;
        while (currentElement && currentElement !== document.body) {
            if (!currentElement.dataset.isObserved) {
                containerObserver.observe(currentElement);
                currentElement.dataset.isObserved = 'true';
                visibleContainers.set(currentElement, false);
                animationComplete.set(currentElement, false);
            }
            currentElement = currentElement.parentElement;
        }
    }

    // Inicializamos la observación para todos los elementos
    document.querySelectorAll('.fontRed, .fontRedIntro').forEach(element => {
        observeAllParents(element);
    });
}); 
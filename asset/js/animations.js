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
        return style.animation !== 'none' || 
               style.transition !== 'none' || 
               element.classList.toString().includes('inview');
    }

    // Función para esperar a que terminen las animaciones
    function waitForAnimation(element) {
        return new Promise(resolve => {
            if (!hasAnimations(element)) {
                resolve();
                return;
            }

            const handleAnimationEnd = () => {
                animationComplete.set(element, true);
                element.removeEventListener('animationend', handleAnimationEnd);
                element.removeEventListener('transitionend', handleAnimationEnd);
                resolve();
            };

            if (element.classList.toString().includes('inview')) {
                setTimeout(handleAnimationEnd, 2000);
            } else {
                element.addEventListener('animationend', handleAnimationEnd);
                element.addEventListener('transitionend', handleAnimationEnd);
            }
        });
    }

    // Función para verificar si los padres están listos
    async function areParentsAnimationsComplete(element) {
        let currentElement = element.parentElement;
        
        while (currentElement && currentElement !== document.body) {
            if (hasAnimations(currentElement)) {
                await waitForAnimation(currentElement);
            }
            currentElement = currentElement.parentElement;
        }
        return true;
    }

    // Función para verificar si el elemento está visible
    function isElementVisible(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Función principal para animar elementos
    async function checkAndAnimateChildren(container) {
        // Manejamos tanto fontRed como button-action
        const elements = container.querySelectorAll('.fontRed, .button-action');
        
        for (const element of elements) {
            // 1. Verificamos que el contenedor sea visible
            if (!visibleContainers.get(container)) continue;

            // 2. Esperamos a que las animaciones de los padres terminen
            await areParentsAnimationsComplete(element);

            // 3. Verificamos que el elemento esté en el viewport
            if (isElementVisible(element)) {
                element.classList.add('animate');
            }
        }
    }

    // Función para observar los contenedores
    function observeContainer(element) {
        let currentElement = element;
        while (currentElement && currentElement !== document.body) {
            if (!currentElement.dataset.isObserved) {
                containerObserver.observe(currentElement);
                currentElement.dataset.isObserved = 'true';
                visibleContainers.set(currentElement, false);
            }
            currentElement = currentElement.parentElement;
        }
    }

    // Inicializamos para ambos tipos de elementos
    document.querySelectorAll('.fontRed, .button-action').forEach(element => {
        observeContainer(element);
    });

    // Verificamos periódicamente los elementos que aún no se han animado
    setInterval(() => {
        document.querySelectorAll('.fontRed:not(.animate), .button-action:not(.animate)').forEach(element => {
            checkAndAnimateChildren(element.parentElement);
        });
    }, 500);
});
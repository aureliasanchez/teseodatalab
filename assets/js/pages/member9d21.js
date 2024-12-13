"use strict";

window.addEventListener('DOMContentLoaded',function(){
  runCategories();
});

/* おすすめのフェア
----------------------------------------------------------------------------- */
function runCategories() {
	const categories = document.querySelectorAll('.aside_wrap.splide');

	if(0 < categories.length) {

  	const category1 = document.querySelector('.contents-sub.-first .aside_wrap.splide');
  	const category1Pager = category1.querySelector('.post-aside-splide-pagination');
    let category1Splide = 1;
    let category1situation = false;
  	const category2 = document.querySelector('.contents-sub.-second .aside_wrap.splide');
  	const category2Pager = category2.querySelector('.post-aside-splide-pagination');
    let category2Splide = 2;
    let category2situation = false;

    const splide_option = {
      type:'slide',
      rewind:true,
      speed:1000,
      autoWidth:true,
      gap:'.30rem',
      perMove:1,
      autoplay:'pause',
      interval:5000,
      pauseOnHover:true,
      arrows: true,
      pagination:true,
      flickPower:150,
      classes: {
        arrows: 'splide__arrows post-aside-splide-arrows',
        arrow : 'splide__arrow post-aside-splide-arrow',
        prev  : 'splide__arrow--prev -prev',
        next  : 'splide__arrow--next -next',
        pagination: 'splide__pagination post-aside-splide-pagination', // container
        page      : 'splide__pagination__page post-aside-splide-page', // each button
      },
      mediaQuery:'min',
      breakpoints: {
        641: {
          drag:false
        }
      }
    }
    const config = { attributes: true, childList: false, subtree: true };
    const config2 = { attributes: true, childList: false, subtree: false };

    const insetSplide = (category,splideMount) => {
      const slideItems = category.querySelectorAll('.aside-link');
      const slideItemsLength = slideItems.length;
      let activeLength = 0;
      let allWidth = 0;

      for(let i = 0;i<slideItemsLength;i++) {
        if(slideItems[i].classList.contains('_current')) {
          activeLength = i;
        }
        const myWidth = slideItems[i].clientWidth;
        slideItems[i].dataset.width = myWidth;
        allWidth += myWidth;
      }

      if(splideMount == 1) {
        category1Splide = new Splide(category,splide_option);
        category1Splide.mount();
        const {Controller} = category1Splide.Components;
        category1Splide.on( 'move', () => {
          if(!category2situation) {
            category1situation = true;
            category2situation = false;
          }
        });
        category1Splide.on( 'moved', () => {
          category1situation = false;
        });
        category1Splide.on( 'pagination:updated updated', () => {
          pagerCreate();
        });
        let loaded = false;
        const observer = new MutationObserver((mutations)=>{
          mutations.forEach((e) => {
            if(e.target.classList.contains('wf-futura-pt-n6-active','wf-futura-pt-n6-inactive') && !loaded) {
              Controller.go(activeLength);
              loaded = true;
            }
          });
        });
        observer.observe(document.documentElement, config2);
      }else if(splideMount == 2) {
        category2Splide = new Splide(category,splide_option);
        category2Splide.mount();
        const {Controller} = category2Splide.Components;
        category2Splide.on( 'move', () => {
          if(!category1situation) {
            category1situation = false;
            category2situation = true;
          }
        });
        category2Splide.on( 'moved', () => {
          category2situation = false;
        });
        category2Splide.on( 'pagination:updated updated', () => {
          pagerCreate();
        });
        let loaded = false;
        const observer = new MutationObserver((mutations)=>{
          mutations.forEach((e) => {
            if(e.target.classList.contains('wf-futura-pt-n6-active','wf-futura-pt-n6-inactive') && !loaded) {
              Controller.go(activeLength);
              loaded = true;
            }
          });
        });
        observer.observe(document.documentElement, config2);
      }


      const pagerCreate = () => {
        const pagerWrap = category.querySelector('.post-aside-splide-pagination_wrap');
        const pager = category.querySelector('.post-aside-splide-pagination');
        const pages = pager.querySelectorAll('li');
        const bar = pagerWrap.querySelector('.post-aside-splide-pagination-bar');

        pages.forEach((page,i)=>{
          const myWidth = slideItems[i].dataset.width * .01;
          page.style.flexGrow = myWidth;
          page.dataset.number = i;
        });

        if(pages[activeLength]) {
          const firstRect = pages[activeLength].getBoundingClientRect();
          bar.style.width = firstRect.width * .01 + 'rem';
          bar.style.transform = 'translateX(' + (firstRect.x - 20) * .01 + 'rem)';
        }
      }
      pagerCreate();

      const pagerWrap = category.querySelector('.post-aside-splide-pagination_wrap');
      const bar = pagerWrap.querySelector('.post-aside-splide-pagination-bar');
      const observer = new MutationObserver((mutations)=>{
        mutations.forEach((e) => {
          if(e.target.classList.contains('is-active')) {
            const rect = e.target.getBoundingClientRect();
            bar.style.width = rect.width * .01 + 'rem';
            bar.style.transform = 'translateX(' + (rect.x - 20) * .01 + 'rem)';
          }
        });
      });
      observer.observe(pagerWrap, config);
    }

    insetSplide(category1,category1Splide);
    insetSplide(category2,category2Splide);

    const observer = new MutationObserver((mutations)=>{
      mutations.forEach((e) => {
        if(e.target.classList.contains('post-aside-splide-page','is-active')) {
          const numberData = e.target.closest('[data-number]')? e.target.closest('[data-number]').dataset.number : 1;
          const number = parseInt(numberData);
          if(e.target.closest('.contents-sub.-first')) {
            if(category1situation) {
              const {Controller} = category2Splide.Components;
              Controller.go(number);
            }
          }else if(e.target.closest('.contents-sub.-second')) {
            if(category2situation) {
              const {Controller} = category1Splide.Components;
              Controller.go(number);
            }
          }
        }
      });
    });


    observer.observe(category1, config);
    observer.observe(category2, config);

	}
}
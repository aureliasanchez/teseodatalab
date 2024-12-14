"use strict";

Common.do(function(){
	//↓↓↓↓↓ここへ記述して下さい↓↓↓↓↓
});

window.addEventListener('load',function(){
	(function(){
		var opening = document.querySelector('.opening');
		if(opening) {
			opening.style.height = document.documentElement.clientHeight + 'px';
			setTimeout(function(){
				document.body.classList.add('__opening-start');
				setTimeout(function(){
					opening.classList.add('anim');
					setTimeout(function(){
						pararax01();
						setTimeout(function(){
							opening.parentNode.removeChild(opening);
							document.body.classList.remove('__opening');
							document.body.classList.remove('__opening-start');
						},1000);
					},2200);
				},400);
			},100);
		}else {
			setTimeout(function(){
				pararax01();
			},100);
		}
	})();

	(function(){
		var mainvisual = document.querySelector('.top-mainvisual');
		var mainvisualBreakPoint = window.matchMedia('screen and (max-width: 640px)');
		var checkBreakPoint = function(mainvisualBreakPoint) {
			if (mainvisualBreakPoint.matches){// スマホ向け
				mainvisual.style.height = document.documentElement.clientHeight + 'px';
			}else{// PC向け
				mainvisual.removeAttribute('style');
			}
		}
		// ブレイクポイントの瞬間に発火
		mainvisualBreakPoint.addListener(checkBreakPoint);
		// 初回チェック
		checkBreakPoint(mainvisualBreakPoint);
	})();
});
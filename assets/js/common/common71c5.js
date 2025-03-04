"use strict";

var common = {
	//URLパラメータを取得し配列に格納
	urlParams:(function(){
		var obj = {};
		var pair = location.search.substring(1).split('&');
		for(var i = 0; pair[i]; i++) {
			var kv = pair[i].split('=');
			obj[kv[0]] = kv[1];
		}
		return obj;
	})()
	,
	//インビュー
	inview:('IntersectionObserver' in window)?
		function(target, enter, leave, rootMargin){
			var targets;
			if(typeof target === 'string') {
				targets = document.querySelectorAll(target);
			}else if(target instanceof NodeList) {
				targets = target;
			}else if(target instanceof HTMLElement) {
				targets = [target];
			}else{
				return;
			}

			var options = {
				root: null,
				rootMargin: rootMargin || '0px',
				threshold: 0
			};

			var observer = new IntersectionObserver(function(entries){
				entries.forEach(function(entry){
					if(entry.isIntersecting) {
						if(typeof enter === 'function') enter(entry.target);
					}else{
						if(typeof leave === 'function') leave(entry.target);
					}
				});
			}, options);

			for(var i = 0, l = targets.length; i < l; i++) {
				observer.observe(targets[i]);
			}

			return observer;
		}
		:
		function(target, enter, leave){
			var targets;
			if(typeof target === 'string') {
				targets = document.querySelectorAll(target);
			}else if(target instanceof NodeList) {
				targets = target;
			}else if(target instanceof HTMLElement) {
				targets = [target];
			}else{
				return;
			}

			for(var i = 0, l = targets.length; i < l; i++) {
				(function(target){
					var rect;
					var winH;

					function resize(){
						rect = target.getBoundingClientRect();
						winH = window.innerHeight;
					}
					window.addEventListener('resize', resize);
					resize();

					//scroll
					var enterFlg = false;
					function scroll(){
						var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
						var offsetTop = rect.top + scrollTop;
						var h = rect.height;

						if(!enterFlg && offsetTop < scrollTop + winH && offsetTop + h > scrollTop) {
							enterFlg = true;
							if(typeof enter === 'function') enter(target);
						}else if(enterFlg && (offsetTop >= scrollTop + winH || offsetTop + h <= scrollTop)) {
							enterFlg = false;
							if(typeof leave === 'function') leave(target);
						}
					}
					window.addEventListener('scroll', scroll);
					scroll();
				}(targets[i]));
			}
		}
	,
	//読み込み完了
	addLoad:function(func){
		if(document.readyState !== 'loading') {
			func();
		}else{
			document.addEventListener('DOMContentLoaded', func);
		}
	}
	,
	//メール送信
	notification_by_mail:function(mail_subject, mail_body){
		var xhr = new XMLHttpRequest();
		xhr.open('POST', '/notification_by_mail.php');
		xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		xhr.send('mail_subject=' + encodeURIComponent(mail_subject) + '&mail_body=' + encodeURIComponent(mail_body));
	}
	,
	//エラー検知したらメール送信
	do:function(func){
		try{
			func();
		}catch(e){
			this.notification_by_mail('JavaScriptエラー', e);
		}
	}
};

(function() {
	//PHPエラー判別
	(function(){
		var elements = document.getElementsByClassName('xdebug-error');
		if(elements.length) {
			common.notification_by_mail('PHPエラー', elements[0].innerText);
		}
	}());

	//高さや幅を揃える
	(function(){
		function sortElementStyle(targetVal/* 属性名 */, type/* 揃えるスタイル */, compareVals, i){
			var elements = document.querySelectorAll('[' + targetVal + ']');
			var vals = {};

			for(var i = 0, l = elements.length; i < l; i++) {
				var element = elements[i];
				var val = element.getAttribute(targetVal);
				if(!vals[val]) vals[val] = [];
				vals[val].push(element);
			}

			for(var val in vals) {
				var elements = vals[val];
				var compareVals = [];

				for(var i = 0, l = elements.length; i < l; i++) {
					var element = elements[i];
					element.style[type] = '';
					compareVals.push(element['client' + (type === 'height'? 'Height': 'Width')]);
				}

				var maxVal = Math.max.apply(null, compareVals);
				for(var i = 0, l = elements.length; i < l; i++) {
					elements[i].style[type] = maxVal + 'px';
				}
			}
		}

		//PCとSP両方の高さや幅を揃える
		window.addEventListener('resize', function(e){
			//一度高さや幅をリセットする
			var elements = document.querySelectorAll('[data-autowidth]');
			for(var i = 0, l = elements.length; i < l; i++) {
				elements[i].style.width = '';
			}
			elements = document.querySelectorAll('[data-autoheight]');
			for(var i = 0, l = elements.length; i < l; i++) {
				elements[i].style.height = '';
			}

			//PCの場合
			if(window.matchMedia('(min-width:' + getComputedStyle(document.documentElement).getPropertyValue('--pc-min-width') + ')').matches) {
				//高さを揃える
				sortElementStyle('data-pc-autoheight', 'height');
				sortElementStyle('data-autoheight', 'height');

				//幅を揃える
				sortElementStyle('data-pc-autowidth', 'width');
				sortElementStyle('data-autowidth', 'width');
			}
			//SPの場合
			else{
				//高さを揃える
				sortElementStyle('data-sp-autoheight', 'height');
				sortElementStyle('data-autoheight', 'height');

				//幅を揃える
				sortElementStyle('data-sp-autowidth', 'width');
				sortElementStyle('data-autowidth', 'width');
			}
		});
	}());

	//スムーススクロール
	(function(){
		var targets = document.querySelectorAll('a[href*="#"]');
		for(var i = 0, l = targets.length; i < l; i++) {
			var target = targets[i];
			var href = target.getAttribute('href');

			//別ページへのアンカーリンクは除外
			if(~href.indexOf('http')) continue;

			//現在のページ内のアンカーリンクの場合
			if(href.split('#')[0] === '') {
				function handler(e){
					e.preventDefault();
					var href = this.getAttribute('href');
					var targetElement = document.getElementById(href.split('#')[1]);
					if(!targetElement) return;
					window.scrollTo({
						top: targetElement.getBoundingClientRect().top + window.pageYOffset,
						behavior: 'smooth'
					});
				}
				target.addEventListener('click', handler);
				function smoothscrollremovefunction(){
					target.removeEventListener('click', handler);
				}
			}
			//別ページのアンカーリンクの場合
			else{
				if(!~href.indexOf('http')) {
					target.setAttribute('href', href.replace('#', '#scroll-'));
				}
			}
		}
	}());

	//画像の遅延読み込み
	(function(){
		//data-lfがある要素を取得
		var targets = document.querySelectorAll('[data-lf]');
		for(var i = 0, l = targets.length; i < l; i++) {
			(function(target){
				//data-lfの値を取得
				var val = target.getAttribute('data-lf');

				//要素がインビューに入ったら
				common.inview(target, function(target){
					//data-lfの値が空の場合
					if(!val) {
						//要素がimgの場合
						if(target.tagName.toLowerCase() === 'img') {
							//data-srcの値をsrcにセット
							var src = target.getAttribute('data-src');
							if(src) target.setAttribute('src', src);
						}
						//要素がpictureの場合
						else if(target.tagName.toLowerCase() === 'picture') {
							//sourceのdata-srcsetの値をsrcsetにセット
							var sources = target.getElementsByTagName('source');
							for(var j = 0, k = sources.length; j < k; j++) {
								var source = sources[j];
								var srcset = source.getAttribute('data-srcset');
								if(srcset) source.setAttribute('srcset', srcset);
							}

							//imgのdata-srcの値をsrcにセット
							var img = target.getElementsByTagName('img')[0];
							if(img) {
								var src = img.getAttribute('data-src');
								if(src) img.setAttribute('src', src);
							}
						}
					}
					//data-lfの値がある場合
					else{
						//要素の背景画像にセット
						target.style.backgroundImage = 'url(' + val + ')';
					}

					target.classList.add('load_view');
				}, null, '0px 0px 200px 0px');
			}(targets[i]));
		}
	}());

	//スクロール位置によって要素を表示
	(function(){
		// IE10以降対応
		// var mql = window.matchMedia('screen and (max-width: 720px)');
		var mediaQuery = window.matchMedia('(min-width:' + getComputedStyle(document.documentElement).getPropertyValue('--pc-min-width') + ')');

		function checkBreakPoint(mediaQuery) {
			if(mediaQuery.matches) {
				//PC用の処理
				document.documentElement.classList.remove('sp');
				document.documentElement.classList.add('pc');
			}else{
				//SP用の処理
				document.documentElement.classList.remove('pc');
				document.documentElement.classList.add('sp');
			}
		}

		// ブレイクポイントの瞬間に発火
		mediaQuery.addListener(checkBreakPoint);
		// 初回チェック
		checkBreakPoint(mediaQuery);
	}());

	//スクロール検知用の要素を追加
	(function(){
		var inviewElement = document.createElement('div');
		inviewElement.style.cssText = 'position:absolute;top:100vh;left:0;width:100%;height:1px;pointer-events:none;';

		var mediaQuery = window.matchMedia('(min-width:' + getComputedStyle(document.documentElement).getPropertyValue('--pc-min-width') + ')');

		function scrolledBreakPoint(mediaQuery) {
			if(mediaQuery.matches) {
				//PC用の処理
				inviewElement.setAttribute('data-pc-scrolled', '');
			}else{
				//SP用の処理
				inviewElement.setAttribute('data-sp-scrolled', '');
			}
		}
		mediaQuery.addListener(scrolledBreakPoint);
		scrolledBreakPoint(mediaQuery);

		document.body.appendChild(inviewElement);

		common.inview(inviewElement, function(){
			document.documentElement.classList.add('scrolled');
		}, function(){
			document.documentElement.classList.remove('scrolled');
		});
	}());

	//背景画像の設定
	(function(){
		var targets = document.querySelectorAll('[data-bg]');
		for(var i = 0, l = targets.length; i < l; i++) {
			(function(target){
				var backgroundImage;
				var imgW;
				var imgH;

				function set(){
					if(!backgroundImage || !imgW || !imgH) return;

					var w = target.offsetWidth;
					var h = target.offsetHeight;
					var imgRatio = imgW / imgH;
					var ratio = w / h;

					if(ratio > imgRatio) {
						target.style.backgroundSize = '100% auto';
					}else{
						target.style.backgroundSize = 'auto 100%';
					}
				}

				var img = target.querySelector('img');
				if(img) {
					if(img.complete) {
						if(img.src && img.src.split('data:image').length < 2) {
							backgroundImage = img.src;
							imgW = img.naturalWidth;
							imgH = img.naturalHeight;
							set();
						}
					}else{
						img.addEventListener('load', function(){
							if(img.src && img.src.split('data:image').length < 2) {
								backgroundImage = img.src;
								imgW = img.naturalWidth;
								imgH = img.naturalHeight;
								set();
							}
						});
					}
				}

				window.addEventListener('resize', set);
			}(targets[i]));
		}
	}());

	//パララックス
	(function(){
		var targets = document.querySelectorAll('[data-pararax]');
		for(var i = 0, l = targets.length; i < l; i++) {
			(function(target){
				var rect;
				var winH;

				function resize(){
					rect = target.getBoundingClientRect();
					winH = window.innerHeight;
				}
				window.addEventListener('resize', resize);
				resize();

				function scroll(){
					var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
					var offsetTop = rect.top + scrollTop;
					var h = rect.height;
					var ratio = (scrollTop + winH - offsetTop) / (winH + h);

					if(ratio < 0) ratio = 0;
					if(ratio > 1) ratio = 1;

					target.style.transform = 'translate3d(0,' + (ratio * 100) + 'px,0)';
				}
				window.addEventListener('scroll', scroll);
				scroll();
			}(targets[i]));
		}
	}());
}());

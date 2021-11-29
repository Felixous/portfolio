window.addEventListener('load', function() {
	fixedWorks = new FixedWorks();
	introTextFlow();
	navBtns();
	navLight();
	navActivate();
})

window.addEventListener('resize', function() {
	fixedWorks.update();
})

window.addEventListener('scroll', function() {
	navLight();
	navActivate();
})

function introTextFlow() {
	var section = document.querySelector('section.intro');
	var playBtn = section.querySelector('.btn-play');
	var stopBtn = section.querySelector('.btn-stop');
	var timer = null;

	playBtn.addEventListener('click', play);
	stopBtn.addEventListener('click', stop);

	play();

	function play() {
		playBtn.classList.remove('is-active');
		stopBtn.classList.add('is-active');
		section.classList.remove('is-finish');
		section.classList.add('is-animate');
		timer = setTimeout(function() {
			stop();
		}, 12500);
	}
	function stop() {
		playBtn.classList.add('is-active');
		stopBtn.classList.remove('is-active');
		section.classList.add('is-finish');
		clearTimeout(timer);
	}

}

function navBtns() {
	var btns = document.querySelectorAll('nav .btn');
	var sections = document.querySelectorAll('section');

	for (var i=0; i<btns.length; i++) {
		btns[i].addEventListener('click', function(e) {
			var li = getClosest(e.target, 'nav ul.menu-list li');
			var index = getIndex(li);
			var top = sections[index].offsetTop;
			window.scrollTo(0, top);
		})
	}
}

function navLight() {
	var scroll = window.pageYOffset;
	var nav = document.querySelector('nav');
	var section = document.querySelector('section.contact');
	var sectionTop = section.offsetTop;
	var buffer = 400;

	if (scroll > sectionTop - buffer) {
		nav.classList.add('is-light');
	} else {
		nav.classList.remove('is-light');
	}
}

function navActivate() {
	var scroll = window.pageYOffset;
	var lis = document.querySelectorAll('nav ul.menu-list li');
	var sections = document.querySelectorAll('section');
	var sectionTops = [];
	var lastBuffer = 400;

	for (var i = 0; i < sections.length; i++) {
		if (i !== sections.length - 1) {
			sectionTops.push(sections[i].offsetTop);
		} else {
			sectionTops.push(sections[i].offsetTop - lastBuffer);
			sectionTops.push(sections[i].offsetTop - lastBuffer + sections[i].offsetHeight);
		}
	}
	for (var i = 0; i < sectionTops.length - 1; i++) {
		if (scroll >= sectionTops[i] && scroll < sectionTops[i + 1]) {
			lis[i].classList.add('is-active');
		} else {
			lis[i].classList.remove('is-active');
		}
	}
}

function worksFix() {

}


function getClosest(el, findSelector) {
	var el = el;
	var targets = document.querySelectorAll(findSelector);

	while (el !== document.querySelector('html')) {
		var parent = el.parentNode;
		for (var i = 0; i < targets.length; i++) {
			if (parent === targets[i]) {
				return parent;
			}
		}
		el = el.parentNode;
	}
}

function getIndex(el) {
	var parent = el.parentNode;
	var children = parent.children;

	for (var i = 0; i < children.length; i++) {
		if (el === children[i]) return i;
	}
}

function getEq(el, list) {
	for (var i = 0; i < list.length; i++) {
		if (el === list[i]) return i;
	}
}





var fixedWorks;

function FixedWorks() {
	var _ = this;

	_.section = document.querySelector('section.works');
	_.headBox = _.section.querySelector('.head-box');
	_.mainBox = _.section.querySelector('.main-box');
	_.categories = _.section.querySelectorAll('ul.category-list > li');
	_.pages = _.section.querySelectorAll('ul.page-list > li');
	_.items = _.section.querySelectorAll('ul.work-list > li');

	_.init();
	_.initTab();
	_.initScroll();
}

FixedWorks.prototype.init = function() {
	var _ = this;

	_.step = 1000;
	_.startY = _.section.offsetTop;
	_.totalH = _.items.length * _.step + window.innerHeight - _.headBox.offsetHeight;
	_.endY = _.startY + _.items.length * _.step;
	_.itemsPos = [];

	for (var i = 0; i <= _.items.length; i++) {
		_.itemsPos.push(_.startY + (_.step * i));
	}

}
FixedWorks.prototype.initTab = function() {
	var _ = this;
	var categoryBtns = _.section.querySelectorAll('ul.category-list > li > .btn');
	var pageBtns = _.section.querySelectorAll('ul.page-list > li > .btn');

	for (var i = 0; i < categoryBtns.length; i++) {
		categoryBtns[i].addEventListener('click', function(e) {
			var li = getClosest(e.target, 'ul.category-list > li');
			var index = getIndex(li);
			window.scrollTo(0, _.itemsPos[index])
		})
	}

	for (var i = 0; i < pageBtns.length; i++) {
		pageBtns[i].addEventListener('click', function(e) {
			var li = getClosest(e.target, 'ul.page-list > li');
			var index = getEq(li, _.pages);
			window.scrollTo(0, _.itemsPos[index])
		})
	}

}
FixedWorks.prototype.initScroll = function() {
	var _ = this;
	window.addEventListener('scroll', function() {
		var scrY = window.pageYOffset;
		console.log(_.itemsPos);
		console.log(scrY);
		if (scrY < _.startY) {
			_.section.classList.remove('is-fixed');
			_.section.classList.remove('is-finish');
		} else if (scrY >= _.startY && scrY < _.endY) {
			_.section.classList.add('is-fixed');
			_.section.classList.remove('is-finish');
		} else if (scrY >= _.endY) {
			_.section.classList.remove('is-fixed');
			_.section.classList.add('is-finish');
		}
		for (var i = 0; i < _.itemsPos.length - 1; i++) {
			if (scrY >= _.itemsPos[i] && scrY < _.itemsPos[i + 1]) {
				_.activate(i);
			} else if (scrY < _.itemsPos[0]) {
				_.activate(0);
			} else if (scrY >= _.itemsPos[_.items.length]) {
				_.activate(_.items.length - 1);
			} else {
				_.deactivate(i);
			}
		}
	})
}
FixedWorks.prototype.activate = function(index) {
	var _ = this;

	_.items[index].classList.add('is-active');
	_.pages[index].classList.add('is-active');
	_.categories[0].classList.remove('is-active');
	_.categories[1].classList.remove('is-active');
	getClosest(_.pages[index], 'ul.category-list > li').classList.add('is-active');
}
FixedWorks.prototype.deactivate = function(index) {
	var _ = this;

	_.items[index].classList.remove('is-active');
	_.pages[index].classList.remove('is-active');
}
FixedWorks.prototype.update = function() {
	var _ = this;
	
	_.init();
}
var canvas, stage, composite;
var updateProgress;

function isMobile() {
	return new RegExp('Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini', 'i').test(navigator.userAgent);
}

function init() {
	canvas = document.getElementById('youtyping-canvas');
	images = images||{};

	$numbers = [];
	$('#numbers').children().each(function () {
		$numbers.push($(this));
	});

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener('fileload', handleFileLoad);
	loader.addEventListener('complete', handleComplete);
	var progress = 0, progressPad = 0;
	loader.addEventListener('progress', function (event) {
		progress = event.progress * 100;
	});
	updateProgress = setInterval(function () {
		progressPad += (progress - progressPad) * 0.5;
		$('#youtyping-loading').empty();
		('00' + Math.round(progressPad)).slice(-2).split('').forEach(function (number) {
			$numbers[parseInt(number)].clone().appendTo($('#youtyping-loading'));
		});
	}, 50);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == 'image') {
		images[evt.item.id] = evt.result;
	}
}

function handleComplete() {
	$('#youtyping-loading').hide();
	clearInterval(updateProgress);

	stage = new createjs.Stage(canvas);

	composite = new lib.composite();

	stage.addChild(composite);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener('tick', stage);
	createjs.Touch.enable(stage);
}

function extend(target, constructor) {
	var temp = lib[target];
	lib[target] = constructor;
	lib[target].prototype = temp.prototype;
	lib[target].prototype.super = temp;
}

extend('Opening', function () {
	var opening = this;
	this.super.call(this, arguments);

	this.menus = [this.menu_play, this.menu_config, this.menu_exit];

	this.selected = 0;
	key('up', function () {
		opening.selected = (opening.selected + 3 - 1) % 3;
		opening.selectedChanged();
		return false;
	});
	key('down', function () {
		opening.selected = (opening.selected + 1) % 3;
		opening.selectedChanged();
		return false;
	});
	key('enter', function () {
		switch (opening.selected) {
			case 0:
				opening.menu_play.gotoAndPlay('out');
				composite.gotoAndPlay('gameStart');
				key.unbind('up');
				key.unbind('down');
				key.unbind('enter');
				break;
		}
		return false;
	})

	var reg = Math.random() * Math.PI * 2;

	this.menus.forEach(function (menu) {
		menu.initialX = menu.x;
		menu.initialTheta = reg;
		reg += Math.PI * 2 / 3;
		menu.tick = 0;

		menu.on('tick', function () {
			this.tick++;
			this.x = this.initialX + Math.sin(this.tick / 200 + this.initialTheta) * 30;
		});
	});

	this.selectedChanged = function () {
		if (opening.light) opening.light.gotoAndPlay('out');

		opening.light = new lib.OpeningLight();
		var target = opening.menus[opening.selected];
		opening.light.setTransform(target.x, target.y - 28);
		opening.light.target = target;
		opening.light.on('tick', function () {
			this.setTransform(this.target.x, this.target.y - 28);
		});
		opening.addChild(opening.light);

		stage.update();
	};

	this.selectedChanged();
});

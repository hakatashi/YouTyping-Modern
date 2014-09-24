var canvas, stage, composite;

function init() {
	canvas = document.getElementById('youtyping');
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener('fileload', handleFileLoad);
	loader.addEventListener('complete', handleComplete);
	loader.addEventListener('progress', function (event) {
		console.log(event.progress);
	});
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
	if (evt.item.type == 'image') {
		images[evt.item.id] = evt.result;
	}
}

function handleComplete() {
	stage = new createjs.Stage(canvas);

	composite = new lib.composite();

	stage.addChild(composite);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener('tick', stage);
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

	this.menus = [this.menu1, this.menu2, this.menu3];

	this.selected = 0;
	key('up', function () {
		opening.selected = (opening.selected + 3 - 1) % 3;
		opening.selectedChanged();
	});
	key('down', function () {
		opening.selected = (opening.selected + 1) % 3;
		opening.selectedChanged();
	});

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
		opening.light.setTransform(target.x, target.y + 10);
		opening.light.target = target;
		opening.light.on('tick', function () {
			this.setTransform(this.target.x, this.target.y + 10);
		});
		opening.addChild(opening.light);

		stage.update();
	};

	this.selectedChanged();
});

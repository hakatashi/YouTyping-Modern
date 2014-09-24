var canvas, stage, composite;

function init() {
	canvas = document.getElementById('youtyping');
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener('fileload', handleFileLoad);
	loader.addEventListener('complete', handleComplete);
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

var libOpening = lib.Opening;
lib.Opening = function () {
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

	this.selectedChanged = function () {
		if (opening.light) opening.light.gotoAndPlay('out');

		opening.light = new lib.OpeningLight();
		var target = opening.menus[opening.selected];
		opening.light.setTransform(target.x, target.y + 22);
		opening.addChild(opening.light);

		stage.update();
	};

	this.selectedChanged();
};
lib.Opening.prototype = libOpening.prototype;
lib.Opening.prototype.super = libOpening;

(function (lib, img, cjs) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 960,
	height: 540,
	fps: 60,
	color: "#FFFFFF",
	manifest: [
		{src:"images/light2.jpg", id:"light2"},
		{src:"images/opening_light.png", id:"opening_light"},
		{src:"images/OpeningBackground.png", id:"OpeningBackground"},
		{src:"images/OpeningLogo.png", id:"OpeningLogo"},
		{src:"images/youtypingmodern01.png", id:"youtypingmodern01"}
	]
};



// symbols:



(lib.light2 = function() {
	this.initialize(img.light2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,126);


(lib.opening_light = function() {
	this.initialize(img.opening_light);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,116);


(lib.OpeningBackground = function() {
	this.initialize(img.OpeningBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.OpeningLogo = function() {
	this.initialize(img.OpeningLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,106);


(lib.youtypingmodern01 = function() {
	this.initialize(img.youtypingmodern01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.OpeningLightimage = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.light2();
	this.instance.setTransform(-480,-58);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-480,-58,960,126);


(lib.Opening = function() {
	this.initialize();

	// ワールドイズマイン
	this.songTitle = new cjs.Text("ワールドイズマイン", "24px 'Meiryo'", "#FFFFFF");
	this.songTitle.name = "songTitle";
	this.songTitle.textAlign = "center";
	this.songTitle.lineHeight = 26;
	this.songTitle.lineWidth = 312;
	this.songTitle.setTransform(-321,-15.5);

	// E x i t
	this.menu3 = new cjs.Text("E x i t", "60px 'Calluna'", "#FFFFFF");
	this.menu3.name = "menu3";
	this.menu3.textAlign = "center";
	this.menu3.lineHeight = 62;
	this.menu3.lineWidth = 473;
	this.menu3.setTransform(98.5,6.1);

	// C o n f i g
	this.menu2 = new cjs.Text("C o n f i g", "60px 'Calluna'", "#FFFFFF");
	this.menu2.name = "menu2";
	this.menu2.textAlign = "center";
	this.menu2.lineHeight = 62;
	this.menu2.lineWidth = 473;
	this.menu2.setTransform(98.5,-98.9);

	// P l a y
	this.menu1 = new cjs.Text("P l a y", "60px 'Calluna'", "#FFFFFF");
	this.menu1.name = "menu1";
	this.menu1.textAlign = "center";
	this.menu1.lineHeight = 62;
	this.menu1.lineWidth = 473;
	this.menu1.setTransform(98.5,-200.9);

	// OpeningLogo.png
	this.instance = new lib.OpeningLogo();
	this.instance.setTransform(-138,120.4);

	// OpeningBackground
	this.instance_1 = new lib.OpeningBackground();
	this.instance_1.setTransform(-581,-270);

	this.addChild(this.instance_1,this.instance,this.menu1,this.menu2,this.menu3,this.songTitle);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581,-270,960,540);


(lib.OpeningLightflash = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_2 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(1));

	// レイヤー 1
	this.instance = new lib.OpeningLightimage();
	this.instance.setTransform(480,58);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({alpha:0.898},0).wait(1).to({alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,960,126);


(lib.OpeningLight = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{"in":0,stop:2,out:3,end:5});

	// timeline functions:
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.parent.removeChild(this);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(2).call(this.frame_2).wait(3).call(this.frame_5).wait(1));

	// レイヤー 1
	this.instance = new lib.OpeningLightflash();
	this.instance.setTransform(0,0,1,1,0,0,0,480,58);
	this.instance.alpha = 0.75;
	this.instance.compositeOperation = "lighter";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:63,y:5,alpha:0.875},0).wait(1).to({alpha:1},0).wait(1).to({alpha:0.875},0).wait(1).to({alpha:0.75},0).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-480,-58,960,126);


// stage content:



(lib.composite = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opening:0,game:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Main
	this.opening = new lib.Opening();
	this.opening.setTransform(581,270);

	this.instance = new lib.youtypingmodern01();

	this.instance_1 = new lib.OpeningLight();
	this.instance_1.setTransform(480,268,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opening}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,960,540);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
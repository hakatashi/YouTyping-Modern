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
		{src:"images/menu_config.png", id:"menu_config"},
		{src:"images/menu_exit.png", id:"menu_exit"},
		{src:"images/menu_play.png", id:"menu_play"},
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


(lib.menu_config = function() {
	this.initialize(img.menu_config);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,225,68);


(lib.menu_exit = function() {
	this.initialize(img.menu_exit);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,50);


(lib.menu_play = function() {
	this.initialize(img.menu_play);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,146,68);


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


(lib.シンボル2 = function() {
	this.initialize();

	// レイヤー 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EhK/AqMMAAAhUXMCV/AAAMAAABUXg");
	this.shape.setTransform(480,270);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.シンボル1 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.menu_play();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146,68);


(lib.OpeningLightimage = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.light2();
	this.instance.setTransform(-480,-58);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-480,-58,960,126);


(lib.Menu_exit = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.menu_exit();
	this.instance.setTransform(-71.5,-25);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-71.5,-25,143,50);


(lib.Menu_config = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.menu_config();
	this.instance.setTransform(-112.5,-34);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-112.5,-34,225,68);


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


(lib.Menu_play = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{start:0,"out":1,"end":4});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.gotoAndPlay('out');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(1));

	// レイヤー 1
	this.instance = new lib.menu_play();
	this.instance.setTransform(-73,-34);

	this.instance_1 = new lib.シンボル1();
	this.instance_1.setTransform(0,0,1,1,0,0,0,73,34);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0},0).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73,-34,146,68);


(lib.Opening = function() {
	this.initialize();

	// ワールドイズマイン
	this.songTitle = new cjs.Text("ワールドイズマイン", "24px 'Meiryo'", "#FFFFFF");
	this.songTitle.name = "songTitle";
	this.songTitle.textAlign = "center";
	this.songTitle.lineHeight = 26;
	this.songTitle.lineWidth = 312;
	this.songTitle.setTransform(-321,-15.5);

	// C o n f i g
	this.menu_exit = new lib.Menu_exit();
	this.menu_exit.setTransform(112.5,39);

	this.menu_config = new lib.Menu_config();
	this.menu_config.setTransform(112.5,-61.5);

	// P l a y
	this.menu_play = new lib.Menu_play();
	this.menu_play.setTransform(112.5,-162);

	// OpeningLogo.png
	this.instance = new lib.OpeningLogo();
	this.instance.setTransform(-138,120.4);

	// OpeningBackground
	this.instance_1 = new lib.OpeningBackground();
	this.instance_1.setTransform(-581,-270);

	this.addChild(this.instance_1,this.instance,this.menu_play,this.menu_config,this.menu_exit,this.songTitle);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581,-270,960,540);


// stage content:
(lib.composite = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opening:0,gameStart:1,game:31});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_31 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(31).call(this.frame_31).wait(2));

	// CoverAnimate
	this.instance = new lib.シンボル2();
	this.instance.setTransform(480,270,1,1,0,0,0,480,270);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).to({_off:true},1).wait(2));

	// Cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhK+gqUMCV9AAAMAAABUpMiV9AAAg");
	this.shape.setTransform(480,270);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},30).wait(2));

	// Main
	this.opening = new lib.Opening();
	this.opening.setTransform(581,270);

	this.instance_1 = new lib.youtypingmodern01();

	this.instance_2 = new lib.OpeningLight();
	this.instance_2.setTransform(480,268,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opening}]}).to({state:[{t:this.instance_1}]},31).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,960,540);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
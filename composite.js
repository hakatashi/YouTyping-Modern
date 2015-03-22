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
		{src:"images/mideshi.jpg", id:"mideshi"},
		{src:"images/notegreen01.png", id:"notegreen01"},
		{src:"images/OpeningBackground.png", id:"OpeningBackground"},
		{src:"images/OpeningLogo.png", id:"OpeningLogo"},
		{src:"images/rane01.png", id:"rane01"}
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


(lib.mideshi = function() {
	this.initialize(img.mideshi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.notegreen01 = function() {
	this.initialize(img.notegreen01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,64,65);


(lib.OpeningBackground = function() {
	this.initialize(img.OpeningBackground);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,540);


(lib.OpeningLogo = function() {
	this.initialize(img.OpeningLogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,469,106);


(lib.rane01 = function() {
	this.initialize(img.rane01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,960,163);


(lib.シンボル4 = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.rane01();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,960,163);


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

	// ClickBounds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AsjGFIAAsJIZIAAIAAMJg");
	this.shape.setTransform(-1,10);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-81.5,-29,161,78);


(lib.Menu_config = function() {
	this.initialize();

	// レイヤー 1
	this.instance = new lib.menu_config();
	this.instance.setTransform(-112.5,-34);

	// ClickBounds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.008)").s().p("AyuGkIAAtGMAldAAAIAANGg");
	this.shape.setTransform(1.5,-2.5);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-118.5,-44.5,240,84);


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

	// ClickBounds
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(31,31,31,0.008)").s().p("AtbGoIAAtPIa2AAIAANPg");
	this.shape.setTransform(-1,-0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87,-42.9,172,85);


(lib.Opening = function() {
	this.initialize();

	// ワールドイズマイン
	this.text = new cjs.Text("", "24px 'Meiryo'", "#0066CC");
	this.text.textAlign = "center";
	this.text.lineHeight = 26;
	this.text.lineWidth = 100;
	this.text.setTransform(415.3,309.4);

	this.songTitle = new cjs.Text("とまどい→レシピ", "24px 'Meiryo'", "#FFFFFF");
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

	this.addChild(this.instance_1,this.instance,this.menu_play,this.menu_config,this.menu_exit,this.songTitle,this.text);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-581,-270,1050.3,619.4);


// stage content:
(lib.composite = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{opening:0,gameStart:1,game:31});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_50 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(50).call(this.frame_50).wait(2));

	// レイヤー 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_39 = new cjs.Graphics().p("EAtPAoVMAAAg9IMBDYAAAMAAAA9Ig");
	var mask_graphics_40 = new cjs.Graphics().p("EgIaAoVMAAAg9IMB5BAAAMAAAA9Ig");
	var mask_graphics_41 = new cjs.Graphics().p("EgpiAoVMAAAg9IMCaJAAAMAAAA9Ig");
	var mask_graphics_42 = new cjs.Graphics().p("Eg+qAoVMAAAg9IMCvRAAAMAAAA9Ig");
	var mask_graphics_43 = new cjs.Graphics().p("EhNnAoVMAAAg9IMC+OAAAMAAAA9Ig");
	var mask_graphics_44 = new cjs.Graphics().p("EhZ4AoVMAAAg9IMDKfAAAMAAAA9Ig");
	var mask_graphics_45 = new cjs.Graphics().p("EhlSAoVMAAAg9IMDV5AAAMAAAA9Ig");
	var mask_graphics_46 = new cjs.Graphics().p("EhwlAoVMAAAg9IMDhMAAAMAAAA9Ig");
	var mask_graphics_47 = new cjs.Graphics().p("EhwmAoVMAAAg9IMDhNAAAMAAAA9Ig");
	var mask_graphics_48 = new cjs.Graphics().p("EhwmAoVMAAAg9IMDhNAAAMAAAA9Ig");
	var mask_graphics_49 = new cjs.Graphics().p("EhwmAoVMAAAg9IMDhNAAAMAAAA9Ig");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(39).to({graphics:mask_graphics_39,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_40,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_41,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_42,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_43,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_44,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_45,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_46,x:720.8,y:258.1}).wait(1).to({graphics:mask_graphics_47,x:720.5,y:258.1}).wait(1).to({graphics:mask_graphics_48,x:720.5,y:258.1}).wait(1).to({graphics:mask_graphics_49,x:720.5,y:258.1}).wait(1).to({graphics:null,x:0,y:0}).wait(2));

	// Main
	this.instance = new lib.シンボル4();
	this.instance.setTransform(480,373,1,1,0,0,0,480,81.5);
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(39).to({_off:false},0).wait(10).to({_off:true},1).wait(2));

	// CoverAnimate
	this.instance_1 = new lib.シンボル2();
	this.instance_1.setTransform(480,270,1,1,0,0,0,480,270);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1).to({alpha:0.034},0).wait(1).to({alpha:0.069},0).wait(1).to({alpha:0.103},0).wait(1).to({alpha:0.138},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.207},0).wait(1).to({alpha:0.241},0).wait(1).to({alpha:0.276},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.345},0).wait(1).to({alpha:0.379},0).wait(1).to({alpha:0.414},0).wait(1).to({alpha:0.448},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.517},0).wait(1).to({alpha:0.552},0).wait(1).to({alpha:0.586},0).wait(1).to({alpha:0.621},0).wait(1).to({alpha:0.655},0).wait(1).to({alpha:0.69},0).wait(1).to({alpha:0.724},0).wait(1).to({alpha:0.759},0).wait(1).to({alpha:0.793},0).wait(1).to({alpha:0.828},0).wait(1).to({alpha:0.862},0).wait(1).to({alpha:0.897},0).wait(1).to({alpha:0.931},0).wait(1).to({alpha:0.966},0).wait(1).to({alpha:1},0).wait(2).to({alpha:0.944},0).wait(1).to({alpha:0.889},0).wait(1).to({alpha:0.833},0).wait(1).to({alpha:0.778},0).wait(1).to({alpha:0.722},0).wait(1).to({alpha:0.667},0).wait(1).to({alpha:0.611},0).wait(1).to({alpha:0.556},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.444},0).wait(1).to({alpha:0.389},0).wait(1).to({alpha:0.333},0).wait(1).to({alpha:0.278},0).wait(1).to({alpha:0.222},0).wait(1).to({alpha:0.167},0).wait(1).to({alpha:0.111},0).wait(1).to({alpha:0.056},0).wait(1).to({alpha:0},0).to({_off:true},1).wait(2));

	// Cover
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("EhK+gqUMCV9AAAMAAABUpMiV9AAAg");
	this.shape.setTransform(480,270);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1).to({_off:false},0).to({_off:true},30).wait(21));

	// Main
	this.opening = new lib.Opening();
	this.opening.setTransform(581,270);

	this.instance_2 = new lib.mideshi();

	this.instance_3 = new lib.notegreen01();
	this.instance_3.setTransform(459,341.5);

	this.instance_4 = new lib.rane01();
	this.instance_4.setTransform(0,291.5);

	this.instance_5 = new lib.OpeningLight();
	this.instance_5.setTransform(480,268,1,1,0,0,0,0,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.opening}]}).to({state:[{t:this.instance_2}]},31).to({state:[{t:this.instance_2},{t:this.instance_4},{t:this.instance_3}]},19).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(480,270,1050.3,619.4);

})(lib = lib||{}, images = images||{}, createjs = createjs||{});
var lib, images, createjs;
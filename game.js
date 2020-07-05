 let config={
 	type:Phaser.CANVAS, //auto automatically detect which rendering type is best for your browser

 	scale:{  //scale if a object to give the information of game
 		mode:Phaser.Scale.FIT,//refer phaser.scale.manager for more details
 		width:800,
 		height:600,
 	},
 	backgroundColor : 0xffff11,
 	scene:{
 		preload:preload,
 		create:create,
 		update:update,
 	}


 };

 let game=new Phaser.Game(config);

 function preload()
 {
 	this.load.image('ground',"Assets/topground.png");//loading the image its an 128*128 image
    this.load.image("sky","Assets/background.png");
 }
 function create()
 {

 	W=game.config.width; //width of the image
 	H=game.config.height; //height of the image
 	
 	//now lets try to create background

 	let background=this.add.sprite(0,0,'sky');
 	background.setOrigin(0,0);
 	background.displayWidth = W;

 	// now we are goind to find the coordinates where i want to place this image; 
 	let ground=this.add.tileSprite(0,H-128,W,128,'ground');// if we use only sprite it will place a single image but we use tileSprite then it will place a image repeatedly to the width we will give and height also;
 	ground.setOrigin(0,0);


 	
 	
 }
 function update()
 {
 	
 }

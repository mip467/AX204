// console.log("hahahahahaha");

// Declare the variables
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;
var scoreText;

function preload(){
	game.load.image('sky', 'assets/sky.png');
	game.load.image('ground', 'assets/platform.png');
	game.load.image('star', 'assets/star.png');
	game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
	game.load.spritesheet('baddie', 'assets/baddie.png', 32, 42);
}

function create(){
	// Give game physics engine
	game.physics.startSystem(Phaser.Physics.ARCADE);
	// Add the sky
	game.add.sprite(0, 0, 'sky');

	// Physics group
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;

	// Ground
	var ground = platforms.create(0, game.world.height - 64, 'ground');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;

	// Ledges
	var ledge = platforms.create(400,400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-150, 250, 'ground');
	ledge.body.immovable = true;

	// Generare stars for the player to collect
	//start by creating a group called stars
	stars = game.add.group();
	//adding physics to the group
	stars.enableBody = true;

	//add in your score system
	scoreText = game.add.text(16,16, "score: 0",{fontSize: '32px',fill:'#000'})

	//here we'll create 12 stars spaced evenly apart
	for (var i=0; i<12; i++){

		//create a star inside the "stars" group
		var star = star.create(i*70, 0, 'star');
		// Add gravity
		star.body.gravity.y = 500;
		//This gives each star a random bounce value
		star.body.bounce.y = 0.7+Math.random()*0.3;
	}

	// Player sprite
	player = game.add.sprite(32, game.world.height - 150, 'dude');
		// animate
		player.animations.add('left', [0, 1, 2, 3], 10, true);
		player.animations.add('right', [5, 6, 7, 8], 10, true);
		// physics
		game.physics.arcade.enable(player);
		player.body.bounce.y = 0.2;
		player.body.gravity.y = 300;
		player.body.collideWorldBounds = true;

	// Enemy sprite
	enemy = game.add.sprite(750, 20, 'baddie');
		enemy.animations.add('left', [0,1], 10, true);
		enemy.animations.add('right', [2,3], 10, true);
		// Physics
		game.physics.arcade.enable(enemy);
		enemy.body.bounce.y = 0.2;
		enemy.body.gravity.y = 500;
		enemy.body.collideWorldBounds = true;

	// Keyboard inputs
	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	game.physics.arcade.collide(player, platforms);
	game.physics.arcade.collide(enemy, platforms);
	game.physics.arcade.collide(stars, platforms);

	//the function "collectStar" will be called whenever the player walk over the stars
	game.physics.arcade.overlap(player, stars, collectStar, null, this);

	//reset player velocity
	player.body.velocity.x = 0;

	// keyboard event
	if(cursors.left.isDown) {
		player.body.velocity.x= -150;
		player.animations.play("left");
	}else if (cursors.right.isDown) {
		player.body.velocity.x= +150;
		player.animations.play("right");
	}else {
		// when player sprite stops
		player.animations.stop();
		player.frame = 4;
	}
	//allow player to jump
	if(cursors.up.isDown && player.body.touching.down) 
	{
		player.body.velocity.y = -350;
	}
	//Make baddie run
	if (enemy.x > 759) {
		enemy.body.velocity.x = -120;
	} else if (enemy.x <405) {
		enemy.body.velocity.x = 120;
		enemy1.animations.play('right');
	}

	
	function collectStar(player,star){
		//remove star from the screen 
		star.kill();
		//Create new star
		star = stars.create(Math.floor(Math.random()*750),0,'star');
		//Assign gravity
		star.body.gravity.y=200;
		//Assign random bounce value to the star
		star.body.bounce.y = 0..7 + Math.random() *0.3;
		//update the score
		score+=10;
		scoreText.text="Score: "+score;
	}

}
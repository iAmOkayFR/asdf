addEventListener('keydown', function (e) {
    if (e.key === 'ArrowUp' && hero.velocity.y == 0) {
        hero.velocity.y = -16;
    } else if (e.key === 'ArrowRight') {
        movingRight = true;
    } else if (e.key === 'ArrowLeft') {
        movingLeft = true;
    }
});

addEventListener('keyup', function (e) {
    if (e.key === 'ArrowRight') {
        movingRight = false;
    }
    if (e.key === 'ArrowLeft') {
        movingLeft = false;
    }
});




function gameAnimate() {
    requestAnimationFrame(gameAnimate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (movingRight) {
        offset += 2;
    }
    if (movingLeft) {
        offset -= 2;
    }

    backgroundOffset = offset * 0.5; // Background scrolls slower

    // Draw background
    context.drawImage(sky, -backgroundOffset, 0, canvas.width * 2, canvas.height);

    // Draw platforms
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }

    // Draw image platforms
    platDraw();

    // Move player
    hero.playerMovement();
}



class platformMake {
    constructor(x, y, width, height) {
        this.position = { x: x, y: y };
        this.width = width;
        this.height = height;
    }
    draw() {
        context.fillStyle = 'blue';
        context.fillRect(this.position.x - offset, this.position.y, this.width, this.height); // <-- minus offset here
    }
}




function platDraw() {
    let modifiedWidth = platform.width * 0.9;
    let modifiedHeight = platform.height * 0.9;

    for (let i = 0; i < 7; i++) {
        context.drawImage(platform, (modifiedWidth * i) - offset, 550, modifiedWidth, modifiedHeight);
        context.drawImage(platform1, (modifiedWidth * i) - offset, 550, modifiedWidth, modifiedHeight);
        context.drawImage(platform, (modifiedWidth * i) - offset, 550, modifiedWidth, modifiedHeight);
    }

    context.drawImage(platformBlock, 200 - offset, 345, 60, 65);
    context.drawImage(platformBlockk, 250 - offset, 345, 60, 65);
    context.drawImage(platformBlock, 300 - offset, 345, 60, 65);
    context.drawImage(platformBlockk, 350 - offset, 345, 60, 65);

    context.drawImage(bigplatform, 550 - offset, 460, 190, 200);
}








function platDraw() {
    let modifiedWidth = platform.width * 0.9;
    let modifiedHeight = platform.height * 0.9;
    
    for (let i = 0; i < 7; i++) {
        // FLOOR PLATFORMS
        context.drawImage(platform, (modifiedWidth * i) - offset, 550, modifiedWidth, modifiedHeight);
        context.drawImage(platform1, (modifiedWidth * i) - offset, 550, modifiedWidth, modifiedHeight);
        context.drawImage(platform, (modifiedWidth * i) - offset, 550, modifiedWidth, modifiedHeight);
    }

    // ADDITIONAL FLOORS
    context.drawImage(platformBlock, 200 - offset, 345, 60, 65);
    context.drawImage(platformBlockk, 250 - offset, 345, 60, 65);
    context.drawImage(platformBlock, 300 - offset, 345, 60, 65);
    context.drawImage(platformBlockk, 350 - offset, 345, 60, 65);

    context.drawImage(bigplatform, 550 - offset, 460, 190, 200);
}






function gameAnimate() {
    requestAnimationFrame(gameAnimate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    if (hero.position.x >= 400 && hero.velocity.x > 0) {
        offset += hero.velocity.x;
    } else if (hero.position.x <= 100 && hero.velocity.x < 0) {
        offset += hero.velocity.x;
    } else {
        hero.position.x += hero.velocity.x;
    }

    backgroundOffset = offset * 0.5; // Background moves slower

    // Draw Background
    context.drawImage(sky, -backgroundOffset, 0, canvas.width * 2, canvas.height);

    // Draw platforms
    for (let i = 0; i < platforms.length; i++) {
        platforms[i].draw();
    }

    // Draw static platforms and blocks
    platDraw();

    // Move player
    hero.playerMovement();
}

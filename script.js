var bottom
var top
var right
var left
var net
var paddle1
var paddle2
var paddleY1 = 250
var paddleY2 = 250
var paddleX1 = 100
var paddleX2 = 1100
var ballSpeedX = 4
var ballSpeedY = 4
var ballX = 730
var ballY = 300
var player1
var player2

function setup() {
    createCanvas(windowWidth, windowHeight)
}

function draw() {
    clear()
    noStroke()

    fill(99, 99, 99)
    rect(10, 10, 1200, 600)
    fill(209, 209, 209)
    net = rect(610, 20, 20, 590)

    fill(153, 227, 211)

    top = rect(10, 1, 1200, 30)
    bottom = rect(10, 583, 1200, 30)

    fill(178, 250, 156)
    right = rect(10, 1, 30, 612)
    left = rect(1200, 1, 30, 612)
    fill(207, 150, 240)
    paddle1 = rect(100, paddleY1, 30, 120, 25)
    paddle2 = rect(1100, paddleY2, 30, 120, 25)


    //paddle movement
    //player 2
    if (keyIsDown(UP_ARROW)) {
        if (paddleY2 > 40) {

            paddleY2 += 0
        }
        else {
            paddleY2 += 15;
        }

        paddleY2 -= 15;
    }
    else {
        paddleY2 += 0;
    }


    if (keyIsDown(DOWN_ARROW)) {
        if (paddleY2 > 458) {

            paddleY2 += 0
        }
        else {
            paddleY2 += 15;
        }
    }
    else {
        paddleY2 += 0;
    }

    //player 1
    if (keyIsDown(87)) {
        if (paddleY1 > 40) {

            paddleY1 += 0
        }
        else {
            paddleY1 += 15;
        }

        paddleY1 -= 15;
    }
    else {
        paddleY1 += 0;
    }

    if (keyIsDown(83)) {
        if (paddleY1 > 458) {

            paddleY1 += 0
        }
        else {
            paddleY1 += 15;
        }
    }
    else {
        paddleY1 += 0;
    }
    fill(149, 178, 250)
    ellipse(ballX, ballY, 30, 30)


    ballX = ballX + ballSpeedX
    if (ballX > 1185) {
        ballSpeedX = ballSpeedX * -1
    }
    if (ballX < 60) {
        ballSpeedX = ballSpeedX * -1
    }

    ballY = ballY + ballSpeedY
    if (ballY > 570) {
        ballSpeedY = ballSpeedY * -1
    }
    if (ballY < 50) {
        ballSpeedY = ballSpeedY * -1
    }


    if (ballX < paddleX1 + 40 && ballY < paddleY1 + 100 && ballY > paddleY1) {
        ballSpeedX = ballSpeedX * -1
    }

    if (ballX > paddleX2 && ballY < paddleY2 + 100 && ballY > paddleY2)

        ballSpeedX = ballSpeedX * -1


    // textSize(32)
    // text("Player 1 Score", 250, 75)
    // text(player1, 350, 150)
    // text("Player 2 Score", 950, 75)
    // text(player2, 1050, 150)
    // text("PLAYER 1", 350, 750)
    // text("PLAYER 2", 950, 750)

}

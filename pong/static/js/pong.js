let ctx, p1_y, p2_y, p1_points, p2_points
let ball_y_orientation, ball_x_orientation, ball_x, ball_y
let p1_keyUp, p1_keyDown, p2_keyUp, p2_keyDown, ev_pause, ev_gameStart, ev_Timer
const h=500, w=800, p_w=20, p_h=200, p1_x = 10, p2_x = w - p_w - 10

function setup() {
	const canvas = document.getElementById('canvas')
	ctx = canvas.getContext('2d')

	// inicializa posY dos jogadores para metade da tela
	p1_y = p2_y = (h / 2) - (p_h / 2)

	// inicializa os pontos dos jogadores como 0
    p1_points = 0
    p2_points = 0

	ev_pause = false
	ev_gameStart = false
	ev_Timer = false
	initBall()
	let cout = 5
	let timer = setInterval(function() {
		draw()
		ctx.font = "50px monospace";
		ctx.fillStyle = "#fff";
		ctx.fillText(cout, w/2, h/2);
		cout--
		if (cout == 0) {
			clearInterval(timer)
			ev_gameStart = true
			setInterval(loop, 1000 / 60)
		}
	}, 1000)
    //define um intervalo de 60 fps para o loop
}

function loop() {
	if (ev_pause == false){
		colision()
		//move a bola no eixo X e Y
		ball_x += 5 * ball_x_orientation
		ball_y += 5 * ball_y_orientation
		keyEv()
		draw()
	}
}

function colision() {
	//Verifica se a bola está colidindo com o barra do player 1
	if(ball_x >= p1_x && ball_x <= p1_x + 10 && ball_y >= p1_y && ball_y <= p1_y + p_h){
		ball_x_orientation = 1
	}
	//Verifica se a bola está colidindo com o barra do player 2
	else if(ball_x >= p2_x && ball_x <= p2_x + 10 && ball_y >= p2_y && ball_y <= p2_y + p_h){
		ball_x_orientation = -1
	}
	// verifica se a bola bateu no chão ou no teto
	if(ball_y + 10 >= h || ball_y <= 0)
		ball_y_orientation *= -1

	// verifica se player pontuou 
	if(ball_x+10 > w) {
		p1_points++
		initBall()
	}
	else if(ball_x < 0){
		p2_points ++
		initBall()
	}
}

function keyEv(){
	if(p1_keyUp == true && p1_y > 0){
        p1_y -= 10
    }else if(p1_keyDown == true && p1_y + p_h < h){
        p1_y += 10
    }

    if(p2_keyUp == true && p2_y > 0){
        p2_y -= 10
    }else if(p2_keyDown == true && p2_y + p_h < h){
        p2_y += 10
    }
}

function drawRect(x, y, w, h,color="#fff") {
	ctx.fillStyle = color
	ctx.fillRect(x, y, w, h)
	ctx.fillStyle = "#000"
}

function draw(){
	// fundo
    drawRect(0,0,w,h,"#000")
    // player 1
    drawRect(p1_x, p1_y, p_w, p_h)
    // player 2
    drawRect(p2_x, p2_y, p_w, p_h)
    // barra lateral
    drawRect(w/2 -5,0,5,h)
    // bola
    drawRect(ball_x, ball_y, 10, 10)
	// pontuação
	writePoints()
}

function writePoints(){
    ctx.font = "50px monospace";
    ctx.fillStyle = "#fff";
    // w/4 = 1/4 da tela = metade da tela do player 1
    ctx.fillText(p1_points, w/4, 50);
    // 3*(w/4) = 3/4 da tela = metade da tela do player 2
    ctx.fillText(p2_points, 3*(w/4), 50);
}

function initBall() {
	console.log(`${p1_points} VS ${p2_points}`)
	ball_y_orientation = Math.pow(2, Math.floor(Math.random() * 2)+1) - 3
	ball_x_orientation = Math.pow(2, Math.floor(Math.random() * 2)+1) - 3
	ball_x = w / 2 - 10
	ball_y = h / 2 - 10
}

document.addEventListener("keydown", function(ev) {
	let timero
	// keyCode 87 = w, keycode 83 = s
    if(ev.key == "w") {
        p1_keyUp = true
    }else if (ev.key == "s") {
		p1_keyDown = true
	}
    // keycode 38 = arrowUp, keycode 40 = arrowDown
    if(ev.key == "ArrowUp")
        p2_keyUp = true
	else if (ev.key == "ArrowDown"){
		p2_keyDown = true
	}
	if (ev.key == "Escape" && ev_gameStart == true) {
		if (ev_pause == false ){
			ev_pause = true
			ctx.font = "50px monospace";
			ctx.fillStyle = "#fff";
			ctx.fillText("Game Paused", w/2 - 140, h/2);
		}
		else if (ev_pause == true && ev_Timer == false) {
			ev_Timer = true
			let cout = 5
			let timer = setInterval(function() {
				ctx.font = "50px monospace";
				ctx.fillStyle = "#fff";
				draw()
				ctx.fillText(cout, w/2, h/2);
				cout--
				if (cout == 0) {
					clearInterval(timer)
					ev_Timer = false
					ev_pause = false
				}
			}, 1000)
		}
	}
})

document.addEventListener("keyup", function(ev) {
	// keyCode 87 = w, keycode 83 = s
    if(ev.key == "w") {
        p1_keyUp = false
    }else if (ev.key == "s") {
		p1_keyDown = false
	}
    // keycode 38 = arrowUp, keycode 40 = arrowDown
    if(ev.key == "ArrowUp")
        p2_keyUp = false
	else if (ev.key == "ArrowDown"){
		p2_keyDown = false
	}
})

setup()
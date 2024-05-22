const canvas = document.getElementById('pongCanvas')
ctx = canvas.getContext('2d')
const socket = new WebSocket('ws://localhost:8000/pong/')
const p1_x = 10
const p2_x = canvas.width - 20
const p1_y = 0
const p2_y = 0



var game_data = {
	p1_y, p2_y, p1_points, p2_points
}

function draw() {
	ctx.fillStyle = 'black';
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	drawRect(canvas.width/2 -5,0,5,canvas.height);
	drawRect(0,0,w,h,"#000")
	// player 1
	drawRect(p1_x, p1_y, p_w, p_h)
    // player 2
    drawRect(p2_x, p2_y, p_w, p_h)
    // barra lateral
    drawRect(w/2 -5,0,5,h)
}

function drawRect(x, y, w, h,color="#fff") {
	ctx.fillStyle = color
	ctx.fillRect(x, y, w, h)
	ctx.fillStyle = "#000"
}

socket.onmessage = function(e) {
	game_state = JSON.parse(e.data)

	p1_y = game_state.p1_y
	p2_y = game_state.p2_y
	draw()
}
const canvas = document.getElementById('canvas')
ctx = canvas.getContext('2d')
const socket = new WebSocket(`ws://${window.location.host}/ws/pong/`)
const h=500, w=800, p_w=10, p_h=200
const p1_x = 10
const p2_x = canvas.width - 20
p1_y = 0
p2_y = 0

function draw() {
	//fundo
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
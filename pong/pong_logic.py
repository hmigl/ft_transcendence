import time

CAN_WIDTH = 800
CAN_HEIGHT = 500

class game:
	WIDTH = CAN_WIDTH
	HEIGHT = CAN_HEIGHT
	p_score = [0,0]
	ball_pos = [0,0]
	ball_vel = [0,0]

class player:
	WIDTH = 10
	HEIGHT = 200
	y_pos = 0
	X_POS = 0
	vel = 5
	score = 0

	def move(self, direction):
		if direction == "up" and self.y_pos + self.HEIGHT >= CAN_HEIGHT:
			self.y_pos -= self.vel
		if direction == "down" and self.y_pos <= 0:
			self.y_pos += self.vel

def setup():
	global player_1, player_2
	player_1 = player()
	player_2 = player()
	player_1.y_pos = 10 
	player_1.X_POS = CAN_HEIGHT / 2 - player_1.HEIGHT / 2
	player_2.y_pos = CAN_WIDTH - player_2.WIDTH - 10
	player_2.X_POS = CAN_HEIGHT / 2 - player_2.HEIGHT / 2

def loop():
	setup()
		

def get_player1_y():
	return player_1.y_pos

def get_player2_y():
	return player_2.y_pos

def get_game_data():
	game_state = {
		'p1_y': player_1.y_pos,
		'p2_y': player_2.y_pos
	}
	return game_state

loop()
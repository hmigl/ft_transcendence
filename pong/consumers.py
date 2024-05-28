import json
import asyncio
import time
from channels.generic.websocket import WebsocketConsumer
from pong_logic import get_game_data

class PongConsumer(WebsocketConsumer):
	def connect(self):
		self.accept()
		self.send(text_data=json.dumps({
			'type': 'connection_established',
			'message': 'You are now connected!' 
		}))
		""" self.game_task = asyncio.create_task(self.game_loop()) """

	def disconnect(self, close_code):
		""" self.game_task.cancel() """

	def receive(self, text_data):
		pass

	""" def game_loop(self):
		FPS = 30
		while True:
			curTime = time.time()

			# Lógica do jogo para atualizar o estado
			game_state = get_game_data()

			# Enviar estado do jogo para o cliente
			self.send(text_data=json.dumps({"game_state": game_state}))

			# Calcular o tempo para dormir
			lastTime = curTime
			curTime = time.time()
			sleepTime = 1./FPS - (curTime - lastTime)
			if sleepTime > 0:
				asyncio.sleep(sleepTime) """

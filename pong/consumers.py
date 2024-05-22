import json
import asyncio
import time
from channels.generic.websocket import AsyncWebsocketConsumer
from pong_logic import get_game_data

class PongConsumer(AsyncWebsocketConsumer):
	async def connect(self):
		await self.accept()
		self.game_task = asyncio.create_task(self.game_loop())

	async def disconnect(self, close_code):
		self.game_task.cancel()

	async def receive(self, text_data):
		data = json.loads(text_data)
		pass

	async def game_loop(self):
		FPS = 30
		while True:
			curTime = time.time()

			# Lógica do jogo para atualizar o estado
			game_state = get_game_data()

			# Enviar estado do jogo para o cliente
			await self.send(text_data=json.dumps({"game_state": game_state}))

			# Calcular o tempo para dormir
			lastTime = curTime
			curTime = time.time()
			sleepTime = 1./FPS - (curTime - lastTime)
			if sleepTime > 0:
				await asyncio.sleep(sleepTime)

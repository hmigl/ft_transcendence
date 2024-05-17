import json
import time
from channels.generic.websocket import AsyncWebsocketConsumer
from pong_logic import update

class PongConsumer(AsyncWebsocketConsumer):
	async def connect(self):
		await self.accept()

	async def disconnect(self, close_code):
		pass

	async def receive(self, text_data):
		while True:
			FPS = 30
			curTime = time.time()
			lastTime = curTime
			sleepTime = 1./FPS - (curTime - lastTime)
			if sleepTime > 0:
				await self.sleep(sleepTime)
			await self.send(text_data=json.dumps({
				'text': 'ping'
			}))

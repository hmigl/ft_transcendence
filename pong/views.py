from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render
from .pong_logic import get_player1_y
from .pong_logic import get_player2_y

""" def pong(request):
    template = loader.get_template('firts.html')
    return HttpResponse(template.render()) """

def pong_render(request):
	context = {
		'player1_y': get_player1_y(),
		'player2_y': get_player2_y()
	}
	return render(request, 'firts.html', context)

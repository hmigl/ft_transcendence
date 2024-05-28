from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def pong_render(request):
	return render(request, 'pong/firts.html')

""" def pong(request):
    template = loader.get_template('firts.html')
    return HttpResponse(template.render())  """


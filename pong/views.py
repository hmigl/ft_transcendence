from django.http import HttpResponse
from django.template import loader

def pong(request):
    template = loader.get_template('firts.html')
    return HttpResponse(template.render())
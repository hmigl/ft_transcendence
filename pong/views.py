from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render

def pong(request):
    return render(request, 'pong/pong.html')

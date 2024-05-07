from django.shortcuts import render

def app_pong(request):
    return render(request, 'pong/pong.html')

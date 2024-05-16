from django.shortcuts import render

def pong(request):
    return render(request, 'app_pong/pong.html')

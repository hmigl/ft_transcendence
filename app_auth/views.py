from django.shortcuts import render

def login(request):
    return render(request, 'app_auth/login.html')

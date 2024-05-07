from django.shortcuts import render

def app_authentication(request):
    return render(request, 'authentication.html')

def logout(request):
    return render(request, 'authentication/logout.html')

def login(request):
    return render(request, 'authentication/login.html')

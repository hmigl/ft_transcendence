from django.shortcuts import render

#Create your views here.

def index(request):
    return render(request, 'spa/index.html')

def home(request):
    return render(request, 'spa/home.html')

from django.urls import path, re_path
from . import views

urlpatterns = [
    path('pong/', views.pong, name='pong'),

]

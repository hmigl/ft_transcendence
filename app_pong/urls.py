from django.urls import path, re_path
from . import views

urlpatterns = [
    path('', views.app_pong, name='app_pong'),

]

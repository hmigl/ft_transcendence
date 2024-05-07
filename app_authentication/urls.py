from django.urls import path
from . import views

urlpatterns = [
    path('', views.app_authentication, name='authentication'),  # localhost/authentication
    path('logout/', views.logout, name='logout'),  # localhost/authentication/logout
    path('login/', views.login, name='login'),  # localhost/authentication/login
]

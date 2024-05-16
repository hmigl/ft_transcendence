from django.urls import path
from app_auth import views

urlpatterns = [
    path('login/', views.login, name='login'),  # localhost/app_auth/login
]

from django.urls import path
from .views import CustonLoginView

urlpatterns = [
    path('', CustonLoginView.as_view(), name='login'),  # localhost/authentication/login
#    path('logout/', views.logout, name='logout'),  # localhost/authentication/logout
]

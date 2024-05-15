from django.contrib.auth.views import LoginView
from .forms import UserLoginForm

class CustonLoginView(LoginView):
    template_name = 'authentication/login.html'
    authentication_form = UserLoginForm
    redirect_authenticated_user = True


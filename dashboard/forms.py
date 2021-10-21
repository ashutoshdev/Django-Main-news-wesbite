from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth.models import User


class SignUpForm(UserCreationForm):
    # username = forms.CharField(max_length=254, help_text='', label='',
    # widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    email = forms.EmailField(max_length=254, help_text='', label='',
                             widget=forms.TextInput(attrs={'placeholder': 'Email'}))
    password1 = forms.CharField(max_length=254, help_text='', label='',
                                widget=forms.PasswordInput(attrs={'placeholder': 'Password'}), min_length=4)
    password2 = forms.CharField(max_length=254, help_text='', label='',
                                widget=forms.PasswordInput(attrs={'placeholder': 'Confirm Password'}), min_length=4)

    class Meta:
        model = User
        fields = ('email', 'password1', 'password2')

    def clean_email(self):
        """
        Returns the email if entered email is unique otherwise gives duplicate_email error.
        """
        email = self.cleaned_data['email']
        if User.objects.filter(email=email).exists():
            raise forms.ValidationError('Email already Exists!')
        return email


class authentication_form(AuthenticationForm):
    username = forms.CharField(max_length=30, required=True, help_text='', label='',
                               widget=forms.TextInput(attrs={'placeholder': 'Username'}))
    password = forms.CharField(max_length=254, help_text='', label='',
                               widget=forms.PasswordInput(attrs={'placeholder': 'Password'}))

from django.shortcuts import render, HttpResponse
from . import models  
import json
from .models import User

def index(request):
    if request.method == "POST":
        data = request.POST
        data = dict(data)
        print(data)
        user = User()
        user.name_and_surname = request.POST.get("name")
        user.gender = request.POST.get("gender")
        user.age = request.POST.get("date")
        user.telegram = request.POST.get("telegram")
        user.number = request.POST.get("number")
        user.text_about = request.POST.get("textarea")
        user.save()
    return render(request, 'myapp/index.html', {})

def index2(request):
    '''
    данные с другой сраницы (не получается подключить бд( )
    '''
    if request.method == "POST":
        data = request.POST
        data = dict(data)
        print(data)
        user = User()
        user.is_student = request.POST.get("types")
        user.course = request.POST.get("range")
        user.is_ended = request.POST.get("end")
        user.job = request.POST.get("work")
        user.save()
    return render(request, 'myapp/index2.html', {})
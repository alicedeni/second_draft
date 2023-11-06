from django.shortcuts import render

def index(request):
    return render(request, 'myapp/index.html', {})

def index2(request):
    return render(request, 'myapp/index2.html', {})
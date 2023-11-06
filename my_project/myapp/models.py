from django.db import models


class User(models.Model):
    name_and_surname = models.CharField(max_length=100)
    photo = models.TextField()
    gender = models.CharField(max_length=100)
    age = models.IntegerField()
    telegram = models.CharField(max_length=33)
    number = models.CharField(max_length=12)
    text_about = models.TextField()
    is_student = models.BooleanField(default=True)
    course = models.IntegerField()
    is_ended = models.BooleanField(default=False)
    step = models.TextField()
    faculty = models.TextField()
    program = models.TextField()
    job = models.TextField()
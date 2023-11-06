from django.contrib import admin
from . import models


class ItemAdmin(admin.ModelAdmin):
    list_display = ('id', 'name_and_surname', 'gender', 'age', 'telegram', 'number', 'text_about', 'is_student', 'course', 'is_ended', 'step', 'faculty', 'program', 'job')

# admin.site.register(models.Item, ItemAdmin)

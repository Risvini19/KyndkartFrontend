from django.urls import path
from .views import register, login, add_task, get_tasks, donate, get_donations

urlpatterns = [
    path('register/', register),
    path('login/', login),
    path('task/', add_task),
    path('tasks/', get_tasks),
    path('donate/', donate),
    path('donations/', get_donations),
]

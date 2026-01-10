from django.urls import path
from . import views

urlpatterns = [
    path('teams/', views.TeamListView.as_view(), name='team-list'),
    path('new/', views.DriverCreateView.as_view(), name='driver-create'),
]

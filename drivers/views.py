from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Driver, Team

# Create your views here.
class TeamListView(ListView):
    model = Team
    template_name = "team/team_list.html"
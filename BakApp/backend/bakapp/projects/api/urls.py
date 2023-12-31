from django.urls import include, path
from projects.api.views import ProjectTasksView, ProjectsView, RecordView
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('projects/', ProjectsView.as_view(), name='projects'),
    path('projects/<int:id>/', ProjectTasksView.as_view(), name='project_tasks'),
    path('records/', RecordView.as_view(), name='record')
]
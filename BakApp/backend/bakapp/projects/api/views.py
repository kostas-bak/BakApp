import json
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from projects.api.serializers import ProjectSerializer, ProjectTaskSerializer, RecordSerializer
from projects.models import Project, ProjectTask
from django.contrib.auth import authenticate, login
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt


# class ProjectViewSet(ModelViewSet):

#     serializer_class = ProjectSerializer

#     queryset = Project.objects.all()
    
#     def get_queryset(self):
#         queryset = Project.objects.all()
#         username = self.request.user.username
#         if username is not None:
#             queryset = queryset.filter(project_manager__username__username=username)
#             print(queryset.values())
#             return queryset
        
# @csrf_exempt
# def login_view(request):
#     if request.method == "POST":
#         data = json.loads(request.body.decode('utf-8'))
#         print(data)
#         username = data['username']
#         password = data['password']
        
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             login(request, user)
#             return JsonResponse({"accepted": True})
#         else:
#             return JsonResponse({"error": "Invalid credentials"}, status=401)
#     return HttpResponse("This endpoint only supports POST requests.")


class ProjectsView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectSerializer

    def get(self, request):

        user = request.user
        print(user)
        username = user.username
        queryset = Project.objects.all().filter(project_manager__username__username=username)
        serializer = ProjectSerializer(queryset, many=True)
        return JsonResponse(serializer.data, safe=False)
    


class ProjectTasksView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = ProjectTaskSerializer

    def get(self, request, id):
        queryset = ProjectTask.objects.all().filter(project__id=id)
        serializer = ProjectTaskSerializer(queryset, many=True)
        print(serializer.data)
        return JsonResponse(serializer.data, safe=False)
    

class RecordView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = RecordSerializer

    def post(self, request):
        print(request.data)
        serializer = RecordSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
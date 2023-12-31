from rest_framework import serializers
from projects.models import Cluster, Country, ProjectManager, ProjectTask, Record, Project, Region, Task
from django.contrib.auth.models import User

class UserSerializer(serializers.Serializer):
    class Meta:
        model = User
        fields = "__all__"


class ProjectManagerSerializer(serializers.ModelSerializer):
    username = UserSerializer(many=False)

    class Meta:
        model = ProjectManager
        fields = "__all__"


class RegionSerializer(serializers.ModelSerializer):

    class Meta:
        model = Region
        fields = "__all__"


class CountrySerializer(serializers.ModelSerializer):
    country_region = RegionSerializer(many=False)

    class Meta:
        model = Country
        fields = "__all__"


class ClusterSerializer(serializers.ModelSerializer):
    cluster_country = CountrySerializer(many=False)

    class Meta:
        model = Cluster
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    project_manager = ProjectManagerSerializer()
    cluster = ClusterSerializer()

    class Meta:
        model = Project
        fields = "__all__"


class TaskSerializer(serializers.ModelSerializer):

    class Meta:
        model = Task
        fields = "__all__"


class ProjectTaskSerializer(serializers.ModelSerializer):
    # project = ProjectSerializer()
    task = TaskSerializer()

    class Meta:
        model = ProjectTask
        fields = "__all__"


class RecordSerializer(serializers.ModelSerializer):

    class Meta:
        model = Record
        fields = "__all__"
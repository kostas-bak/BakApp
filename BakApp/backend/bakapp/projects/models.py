from django.db import models
from django.contrib.auth.models import User

class Region(models.Model):
    region_name = models.CharField(max_length=100)

    def __str__(self):
        return self.region_name
    

class Country(models.Model):
    country_name = models.CharField(max_length=100)
    country_region = models.ForeignKey(Region, on_delete=models.CASCADE)

    def __str__(self):
        return self.country_name
    
    class Meta:
        verbose_name_plural = "countries"
    

class Cluster(models.Model):
    cluster_name = models.CharField(max_length=100)
    power_output = models.FloatField()
    is_open = models.BooleanField()
    cluster_country = models.ForeignKey(Country, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.cluster_name}, {self.power_output}MW"
    

class ProjectManager(models.Model):
    username = models.ForeignKey(User, on_delete=models.PROTECT)
    firstname = models.CharField(max_length=20)
    lastname = models.CharField(max_length=20)
    phone = models.CharField(max_length=10)
    email = models.CharField(max_length=40)

    def __str__(self):
        return f"{self.firstname} {self.lastname}"
    

class Project(models.Model):
    project_name = models.CharField(max_length=100)
    cluster = models.ForeignKey(Cluster, on_delete=models.CASCADE)
    project_manager = models.ForeignKey(ProjectManager, on_delete=models.CASCADE)
    is_open = models.BinaryField()
    power_output = models.FloatField()

    def __str__(self):
        return f"{self.project_name}, {self.power_output}MW"
    

class Task(models.Model):

    CATEGORIES = (
        ("Civil", "Civil"),
        ("Mechanical", "Mechanical"),
        ("Electrical", "Electrical")
    )

    task_name = models.CharField(max_length=100)
    task_category = models.CharField(max_length=15, choices=CATEGORIES, default="Civil")
    units = models.CharField(max_length=30)

    def __str__(self):
        return self.task_name


class ProjectTask(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    total_amount = models.IntegerField()
    task_weight = models.FloatField()
    completed = models.BooleanField()

    def __str__(self):
        return f"{self.project}, {self.task}"
    

class Record(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    task = models.ForeignKey(Task, on_delete=models.PROTECT)
    progress = models.IntegerField()
    persons_working = models.IntegerField()
    machines_working = models.IntegerField()
    hours = models.IntegerField()
    date = models.DateField()

    def __str__(self):
        return f"{self.task} in {self.project} on {self.date}: {self.progress} [{self.task.units}]"

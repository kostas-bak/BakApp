from django.contrib import admin

from projects.models import *

# Register your models here.
admin.site.register(Region)
admin.site.register(Country)
admin.site.register(Cluster)
admin.site.register(Project)
admin.site.register(Task)
admin.site.register(ProjectTask)
admin.site.register(ProjectManager)
admin.site.register(Record)

BakApp - Frontend

This is the frontend for a progress tracking app called BakApp. The use of the app is organizing the progress of tasks of different projects. 

After creating a profile in the app in contact with the DB administrator, each project manager can use this app to report the progress of his projects.

After logging in with his credentials, the project manager is firstly presented with a list of all the projects that he is accountable for.

Upon selecting a project, he gets a list with all the tasks that are open for the specific project.

Through selecting a specific task, the project manager can report the progress of the selected task on a selected date, along with some other important information.

~~~ USERS CREDENTIALS ~~~
username: kostas
password: 123456

username: panos
password: panos12345

To run the Frontend, first make sure you have Node installed on your computer. Open a Terminal, navigate to BakApp inside the Frontend and type the following:
ng serve


In the following versions:
- The percentage of completion of each task will be shown in the Tasks section.
- The Project Manager will be able to see a list with all the progress records, so as to edit or delete a specific one.
- If a Project Manager tries to report a progress that is geater than the remainder to complete the task, an error message will be shown.
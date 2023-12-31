BakApp - Backend

This is the backend for a progress tracking app called BakApp. The use of the app is organizing the progress of tasks of different projects.

The Database is supposed to be connected to a Power BI dashboard in order to give a real-time overview of all the projects by region, by country or by project cluster.

Each Project Manager has an account with his credentials and inside the app he can report the daily progress of the projects that he is accountable for.

The access to the backend is intended just for the database administrator of the app. Inside the backend the db admin can do the following:
- Create Users
- Create Regions
- Create Countries
- Create Project Clusters (Groups of Projects)
- Create Projects
- Assign Tasks to the Projects


~~~ ADMIN CREDENTIALS ~~~
username: kostas
password: 123456

To run the Backend, first make sure you have Python installed on your PC. Open a terminal, navigate to Backend and type the following commands:
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
cd bakapp
python manage.py runserver


In the following versions:
- More endpoints will be created so that a project manager can create his own project and also create his own account.
# Mait talks API
This folder contains the backend & api code for the website.
The instructions below provide steps to setup Production as well as Development build of api

## Getting Started
### Server Setup
For the backend server using express as **Development** Server
```
  cd mait-project-api/api
  node server.js
```

For the backend server using express as **Production** Server
```
  cd mait-project-api/api
  MODE=Production node server.js
```
*Note: THe production build uses MySql as Database and Development build uses Sqlite as Database.*

### Database Setup
For setup of Database, mysql for production and sqlite for development must be installed.
*Sequelize* as ORM is used for Database Management.

***For development build, use [SQLite Db Browser](https://sqlitebrowser.org/).***

***The below instructions are for Production build only.***
Once mysql is installed and can be accessed through CLI. 
Login as root in mysql using
```
  mysql -u root -p
```

After logging in, run the following commands
```
  CREATE DATABASE maitTalks;
  CREATE USER "maitTalksAdmin" IDENTIFIED BY "123456";
  USE maitTalks;
  GRANT ALL PRIVILEGES ON maitTalks.* TO maitTalksAdmin;
  FLUSH PRIVILEGES;
  UPDATE mysql.user SET host = "localhost" WHERE user = "maitTalksAdmin";
```

For reviewing mysql database using CLI,
```
  mysql -u maitTalksAdmin -p
```

*Note: If you want to have your own database name, password, etc. Edit the environments.js in api/*

If all the above steps are followed correctly, the development mode should be up and running. :)

## Testing Data
Testing data can be initialised using the *testing-data.js* 
uncomment the following code to initialise testing database.
```
  database.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Database Synced \nServer Up and Running on ${SERVER_URL}`);
            // seedData(); <-- UNCOMMENT THIS TO INITIALISE TESTING DATA IN BOTH BUILDS
        })
    })
    .catch(err => { throw err });
```
*Note: The backend server must be running when initialising database.*

## End note
Feel free to contribute or contact us about future ideas regarding the website.
 

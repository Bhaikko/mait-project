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
For setup of Database, **MYSQL FOR PRODUCTION**, **SQLITE FOR DEVELOPMENT**, and **REDIS FOR SESSION STORAGE** must be installed.
*Sequelize* as ORM is used for Database Management.

***For development build, use [SQLite Db Browser](https://sqlitebrowser.org/).***

***Redis Setup*** <br/>
For redis, Redis server should be running and no setup is required.

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

## Database Architecture
<img src="https://github.com/Bhaikko/mait-project/blob/master/api/database/architecture/Database%20Architecture.png"/>

*Note: To edit and make changes in architecture diagram, read*
**/api/database/architecture/databaseDiagramCode.txt**

## Testing Data
Testing data can be initialised using the *testing-data.js* 
uncomment the following code to initialise testing database.

```
  database.sync()
    .then(() => {
        console.log('Mysql database Up and running!!!');
        redis.select(1, () => {
            console.log('Redis Database Up!!!');
            server.listen(PORT, () => {
                console.log(`Server Up and Running on ${SERVER_URL}`);
                socket(io, redis);

                // seedData(); <-- UNCOMMENT THIS TO INITIALISE TESTING DATA IN BOTH BUILDS
            });
        });

        redis.on('error', err => {
            console.log(err);
        });
    })
    .catch(err => { throw err });
```

*Note: The backend server must be running when initialising database.*

## End note
Feel free to contribute or contact us about future ideas regarding the website.
 

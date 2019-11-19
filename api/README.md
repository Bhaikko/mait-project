# Mait talks API
This folder contains the backend & api code for the website.

## Getting Started
For the backend server using express
```
  cd mait-project-api/api
  node server.js
```

For setup of Database, mysql must be installed.
*Sequelize* as ORM is used for Database Management.

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

*Note: If you want to have your own database name, password, etc. Edit the constants.js in api/*


If all the above steps are followed correctly, the development mode should be up and running. :)

## Testing Data
Testing data can be initialised using the *testing-data.js* 
Run the following commands to initialise testing database.
```
  node testing-data.js
```
*Note: The backend server must be running when initialising database.*

## End note
Feel free to contribute or contact us about future ideas regarding the website.
 

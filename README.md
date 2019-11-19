# Mait-talks
A Social Website for MAIT students where they can socialize with other students, help them, find new friends, etc.

## Our Idea
To develop a Platform having following application to help our current students or the ones who are new to the college. 
We have following application where you can socialize, help or contribute since this site is open-source.

We are planning to built following Web-Applications
* Dating App - People can meet new people, spend time with them, get to know them.
* Feed - A place to share posts, events, confessions(anonymously).
* Marketplace - A marketplace for students where they can sell or buy or post for free study material for juniors or other students.
* Notes - Online database of notes, files, etc which can be downloaded by students.

## Technologies Used
*Frontend*
* [Reactjs](https://reactjs.org)

*Backend*
* [Nodejs](https://nodejs.org/en) with express

*Database*
* Mysql

## Getting Started
### npm along with nodejs must be installed.
Before you start anything, make sure to install packages using *npm install* in each folder stated below.

For the development server of reactjs,
```
  cd mait-project/frontend
  npm start
```
This runs the frontend development server.

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

## Folder Structure
```
.
    ├── frontend
    │   ├── config                              # create-react-app configurations
    │   ├── public                              # development server files
    │   ├── scripts                             # npm scripts
    │   ├── src                                 # project files
    │   │   ├── apps                            # indiviual apps served by the website
    │   │       ├── dating                      # dating app js and css files
    │   │           ├── dating.js
    │   │           ├── dating.css
    │   │       ├── marketplace
    │   │           ├── ... same as dating
    │   │       ├── feed
    │   │           ├── ... same as dating
    │   │       ├── notes
    │   │           ├── ... same as dating
    │   │       ├── admin
    │   │           ├── ... same as dating
    │   │   ├── assets                          # images, icons, etc files used in project
    │   │   ├── components                      # stateless components
    │   │   ├── containers                      # statefull components
    │   │   ├── hoc                             # higher order components
    │   │   ├── store                           # redux actions and reducers
    │   │   ├── app.js                          # main app file 
    │   │   ├── axios.js                        # axios configurations
    │   │   ├── index.js                        # index file for app
    ├── api
    │   ├── api                                 # all the routes and related requests
    │   ├── database                            # database initialiser and handlers
    │   ├── passport.js                         # authentication middlewares for passport
    │   ├── server.js                           # main server file to execute
    │   └── ...   
    └──      
```

## End note
Feel free to contribute or contact us about future ideas regarding the website.

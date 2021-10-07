# Preconditions

1. Visual Studio Code
2. Node.js
3. Docker Desktop<br />
The programs in above must be installed.

# Steps to Run this Project

1. Clone the repo
```sh
git clone https://github.com/malisasmaz/ostromapi.git
```
2. Open terminal in project folder.

3. Run command to install dependencies.
```sh
npm install
```
4. Run command to create build.
```sh
npm run build
```
# Two options to Run project 

* Local: Run command
```sh
npm run start
```
* Docker: Run  command
```sh
docker-compose up
```

# To Run Tests
Run command to run tests
```sh
npm run test
```
# API Documentation 
https://documenter.getpostman.com/view/9054781/UUy7a3hR
</br>Created with Postman API Documentation.

# TechStack
I use TypeScript Express.js and TypeORM to create REST API. Mocha and Chai for tests.

1. I used TypeORM because, it is a great option for database processes. TypeORM is an ORM that can run on NodeJS, React Native, etc. Its supports the latest JavaScript features and provide additional features that help you to develop any kind of application that uses databases.

2. I used MongoDb Atlas for database. It is free, cloud based and online. Better than local options.

3. I used Express js for API operations. It is one of the most starred npm packages and a great option for building APIs :grinning:.

4. I use Mocha and Chai for API test operations. I added tests for each operations.


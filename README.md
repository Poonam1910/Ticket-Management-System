# Ticket Incident Management System
TMS is built using MERN stack( Mongo Express React and Node). 

![image](https://user-images.githubusercontent.com/42572785/119273734-d277e880-bc3e-11eb-8582-2e8307413741.png)

 # About The Project
Build an incident management service should have the following features: 
•	Raise an incident as an admin 
•	Assign the incident to a user 
•	Acknowledge the incident as a user 
•	Resolve the incident as a user 
•	Read details about a certain incident 
•	Index incidents (includes filtering, sorting by date created/updated and incident type and paging)
•	Delete an incident

 # Dependencies
•	Reactjs- Redux
•	nodejs
•	mongodb [Note : This is running in cluster mode under xxxx]

 # Architecture
 
# Getting Started
# Prerequisites
This is an example of how to list things you need to use the software and how to install them.
Node: npm install node@latest -g or download LTS version from node site

![image](https://user-images.githubusercontent.com/42572785/119273702-b5431a00-bc3e-11eb-8090-7a98411429a6.png)



# Reactjs Frontend
# Installation
Clone the repo
git clone https://github.com/Poonam1910/Ticket-Management-System.git

Install NPM packages
npm install

Build the project:
npm run build

Run the cypress test:
npm test

Run the project:
npm start
 
# Installation with docker:
Clone the repo:
git clone https://github.com/Poonam1910/Ticket-Management-System.git

Build the docker image:
docker build -t <image_name>/<image_tag> -f Dockerfile.prod .

Run the docker image:
docker run --name <container_name> -p 80:80 -d <image_name>/<image_tag>

 # Nodejs backend
# Installation
Clone the repo
git clone https://github.com/Poonam1910/Ticket-Management-Server-API.git

Install NPM packages
npm install

Build the project:
npm run build

Run the jest test:
npm test

Run the project:
npm run app

# Installation with docker:
Clone the repo:
git clone https://github.com/Poonam1910/Ticket-Management-Server-API.git

Build the docker image:
docker build -t <image_name>/<image_tag> -f Dockerfile.prod .

Run the docker image:
docker run --name <container_name> -p 8082:8082 -d <image_name>/<image_tag>

# Using docker-compose:
Start the frontend and backend services:
docker-compose -f <docker-compose.yml> up -d

Stop the frontend and backend services:
docker-compose -f < docker-compose.yml> down 

# Usage
Credentials for logging in
![image](https://user-images.githubusercontent.com/42572785/119273803-313d6200-bc3f-11eb-84a7-f94c9ad014be.png)


# Application Screenshots
![image](https://user-images.githubusercontent.com/42572785/119273819-3d292400-bc3f-11eb-98c6-17d0ccd3f7bc.png)
![image](https://user-images.githubusercontent.com/42572785/119273823-41edd800-bc3f-11eb-8890-c24e6dd77c9a.png)
![image](https://user-images.githubusercontent.com/42572785/119273826-47e3b900-bc3f-11eb-80e3-929a7f46d03d.png)
![image](https://user-images.githubusercontent.com/42572785/119273827-4adea980-bc3f-11eb-881b-98410d4f7d0b.png)

 

 
 
# Testing Screen Shot 
 
 ![image](https://user-images.githubusercontent.com/42572785/119273833-53cf7b00-bc3f-11eb-8fc3-f6b0c99cb337.png)
![image](https://user-images.githubusercontent.com/42572785/119273836-56ca6b80-bc3f-11eb-99bd-9b1f6b2fc9f2.png)

# Request/ Response
CRUD operation is available for Tickets through UI , Similar can be replicated for User. 

# USER/TICKET CRUD API are available in node project.
Sample json request to create new user

Default port exposed for API: 8082 and for UI as 3000. 
Please change the port & host based in application config files based on your exposed Ep.

User
Get: http://localhost:XXXX/users
Post: http://localhost:XXXX/users/create
Put: http://localhost:XXXX/users/<Id>
Delete: http://localhost:XXXX/users/XXX
sample Json:
{
"name":"user_6",
"role":"user",
"email":"user_6@test.com",
"loginName":"user_6"
}

Tickets
Get: http://localhost:XXXX/tickets
Post: http://localhost:XXXX/tickets/create
Put: http://localhost:XXXX/tickets/<Id>
Delete: http://localhost:XXXX/tickets/XXX

Sample Json:

{"description": "tes", "projectName": "Project-test", "assigneeId": "60a0c8c9eb957939600487a6", 
"priorityId": 1, "typeId": 1,"statusId":1}
 
# Contributing
 
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/AmazingFeature)
3.	Commit your Changes (git commit -m 'Add some AmazingFeature')
4.	Push to the Branch (git push origin feature/AmazingFeature)
5.	Open a Pull Request

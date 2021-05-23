# Ticket Incident Management System
TMS is built using MERN stack( Mongo Express React and Node). 

# Please refer the Incident_Mgt_System.docx 

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
 
Getting Started
Prerequisites
This is an example of how to list things you need to use the software and how to install them.
Node: npm install node@latest -g or download LTS version from node site

![image](https://user-images.githubusercontent.com/42572785/119273702-b5431a00-bc3e-11eb-8090-7a98411429a6.png)



Reactjs Frontend
Installation
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
 
Installation with docker:
Clone the repo:
git clone https://github.com/Poonam1910/Ticket-Management-System.git

Build the docker image:
docker build -t <image_name>/<image_tag> -f Dockerfile.prod .

Run the docker image:
docker run --name <container_name> -p 80:80 -d <image_name>/<image_tag>

Nodejs backend
Installation
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

Installation with docker:
Clone the repo:
git clone https://github.com/Poonam1910/Ticket-Management-Server-API.git

Build the docker image:
docker build -t <image_name>/<image_tag> -f Dockerfile.prod .

Run the docker image:
docker run --name <container_name> -p 8082:8082 -d <image_name>/<image_tag>

Using docker-compose:
Start the frontend and backend services:
docker-compose -f <docker-compose.yml> up -d

Stop the frontend and backend services:
docker-compose -f < docker-compose.yml> down  
Usage
Credentials for logging in
UserType	Username	Password
Admin	Admin	admin
User	User	user






Application Screenshots
 


 


 
 
Testing Screen Shot 
 
 


Request/ Response
CRUD operation is available for Tickets through UI , Similar can be replicated for User. 
USER/TICKET CRUD API are available in node project.
Sample json request to create new user

Default port exposed for API: 8082 and for UI as 3000. 
Please change the port & host based in application config files based on your exposed Ep.

User Create: http://localhost:XXXX/users/create

User
Get: http://localhost:XXXX/users
Post: http://localhost:XXXX/users/create
Put: http://localhost:XXXX/users/<Id>
Delete: http://localhost:XXXX/users/XXX
Json:
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

Json:

{"description": "tes", "projectName": "Project-test", "assigneeId": "60a0c8c9eb957939600487a6", 
"priorityId": 1, "typeId": 1,"statusId":1}



Contributing
Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.
1.	Fork the Project
2.	Create your Feature Branch (git checkout -b feature/AmazingFeature)
3.	Commit your Changes (git commit -m 'Add some AmazingFeature')
4.	Push to the Branch (git push origin feature/AmazingFeature)
5.	Open a Pull Request

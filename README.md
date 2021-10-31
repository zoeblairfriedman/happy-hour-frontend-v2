# README

## HAPPY HOUR 
Powered by Google! This App uses both the GoogleMaps AND GooglePlaces APIs to showcase user verified Happy Hours on our map and allows you to search for and verify new bars as you visit them. Happy Hour — it's a team sport! 

### FRONT END REPO!   
As of August 2021 this Repo contains only the Front End code of the Happy Hour application. Rails Backend code here --> https://github.com/zoeblairfriedman/happy-hour-react 

### DEMO
https://youtu.be/e-7mf6uKKZA

### CORS Extension
Currently you will need a CORS Changer extension to conduct necessary Google API searches. We recommend: https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc

### Terrible Practice
As of now we are all sharing my API key. This is a terrible practice and is on my lengthy ToDo list to remedy.

### Setup Rails Backend
    - Install the gems required by the application by running 'bundle install'
    - CD into the backend folder 'happy-hour-react-backend'
    - Migrate all tables and create the database by running 'rails db:migrate'
    - Seed the database by running 'rails db:seed'

### Start Backend Server
Start the server by running 'rails s'

### Launch the front end 
Install all necessary packages by running 'npm install'

### Start Frontend Server
Start the server by running 'npm start'
You will likely need to type "Y" to run the frontend on a different server

### Enjoy Happy Hour!
    - Search for validated happy hours in your desired area
    - Use Google's API to add new Happy Hours 
    - Validate accurate Happy Hours
    - Update outdated Happy Hours



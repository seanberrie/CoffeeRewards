# Itelligentsia Coffee Rewards
## Description
A full stack application that allows customers to go to different cafes and collect rewards for buying coffee at different stores.

This application also is a CMS for the company to control the addition the stores and edit of details of stores.

This application could be used for multiple retail stores to control their own rewards programs for patrons
## how to use locally
download files - connect server - go to browser - connect to localhost 3000
## Technologies Used
* EJS
* Bootstrap
* CSS
* MongoDB
* Node Express
* Node.js
* Passport Local-Authentication
* [Heroku] (https://intelligentsia.herokuapp.com/)
* Git
* [GitHub] (https://github.com/seanberrie/CoffeeRewards)
* [Trello] (https://trello.com/b/6VRLYIzO/project-1) 
## Wireframes and Page Screen Shots
### Landing Page
![Landing page wireframe](https://i.imgur.com/IOo6Alo.png)
![Landing page Screenshot](https://i.imgur.com/BkeH7xM.png)

### Admin Sign In
![Admin Sign In WireFrame](https://i.imgur.com/cYo78a9.png)
![Admin Sign In Screenshot](https://i.imgur.com/j2h5XaJ.png)

### Admin Sign Up
![Admin Sign Up](https://i.imgur.com/1fV81GF.png)

### Admin CMS Screen
![CMS wireframe](https://i.imgur.com/EmeccH3.png)
![CMS screenshot](https://i.imgur.com/dRhSHA0.png)

### Edit Screen
![Edit Screenshot](https://i.imgur.com/3x2hgzR.png)

### User Sign Up
![user sign up wire frame](https://i.imgur.com/OifmUDj.png)
![user sign up screenshot](https://i.imgur.com/egWbnKE.png)
### Rewards Program Screen
![rewards wireframe](https://i.imgur.com/9es846G.png)
![rewards screenshot](https://i.imgur.com/ed9jxG6.png)
### ERD
![ERD](https://i.imgur.com/vr5sHmE.png)
### User Stories and Trello Board
![user stories screenshot](https://i.imgur.com/MFRYG85.png)
![trello board screenshot](https://i.imgur.com/OnhJSo4.png)


### Features

* Admin vs. User Code
  ![signup code snippet](https://i.imgur.com/h0BZ9kE.png)
  ![login code snippet](https://i.imgur.com/wUZp2lM.png)
* 3 Routers, 1 Controller, 2 Models and a Server for a smooth transition of information across EJS layout and DB information
 ![Store controller snippet](https://i.imgur.com/DigHFTz.png)
 ![Server dependencies and sessions](https://i.imgur.com/ntVuOPN.png)
 ![User Router](https://i.imgur.com/dSDd7QO.png)
 ![Store Router](https://i.imgur.com/QbVv0a7.png)
 ![Admin Router](https://i.imgur.com/gBL4dCU.png)
 ![Store Model](https://i.imgur.com/XaxbpD5.png)
 ![User Model](https://i.imgur.com/xGHcT6d.png)
* Passport Local Auth
 ![Passport Snippet](https://i.imgur.com/8umOaLB.png)
* EJS layout form that attaches head to all views
  ![layout screenshot](https://i.imgur.com/R2mbJmP.png)

### Credits

 * Sean Berrie


### Designed and Developed by

 * Sean Berrie [github link](https://github.com/seanberrie "My Github link")

### Links
 * [Heroku Live Website] (https://intelligentsia.herokuapp.com/)

### Challenges
* Making both an Admin and User seperation using only one Model
* Using one side as a CMS and the user side using that information
* Full CRUD being used in different locations

### I'm Winning 
* I was able to create the passport auth for both User and Admin
* learned how to use bootstrap and EJS layouts
* Having a better understanding of Database management and control

### Challenges I want to still complete
* overriding bootstrap for autofilled forms with yellow
* adjusting the nav bar so admin and logout buttons are on left
* make it not hang and instead redirect if the admin code doesnt match
* finish the function to collect the rewards on user screen and disable the forms after they are used
* Long Stretch - use QR code instead of typed numerical for rewards points
* make folders for different EJS for a cleaner layout
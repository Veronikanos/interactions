# Interactions - Take home project for TechMagic Academy

Hosted at gh-pages. [Live page is here](https://veronikanos.github.io/interactions/)

This project is a representation of interactions with REST API [{JSON} Placeholder](https://jsonplaceholder.typicode.com/)

The page show a list of the store's customers that shows using a get-request from the API as soon as the page is loaded.
When you click on the line with the name of a specific client, a list of reviews left by this client will appear on the right.

The user also has the option to add a new client to the list and his name will appear at the bottom of the existing client list. This possibility is implemented using a post-request.

Since the open API does not allow you to actually change the data on the server, and this task was performed in order to demonstrate the skills of working with the REST API, when the page is reloaded, the new customers added by the user will disappear.

A parent and child class with methods were created to send asynchronous requests, and a class that generates custom error messages was also used.

---

### HOW TO RUN THIS PROJECT LOCALLY

Clone this repo:
`git clone https://github.com/Veronikanos/interactions`

In the project directory, you can run:

#### `npm install`

then

#### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:8080 ](http://localhost:8080) to view it
in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

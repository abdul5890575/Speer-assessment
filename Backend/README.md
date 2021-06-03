# Backend Api Tweets
A backend server created for assesment purposes

## Setup

Install dependencies with `npm install`.
Enter your own database info in the .env file (Postgresql)
Use seed and schema file to pupulate DB(test purpose only)

## Running Webpack Development Server

-use npm start to start the server
-server runs on port 4000


## Running Jest Test Framework

-use npm test to run backend api test


## Endpoints
Endpoints
- post on /register to register client with args(first_name,last_name,email,password)
- post on /login to login client with args(email,password)
- get request on /tweet to get user post (UserID taken from signed in user cookie session)
- post on /tweet to create new user tweet(UserID taken from signed in user cookie session)
- delete request on /tweet/post_id to delete post(UserID taken from signed in user cookie session)
- put request on /tweet/post_id to update post (UserID taken from signed in user cookie session)
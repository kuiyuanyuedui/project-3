<h1>100% completed of project-3 on Nov 22 for the 40 Bonus Points!!!<h1>
<h1 align="center">
WeTalk
</h1>
<p align="center">
React + Nodejs + Express + MongoDB + HTML5 + Heroku
</p>

## Authors
Yuan Wang | Weihong Yang

## Deploy on Heroku
https://mytwittera2.herokuapp.com/


## Description
- Web Development Project 3 : WeTalk
- Project Objective : Apply the concepts learned in class by building a basic fullstack application with React, Nodejs, Express, javascript, MongoDB and HTML5. Deploy on Heroku.

## Project Intro
- Create a social networking application where users broadcast and interact with short posts, user can follow others account and check followed list.

## Functionalities
- where user Register, Login and Logout. @Yuan Wang 
- List history posts, user can Broadcast & Delete posts. @Weihong Yang 
- Reply to certain posts & Comments, thumbs up/down certain posts. @Yuan Wang
- Follow/unFollow other users & followed/following/user list. @Weihong Yang

## Class Info
- Class Link: https://johnguerra.co/classes/webDevelopment_fall_2022/
- Professor: <a href="https://johnguerra.co/"> John Alexis Guerra Gómez </a>
- Release: <a href="https://mytwittera2.herokuapp.com/"> Here to Start </a>
- Demo: <a href="https://youtu.be/mB-5_2-avfo"> Video </a>


## Prerequirements
- [MongoDB](https://www.mongodb.com/3)
- [Node](https://nodejs.org/en/download/) v14.15.4
- [npm](https://nodejs.org/en/download/package-manager/)

## Instructions for Clone or Download
```terminal
$ git clone git@github.com:kuiyuanyuedui/project-3.git

run in client:
$ npm install	(change client/config.js --> export const baser = “”)
$ npm build  	(copy “ build/... "   --> server/public”)

run in server:  
$ npm install
$ npm start
Using your browser go to localhost: http://locahost:80/
```
## Screenshots Preview:
Login
![](Screenshots/Login.png)

Register
![](Screenshots/regist.png)

User Post
![](Screenshots/User_Post.png)

Comment
![](Screenshots/Comment.png)

Following/Follower List
![](Screenshots/Following_unFollow_List.png)


### License
[MIT](LICENSE)
  
  
Code Review by Xingjian Bi
  Overall I love your WeTalk app design. There’s many buttons with different background color that matches it’s functionality. Also spacings for user list and tweets are just perfect. On my homepage the following/followers button can be removed because I can use navbar to navigate that page. Also one thing you may improve on is users should not follow themselves.
  Your code is well organized and I can find your frontend and backend easily. I see you divide each page into your different component and use props to pass data. One advice is to put your css folder into your component and/or pages folder not your src folder in the frontend. 


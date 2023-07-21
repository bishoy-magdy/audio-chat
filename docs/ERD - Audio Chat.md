# Engineering Requirement Document - Audio Chat

This document explores the design of Audio Chat.

# Features
 - Basic authentication method (email and password)
 - Upload or Change the image profile
 - Create a virtual Room chat
 - Real-Time audio chat communication
   - open/close Mic
   - Leave Room
 - Real-Time text chat

# Big Picture - Architect

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/Audio%20Chat%20Architect.svg" alt="Audio Chat Architect">

# Storage

Using MongoDB as a primary database for storing user information like name, password hash, and profile URL and also for storing logs; using Redis for storing user sessions and ids of rooms; and finally, using the file system for storing the profile picture.

# Mongo Schema Validation

Using Mongo Schema Validation only on user collection as follows:

## user

| column | type |
| --- | --- |
| _id | objectId |
| name | string |
| email (index) | string |
| profileImg | string |
| password | string |

# Session Mechanism

Using session id as a primary identifier with an expiration of 2 weeks ⏱️ from last signin; after that time, resignin is required.

# Room Id

Room id is formed by generating a random UUID and then using MD5 for hashing and setting room id in Redis with an expiration date of 5 hours.

# Framework

This is shaping up to be a tiny MVC framework, interesting.

# Client - API

| Path |  What Should Do |
| --- | --- |
| `/home` | Home page |
| `/signin` | signin page|
| `/signup` | Signup page |
| `/signout` | Revocation of Cookies and Session |
| `/room/:id` | Room page |

# UI

## Signin

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/signin.png" alt="signin">

## Signup

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/signup.png" alt="signup">


## Home Page

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/home.png" alt="home">

## Upload - Update Profiel Img

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/upload%20profiel%20img.png" alt="Upload - Update Profiel Img">

## Create a Virtual Room

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/room%20url.png" alt="room url">

## Virtual Room

<img src="https://raw.githubusercontent.com/bishoy-magdy/audio-chat/main/assets/room.png" alt="room">

# Dependencies

- [React.js](https://react.dev/)
- [chakra-ui](https://chakra-ui.com/)
- [express](https://www.npmjs.com/package/express)
- [session id](https://github.com/expressjs/session#readme)
- [connect-redis](https://www.npmjs.com/package/connect-redis)
- [webRTC](https://en.wikipedia.org/wiki/WebRTC)
- [Socket.io](https://socket.io/)
- [crypto](https://nodejs.org/api/crypto.html) 
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)


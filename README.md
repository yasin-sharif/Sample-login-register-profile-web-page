# Sample Login Register Profile Web Page

> ## List of contents
> * Introduction
> * Structure
> * Flow of work
> * Images

## Intoduction
This project consist of three main web pages: login, register and profile. 

## Structure
DATABASE : Uses MySQL for storing user login credential and MongoDB for storing user profile datas.<br/>
CSS : Bootstrap<br/>
BACKEND : php

## Flow of work
Every field are validated using javascript.
Basic details are collected during the signup and those details are stored both in DB.
Upon Successful login, the profile page is loaded by querying the MongoDB using the email ID.
Click `Edit` button to edit some fields. Fields like `Name` and `Email` can't be edited.
Click `Save` button (which is visible only on clicking `Edit` button) to save your updated profile details.
Click `Logout` button to log out and return to the login page.

## Images
![Login preview](/assets/login.jpg)
![Login error effect](/assets/login%20error%20effect.jpg)
![Register preview](/assets/register.jpg)
![Register error effect](/assets/register%20error%20effect.jpg)
![Profile preview](/assets/profile.jpg)
![Profile-edit on](/assets/profile%20edit%20on.jpg)
![Profile-after update](/assets/profile%20after%20update.jpg)
![Mongo DB](/assets/mongo%20db.jpg)
![MySQL](/assets/mysql%20db.jpg)

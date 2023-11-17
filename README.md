<h1 align="center">MedConnect</h1>

## Introduction
It is an online medical appointments and consultation website, built using NodeJS in backend and ReactJS in frontend. 

## Table of Contents
- [Problem Statement](#problem-statement)
- [Description](#description)
- [Technology Used](#technology-used)
- [Features](#features)
- [Local Installation](#local-installation)
- [Demo Images](#demo-images)


### Description
- Through this web app, people can signup as patients and book appointments with doctors and get an online/offline consultation. 
- Similarly doctors can signup and view the appointments scheduled for him/her and schedule video meetings accordingly.

### Technology Used
  1) NodeJs
  2) ReactJs
  3) Firebase
  4) socket.io
  5) simple-peer library (node.js style API for WebRTC)

### Features
- Doctors/Patients/Admins have separate login
- Admins can verify and unverify doctors and patients
- Patients can search for any doctor according to his/her name/speciality/city
- Patients can book appointments in the doctor's slot
- Doctors can either cancel/confirm appointments
- A meeting is automatically scheduled for confirmed appointments and the notification is sent to the patient as well
- In the meeting, doctors can view patient's profile, chat, toggle their camera and mic, give prescription, update patient's blood sugar level
- In the meeting, patients can chat, toggle their camera and mic, can read and download the prescription given by doctor, can rate and review the doctor
- Patients can also download the prescription as a PDF
- After the meeting, the doctors can view the same patient in their "Your Patients" section and see their past appointments with him/her
- Similarly, patients can find their past appointments alongwith prescription and feedback
- Admins can create posts with latest updates which will be visible to all users.

### Local Installation
```
git clone https://github.com/Gaurav701a/MedConnect.git
cd MedConnect

#Open two terminals

#1st Terminal
cd client
npm install
npm start

#2nd Terminal
cd server
npm install
npm start
```
To get the database working, the firebase configuration needs to be added in client/src/firebase.js file after cloning the repository.


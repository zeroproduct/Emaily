![alt text](https://i.imgur.com/Nok0vNd.png "Pollie")

>**Pollie** is an app used to send out polls to a mass email list. Upon sending, the recipients will receive an email with a poll to answer, which is then sent back to the user for evaluation.

The backend leverages **Express** and **NodeJS**, with **MongoDB** for querying and storage. The frontend utilizes **React/Redux**, **Materialize**, and **ES6**.

## Installation
MacOS & Linux

```sh
git clone https://github.com/zeroproduct/Pollie.git pollie
cd pollie
npm install
```
*Installation guide still in progress...*

## Features and implementations
Used the [SendGrid](https://sendgrid.com/) for their API in order to send proper emails and retrieve the necessary data. Survey and their results are saved in MongoDB using the service [mLab](https://mlab.com/). The main app is deployed on Heroku, and it can be located at https://radiant-ridge-45660.herokuapp.com/ (*currently not 100% working, need to localtunnel webhook*).

## TODO
* Fontend/Features
  * Allow users to sort surveys by date or highest total rated
  * Create attractive landing page
  * Work on styling and colors
  * Change email field from comma separated list to Crumbs
  * Eventually shy away from Materialize and have custom styling
* Backend/Features
  * Allow for more poll answers (currently only Yes or No)
  * Let users delete previous surveys
  * Allow users to save drafts of their surveys
* Complete README file

## Meta
Daniel Rica --- [@REEKAH](http://reekah.now.sh/) --- danrica92@gmail.com
https://github.com/zeroproduct/Pollie

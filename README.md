# AIR IQ - bringing Air Quality info, to you : React-based Mobile App

An app designed to make accessing Air Quality Information, more accessible, legible, and customizes recommendations based on user profiles. Built for mobiles, in React, React Router DOM, Express, Postgres, React Bootstrap. Created as part of the Collaborative Final Project for <a href="https://www.lighthouselabs.ca/">Lighthouse Labs</a>, with <a href="https://github.com/qwhat">Justin Mao</a> and <a href="https://github.com/sogbdn">Sonia Barret de Nazaris</a>

<div>
<img src="https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme3.png" width="250">

<img src="https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme2.png" width="250">

<img src="https://github.com/cepholopoddreamz/AirIQ/blob/293720f292cb44671b6bdc52c920ced133bb148c/client/public/readme6.png" width="250">

<img src="https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme5.png" width="250"> 

<img src="https://github.com/cepholopoddreamz/AirIQ/blob/560e41eb3ffe84afd4c760aab4b4b8f54629a7a7/client/public/readme4.png" width="250">

<img src="https://github.com/cepholopoddreamz/AirIQ/blob/637359ede30f31185aea5d61b947d922836dafa9/client/public/mapview.png" width="250">

</div>


# INSTALL DEPENDENCIES

1. cd into the */server* folder.
2. From the */server* folder, run ```npm run server``` (server dependencies).
3. Open a second terminal and cd into the */client* folder.
4. From the */client* folder, run ```npm install``` (React dependencies).
5. Use ```npm run server``` from the */server* terminal to start the server on ```http://localhost:3002/```
6. User ```npm start``` from the */client* terminal to start the client on 3001

## CREATING THE KNEX DATABASE

1. From the */Final_Project* folder, run ```psql```.
2. From the psql terminal, run ```CREATE DATABASE air_iq;```.
3. Use ```\q``` to leave the psql terminal.
4. Run ```knex migrate:currentVersion``` to check if a table already exists (It should say *Current Version: none*).
5. If a current version exists, run ```knex migrate:rollback``` then repeat from step 4 until it says *none*.
  - Most versions of knex will only need you to rollback once to clear all of them
6. Run ```knex migrate:latest``` to create the empty migration tables.
7. To populate the database with "false" data, run ```knex seed:run```

## ADD GOOGLEAPI KEYS

1. You will need to generate and add your own GoogleAPI keys, following the unfortunate change to a paid use/access to the API in 2018.

<a href="https://developers.google.com/maps/documentation/javascript/get-api-key#quick-guide">QUICK GUIDe</a>

Google <a href="https://developers.google.com/maps/documentation/javascript/tutorial">JAVASCRIPT API</a>

GET <a href="https://developers.google.com/maps/documentation/javascript/get-api-key">API KEY</a>

These keys will need to be added in order to look up locations beyont the default geolocation/Montreal view, and and to view the 'mapview' of the Air Quality currently being retreived on the front page.

NOTE: To use the Maps JavaScript API, you must get an API key and you must enable billing in your account. The links above will explain the necessary steps in further detail. You can enable billing when you get your API key (see the Quick guide) or as a separate process (see Usage and Billing).

2. Add API Key to two files. First, in the client folder (/client/public/index.html), in the index.html file, at the line ```script src="https://maps.googleapis.com/maps/api/js?key=INSERTAPIKEYHERE&libraries=places"```.
Second, in the client folder, (/client/src/components/pages/MapView.js), in the MapView.js file, at line 287:
```apiKey: ('INSERTAPIKEYHERE')```
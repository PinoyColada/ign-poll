# Code Foo 10 - Ryan Hatamosa's Engineering Internship Application

# Part 1: Introduction

![my-hero](https://media4.giphy.com/media/MARFSIQQNQVWw/giphy.gif?cid=ecf05e47gxzomoj1eqhzft6cvg71rqbnrdrz1hx2nrv04eii&rid=giphy.gif&ct=g)

#### Hey there! My name is Ryan Hatamosa. I'm 24 years old and currently doing a General Assembly Coding Bootcamp. Before that, I used to major in computer engineering at Prince George's Community College. I figured that through out my time at PGCC, I was more into software than hardware and when I did the switch to learning programming, I finally found out what I'm __passionate__ in. Ign has played a big part in life, and still is! Ever since a young adolescent, playing games was a very serious hobby of mine and I truly believe that without IGN, I wouldn't have known some of the games I truly love. From IGN's reviews to news of upcoming games, IGN is my main source for gaming. Just recently I started playing Rogue Legacy 2, a game I never knew existed before seeing a review about it on the IGN page! With that being said, being an intern at IGN would be a dream coming true. Having to learn how to develop full stack applcations such as MERN & PERN, learning React & Vue, working with other classmates on several projects and so forth during my time here at General Assembly, this internship would allow me to exercise the skills and technology I have under my belt. Just hearing that I can have the opportunity to work on real engineering projects that can seen by millions of users is so magnificent and I'm looking forward to hearing from you guys back!

#### [GitHub](https://github.com/PinoyColada) | [LinkedIn](https://www.linkedin.com/feed/) | [HackerRank](https://www.hackerrank.com/pinoydol_colada)
***

# Part 2: Hisui's New Power Plant Solution
### There are two important things to contemplate on after reading the prompt; how much power does it take to fully power the village and the availability of voltorbs in the region. 

### Let's talk about the voltorb situation. Since Voltorbs are uncommon, catching them in the wild is counterproductive, since you won't have a 100% chance of getting them for every pokemon encounter in Sacred Plaza. Instead, we only have to catch one Voltorb and catch one Ditto. Based on https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_catch_rate, Ditto does have a lower catch rate than Voltorb, however once we do catch one, we can go to Solaceon Town's Day Care and leave both the Voltorb and Ditto there. In this case, the two pokemon have a 100% chance to breed Voltorbs, a better and productive alternative to just catching Voltorbs in the wild.

### Next up is the how much power Jubilife City needs. There isn't really that much provided information of the City like how much buildings there are, etc. but in https://bulbapedia.bulbagarden.net/wiki/Jubilife_City, it is described as the "most modernized city in the region". With that, I can presume that the city takes as much power as the most modernized place in the world which is the United States (based on https://www.usnews.com/news/best-countries/rankings/modern). According to https://www.worlddata.info/america/usa/energy-consumption.php , the US uses on an average of 3,902.00 billion kWh of electric energy per year. That being said, Voltorb can learn the classic move called 'Thunderbolt' , which contains power equal to around about 300 million Volts, the same as lightning (based on https://www.weather.gov/safety/lightning-power#:~:text=A%20typical%20lightning%20flash%20is,120%20Volts%20and%2015%20Amps.) The 3,902 billion kWh can be converted to 3902000000000000 volts, and if we divide that with 300 million volts, we get 13006666.6667. Rounding that up, we will need 13006667 (a really really large amount of pokemon if you ask me) Voltorbs in order to power the city every year.

# Part 3: Full Stack Application


### ***Description***
#### I have decided to do the real-time polling full stack application. In this application, you have access to vote on any of choices given from the polls available in the poll page. You also have the option to create an account and when signed in, you can create polls of your own and choices along with it, have the ability to access them in your poll page, and delete a poll if necessary.
***

### ***Technologies Used***
![pern](https://www.freecodecamp.org/news/content/images/size/w2000/2020/03/PERN.png)
***

### ***Getting Started***
#### DEMO VIDEO
https://vimeo.com/manage/videos/705002936
#### Simply click this link https://polar-shelf-85111.herokuapp.com/ and you will be brought to the deployed application
#### If you would like to use it locally, create a parent directory with 2 children directory, one with the front end repo (https://github.com/PinoyColada/ign-fullstack) and one with the back end repo (https://github.com/PinoyColada/ign-poll). Do 'npm i' in both directories, and for the backend, do 'npm init -y' , 'npx sequelize-cli init' , 'npx sequelize-cli db:create', 'npx sequelize-cli db:migrate' and 'npx sequelize-cli db:seed:all' in order. Once you have you done both of the steps, you can now 'npm start' both of them.
### 
***



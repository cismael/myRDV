### For the front-end
1- install nodejs LTS (https://nodejs.org/en/download/)
2- use nodejs prompt and go to the folder of the project (myRDV)
 - install angular cli (https://cli.angular.io/) 
 - create the front-end app (ng new front-end)
3- execute "ng serve --o" to verify if everything is ok
4- ...

### For the back-end
1- install maven (download, unzip, ...)
2- use springboot initializr to create the back-end (https://start.spring.io/) 
 - maven project - java - 2.0.4
 - group : com.myrdv
 - artifact: myRdv
 - dependencies (take a look here : https://spring.io/projects/spring-boot)
    - spring framework
    - spring data 
    - spring batch
    - spring web flow
    - spring web services
    - spring security (if you want)
    - spring session (if you want)
    - any spring project you want to test
 - generate the project, download it and unzip it under the back-end folder
 - compile the projet using maven to verify if everything is ok
3- ...
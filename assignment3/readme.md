/**
 * @author Nupur Shah
 *
 */
SWE 642: Assignment 3 Servlet, JSPs, MVC & Database I/O

Software and jar files Required:

1. Cisco AnyConnect VPN
2. Eclipse IDE for Java EE Developers
3. Apache Tomcat 9

Instructions to start:
1. Install Eclipse and Tomcat. Configure Tomcat with Eclipse IDE
2. Install Cisco AnyConnect VPN (Ref: https://its.gmu.edu/service/virtual-private-network-vpn/) and connect to vpn.gmu.edu using your username and password
3. Unzip the file which contains .war, .zip and readme.md file
4. Activate oracle database account and Connect to oracle database (Ref: https://labs.vse.gmu.edu/index.php/Services/Oracle#connect )
5. Create table(student) using below query. use username:nshah23 password:thoaptoa

create table STUDENT(STDID VARCHAR(20) NOT NULL PRIMARY KEY, USERNAME VARCHAR2(20), STREET VARCHAR2(40), CITY VARCHAR2(20), STATE VARCHAR2(20), ZIP VARCHAR(20), TELEPHONE VARCHAR2(12), EMAIL VARCHAR(20), URL VARCHAR2(20), INTINUNI VARCHAR(20), HIGHSCHLGRADMONTH VARCHAR(20), HIGHSCHLGRADYEAR VARCHAR(20), RECOS VARCHAR(20), COMMENTS VARCHAR(40));

6. Import the war file in the Eclipse. Eclipse -> File -> Import -> filter with 'war' and click Next -> Browse for this 'war' file -> Click Finish
-- After importing the .war file if it shows Error "Faceted Project Problem (Java Version Mismatch)" then right-click on project name -> Properties -> Project Facets -> Select Java Version 14 and Apply.
7. Run the project. Right-click on the project -> Run As -> 1 Run on Server
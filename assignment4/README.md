Contribution: 
An Nguyen - Created Angular project, header footer components

Keerthana Uppala - Backend (Restful and JPA)

Nupur Shah - student component, studentdetail components, student model, and student service in Angular

Sai Risshie  Makineni - Linking between Frontend and Backend

Folders in zip
Frontend - assignment4
Backend - swe642-hw4-restful

Extra Credit : We have used JPA in our homework implementation.

Software/Technologies Required:
Apache Tomcat 8.5.59 or higher
Visual Studio Code
Nodejs and Angular CLI
Cisco AnyConnect VPN

The following are optional technologies that you may wish to install: 
SQL Developer Instance 

Please note it is recommended to install any graphic user interface applications (like IntelliJ, Visual Studio Code, and SQL Developer) first before connecting to the VPN.

Instructions
Java SE - Version 11
In order for the assignment to operate properly, the Java Runtime Environment (JRE), Standard Edition (SE) - Version 11 or higher is required. To install JRE to your machine: 
Go to https://www.oracle.com/java/technologies/java-se-glance.html, or search for Java SE on the Oracle Website. You should see download options available for Java 11. 
Select the "Download" hyperlink for Java 11, and click JRE download. Select the 32-bit or 64-bit executable file (.exe) for your appropriate operating system (OS). 
Accept the agreement if needed, and then download the file. 
Once the download is complete, run the executable file and follow the on-screen prompts. The JRE should be installed onto the appropriate Programs file in your file system. 

Alternatively, you can also download the Java Development Kit (JDK), which comes with the aforementioned JRE, if you need to create and compile code. To do this, download the appropriate JDK version noted in Step 1 and follow the prompts. 

Note that at the time of this document, the files were running on Java 11. However, the files may work properly on Java 8, but that is not guaranteed. You should use the latest version of JRE if available. 

Please ensure the Java Runtime Environment is installed on the machine. To check, go to the Command Prompt, and then type "java" to the shell and then press ENTER. If there are commands listed (for Java), the installation should be successful. You can also check the version with "java -version". 

Visual Studio Code
This is an open-source and robust code editor created by Microsoft, which hosts lots of features including debug mode, numerous language extensions, and command-line tools. You would need to install the Visual Studio Code (VSC) to use Angular.js easily and other tools. 
Get Microsoft’s VSC at https://code.visualstudio.com. Download the correct stable version pertaining to your operating system. 
Once downloaded, follow the on-screen prompts to install the code editor onto your machine. 
Once installed, open VSC. You may need to do the additional setup to use the code editor effectively. Follow any on-screen instructions. 

As you open the programs and/or source code, VSC may prompt you to install additional extensions or tools (including the command line tools in VSC). It is recommended that you install these extensions (unless you are not planning to edit the code) to run the programs effectively. 

Connect to Cisco AnyConnect
Install Cisco AnyConnect VPN (Ref: https://its.gmu.edu/service/virtual-private-network-vpn/). Follow the on-screen instructions once downloaded.
Once the VPN tool is available, connect to vpn.gmu.edu. Enter your GMU username and password credentials (NetID) when prompted. 

Node.js
You would need to use the most updated LTS version of Node.js to compile the work properly. 
Install Nodejs (Ref. https://nodejs.org/en/), and select the most recent LTS (Long Term Support) version. Open the executable file when downloaded, and follow the on-screen instructions. 
To verify Node.js has been installed properly, open the Command Prompt terminal of your operating system. Then, type in $node -v and then selected Enter. You should see the version number. 

Angular.js
Angular is a JavaScript framework that can be installed on the command-line interface (CLI). You may view reference information at https://www.angular.io. 

To ensure you can install Angular onto your machine, you must have Node.js installed and the accompanying npm package. See the Node.js instructions to view how to install Node.js
To install Angular CLI using the command prompt, open the Command Prompt and type in the following command: 
$npm install -g @angular/cli

Please note the prompts may differ depending on the version of 
Angular being installed. Please refer to the on-screen instructions 
when installing. 

To verify if you have Angular.js installed once the installation is complete, type in the following command: 
$ng version

Typing in this command should display the version number, Node.js version, OS, and related packages. 

Open the project in Visual Studio Code.
To run this project,
$ng serve on the command prompt and go to http://localhost:4200 in the browser.
If you get the error An unhandled exception occurred: Cannot find module '@angular-devkit/build-angular/package.json'. 
Run $npm install --save-dev @angular-devkit/build-angular to command prompt.

SQL Developer Instance - Version 20.2
Although not required, you may wish to view the database information that the file use via the Oracle 18c database. Please note that this requires SQL knowledge and the connection parameters necessary to view the database information. 

To download SQL Developer Instance to your machine: 
Go to https://www.oracle.com/tools/downloads/sqldev-downloads.html, or search for SQL Developer Downloads. 
Select the download 32-bit or 64-bit file that best suits your OS. Note if you have downloaded the JDK/JRE files already, you can select the standalone version. 
Accept the agreement if needed, and then download the file. 
You may need to unzip and save the download files to a designated location in your file system. Please place the files in a location you can easily access. 
Once unzipped, select the download file - which contains the version number of SQL Developer. 
Select "sqldeveloper" folder, and then select the sqldeveloper.exe file. Follow the on-screen prompts. 

You should use the latest version available of SQL Developer Instance, but do note you may need to install earlier versions of the Oracle databases that are older. 

Note: Student id related to a recently added record in the database will not be shown in the Student IDs list of Student Data table.

Dependencies:
Need to be connected to GMU VPN for using the Database.
Used Tomcat 9 for deploying .war file
Deploying .war file in Tomcat
Extract the SWE642-HW4.zip file which contains .war file, zip file of assignment and ReadMe file
Place the HW4-0.0.1-SNAPSHOT.war file in the webapps folder of Tomcat (Apache Software Foundation\Tomcat 9.0\webapps\)
Start the tomcat server in the command line (Check whether java is set up in environmental variables)
The War file will be extracted in the Apache Software Foundation\Tomcat 9.0\webapps
Then we can observe the result of the backend using the `http://localhost:8080/HW4-0.0.1-SNAPSHOT/students`. Please use tomcat port as 8080
Additional Instructions for Tomcat 7 (if needed)
To download the server to the local machine: 
Go to https://tomcat.apache.org/download-70.cgi, or search for Tomcat Apache.  
Download and save the zip file (under Core bullet) - either the 32-bit or 64-bit depending on your OS.
Once saved, unzip and extract the file. You should unzip the installation files in a location that you can easily access. 
Once unzipped, select the "tomcat7" folder, then "apache-tomcat-7.0.20", and then the "bin" directory. You should see startup/shutdown scripts. 
Afterwards, open your web browser, and type in "http://localhost:8080 to verify that Tomcat has been successfully installed. 
Ensure the "webapps" folder is available from "apache-tomcat-7.0.20" folder. This is necessary to run the .war files included in the assignment submission. 

Note that tomcat will be up and running at http://localhost:8080 once successfully downloaded and installed in most instances. You should use the latest version if available.

Executing the frontend code
1.Open the SWE642-HW4\assignment4\assignment4 in the VS Code.
2.Next open the terminal in VS Code and run the project by typing `ng serve` inside the project folder SWE642-HW4\assignment4\assignment4
3.After successful compilation of project, open the browser on http://localhost:4200


Database credentials.
Username: nshah23
Password: thoaptoa

Created the table using the below query.
create table students(STDID VARCHAR(100) NOT NULL PRIMARY KEY, USERNAME VARCHAR2(100), STREET VARCHAR2(100), CITY VARCHAR2(100), STATE VARCHAR2(100), ZIP VARCHAR(100), TELEPHONE VARCHAR2(100), EMAIL VARCHAR(100), URL VARCHAR2(100), LIKEDABTCAMPUS VARCHAR(100), INTINUNI VARCHAR(100), HIGHSCHLGRADMONTH VARCHAR(100), HIGHSCHLGRADYEAR VARCHAR(100), SDATE DATE, RECOS VARCHAR(100), COMMENTS VARCHAR(100), DATA VARCHAR(100));
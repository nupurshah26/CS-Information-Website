Contribution: 
An Nguyen - Created Angular project, header footer components
Keerthana Uppala - Backend(Restful and JPA)
Nupur Shah - Student, studentdetail components, student model, and student service in Angular
Sai Risshie  Makineni - Linking between Frontend and Backend
1 December 2020 

Folders in zip
Frontend - assignment4
Backend - swe642-hw4-restful

Please note these instructions do not provide information about setting up the files for development purposes as that is not the intent of this submission (i.e. this is for grading). This means there is no information regarding the JAR files such as JDBC Driver and Persistence (JPA) /Hibernate/Spring and the Java technologies for RESTful Web Services. 

Software/Technologies Required:
IntelliJ IDEA Community Edition (to view any RESTful information, Hibernate/Spring-pertaining files for the database) - Ensure you have the latest Java SDK
Visual Studio Code
Nodejs and Angular CLI
Cisco AnyConnect VPN

The following are optional technologies that you may wish to install: 
SQL Developer Instance 

Please note it is recommended to install any graphic user interface applications (like IntelliJ, Visual Studio Code, and SQL Developer) first before connecting to the VPN.

Instructions
IntelliJ IDEA Community Edition
Although not required, you may need to view the source code and other files, including servlets and server pages, in an integrated development environment (IDE) for debugging or related purposes. 

To install the latest version of the IntelliJ IDEA Community Edition: 
Go to https://www.jetbrains.com/idea and select the “Download” button. In the Downloads page, select the operating system, and then click the Download button of the Community version (in the Community column). This should download the executable file.
Once downloaded, click on the executable file. Follow the on-screen prompts to install IntelliJ to your machine. 
Ensure you have the proper Java SDK to install on your machine. For instructions to get the latest SDK, see Java SE - Version 11 instructions in this file (below).

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

Database details.
Username: nshah23
Password: thoaptoa

Created the table using the below query.
create table students(STDID VARCHAR(100) NOT NULL PRIMARY KEY, USERNAME VARCHAR2(100), STREET VARCHAR2(100), CITY VARCHAR2(100), STATE VARCHAR2(100), ZIP VARCHAR(100), TELEPHONE VARCHAR2(100), EMAIL VARCHAR(100), URL VARCHAR2(100), LIKEDABTCAMPUS VARCHAR(100), INTINUNI VARCHAR(100), HIGHSCHLGRADMONTH VARCHAR(100), HIGHSCHLGRADYEAR VARCHAR(100), SDATE DATE, RECOS VARCHAR(100), COMMENTS VARCHAR(100), DATA VARCHAR(100));
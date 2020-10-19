<div align="center">

<img src="./client/assets/images/stratosdb_logo_black.png" width=250px>

<br>

<br>

<br>

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/oslabs-beta/StratosDB)
![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)
![Contributions Welcome](https://img.shields.io/badge/Contributions-welcome-blue.svg)
[![Github stars](https://img.shields.io/github/stars/oslabs-beta/StratosDB?style=social)](https://github.com/oslabs-beta/StratosDB)

<br>

<p><b>stratosDB: </b>A Cloud SQL database performance tester and deployment tool</p>

</div>

<br>

## Table of Contents

- <a href="https://github.com/oslabs-beta/StratosDB#beta-stage">Beta Stage</a>
- <a href="https://github.com/oslabs-beta/StratosDB#getting-started">Getting Started</a>
- <a href="https://github.com/oslabs-beta/StratosDB#main-features">Main Features</a>
- <a href="https://github.com/oslabs-beta/StratosDB#built-with">Built With</a>
- <a href="https://github.com/oslabs-beta/StratosDB#core-team">Core Team</a>
- <a href="https://github.com/oslabs-beta/StratosDB#license">License</a>

<br>

## Beta Stage

Team StratosDB will strive to continuously release updates and additional features.

1. If you would like to contribute to this project:

   - Please feel free to submit a PR

2. If you happen to come across any issues while tinkering with the application:
   - Please report the bug/issue by submitting a ticket located in the Issues Tab within this repository

<br>

## Getting Started

1. Click on the Cloud Icon (located on the Left Sidebar)
<center>
	<img
		src="./client/assets/images/info-modal-cloud-icon.png"
	/>
</center>

2. Enter your AWS RDS Information and press <strong>Connect</strong>

   <strong>User:</strong> Database Username
   <br />
   <strong>Host:</strong> AWS RDS Endpoint Link \*
   <br />
   <strong>Database:</strong> Database name \*\*
   <br />
   <strong>Password:</strong> Database Password

<center>
	<img
		src="./client/assets/images/info-modal-cloud-modal.png"
		alt=""
	/>
</center>

\* Sourced from AWS RDS Database Instance Dashboard

\*\* If Database name was left blank when the AWS RDS Datbase Instance was created, use <strong>postgres</strong>

## Main Features

### IMPORTING .SQL AND .TXT FILES

1.  Click on the Import Icon (located on the Left Sidebar)
2.  Choose the .SQL or .TXT file you would like to import
3.  Select <strong>Import</strong> to populate your file's code base into the application's built-in code editor.

<center>
<img
	src="./client/assets/images/info-modal-upload-icon.png"
/>
	<br />
	<img
		src="./client/assets/images/info-modal-upload-modal.png"
	/>
</center>

### SCHEMA CODE EDITOR

Use the Schema Code Editor to input any psql command queries (EG.{' '}
<strong>CREATE TABLE</strong>, <strong>INSERT INTO</strong>,{' '}
<strong>DROP TABLE</strong>) to create/read/update/delete tables
and/or data entries from your tethered AWS RDS database

<center>
	<img
		src="./client/assets/images/info-modal-code-editor.png"
	/>
</center>

### QUERY TEXT EDITOR

Enter your <strong>SELECT</strong> psql commands into the provided
text editor and press <strong>Submit Query</strong> to initiate the
performance analysis on your existing schema design

EG. SELECT \* FROM <em>TABLE_NAME</em>;

<center>
<img
	src="./client/assets/images/info-modal-query-text-area.png"
/>
</center>

### RETURN TABLE

A scrollable table will render based on the <strong>SELECT</strong>{' '}
query you have entered in the <strong>Query Text Editor</strong>

<center>
<img
	src="./client/assets/images/info-modal-returned-table.png"
/>
</center>

### VISUAL LINE GRAPH

A visual line graph representation will render the performance time
(milliseconds) for each successfully performed{' '}
<strong>SELECT</strong> query \*\*

<center>
	<img
		src="./client/assets/images/info-modal-line-graph.png"
	/>
</center>

\*\* You can hover each point in the line graph to view the query
that was ran and the performance time (ms)

<br>

## Built With

- React
- TypeScript
- CodeMirror
- React-ChartJS-2
- Node.JS
  - Express
- AWS RDS
  - PostgreSQL

<br>

## Core Team

<div align="center">
<table>
<tr>
<td align="center">
<a href="https://github.com/joalk"><img src="./client/assets/images/joalk.png" width="120px"/></a>
<br>
<a href="https://github.com/joalk">Joal Kim</a>
</td>
<td align="center">
<a href="https://github.com/sophiapak"><img src="./client/assets/images/sophiapak.png" width="120px"/></a>
<br>
<a href="https://github.com/sophiapak">Sophia Pak</a>
</td>
<td align="center">
<a href="https://github.com/tysong24"><img src="./client/assets/images/tysong24.png" width="120px"/></a>
<br>
<a href="https://github.com/tysong24">Tommy Song</a>
</td>
<td align="center">
<a href="https://github.com/morgan562"><img src="./client/assets/images/morgan562.png" width="120px"/></a>
<br>
<a href="https://github.com/morgan562">Tyler Morgan</a>
</td>
</tr>
</table>
</div>

<br>

## License

This project is licensed under the MIT License

# Weather-App

<p>This project used HTML (html files will show up as .ejs), CSS, Javascript, Nodejs, EJS, and express to show you current weather conditions in any city. It dynamically will add the city to the DOM when you search for it. User inputs are also validated to ensure you entered a real city. The weather information is coming from the Open Weather Maps API.</p>

<h1>Pre-Setup</h1>
<ol>
  <li>Open git bash (or terminal of choice)</li>  
  <li>cd into working directory</li>
  <li>Run "npm i" to install all packages needed</li>
</ol>

<h1>How to start the server</h1>
<ol>
  <li>Open git bash (or terminal of choice)</li>  
  <li>cd into working directory</li>
  <li>Run "node app.js"</li>
  <li>Open your internet browser and got to "localhost:3000"</li>
</ol>

<p><em>If you get an error when starting the server close it "CTRL + C" and run "npm i body-parser" and then re-run the server.</em></p>

<h1>You should be greeted with this screen</h1>
<img src="/images/Screenshot 1.png">

<h1>Searching</h1>
<img src="/images/Screenshot 2.png">
<p>You can type any city in the world into the search bar and it will display automatically in the DOM.</p>

<h1>Input Validation</h1>
<img src="/images/Screenshot 3.png">
<img src="/images/Screenshot 4.png">
<p>The website will ensure you enter a valid website that is not already displayed.</p>

<h1>Local Storage</h1>
<p>Everything is being stored locally in an array on the back-end (app.js)</p>

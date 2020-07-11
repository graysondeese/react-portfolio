import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
        <div className="header">
          <div className="innerHeader">
            <div className="logoContainer">
              <a href="index.html" className="logo">GD</a>
            </div>
            <div className="navigation">
              <div className="hamburgerMenu">
                <div className="line line-1" />
                <div className="line line-2" />
                <div className="line line-3" />
              </div>
            </div>
          </div>
        </div>
     
        <nav className="sidebar">
          <ul className="navList">
            <li className="navItem">
              <a href="index.html" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <a href="#portfolio" className="navLink">Portfolio</a>
            </li>
            <li className="navItem"><a href="#contact" className="navLink">Contact</a></li>
            <li className="navItem">
              <a href="Assets/DeeseResume.pdf" target="_blank" className="navLink">Resume</a>
            </li>
            <li className="navItem">
              <a href="https://www.linkedin.com/in/grayson-deese/" target="_blank" className="navLink">Linkedin</a>
            </li>
            <li className="navItem">
              <a href="https://github.com/graysondeese" target="_blank" className="navLink">Github</a>
            </li>
          </ul>
        </nav>
       
        <div className="maintainer">
          <h1>Grayson Deese</h1>
          <h2>Software Engineer</h2>
          <a href="#portfolio">See Projects</a>
        </div>
       
        <div className="contentContainer">
          <div className="content">
            <h1 className="headings" id="about">About</h1>
            <div className="mainHr" />
            <p>
              Front-end engineer leveraging STEM background to improve user
              experience on all aspects of the web. Currently enrolled in a coding
              bootcamp through the University of North Carolina at Charlotte where I
              will receive a certificate in full stack web development.
            </p>
            <p>
              During this bootcamp, I’ve built on my skills in HTML and CSS as well
              as acquired new skills in JavaScript, React.js, jQuery and responsive
              web design. Self-motivated, driven and organized individual who works
              well under pressure and enjoys finding solutions to problems. Known
              for integrating aspects of UX and UI into a clean, user-friendly page.
            </p>
            <p>
              Recently, I worked in a team of four to build an application, from
              scratch, that lets users find things to do in the Charlotte area using
              a Google Maps API. Excited to use skills alongside a driven team to
              build superior experiences on the web.
            </p>
            <div className="skillHolder">
              {/* <img src="./Assets/Images/skills/react.736da783.png" alt="React" /> */}
              {/* <img src="./Assets/Images/skills/78-788134_javascript-logo-hd-png-download.png" alt="JavaScript" /> */}
              {/* <img src="./Assets/Images/skills/download.png" alt="Node.js" /> */}
              {/* <img src="./Assets/Images/skills/385-3850320_png-transparent-mongodb-icon-mongodb-logo-png-download.png" alt="MongoDB" /> */}
              {/* <img src="./Assets/Images/skills/download (1).png" alt="HTML" /> */}
              {/* <img src="./Assets/Images/skills/198-1985012_transparent-css3-logo-png-css-logo-transparent-background.png" alt="Css" /> */}
              {/* <img src="./Assets/Images/skills/282-2827422_mysql-logo-png-mysql-png-transparent-png.png" alt="MySQL" /> */}
              {/* <img src="./Assets/Images/skills/1_9RqBEDU9Mbg6XM8O6d7Q9A.png" alt="Bootstrap" /> */}
            </div>
          </div>
        </div>
     
        <h1 className="headings" id="portfolio">Portfolio</h1>
        <div className="mainHr" />
        <div className="container-fluid mb-5">
         
          <div className="row">
           
            <div className="col-md-6 text-center mb-4">
              <h2>Quiz Stack</h2>
              <p>JavaScript, MySQL, Sequelize, Handlebars Node.JS, HTML, CSS</p>
              <p>
                <a href="https://quiz-stack.herokuapp.com/" target="_blank">Deployed Application</a>
              </p>
              <p>
                <a href="https://github.com/graysondeese/QuizStack" target="_blank">GitHub Repository</a>
              </p>
              {/* <img className="portfolioPics" src="Assets/Images/qs-pic.PNG" alt="Quiz Stack" /> */}
            </div>
            
            <div className="col-md-6 text-center mb-4">
              <h2>Workout Tracker</h2>
              <p>JavaScript, MongoDB, Mongoose, Node.JS, HTML, CSS</p>
              <p>
                <a href="https://limitless-springs-47529.herokuapp.com/" target="_blank">Deployed Application</a>
              </p>
              <p>
                <a href="https://github.com/graysondeese/WorkoutTracker" target="_blank">GitHub Repository</a>
              </p>
              {/* <img className="portfolioPics" src="Assets/Images/wt-pic.PNG" alt="Workout Tracker" /> */}
            </div>
          </div>
          <div className="cardBorder" />
          
          <div className="row">
            
            <div className="col-md-6 text-center mb-4 ">
              <h2>INTown</h2>
              <p>
                JavaScript, jQuery, Foundation, Google Maps &amp; Ticketmaster API,
                HTML, CSS
              </p>
              <p>
                <a href="https://graysondeese.github.io/INTown/" target="_blank">Deployed Application</a>
              </p>
              <p>
                <a href="https://github.com/graysondeese/INTown" target="_blank">GitHub Repository</a>
              </p>
              {/* <img className="portfolioPics" src="Assets/Images/INTown-pic.PNG" alt="INTown" /> */}
            </div>
           
            <div className="col-md-6 text-center mb-4">
              <h2>Day Planner</h2>
              <p>JavaScript, jQuery, HTML, CSS</p>
              <p>
                <a href="https://graysondeese.github.io/DayPlanner/" target="_blank">Deployed Application</a>
              </p>
              <p>
                <a href="https://github.com/graysondeese/DayPlanner" target="_blank">GitHub Repository</a>
              </p>
              {/* <img className="portfolioPics" src="Assets/Images/DayPlanner-pic.PNG" alt="Day Planner" /> */}
            </div>
          </div>
          <div className="cardBorder" />
          
          <div className="row">
           
            <div className="col-md-12 text-center mb-4">
              <h2>Weather Dashboard</h2>
              JavaScript, jQuery, Open Weather API, HTML, CSS
              <p>
                <a href="https://graysondeese.github.io/WeatherDashboard/" target="_blank">Deployed Application</a>
              </p>
              <p>
                <a href="https://github.com/graysondeese/WeatherDashboard" target="_blank">GitHub Repository</a>
              </p>
              {/* <img className="portfolioPics" src="Assets/Images/wdPic.PNG" alt="Weather Dashboard" /> */}
            </div>
          </div>
        </div>
        
        <div id="contact">
          <div className="innerContact">
            <h1 className="headings">Contact</h1>
            <div className="mainHr" />
            <form action="https://formspree.io/mzbjaylo" method="POST">
              <label>
                <input type="text" name="name" placeholder="Name" />
              </label>
              <label>
                <input type="text" name="_replyto" placeholder="Email" />
              </label>
              <label>
                <textarea type="text" name="message" placeholder="Your Message" defaultValue={""} />
              </label>
              <button type="submit" className="submit-btn">Send Message</button> <br />
              <h4>Email: graysondeese@gmail.com</h4>
              <h4>Phone: 980-621-3400</h4>
            </form>
          </div>
        </div>
        <div className="footer">
          <h4>© Grayson Deese 2020</h4>
          <h4><a href="Assets/DeeseResume.pdf">Resume</a></h4>
          <div className="footerIcons">
            <a href="https://github.com/graysondeese" target="_blank"><i className="fab fa-github-square fa-2x" /></a>
            <a href="https://www.linkedin.com/in/grayson-deese/" target="_blank"><i className="fab fa-linkedin fa-2x" /></a>
          </div>
        </div>
    </div>
  );
}

export default App;

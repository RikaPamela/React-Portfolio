// Projects.js
import React from 'react';
import './projects.css'; // Import the CSS file for styling


function Projects() {
  return (
    <div className="projects">
      <h1>My Projects</h1>
      <div className="project-list">
        {/* Replace the placeholders below with your actual project information */}
        <div className="project">
          <img src="/assets/banklingo.png" alt="Pamela Makamu" />
          <h2>BankLingo</h2>
          <p>
            BankLingo is an AI-powered application that takes a term and simplifies it into laymans terms, providing it back to the user. 
          </p>
          <p className="card-text">
                <small className="text-muted"><a href='https://bank-lingo.vercel.app/landing' >App</a></small>
              </p>
        </div>
        <div className="project">
          <img src="/assets/E-com start-up.png" alt="Pamela Makamu" />
          <h2>MyStore</h2>
          <p>
            MyStore is a start-up e-commerce website that provides the user with the latest devices and a nice user friendly UI.
          </p>
          
        </div>
        <div className="project">
          <img src="/assets/TheMovieRoom.png" alt="Pamela Makamu" />
          <h2>TheMovieRoom</h2>
          <p>
            The movie room is an application where a user can view the lastest movies and can choose to watch that movie later. 
            Which will be save in their watchlist (much like a movie dairy)
          </p>
          <p className="card-text">
                <small className="text-muted"><a href='https://movie-room-frontend.vercel.app/home' >App</a></small>
              </p>
        </div>
        {/* Add more project placeholders as needed */}
      </div>
    </div>
  );
}

export default Projects;

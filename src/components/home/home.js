// Home.js
import React from 'react';
import './home.css'; // Import the CSS file for styling


function Home() {
  return (
    <div className="home">
      <div className="content">
        <div className="text">
          <h1>Welcome to My Portfolio</h1>
          <p className="intro">
          👋 Hey there! I'm Pamela Makamu, an IT graduate, specializing in Software Development. 🎓</p>
          <p className="intro">
You see, I'm not your average code-wrangler; I'm the Sherlock Holmes of debugging and the Indiana Jones of problem-solving! 💻🕵️‍♀️
</p>
<p className="intro">
I've been on this epic tech quest, honing my skills and building software that's stronger than a cup of coffee on a Monday morning. My motto? Create solutions so sleek they make James Bond jealous! 🤵💼
</p>
<p className="intro">
Learning's my middle name! Whether it's mastering a new programming language or riding the wave of the trendiest frameworks, I'm the tech surfer who's always ready to ride! 🌊🏄‍♀️
</p>
<p className="intro">
So, let's embark on this coding adventure together, shall we?</p>
        </div>
        <div className="image">
          <img src="/assets/RBB20_067.jpg" alt="Pamela Makamu" />
        </div>
      </div>
    </div>
    
  );
}

export default Home;

// // AboutMe.js
// import React from 'react';
// import './about.css'; // Import the CSS file for styling

// function About() {
//   // Define the list of services with descriptions
//   const services = [
//     {
//       title: 'Web Development',
//       description:
//         'I create responsive and user-friendly websites using the latest web technologies.',
//     },
//     {
//       title: 'UI/UX Design',
//       description:
//         'I design intuitive user interfaces with a focus on user experience to make your product stand out.',
//     },
//     {
//       title: 'Mobile App Development',
//       description:
//         'I develop mobile applications for both Android and iOS platforms to reach a broader audience.',
//     },
//     {
//       title: 'Database Design',
//       description:
//         'I design and optimize databases to ensure efficient data storage and retrieval.',
//     },
//     // Add more services as needed
//   ];

//   return (
//     <div className="about-me">
//       <h1>About Me</h1>
//       <p>
//         Hi, I'm Pamela Makamu! I'm a passionate software developer with experience in both front-end and back-end development. Here are some of my skills:
//       </p>
//       <div className="skills">
//         <div className="skill-card">
//           <h2>Frontend Development</h2>
//           <ul>
//             <li>HTML5</li>
//             <li>CSS3</li>
//             <li>JavaScript</li>
//             <li>React</li>
//           </ul>
//         </div>
//         <div className="skill-card">
//           <h2>Backend Development</h2>
//           <ul>
//             <li>Node.js</li>
//             <li>Express.js</li>
//             <li>Python</li>
//           </ul>
//         </div>
//         <div className="skill-card">
//           <h2>Database</h2>
//           <ul>
//             <li>SQL</li>
//             <li>MongoDB</li>
//           </ul>
//         </div>
//       </div>

//       <div className="services">
//         <h2>Services I Provide</h2>
//         <div className="service-cards">
//           {services.map((service, index) => (
//             <div className="service-card" key={index}>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

// AboutMe.js
import React from 'react';
import './about.css'; // Import the CSS file for styling

function About() {
  // Define the list of services with descriptions
  const services = [
    {
      title: 'Web Development',
      description:
        'I create responsive and user-friendly websites using the latest web technologies.',
    },
    {
      title: 'UI/UX Design',
      description:
        'I design intuitive user interfaces with a focus on user experience to make your product stand out.',
    },
    {
      title: 'Mobile App Development',
      description:
        'I develop mobile applications for both Android and iOS platforms to reach a broader audience.',
    },
    {
      title: 'Database Design',
      description:
        'I design and optimize databases to ensure efficient data storage and retrieval.',
    },
    // Add more services as needed
  ];

  return (
    <div className="about-me">
      <h1 className="fun-header">Get to Know Me!</h1>
      <p className="personal-intro">
        Hey there, I'm Pamela Makamu, your friendly neighborhood developer! I'm passionate about creating awesome web experiences. Let's dive into my world of tech:
      </p>
      <div className="skills">
        <div className="skill-card">
          <h2>Frontend Development</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>React</li>
            <li>Angular</li>
          </ul>
        </div>
        <div className="skill-card">
          <h2>Backend Development</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className="skill-card">
          <h2>Database</h2>
          <ul>
            <li>SQL</li>
            <li>MongoDB</li>
          </ul>
        </div>
      </div>

      <div className="services">
        <h2 className="service-header">What I Can Do for You</h2>
        <div className="service-cards">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add interactive and playful elements here */}
    </div>
  );
}

export default About;

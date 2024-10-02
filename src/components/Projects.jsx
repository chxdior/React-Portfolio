const Projects = () => (
    <section id="projects">
      <h2>Projects</h2>
      
      <div>
        <h3>PurrPal</h3>
        <img src="/project1.png" alt="PurrPal" />
        <p>
          A full-stack application that allows registered users to upload photos of cats, like and share photos, and add liked photos to an album. 
          This application uses Node.js and Express.js, as well as Sequelize to manage database interactions with PostgreSQL. 
          On the frontend side, it uses Handlebars.js to render HTML templates and Bootstrap for styling.

          Link to Github: https://github.com/chxdior/CatApp
        </p>
      </div>
      
      <div className="container">
        <h3>Notes Application</h3>
        <img src="/project2.png" alt="Notes App" />
        <p>
          Note Taker is a simple web application that allows users to write, save, and organize notes. 
          It is built with an Express.js backend that interacts with a JSON file for persistent storage of notes. 
          This application provides an intuitive user interface for small business owners or anyone looking to manage their thoughts and tasks effectively.

          Link to Github: https://github.com/chxdior/note-taker
        </p>
      </div>
  
      <div className="container">
        <h3>Weather Dashboard</h3>
        <img src="/project3.png" alt="Weather App" />
        <p>
          The Weather Dashboard is a web application that allows users to search for weather conditions in any city. 
          Users can view the current weather and a 5-day weather forecast for any searched city. 
          Each searched city is saved to a search history list, enabling users to quickly view weather data for previously searched cities. 
          This application uses HTML, CSS, Bootstrap, jQuery for logic, API integration, DOM manipulation, and event handling, and Day.js for date formatting.

          Link to Github: https://github.com/chxdior/weather-tracker
        </p>
      </div>

      <div className="container">
        <h3>Workout Tracker</h3>
        <img src="/project4.png" alt="Limitless"></img>
        <p>
            This application uses react, node.js, express.js, graphQL, and JWT. This application is designed to be a basic workout tracker for users so that they can track their workouts and log it into their profile and calender.

            Link to Github: https://github.com/chxdior/workout-tracker
        </p>
      </div>

      <div className="container">
        <h3>Task Board</h3>
        <img src="/project5.png" alt="Task Board"></img>
        <p>
        A simple Task Board Application designed for project team members to manage and organize project tasks. The app is built using HTML, CSS, and jQuery, and leverages the Day.js library to handle date functionalities. It allows users to create tasks, assign due dates, and track the progress of tasks through various states such as Not Yet Started, In Progress, and Completed.

        Link to Github: https://github.com/chxdior/task-board
        </p>
      </div>

      <div className="container"> 
        <h3>README Generator</h3>
        A program utilizing node.js to allow users to create a README.md in the command line

        Github Link: https://github.com/chxdior/README-Generator

      </div>
    </section>
  );
  
  export default Projects;
  
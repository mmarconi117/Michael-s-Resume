// import Image from "../Images/IMG_0544.PNG";

export default function Home() {
  return (
    <div className="project-body-container">

    {/* header image */}

      <div className="image-container">
        <img src={Image} alt=""/>
      </div>

    {/* tech skills section */}

      <div className="tech-skills-container">
        <h2>TECHNICAL SKILLS</h2>
        <h3>Front End:</h3>
        <p>
          React.js, Redux, Jest, Cypress, Yup, Axios, JavaScript, HTML, CSS,
          Bootstrap
        </p>

        <h3>Back End:</h3>
        <p>
        Basic Python, Git CLI, VS Code, Node.js, Express.js,
        Postman, RESTful API, SQL
        </p>
      </div>

      {/* Projects section */}

      <div className="projects-container">
        <h2>PROJECTS</h2>

        {/* <a
          className="button-link "
          target="blank"
          href="https://github.com/kenandcrys/auth-me"
        >
          <h3>Authenticate-me</h3>
        </a> */}

        <h5>Backend Developer:</h5>


            <p>Setup an SQL database to store user information and request.</p>


            <p>
              Utilized migrations, and seeders to build a solid background on
              the database.
            </p>


            <p>
              Created the routes to direct individuals to the right web page
            </p>


      </div>

      <div className="projects-container">
        {/* <a
          className="button-link"
          target="blank"
          href="https://natures-blessing-photography.vercel.app/"
        >
          <h3>Nature’s Blessing Photography</h3>
        </a> */}
        <h5>Frontend Developer:</h5>


            <p>
              Create components that allowed me to use JSX in the site to make a
              Single Page Application.
            </p>


            <p>
              Trouble-shoot and test the final project to ensure functionality
              for the end-user.
            </p>


      </div>

      <div className="projects-container">
        {/* <a
          className="button-link"
          target="blank"
          href="https://github.com/kenandcrys/asylum-rg-fe-starter"
        >
          <h3>Asylum Rate Tracker</h3>
        </a> */}
        <h5>Fullstack Developer:</h5>


            <p>
              Successfully integrated Auth0 authentication microservice into the
              project.
            </p>


            <p>
              Implemented a dynamic navigation menu that displays a Profile Page
              only when users are logged in. Created a seamless user experience
              with Login/Logout functionality using Auth0 for secure
              authentication.
            </p>


            <p>
              Enhanced the project&rsquo;s frontend by integrating it with an
              external API. Revamped the GraphWrapper.jsx file and data
              visualizations to dynamically fetch and display live data from the
              API.
            </p>


            <p>
              Designed and developed the project&rsquo;s landing page, providing
              an engaging and user-friendly interface. Contributed to the
              overall user experience by integrating authentication, API data
              retrieval, and data visualization features.
            </p>


      </div>

    </div>
  );
}

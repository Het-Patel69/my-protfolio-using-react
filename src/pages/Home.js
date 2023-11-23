import React from "react";

function Home(props) {
  return (
    <div className={`min-h-screen ${props.mode}`}>
      <div className="container">
        <div className="pt-4 mb-4">
          <h4>About Me :</h4>
          <p id="about_me">
            Experienced and versatile student skilled in web development,
            specializing in React.js and Android application development.
            Passionate about creating visually appealing websites and
            feature-rich mobile apps. Proactive learner and problem-solver who
            thrives in collaborative environments. Open to new opportunities and
            eager to drive innovation in web and mobile development.
          </p>
        </div>
        <div className="my4">
          <h4>Projects :</h4>
          <div id="projects">
            <div>
              <a href="https://het-patel69.github.io/my-projects/">
                Click to see all Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

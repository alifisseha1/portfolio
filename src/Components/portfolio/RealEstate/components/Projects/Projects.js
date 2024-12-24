import { projectsData } from "../../assets/assets.js";
import p from "./projects.module.css";
function Projects() {
  return (
    <div id="projects">
      <div className={p.h1}>
        <h1>Available homes</h1>
      </div>
      <div className={p.homeList}>
        {projectsData.map((home, i) => (
          <div key={i} className={p.singleHome}>
            <div>
              <img src={home.image} alt="" width={"100%"} />
            </div>
            <div className={p.homeText}>
              <h3>{home.price}</h3>
              <p>{home.title}</p>
              <p>{home.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

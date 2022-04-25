import React from "react";
import Placeholder from '../../assets/images/placeholder-3.jpg';

// IN FINAL VERSION, CARDS WILL NOT BE HARDCODED. WILL BE PULLED AND GENERATED DYNAMICALLY.
function Collaborations() {
    return (
      <section className='sections articles' id='collaborations'>
        <h3>Collaborations</h3>
        {/* GROUP PROJECTS | SCREENSHOT & TEXT */}
        <div className="collaborations">
          <article className="card group-projects">
            <div className="card-img">
              <img src={Placeholder} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.
            </p>
            </div>
          </article>

          <article className="card group-projects">
            <div className="card-img">
              <img src={Placeholder} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.
            </p>
            </div>
          </article>

          <article className="card group-projects">
            <div className="card-img">
              <img src={Placeholder} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.
            </p>
            </div>
          </article>
        </div>
      </section>
    );
  }
  export default Collaborations;
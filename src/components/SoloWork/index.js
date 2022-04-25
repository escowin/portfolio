import React from "react";
import Placeholder1 from "../../assets/images/placeholder-1.jpg";
import Placeholder2 from "../../assets/images/placeholder-2.jpg";

function SoloWork() {
    return (
      <section className='sections articles' id='solo-work'>
        <h3>Solo Work</h3>
        {/* SOLO WORK | FEATURED */}
        {/* FEATURED & NON-FEATURED PROJECT CONTENTS TO BE DYNAMICALLY GENERATED. HARDCODED IMG & TEXT FOR VISUAL REF. */}
        <div className="grid-container">
          <article className="card featured-project">
            <div className="card-img">
              <img src={Placeholder1} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Featured Solo Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.
            </p>
            </div>
          </article> 

          {/* SOLO WORK | NON-FEATURED */}
          <article className="card non-featured">
            <div className="card-img">
              <img src={Placeholder2} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Solo Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p><span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.</span></p>
            </div>
          </article> 

          <article className="card non-featured">
            <div className="card-img">
              <img src={Placeholder2} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Solo Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p><span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.</span></p>
            </div>
          </article> 

          <article className="card non-featured">
            <div className="card-img">
              <img src={Placeholder2} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Solo Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p><span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.</span></p>
            </div>
          </article> 

          <article className="card non-featured">
            <div className="card-img">
              <img src={Placeholder2} alt="placeholder" />
            </div>
            <div className="card-body">
              <h4>Solo Project Title</h4>
              <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
              <p>html / css / etc</p>
              <p><span className="text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.</span></p>
            </div>
          </article> 
        </div>
      </section>
    );
  }
  
  export default SoloWork;
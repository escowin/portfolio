import React from "react";
import Placeholder from "../../assets/images/placeholder.jpg";

function SoloWork() {
    return (
      <article className='sections articles' id='solo-work'>
        <h3>Solo Work</h3>
        {/* Solo Work will have a featured project that takes up the width of this article. underneath the featured project will be <div className="cards-container"> which will contain all non-featured projects. <.cards-container> will be in grid layout. desktop view fits 4 columns, tablet & mobile 2. non-featured cards will have {display: inline-block}. Non featured cards wont have a description <p>text  */}
        <div className="card">
          <div className="card-img">
            <img src={Placeholder} alt="placeholder" />
          </div>
          <div className="card-body">
            <h4>Solo Project Title</h4>
            <p><a href="/">Github Repo</a> | <a href="/">Live URL</a></p>
            <p>html / css / etc</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio, provident? Velit reprehenderit natus accusantium delectus sed libero soluta voluptate nam architecto, assumenda eveniet harum consequuntur totam unde enim odio deleniti.
          </p>
          </div>
        </div>
      </article>
    );
  }
  
  export default SoloWork;
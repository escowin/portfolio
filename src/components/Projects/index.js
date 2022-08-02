import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/images/solo-work/0.jpg";

// hooks
// - 1. only call hooks from React functions.
// - 2. only call hooks at the top level. cannot be used inside for loops, nested functions, or conditionals.
// - use hooks towards top of React component for organizational purposes & to follow above

// ex.
// import React, { useState } from "react";
// 
// function ClickCounter() {
//     const [count, setCount] = useState(0);
//    *const [state value, setter] = useState(initial state)
// 
//     function increment() {
//          setCount((prevState)=> )
//      }
// 
// **JSX**
//     return(
//         <div>
//             I've been clicked {count} times
//                              {state value} <- starts at initial state
//             <button onClick={increment}>add one</button>
//              event listener={function}
//         </div>
//     )
// }
// 
// export default ClickCounter;

function Projects(props) {
    const currentCategory = {
        name: 'solo work',
        description: 'solo work i do is here'
    };

    return (
        <section className="section">
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <div className="projects-grid">
                <img
                 src={photo} 
                 alt="css portfolio"
                 className="project-screenshot"
                />
            </div>
        </section>
    );
}

export default Projects;
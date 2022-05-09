import React, { useState,useEffect } from "react";
import TestButton from "../Components/TestButton";
import styles from "./Home.module.css"

function Home () {
  // set variables [chosen, setChosen] using hooks (useState) to "button 1"
  const [chosen, setChosen] = useState("Button 1")

  //  excercise 9.3
  // set variables [message, setMessage] using hooks (useState) to "you choose 1"
  

  //  excercise 9.3 update message when chosen change ( set dependecy to chosen) 
  /* uncomment for excercise 9.3
  useEffect(() =>{
  },[])
  */

  // handle currency button onclick
  const changeChosen = (clickedButton) =>{
    setChosen(clickedButton);
  }

  return (
      <div /* exercise 9.2 set classname to first box CSS*/>
        <div /* exercise 9.2 set classname to second box CSS*/>
          {chosen}
           {/* exercise 9.1 insert TestButton pass chosen and changeChosen ( pass by chosen={chosen})*/}
          {/* uncomment for exercise 9.3 {message} */}
        </div>
      </div>
  );

}

export default Home;

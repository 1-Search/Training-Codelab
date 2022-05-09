import styles from "./TestButton.module.css"

/* 
:chosen:
  the current chosen button
:type:
  string
:changeChosen:
  function that change chosen value on parent
:type:
  function
*/
function TestButton ({chosen,changeChosen}) {
  return (
    <div className={styles.bodyContainer}>
        {/* 9.1 create a button component for button 1 <button></button> pass 
          onClick={()=>changeChosen("Button 1")} 
          /* uncomment for 9.2 className={chosen === 'Button 1' ? styles.currencyButtonActive : styles.currencyButtonDefault} */ 
          /*in the value */}
        {/* 9.1 create a button component for button 2 <button></button> pass 
          onClick={()=>changeChosen("Button 2")} 
          /* uncomment for 9.2 className={chosen === 'Button 2' ? styles.currencyButtonActive : styles.currencyButtonDefault} */ 
          /*in the value */}
    </div>         
  );

}

export default TestButton;

import styles from "./TimeCurrencyCard.module.css"


/* 
:currency:
    the current chose currency
:type:
    string
:showData:
    array of bitcoin data object with timestamp and price
:type:
    list[{dict}]
*/
function TimeCurrencyCard ({currency,showData}) {
    // ToDo 10.2.1
    /* 
    set price text color
    :index:
        the index of the current object
    :type:
        int
    :return:
        CSS classname
    :rtype:
        CSS  Object
    */
    const priceColor = (index) => {
    }

    // ToDo 10.2.2
    /* 
    set arrow sign for price
    :index:
        the index of the current object
    :type:
        int
    :return:
        an arrow "↑" "↓" or '-' to show the price change status
    :rtype:
        string
    */
    const arrowSign = (index) => {
    }
    
    // ToDo 10.2.3
    return (
        <>
        {/* reference for .map https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map */}
            {showData.map((d, index) => (
                <>
                {/* use {currency === 'USD' ? "$" : *other currency sign*} to set the currency notation  
                reference https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator */}
                </>
            ))} 
        </>      
    );

}

export default TimeCurrencyCard;

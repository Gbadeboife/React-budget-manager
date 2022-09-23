import React from 'react'


function Stats({spent,budget}){
    return(
        <div className='statistics'>
            <span>
                <h6>Spent</h6>
                <p>${spent}</p>
            </span>

            <span>
                <h6>Budget</h6>
                <p>${budget}</p>
            </span>
        </div>
    )
}



export default Stats
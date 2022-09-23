import React from 'react'

function Tablelist({purchase,category,date,cost,del,id}){
    return(
        <div className='list'>
            <p className='purchase'>{purchase}</p>
            <p className='category'>{category}</p>
            <p className='date'>{date}</p>
            <p className='cost'>${cost}</p>
            <button onClick={()=>del(id)}>delete</button>
        </div>
    )
}

export default Tablelist
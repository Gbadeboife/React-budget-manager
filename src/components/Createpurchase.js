import React,{ useState } from 'react'


function Createpurchase({save,pur,categ,cost,update}){

    return(
        <div className='create'>
            <h5>New Purchase</h5>
            <div>
                <label >Purchase</label>
                <input type="text" onChange={pur} value={update.pur} />
            </div>
            <div>
                <label>Category</label>
                <select onChange={categ} value={update.categ}> 
                    <option selected style={{display:'none'}}></option>                   
                    <option>Housing</option>
                    <option>Food</option>
                    <option>Transportation</option>
                    <option>Utilities</option>
                    <option>Medical</option>
                    <option>Personal</option>
                </select>
            </div>
           
            <div>
                <label >Cost</label>
                <input type="number" onChange={cost} value={update.cost}/>
            </div>
            {update.pur && update.categ && update.cost?
                <button onClick={save}>Save Purchase</button>
                :
                null
            }
        </div>
    )
}

export default Createpurchase








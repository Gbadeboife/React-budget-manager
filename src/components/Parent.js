import React ,{useState,useEffect} from "react";
import Tablelist from "./Tablelist";
import Createpurchase from "./Createpurchase";
import Stats from "./Stats";
import {v4 as uuid} from 'uuid'
import "./css/Parent.css"
import Chart from "./Chart";

function Parent({budget}){

    var date=new Date()
    var current_date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+ date.getDate();
    const [spent,setSpent]=useState()
    
    const [purchases,setPurchases]=useState([])
    const [purchase,setPurchase]=useState('')
    const [dates,setDates]=useState('')
    const [category,setCategory]=useState('')
    const [cost,setCost]=useState('')
  
    const [housing,setHousing]=useState([])
    const [food,setFood]=useState([])
    const [utilities,setUtilities]=useState([])
    const [transport,setTransport]=useState([])
    const [medical,setMedical]=useState([])
    const [personal,setPersonal]=useState([])

    const updateValues={
      pur:purchase,
      categ:category,
      cost:cost,
    }
    
          
    const saveCost=()=>{
      if(category=='Housing'){
    setHousing((prevState)=>[
      ...prevState,parseFloat(cost)
    ]);
    
  }  else if(category=='Food') {
    setFood((prevState)=>[
      ...prevState,parseFloat(cost)
    ])
  } else if(category=='Transportation') {
    setTransport((prevState)=>[
      ...prevState,parseFloat(cost)
    ])
  } else if(category=='Utilities') {
    setUtilities((prevState)=>[
      ...prevState,parseFloat(cost)
    ])
  } else if(category=='Medical') {
    setMedical((prevState)=>[
      ...prevState,parseFloat(cost)
    ])
  } else {
    setPersonal((prevState)=>[
      ...prevState,parseFloat(cost)
    ])
  };}

    const savePurchase=()=>{
      setPurchases((prevState)=>[...prevState,{
        key:uuid(),
        id:uuid(),
        purchase:purchase,
        category:category,
        date:current_date,
        cost:cost,
      }
      ]);
      setPurchase('')
      setCategory('')
      setCost('')
      setDates('')

      saveCost()
    }




    

    useEffect(()=>{
        const totalArray=purchases.map((item)=>{
          const value= item.cost;
          const num= parseFloat(value);
          return num
        });
        setSpent(
          totalArray.reduce((a,b)=>{
            return a+b
          },0));
    },[purchases])



    const _purchase=(e)=>{
      setPurchase(e.target.value)
    }
    const _category=(e)=>{
      setCategory(e.target.value)
    }
    const _cost=(e)=>{
      setCost(e.target.value)
    }
    

    const data=[
      {value:housing.reduce((a,b)=>{
        return a+b
      },0)},
      {value:food.reduce((a,b)=>{
        return a+b
      },0)},
      {value:utilities.reduce((a,b)=>{
        return a+b
      },0)},
      {value:transport.reduce((a,b)=>{
        return a+b
      },0)},
      {value:medical.reduce((a,b)=>{
        return a+b
      },0)},
      {value:personal.reduce((a,b)=>{
        return a+b
      },0)}
    ]

    const chartData=[
      {name:'Housing',value:data[0].value},
      {name:'Food',value:data[1].value},
      {name:'Utilities',value:data[2].value},
      {name:'Transportation',value:data[3].value},
      {name:'Medical',value:data[4].value},
      {name:'Personal',value:data[5].value},

    ]
    
    const deletePurchase=(id)=>{
      const filteredPurchases=purchases.filter((purchase)=>{
        return purchase.id !== id;
      });
      setPurchases(filteredPurchases)
    }
    useEffect(()=>{
      const data=JSON.parse(localStorage.getItem('Purchases'))
      setPurchases(data)
    },[])
    useEffect(()=>{
      localStorage.setItem('Purchases',JSON.stringify(purchases))
    },[purchases])




    return(
        <div>
          <div className="dashboard">
            <div className="chart"><Chart data={chartData}/>
          </div>
          <Stats spent={spent} budget={budget}/>
          </div>       
          {purchases.map((row)=>(
            <Tablelist purchase={row.purchase} key={row.key} category={row.category} date={row.date} cost={row.cost} del={deletePurchase} id={row.id}/>
          ))}
        <Createpurchase save={savePurchase} pur={_purchase} categ={_category} cost={_cost}  update={updateValues}/>
        </div>
    )
}


export default Parent
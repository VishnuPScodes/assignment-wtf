import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {BiSearchAlt2} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {BiNavigation} from 'react-icons/bi'
import {TiLocationArrow} from 'react-icons/ti'
import axios from 'axios'
function App() {
  const [count, setCount] = useState(0);
  const [data,setData]=useState([]);
  const mydata=[
    {
      id:1,
      name:"WTF Hybrid gym",
      place:"delhi",
      location:"Patparg road"
    },
    {
      id:2,
      name:"WTF Hybrid gym",
      place:"noida",
      location:"Patparg road"
    },
    {
      id:3,
      name:"WTF Hybrid gym",
      place:"noida",
      location:"Patparg road"
    },
    {
      id:4,
      name:"WTF Hybrid gym",
      place:"ghaziabad",
      location:"Patparg road"
    },
    {
      id:5,
      name:"WTF Hybrid gym",
      place:"ghaziabad",
      location:"Patparg road"
    },
    {
      id:6,
      name:"WTF Hybrid gym",
      place:"ghaziabad",
      location:"Patparg road"
    },
    {
      id:7,
      name:"WTF Hybrid gym",
      place:"newdelhi",
      location:"Patparg road"
    },
    {
      id:8,
      name:"WTF Hybrid gym",
      place:"newdelhi",
      location:"Patparg road"
    },
    {
      id:9,
      name:"WTF Hybrid gym",
      place:"newdelhi",
      location:"Patparg road"
    },
    {
      id:10,
      name:"WTF Hybrid gym",
      place:"ghaziabad",
      location:"Patparg road"
    },

  ]
  const [data2,setData2]=useState(mydata);
  useEffect(()=>{
    axios.get('https://devapi.wtfup.me/gym/places').then((res)=>{
      setData(res.data);
    }).catch((err)=>{
      console.error(err)
    })
  },[])


  const handleChange=((e)=>{
    setData2(mydata)
    const id=e.target.value;
    console.log(id)
    let newarray=[...data2];
    newarray=newarray.find(((a)=>{return (a.place==id)}));
    console.log([newarray])
    setData2([newarray]);
  })


  return (
    <div className="App">
        {/* main header  */}

        <div id='container'>
           <div id='left-one'>
            <span id='filter'>Filters</span> <br /> <br />
            <span id='location'>Location</span> <br /> <br />
            <div id='input-div'> <div id='search-box' > <BiSearchAlt2/></div>     <input id='input-box' placeholder='Enter location' type="text" />   </div> <br />
            <span id='location'>Price</span> <br /><br />
             <div id='price-div'>
              <input type="text" placeholder='Min' id='input-2' />
              <input type="text" placeholder='Max' id='input-3' />
             </div> <br />
             <span id='location'>Cities</span> <br /><br />
             <select  name="" onChange={handleChange} id="select"> 
              <option id='option' style={{display:"none"}} value="">Select city</option>
              <option id='option'  value="newdelhi">New Delhi</option>
              <option id='option' value="ghaziabad">Chaziabad</option>
              <option id='option' value="noida">Noida</option>
              <option id='option' value="delhi">Delhi</option>
             </select>
           
           </div>
           <div id='right-one'>
            <div id='main-container'>
            {data2.map((e)=>{
              return   <div key={e.id} id='main-div'>
              <div id='data-div'>
                <br />
                <span id='gym-name'>{e.name}</span>
                <div id='stars'>
                  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>  <AiFillStar/>
                </div>
                <div id='address'>
                 {e.place}
                </div>
                <div id='distance'>  <div id='nav'>  < TiLocationArrow/> </div>
                 <div>3.23 minnutes away  </div>  
                </div>
                <div id='price-div'>  <div id='price'>$4000 for 3 months</div>  
                
                  <button id='button'>Book Now</button>
              
                </div>
                
              </div>
            </div>
            })}
            </div>
            
          
             </div>
        </div>
    </div>
  )
}

export default App

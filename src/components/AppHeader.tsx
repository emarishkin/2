import { FC, useState } from "react"

export const AppHeader:FC = () =>{

const [now,setNow] = useState(new Date())

setInterval(()=>setNow(new Date()))

    return(
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'grey',padding:10}}>
           <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',backgroundColor:'grey'}}>
             <img src="" alt="" />
             <h3>hello</h3>
           </div>
           <div>
            <h3>Время сейчас:{now.toLocaleString()}</h3>
           </div>
           <div>
            <button>click</button>
           </div>
        </div>
    )
}
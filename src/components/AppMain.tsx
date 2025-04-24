import { FC, useState } from "react"
import { InfoPro } from "./InfoPro"
import { infos } from "../info"
import { IWay } from "../Type"

interface WayProops{
    ways:IWay
}

export const AppMain:FC<WayProops> = ({ways}) =>{

const [click,setClick] = useState<keyof IWay>('нажми на меня' as keyof IWay)

    return(
        <div>
           <span>Result University<p>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</p></span>
           <InfoPro infos={infos} />
           <div>
             <button onClick={()=>setClick('way')}>way</button>
             <button onClick={()=>setClick('easy')}>easy</button>
             <button onClick={()=>setClick('program')}>program</button>
             <span>{ways[click]}</span>
             
           </div>
        </div>
    )
}
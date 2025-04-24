import { FC, useState } from "react"
import { InfoPro } from "./InfoPro"
import { infos } from "../info"
import { IWay } from "../Type"
import { Button } from "./Button"

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
             <Button onClick={()=>setClick('way')}>way</Button>
             <Button onClick={()=>setClick('easy')}>easy</Button>
             <Button onClick={()=>setClick('program')}>program</Button>
             <span>{ways[click]}</span>
             
           </div>
        </div>
    )
}
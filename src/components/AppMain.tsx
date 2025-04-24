import { FC } from "react"
import { IInfo } from "../Type"


interface infoProops{
   infos:IInfo[]
}

export const AppMain:FC<infoProops> = ({infos}) =>{
    return(
        <div>
           <span>Result University<p>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</p></span>
           <div>
            {infos.map(info=>(
                <div key={info.title}>
                    {info.title} {info.descriptions}
                </div>
            ))}
           </div>
        </div>
    )
}
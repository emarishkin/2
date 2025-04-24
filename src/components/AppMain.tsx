import { FC } from "react"
import { InfoPro } from "./InfoPro"
import { infos } from "../info"

export const AppMain:FC = () =>{
    return(
        <div>
           <span>Result University<p>Университет frontend-разработки, который насыщает IT-сферу квалифицированными программистами</p></span>
           <InfoPro infos={infos} />
        </div>
    )
}
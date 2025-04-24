import { FC } from "react";
import { IInfo } from "../Type";
import { infos } from "../info";

interface infoProops {
    infos:IInfo[]
}

export const InfoPro:FC<infoProops> = () => {
    return(
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',padding:10}}>
            {infos.map(info=>(
                <div style={{width:500,marginBottom:15,border:'1px solid black'}} key={info.title}>
                    {info.title} {info.descriptions}
                </div>
            ))}
           </div>
    )
}
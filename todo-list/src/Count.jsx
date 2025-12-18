import { useState } from "react"

export default function Count(){
    const [count, setCount] = useState(0)
    const incress = () =>{
        setCount(count+1)
    }
    const decress = () =>{
        setCount(preData =>{
            if( preData > 0 ){
                return preData - 1
            }else{
                return preData = 0
            }
        })
    }
    return(
        <div>
            {count}
            <button onClick={incress} > + </button>
            <button onClick={decress} > - </button>
        </div>
    )
}
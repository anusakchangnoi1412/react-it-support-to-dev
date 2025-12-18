import { useState } from "react"

export default function LoginLogout(){

    const [ button, setButton ] = useState(true)

    return(
        <div>
            { button ? <p>Welcome Dev</p> : <p>Please Login</p> }
            <button onClick={ () => setButton( button === true ? false : true ) } >Login/Log out</button>
        </div>
    )
}
import { useState } from "react";
import axios from "axios";

function Quote(){
const[quote,setQuote] = useState("")

function generateQuote(){
axios.get("http://api.quotable.io/random").then((res)=>{
    setQuote(res.data.content)
})
}

return(

    <>
    <div className="container">
        <p className="heading">Random Quote Generator</p>
    <p className="paragraph">{quote}</p>
   <button onClick={generateQuote} className="button">Generate new fact</button>
    </div>

    </>
)
}
export default Quote;
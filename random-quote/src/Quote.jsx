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
    <div className="bg-orange-950 sm:w-1/2 md:w-1/2 lg:w-1/2 mt-40 sm:ml-36 md:ml-44 lg:ml-72 pl-10 pr-10 rounded shadow-md shadow-slate-800">
        <p className="sm:text-xl md:text-xl lg:text-2xl sm:ml-3 md:ml-12 lg:ml-36 pt-10 text-white font-semibold font-mono">Random Quote Generator</p>
    <p className="mt-4 text-neutral-100 font-mono sm:ml-6 md:ml-14 lg:ml-38">{quote}</p>
   <button onClick={generateQuote} className="bg-yellow-500 px-2 py-1 rounded text-sm mt-12 sm:ml-14 md:ml-20 lg:ml-48 mb-10">Generate new fact</button>
    </div>

    </>
)
}
export default Quote;
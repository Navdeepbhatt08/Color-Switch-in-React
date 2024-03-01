import { useState } from "react"

function Color() {

  const [color, setColor] = useState("gray")

  return (
    <>

      <div className="w-full h-screen duration-200 "
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-28  inset-x-0 p-2 ">
     <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-3 rounded-2xl ">

<button onClick={()=>setColor("red")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium"
style={{backgroundColor:"red"}}> Red</button>

<button 
onClick={()=>setColor("green")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium"
style={{backgroundColor:"green"}}> Green</button>

<button onClick={()=>setColor("blue")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium"
style={{backgroundColor:"blue"}}> Blue</button>

<button onClick={()=>setColor("black")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium"
style={{backgroundColor:"black"}}>Black</button>

<button onClick={()=>setColor("yellow")}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-semibold"
style={{backgroundColor:"yellow"}}>Yellow</button>

<button onClick={()=>setColor("olive")}
className="outline-none px-4 py-1 rounded-full text-white shadow-lg font-medium"
style={{backgroundColor:"olive"}}>Olive</button>

<button onClick={()=>setColor("Gray")}
className="outline-none px-4 py-1 rounded-full text-black shadow-lg font-medium"
style={{backgroundColor:"Gray"}}>Gray</button>
     </div>


      </div>

    </>
  )
}

export default Color

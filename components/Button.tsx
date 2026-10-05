"use client"

export default function Button(){
  return(
    <button
    onClick={()=>{
      alert("Button Clicked!")
    }}>
    Clicked me!
    </button>
  )
}
import React from 'react'

function User() {
  return (
    <div style={{marginTop:'-2rem', display:'flex', justifyContent:'flex-end', backgroundColor:'white', padding:'1rem', borderRadius:'8px'}}>
       
       <h3>{localStorage.getItem("Name")}</h3> 
   
    </div>
  )
}

export default User
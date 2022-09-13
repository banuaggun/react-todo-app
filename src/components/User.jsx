import React from 'react'

function User() {
  return (
    <div style={{marginTop:'-2rem', display:'flex', justifyContent:'flex-end', borderBottom:'3px groove', padding:'1rem'}}>
       
       <h3>{localStorage.getItem("Name")}</h3> 
   
    </div>
  )
}

export default User
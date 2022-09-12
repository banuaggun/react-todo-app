import {useState} from 'react'

function Login() {
  const [user, setUser] = useState({
    name:""
  });
  const setLocalStorage = () => {
    if(user.name===""){
      alert("Please enter a name");
    }else{
      localStorage.setItem("Name", user.name);
    }
    
  };
  return (
    <div>
     
        <header style={{marginTop:'4rem'}}>
          <h1>Login</h1>
        </header>
      <form>
        <input type="text" className="input" style={{marginTop:'2rem'}} required value={user.name} onChange={(e) => setUser({...user, name:e.target.value})} />
      
        <button type="submit" className="btn" style={{marginTop:'2rem'}} onClick={() => setLocalStorage()}>
          <h2>Login</h2>
        </button>
      </form>
    </div>
  )
}

export default Login
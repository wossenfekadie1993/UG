import React ,{useState} from "react";

function UserRegistration() {

  const [user,setUser]=useState({
    firstName:"",
    lastName:"",
    email:"",
    password:""
  })
  const handleFirstName=(e)=>{
    const firstname=e.target.value
    setUser({...user,firstName:firstname})
    // setUser.firstName(firstname)
  }
  const handleLastName=(e)=>{
    const lastname=e.target.value
    setUser({...user,lastName:lastname})
  }

  const handleEmail=(e)=>{
    const email=e.target.value
    setUser({...user,email:email})
  }
  const handlePassword=(e)=>{
    const password=e.target.value
    setUser({...user,password:password})
  }

  return (
    <div>
      <h1>User Registration</h1>
      <form>
        <input type="text" placeholder="First Name" onChange={handleFirstName}/>
        <label>{user.firstName}</label>
        <br/>
        <input type="text" placeholder="Last Name" onChange={handleLastName}/>
        <label>{user.lastName}</label>
        <br/>
        <input type="email" placeholder="Email" onChange={handleEmail}/>
        <label>{user.email}</label>
        <br/>
        <input type="password" placeholder="Password"onChange={handlePassword} />
        {user.password}
        <br/>
        <button >Register</button>
      </form>
    </div>
  );
}

export { UserRegistration };

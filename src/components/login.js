import { CometChat } from "@cometchat-pro/chat";
import {useState} from 'react';

const Login = () =>{
const [UID,setUID] = useState("")
// let UID = 'superhero4';
var authKey = "cc111af04a9f47d98e33ecd2354ec11d8f8fcdf9";

const login = () =>{
CometChat.getLoggedinUser().then(
    (user) => {
				if(!user){
            CometChat.login(UID, authKey).then(
              user => {
                console.log("Login Successful:", { user });    
                
              }, error => {
                console.log("Login failed with exception:", { error });    
              }
            );
        }
		}, error => {
				console.log("Some Error Occured", { error });
		}
);}

const handleClick = () =>{
   return <p>{CometChat.user.name} is loggedin</p>
}
    
return(
    <div>
    <form onSubmit={login}>
    <label 
    htmlFor="UID">Username:</label>
    <input 
    type="text"
    value={UID}
    onChange={({ target }) => setUID(target.value)}    
    />
    <button type="submit" onClick={handleClick}>Login</button>
    </form>
    
    </div>
);
}

export default Login;
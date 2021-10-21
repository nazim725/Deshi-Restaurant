import { useEffect, useState } from "react";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,sendEmailVerification,} from "firebase/auth";
import { GoogleAuthProvider, getAuth, signInWithPopup,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
 initializeAuthentication()


 

   const useFirebase=()=>{
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')
    const [user,setUser]=useState({})
    const auth = getAuth();
 

    const handleRegistration=e=>{
        e.preventDefault();
        if(password.length<6){
          setError('Password should be at least 6 Characters')
          return
        }
    
        createNewUser(email,password)
       
      }

      const handleLogin=(e)=>{
        e.preventDefault();
        if(password.length<6){
          setError('Password should be at least 6 Characters')
          return
        }

        processLogin(email,password)

      }



      const processLogin=(email,password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user=result.user;
          console.log(user)
          setUser(user)
          setError('')
        })
        .catch(error=>{
          setError(error.message)
        })
    
      }



      const createNewUser=(emai,password)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user=result.user
          console.log(user)
          setUser(user)
          setError('')
          veriFyEmail();
        })
        .catch(error=>{
          setError(error.message)
        })
      }



      const veriFyEmail=()=>{
        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
        .then(result=>{
         
          console.log(result)
        })
      }



    const handleEmailChange=e=>{
        setEmail(e.target.value)
       }
     
     
       const handlePasswordChange=e=>{
         setPassword(e.target.value)
       }


       const handleGoogleSignIn=()=>{
        const auth = getAuth();
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        .then(result=>{
          const user=result.user;
          console.log(user)
        })
        .catch(error=>{
          setError(error.message)
        })
    
      }

      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user)
             
            } else {
             setUser({})
            }
          });


      },[])

      const logout=()=>{
        signOut(auth).then(() => {
            // setUser(user)
            
          }).catch((error) => {
              setError(error.message)
           
          });
      }




       return{
           email,password,handleEmailChange,handlePasswordChange,error,handleRegistration,handleLogin,user,handleGoogleSignIn,logout
       }

}

export default useFirebase
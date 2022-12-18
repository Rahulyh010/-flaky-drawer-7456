import {Box,Input,Text,Image, Heading, Button, Alert} from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { useState } from "react"
  import { Link, Navigate } from "react-router-dom"

function Login(){

  const [dis,setDis]= useState("block")
  const [code ,setCode]=useState(1000)
  const [code1,setCode1]=useState(0)
  const [isAuth,setIsAuth]= useState(false)



  let val=0;
  function HandleToken(){
     val=Math.ceil( Math.random()*1 + Math.random()*1+Math.random()*1+Math.random()*1+Math.random()*9980)
 setCode(1000+val)
let val1= Math.ceil(Math.random(100,1000))


setDis("none")
    return (
     
      alert(`Your Code is ${val+1000}`)
      
    )
  }
console.log(code)

  function handleCode1(e){
    setCode1(e.target.value)
  }


  function checkcode(){
    console.log(code1,code)
    let c= +code1
    if(c==code){
      //console.log(true)
      setIsAuth(true)
   // return <Navigate to="/"/>
    }else{
      return alert("Invalid Code")
    }

  }

  if(isAuth){
    return <Navigate to="/" />
  }

  
  
 



 

    return (
       <Box w="40%" h="auto" margin={"auto"} >

        <Box display={dis}>
        <Text>Signup/SignIn</Text>
          <Image fontFamily={"cursive"} width="30%" margin={"auto"} src="https://images.deliveryhero.io/image/fd-my/LH/o5zi-hero.jpg"/>  <br /> <br />
         
    
<Heading as="h3" size={"md"} >LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</Heading><br /> <br />
           <FormControl isRequired>
    <FormLabel>Phone Number</FormLabel>
  <Input border={"none"} borderBottom={"1px solid black"} placeholder='Phone Number'/>
 
</FormControl><br /> <br />
<Text>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text><br /> <br />
<Button type="button" onClick={HandleToken} >Send me Code</Button> 
<Text>Or</Text>

<Link to="/">
<Button>Enter As Guest</Button>
</Link>
        </Box>
  
        <Box display={dis==="none" ? "block" : "none"}>
      

<Box>
<Text>Signup/SignIn</Text>
  <Image fontFamily={"cursive"} width="30%" margin={"auto"} src="https://images.deliveryhero.io/image/fd-my/LH/o5zi-hero.jpg"/>  <br /> <br />
  <Text>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text><br /> <br />
 </Box>
        <Heading fontFamily={"cursive"} >Enter The code Which You got</Heading>
          <Input type="number" placeholder="Enter The given" value={code1} onChange={handleCode1}/>
          <Button onClick={checkcode}>Submit</Button> 
        </Box>
        
       </Box>
    )
}

export default Login
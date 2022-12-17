import {Box,Input,Text,Image, Heading, Button} from "@chakra-ui/react"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

function Login(){

 

    return (
       <Box w="40%" h="auto" margin={"auto"} >

          <Text>Signup/SignIn</Text>
          <Image fontFamily={"cursive"} width="30%" margin={"auto"} src="https://images.deliveryhero.io/image/fd-my/LH/o5zi-hero.jpg"/>  <br /> <br />
         
    
<Heading as="h3" size={"md"} >LET’S SIGN IN OR CREATE ACCOUNT WITH YOUR PHONE NUMBER!</Heading><br /> <br />
           <FormControl isRequired>
    <FormLabel>Phone Number</FormLabel>
  <Input border={"none"} borderBottom={"1px solid black"} placeholder='Phone Number'/>
 
</FormControl><br /> <br />
<Text>By “logging in to KFC”, you agree to our Privacy Policy and Terms & Conditions.</Text><br /> <br />
<Button type="button" >Send me Code</Button> 
<Text>Or</Text>
<Button>Enter As Guest</Button>
       </Box>
    )
}

export default Login
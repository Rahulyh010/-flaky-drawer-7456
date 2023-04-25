import { Card,Box, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, StylesProvider  } from "@chakra-ui/react";
import Navbar from "./navbar";
import styles from "./AllStyles/cart.module.css"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import { CartContext } from "../Context/Cart12";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function Cart(){

    const {data,setData,amount,setAmount}=useContext(CartContext)
    const [dis,setDis]=useState("flex")
    const [top,setTop]= useState("0px")

    function display (){
        setDis("none") 
        setTop("40px")
    }
    let totalitems=data.length

const {id}=useParams()


function getdata(){
  axios.get(`https://rfc-json-server.onrender.com/userContent/${id}`)
  .then((res)=>{
      setData([...data,res.data])
      setAmount(amount+res.data.price)
      
  })
  .catch((error)=>{
      console.log(error)
  })
}




    useEffect(()=>{
       getdata()
    
    },[])

    console.log(data)

    function handleremove(i){
       data.splice(i,1)
       console.log(data)
       setData(data)
     
    }

    return (
        
        <Box>
          
        <Navbar total={totalitems}  />

        <Alert display={dis}   status='warning'>
    <AlertIcon  />
    Dont refresh page the Added itmes will be lost <Button onClick={display} variant={"ghost"} >Hide</Button>
  </Alert>

        <Box className={styles.top} marginTop={top} >
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN

    <Button className={styles.btn1}>Order Now</Button>
    </Box>
<hr />

<hr />

<Heading>Food Items</Heading>

<Box className={styles.container}>
  
  {data.map((e,i)=>{
    return (
        <Card key={i} maxW='sm'>
        <CardBody>
          <Image
            src={e.img}
            alt={e.title}
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='sm'>Peri Peri 10 Strips with Dynamite</Heading>
            <Text>
            {e.title}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {e.price}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='ghost' colorScheme='gray' onClick={()=>handleremove(i)} >
              Remove
            </Button>
            <Link to={`/cart/${e.id}`}>
            <Button isDisabled={true} variant='solid' colorScheme='red'>
              Added to cart 
            </Button>
            </Link>
            
          </ButtonGroup>
        </CardFooter>
      </Card>
      
    )
  })}

</Box>

<Button>BUY</Button>

<Heading > Total Amount : {amount}</Heading>
        </Box>

        
    )
}

export default Cart
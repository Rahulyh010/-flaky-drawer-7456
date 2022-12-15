import { Card,Box, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, StylesProvider  } from "@chakra-ui/react";
import Navbar from "./navbar";
import styles from "./AllStyles/cart.module.css"
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom"
import { CartContext } from "../Context/Cart12";

function Cart(){

    const {data,setData,amount,setAmount}=useContext(CartContext)

    let totalitems=data.length

const {id}=useParams()



function Alert(){
    let i=1;

   if(i==1){
    return (
        alert("Warning Dont refresh Your Page You Will Loose your all added items")
    )
   }
}





    useEffect(()=>{
        axios.get(`http://localhost:3000/userContent/${id}`)
        .then((res)=>{
            setData([...data,res.data])
            setAmount(amount+res.data.price)
            Alert()
        })
        .catch((error)=>{
            console.log(error)
        })
    
    },[])

    console.log(data)

    return (
        
        <Box>
          
        <Navbar total={totalitems}  />
        <Box className={styles.top}>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN

    <Button className={styles.btn1}>Order Now</Button>
    </Box>
<hr />

<hr />

<Heading>Food Items</Heading>

<Box className={styles.container}>
  
  {data.map((e)=>{
    return (
        <Card maxW='sm'>
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
            <Button variant='ghost' colorScheme='gray'>
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
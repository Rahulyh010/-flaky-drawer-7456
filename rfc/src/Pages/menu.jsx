import { Card,Box, CardHeader, CardBody, CardFooter,Image,Stack,Heading,Text,Divider,ButtonGroup,Button, StylesProvider } from '@chakra-ui/react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from "./AllStyles/menu.module.css"
import Navbar from './navbar'

function Menu(){

const [data,setData]= useState([])

    let getdata= ()=>{
        axios.get(`https://rfc-json-server.onrender.com/userContent`)
        .then((res)=>{
            console.log(res.data)
            setData(res.data)
        })
        .catch((res)=>{
            console.log(res)
        })
    }

    useEffect(()=>{
      
       getdata()
    },[])

   
    return (

<>
<Navbar/>
<Box className={styles.top}>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN

    <Button className={styles.btn1}>Order Now</Button>
    </Box>
        <Box className={styles.container}>
       
<Box className={styles.sidebar}>
    <Image width={"20%"} height="10%" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Counting_rod_vertical_red_3.svg/671px-Counting_rod_vertical_red_3.svg.png" />
    <br /> <br />
    <Heading>RFC MENU</Heading>
    <Text marginTop={"50px"} >
    CHICKEN BUCKETS <br /> <br /> <br />
EXCLUSIVE DEAL <br /> <br /> <br />
NEW LAUNCH <br /> <br /> <br />
BIRYANI BUCKETS <br /> <br /> <br />
BOX MEALS <br /> <br /> <br />
BURGERS <br /> <br /> <br />
SNACKS <br /> <br /> <br />
STAY HOME SPECIALS <br /> <br /> <br />
BEVERAGES
    </Text>

</Box>

<Box className={styles.main}>

<Box className={styles.bucket}>
    <Heading>Chicken Bucket</Heading> <br /> <br /> <br />
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
        Buy now
      </Button>
      <Link to={`/cart/${e.id}`}>
      <Button variant='solid' colorScheme='red'>
        Add to cart+ 
      </Button>
      </Link>
      
    </ButtonGroup>
  </CardFooter>
</Card>



    )
})}
</Box>

</Box>

</Box>
</>
    )
}

export default Menu


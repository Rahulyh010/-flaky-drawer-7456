import Navbar from "./navbar";
import { Box, Button, ButtonGroup, Center, Heading, Image, SimpleGrid,Text } from "@chakra-ui/react";
import { Flex, Spacer } from '@chakra-ui/react'
import { useContext, useState } from "react";
import styles from "./AllStyles/home.module.css"

import Footer from "./footer";
import { CartContext } from "../Context/Cart12";
import Delivery from "./Delivery";

function Home(){

    const [isLoading,setIsLoading]= useState(true)

    const {total}=useContext(CartContext)
  

    setTimeout(()=>{
      setIsLoading(false)
    },3000)

    return isLoading ? 
    <>
    <div style={{width:"200px",height:"200px",border:"1px solid black"}} >

</div>
     <Navbar total={total} />
    <Center>
       
        <Image  src="https://online.kfc.co.in/static/media/KFC_Loader_Gif.66979359.gif"/>
    </Center> 
    </>
    :
    
    
    (
        <>
        <Navbar total={total}/>

   <Box className={styles.top}>
        LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN

    <>
          <Delivery/>
    </>
    </Box>
        <Box className={styles.slider}>
            <Image  src="https://images.ctfassets.net/wtodlh47qxpt/4gztBB8yAvtp6jV7JAuLD/093fddbb77a78a44a4d3d5e066c592de/KFC_Peri_Peri_Banner__1440x396px.jpg?w=1536&fit=fill&fm=webp"/>
        </Box>

        <Box className={styles.bot}>
            <Heading>Welcome To RFC</Heading>

           
         </Box>

       
     <Box className={styles.category}  >
     <Heading as="h1" className={styles.cathead} >BROWSE CATEGORIES  <hr color="black" /></Heading> 

     <Box>
            <SimpleGrid columns={{sm: 2, md: 3 ,lg: 4}} spacing={10}>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=22.82"/>
    <Text>CHICKEN BUCKET</Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT208.jpg?ver=22.82"/>
    <Text>EXCLUSIVE DEALS</Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT200.jpg?ver=22.82"/>
    <Text>NEW LAUNCH</Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT190.jpg?ver=22.82"/>
    <Text>BIRYANI BUCKETS</Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT158.jpg?ver=22.82"/>
    <Text>BOX MEALS </Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT86.jpg?ver=22.82"/>
    <Text> BURGERS</Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/categories/CAT89.jpg?ver=22.82"/>
    <Text> SNACKS</Text>
  </Box>
  <Box bg="white" border="0px solid black" height='200px'>
    <Image w="100%" src="https://online.kfc.co.in/static/media/finger_lickin.fc21c805.svg"/>
    <Text> VIEW ALL MENU ---</Text>
  </Box>
  
  
</SimpleGrid>
            </Box>

     </Box>

     <Box className={styles.footer} marginTop={{sm:"700px",md:"400px",lg:'200px'}}  height="auto" >

        <Box border={"0px solid white"} p={2} w="80%" marginLeft={"20%"} marginTop={"auto"}>
    <Heading marginTop={"30px"} textAlign={"left"} as="h2">OFFERS & DEALS</Heading>

    <SimpleGrid className={styles.deals}  columns={{sm: 2, md: 3 ,lg: 4}} spacing={10}  >
      <Box height={"350px"} border="0px solid white">
        <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/CHKZINGER.jpg"/>
        <Heading as='h3' size='lg' color={"red"} >1 PC FREE VEG</Heading>
        <Text textTransform={"capitalize"}> 1 Pc of ginger chicken at the range price only 499 dont miss it take it now !</Text>
        <ButtonGroup className={"btng1"}>
          <Button>Veiw Details</Button>
          <Button className={styles.btn2} >Reedem</Button>
        </ButtonGroup>
      </Box>
      <Box height={"350px"} border="0px solid black">
      <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/VEGZINGER.jpg"/>
      <Heading as='h3' size='lg' color={"red"} >2 PC HOT N..</Heading>
      <Text textTransform={"capitalize"}> 1 Pc of ginger chicken at the range price only 499 dont miss it take it now !</Text>
        <ButtonGroup className={"btng1"}>
          <Button>Veiw Details</Button>
          <Button className={styles.btn2} >Reedem</Button>
        </ButtonGroup>
      </Box>
      <Box height={"350px"} border="0px solid black">
      <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/ADDCHK99.jpg"/>
      <Heading as='h3' size='lg' color={"red"} >3 pc hotest...</Heading>
      <Text textTransform={"capitalize"}> 1 Pc of ginger chicken at the range price only 499 dont miss it take it now !</Text>
        <ButtonGroup className={"btng1"}>
          <Button>Veiw Details</Button>
          <Button className={styles.btn2} >Reedem</Button>
        </ButtonGroup>
      </Box>
      <Box height={"350px"} border="0px solid black">
      <Image w="100%" src="https://orderserv-kfc-assets.yum.com/15895bb59f7b4bb588ee933f8cd5344a/images/offers/lg/BIGSAVE.jpg"/>
      <Heading as='h3' size='lg' color={"red"} >Biryani Bucket...</Heading>
      <Text textTransform={"capitalize"}> 1 Pc of ginger chicken at the range price only 499 dont miss it take it now !</Text>
        <ButtonGroup className={"btng1"}>
          <Button>Veiw Details</Button>
          <Button className={styles.btn2} >Reedem</Button>
        </ButtonGroup>
      </Box>
      
      
    </SimpleGrid>

    <Flex  >

    </Flex>

        </Box>
        <Box width={"100%"} border="0px solid white" margin={"auto"} marginTop={"50px"} >
     
     <hr />
     <Footer/>
            
        </Box>
     </Box>

       
        </>
        

    )
}

export default Home


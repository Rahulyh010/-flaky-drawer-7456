import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
  } from '@chakra-ui/react'

  import { useDisclosure } from '@chakra-ui/react'
import { Link, Navigate } from 'react-router-dom'

function Delivery(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    function handleHome(){
console.log("helloo")
onClose()
        return <Navigate to="/menu"/>
    }

    return (
      <>
        <Button onClick={onOpen} backgroundColor={"red.600"} marginLeft={"10px"} >Order Now</Button>
  
        <Modal  isOpen={isOpen} onClose={onClose}>
          <ModalOverlay width={"100%"}  />
          <ModalContent >
            <ModalHeader color={"red"} fontFamily="cursive" >Delivery Options</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

<Link to="/menu"> <Button onClick={handleHome} >Home Delivery</Button></Link>
                <br /> <br />

                <Button>Choose Restraurent</Button> <br /> <br />
                <Button>New Option</Button>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
            
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Delivery
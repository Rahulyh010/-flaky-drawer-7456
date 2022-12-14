import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,

  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  StylesProvider,
} from '@chakra-ui/react';

import {BsCart3} from "react-icons/bs"
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom"
import styles from "./AllStyles/navbar.module.css"



const NavLink = () => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
  
  </Link>
);

export default function Navbar({total}) {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box  border="0px solid black" display={"flex"} justifyContent={"space-around"} width="200px" alignItems={"center"}  > 
          <Link to="/">
          <Avatar src='https://images.ctfassets.net/wtodlh47qxpt/25FSYFuEtGct8NSrtpKe6d/b602f6fe0bf294e6a6dff5d7648bf594/KFC_Logo.svg'/> 
          </Link>
         
          <Link to="/menu">Menu</Link>
          <Link to="/deals">Deals</Link>
          </Box>
         
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
             
             <Link to="/login">
             <Button>
                SignUP
              </Button>
             </Link>
             
              <Link to="/cart/:id">
              <Button className={styles.notification} >  <BsCart3/> 
             <span className={styles.badge}>{total}</span>
             
             </Button>
              </Link>
            
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://images.ctfassets.net/wtodlh47qxpt/6qtBVFuno7pdwOQ9RIvYm9/d13e9b7242980972cf49beddde2cc295/bucket_cart_icon.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://yt3.googleusercontent.com/ytc/AMLnZu-Niy4xRPBN9WsTqRq697n_d8Ui-Ap-cCMzIc3Xmw=s900-c-k-c0x00ffffff-no-rj'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Items</MenuItem>
                  <MenuItem>Account</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}


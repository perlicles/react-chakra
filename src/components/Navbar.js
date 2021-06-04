import { Box, Center, Flex, Divider, HStack } from "@chakra-ui/layout";
import { MenuItem, MenuList, MenuButton, Menu } from "@chakra-ui/menu";
import * as IoIcons from 'react-icons/io5';
import WebFont from 'webfontloader';
import { useEffect } from 'react';
import * as BiIcons from 'react-icons/bi';
import { Avatar } from "@chakra-ui/react";
import IconWithBadge from './IconWithBadge'
import { ImStack } from 'react-icons/im'
import NavbarLogo from "./NavbarLogo";


const Navbar = () => {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
  }, []);


  return (
    <Flex
      w='100%'
      bg='white'
      h='90px'
      alignItems='flex-end'
      justifyContent='space-between'
      borderRadius='0 45px 0 0'
    >

    {/* Logo  */}
      <NavbarLogo />

    {/* Nav User  */}  
      <Center w={{base: '30%', md: '40%'}} justifyContent={{base: 'right', md:'flex-end'}}  minW={{base:'5em', md: '17em', lg: '17em'}} mr='2em' h={{base: '100%', md: '80%'}}>
        
      {/* Nav Icons Box Larger Screens  */}
        <Box display={{base: 'none', md: 'inline', lg: 'inline'}} w='40%' maxW='10em' mr='0' >
          <Flex justifyContent='space-around' >
            <Box>
              <BiIcons.BiBasket cursor='pointer' fontSize='1.5em' color='#a9a9a9' />
            </Box>
            <Box>
              <BiIcons.BiReceipt cursor='pointer' fontSize='1.5em' color='#a9a9a9' />
            </Box>
            <Box>
              <IconWithBadge icon={<BiIcons.BiBell fontSize='1.5em'/>} value='2'/>  
            </Box>
          </Flex>
        </Box>
      {/* Nav Icons Small Screens*/}
        <Box display={{base: 'inline', md: 'none', lg: 'none'}} mr='0.5em' >
          <Menu isLazy>
            <MenuButton>
              <Box mr='1em'>
                <ImStack color='#a9a9a9'/>
              </Box>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Box mr='1em'>
                  <BiIcons.BiBasket cursor='pointer' fontSize='1.5em' color='#a9a9a9' />
                </Box>
                  Compras   
              </MenuItem>
              <MenuItem>
                <Box mr='1em'>
                  <BiIcons.BiReceipt cursor='pointer' fontSize='1.5em' color='#a9a9a9' /> 
                </Box>
                  Compras   
              </MenuItem>
              <MenuItem>
                <Box mr='1em'>
                  <IconWithBadge icon={<BiIcons.BiBell fontSize='1.5em'/>} value='2'/>  
                </Box>
                  Compras   
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Divider h='50%' orientation='vertical' mr={{base:'1em', md: '1em'}} />

      {/* Profile Box */}
        <Box>
          <Menu isLazy>
            <MenuButton>
              <HStack>
                  <Avatar size='sm' name='Jorge Rodrigues' src='https://avatars.githubusercontent.com/u/21241749?v=4' />
                  <Center display={{base:'none', md:'inline', lg:'inline'}} style={{fontFamily: 'Open Sans', fontWeight: 'bold'}}>
                    Rodrigues, J.
                  </Center>
                <Box>
                  <IoIcons.IoChevronDown color='#a9a9a9'/>
                </Box>
              </HStack>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Avatar size='sm' name='David Perlicles' src='https://avatars.githubusercontent.com/u/25882098?s=400&u=12ad9e25d53e938ca25d043a7441aba2e49c170e&v=4' />
                <Center ml='1em' style={{fontFamily: 'Open Sans', fontWeight: 'bold'}}>
                  Perlicles, D.
                </Center>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Center>
    </Flex>
  );
};

export default Navbar; 
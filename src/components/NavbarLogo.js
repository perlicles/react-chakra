import { Box, Center, Flex, Divider, Text } from "@chakra-ui/layout";
import { MenuItem, MenuList, MenuButton, Menu } from "@chakra-ui/menu";
import * as IoIcons from 'react-icons/io5';
import { Image } from "@chakra-ui/react";



const NavbarLogo = () => {
  return (
    <Center h={{base: '100%', md: '80%'}}>
        <Flex h='100%'>
            <Divider mr={{base: '1em', md: '2em'}} orientation='vertical' />
              
            <Center>
              <Menu isLazy>
                <MenuButton mr='1'>
                  <Flex>
                    <Center mr={{base:'0.5', md:'1em'}}>
                      <Box boxSize='3em' borderRadius='5px'>
                        <Image src="https://avatars.slack-edge.com/2020-08-20/1325129063697_6c829544fdb0766f5c7c_88.png" alt="Unscode Logo" borderRadius='0.3em'/>
                      </Box>
                    </Center>
                    <Center style={{fontFamily: 'Open Sans', fontWeight: 'bold'}}>
                      <Text display={{base: 'none', md: 'inline'}}>Unscode Network</Text> 
                      <Box ml={{base: '0.5', md: '0.5em'}}>
                          <IoIcons.IoChevronDown color='#a9a9a9'/>
                      </Box>
                    </Center>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <MenuItem>New Window</MenuItem>
                  <MenuItem>Open Closed</MenuItem>
                  <MenuItem>Open File</MenuItem>
                </MenuList>
              </Menu>
            </Center>
        </Flex>
      </Center>
  )
}
export default NavbarLogo

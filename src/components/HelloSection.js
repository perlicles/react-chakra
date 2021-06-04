import { Button } from "@chakra-ui/button";
import { Box, Center, Flex, Heading, Spacer, Text } from "@chakra-ui/layout"
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import { CgMathPlus } from 'react-icons/cg'
import HelloSectionCards from "./HelloSectionCards";


const HelloSection = () => {
  const helloMessage = {
      fname: 'Jorge',
      unpaidInvoices: '4',
      unreadMsg: '2',
      yourTickets: '6'
    }

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    }, []);
  
  
  return (
    <>
      <Flex flexDir={{base: 'column', md: 'row'}} style={{fontFamily:'Open Sans'}} p={{base: '0', md: '2em 0 2em 0'}}>
        <Box h='auto'>
          <Heading>Oi {helloMessage.fname},</Heading>
          <Text>Aqui está o que preparamos para você hoje.</Text>
        </Box>
        <Spacer></Spacer>
        <Center>
          <Button m={{base: '1em', md: '0'}} bg='#5263f9' color='white' p='0.5em' colorScheme='blue' >
            <Box >
              <CgMathPlus/>
            </Box>
            <Box ml='0.6em' mr='0.8em'>
              <Text fontSize='sm'>
                Gerenciar Agenda
              </Text>
            </Box>
          </Button>
        </Center>
      </Flex>
      <HelloSectionCards />
    </>
  )
}

export default HelloSection

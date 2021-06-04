import { Box, Flex, Spacer, Text } from "@chakra-ui/layout"
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import UpcomingBookingsCards from "./UpcomingBookingsCards";


const UpcomingBookins = () => {
  

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    }, []);
  
  
  return (
    <>
      <Flex style={{fontFamily:'Open Sans'}} p='1em 0 1em 0' >
        <Box h='auto' mt='2em'>
          <Text fontSize='1em' as='b'>Próximas reservas</Text>
        </Box>
        <Spacer></Spacer>
        <Box m='auto' mt='2em'>
          <Text fontSize='1em' as='b' >Ver todos (14)</Text>
        </Box>
      </Flex>
      <UpcomingBookingsCards />
    </>
  )
}

export default UpcomingBookins
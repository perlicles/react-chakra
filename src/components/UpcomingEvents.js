import { Box, Flex, Text } from "@chakra-ui/layout"
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import UpcomingEventsCards from "./UpcomingEventsCards";


const UpcomingEvents = () => {
  

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    }, []);
  
  
  return (
    <Box>
      <Flex style={{fontFamily:'Open Sans'}} p='1em 0 1em 0'>
        <Box h='auto'>
          <Text fontSize='1em' as='b'>Próximos Eventos</Text>
        </Box>
      </Flex>
      <UpcomingEventsCards />
    </Box>
  )
}

export default UpcomingEvents
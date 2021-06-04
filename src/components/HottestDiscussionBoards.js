import { Box, Flex, Text } from "@chakra-ui/layout"
import { useEffect } from 'react';
import WebFont from 'webfontloader';
import HottestDiscussionBoardsCards from "./HottestDiscussionBoardsCards";


const HottestDiscussionBoards = () => {
  

    useEffect(() => {
      WebFont.load({
        google: {
          families: ['Open Sans']
        }
      });
    }, []);
  
  
  return (
    <Box>
      <Flex style={{fontFamily:'Open Sans'}} p='1em 0 1em 0' >
        <Box h='auto'>
          <Text fontSize='1em' as='b'>Discussões mais quentes</Text>
        </Box>
      </Flex>
      <HottestDiscussionBoardsCards />
    </Box>
  )
}

export default HottestDiscussionBoards
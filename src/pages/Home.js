import { Box, Flex, Wrap } from "@chakra-ui/react";
import HelloSection from '../components/HelloSection'
import HottestDiscussionBoards from "../components/HottestDiscussionBoards";
import UpcomingBookins from "../components/UpcomingBookings";
import UpcomingEvents from '../components/UpcomingEvents';

const Home = () => {
  return (
    <Flex borderRadius='0 0 45px 0' p='0 1em 1em 0' bg='white' w='100%' h='100%' minH='28em'>
      <Box p={{base: '0 0.5em 0 0.5em', md: '0 3.5em 0 3.5em'}} h='100%' w='100%' bg='#f5f5f5' >
        <HelloSection />
        <UpcomingBookins/>
        <Box m='2em 0 0 0' bg='#e2e2e2' w='100%' h='2px' borderRadius='5px'></Box>
        <Wrap spacing='1em' w='100%' justify='space-between'>
          <UpcomingEvents />
          <HottestDiscussionBoards />
        </Wrap>
      </Box>
    </Flex>
  )
}

export default Home

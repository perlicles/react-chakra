import { Box, Flex, Wrap } from "@chakra-ui/react";
import { Route, Router, Switch } from "react-router";
import Home from "../pages/Home";
import Users from "../pages/Users";
import HelloSection from './HelloSection'
import HottestDiscussionBoards from "./HottestDiscussionBoards";
import UpcomingBookins from "./UpcomingBookings";
import UpcomingEvents from './UpcomingEvents';
import {  createBrowserHistory } from 'history'

const MainScreen = () => {
  const history = createBrowserHistory();
  return (
    // <Flex borderRadius='0 0 45px 0' p='0 1em 1em 0' bg='white' w='100%' h='100%' minH='28em'>
    //   <Box p={{base: '0 0.5em 0 0.5em', md: '0 3.5em 0 3.5em'}} borderRadius='0 0 45px 0' h='100%' w='100%' bg='#f5f5f5' >
    //     <HelloSection />
    //     <UpcomingBookins/>
    //     <Box m='2em 0 0 0' bg='#e2e2e2' w='100%' h='2px' borderRadius='5px'></Box>
    //     <Wrap spacing='1em' w='100%' justify='space-between'>
    //       <UpcomingEvents />
    //       <HottestDiscussionBoards />
    //     </Wrap>

    //   </Box>
    // </Flex>
    <Router history={history}>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/users' component={Users} exact /> 
      </Switch>
    </Router>
  )
}

export default MainScreen
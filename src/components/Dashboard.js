import { Flex } from '@chakra-ui/layout';
import Navbar  from "./Navbar";
import Sidebar from "./Sidebar";
import MainScreen from './MainScreen';
import { BrowserRouter } from 'react-router-dom';

const Dashboard = () => {
  return (
    <Flex boxShadow='md' borderRadius='45px' h='auto'>
       <Sidebar />
       <Flex w='100%' flexDirection='column'>
         <Navbar />
          <MainScreen />
      </Flex>
    </Flex>
  ) 
}

export default Dashboard; 
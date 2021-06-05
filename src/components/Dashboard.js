import { Flex } from '@chakra-ui/layout';
import Navbar  from "./Navbar";
import MainScreen from './MainScreen';


const Dashboard = () => {
  return (
    <Flex boxShadow='md' borderRadius='45px' h='auto'>
       <Flex w='100%' flexDirection='column'>
         <Navbar />
          <MainScreen />
      </Flex>
    </Flex>
  ) 
}

export default Dashboard; 
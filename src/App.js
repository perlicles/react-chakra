import { Box } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
      <Box m='auto' mt={['0', '0', '2vh']} minHeight={['100vh', '100vh', '97vh']} rounded={['0', '0', 'xl']} w={['100vw', '100vw', '98vw']} p={['3', '5', '7']} minW='420px' style={{backgroundColor: '#dddddd'}} >
        <Dashboard />
      </Box>
    
  )
}

export default App


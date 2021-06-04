import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { SidebarData } from '../externalData/SidebarData';
import { useEffect } from 'react';
import WebFont from "webfontloader";
import FadeIn from "react-fade-in";
import { Link, Router } from 'react-router-dom'
import { createBrowserHistory } from 'history' 




const SidebarButtons = ({isOpen} ) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Open Sans']
      }
    });
  }, []);
  
  const datas = SidebarData;

  const mdDisplayButtons = (title) => {
    return (
        <FadeIn> 
          <Box fontSize='0.8em' fontFamily='Open Sans' ml='1em'>{title}</Box>
        </FadeIn>
    )
  }

  const history = createBrowserHistory();

    return (
      <Router history ={history}>
      <VStack m='auto' mt='0' w='100%'   
      style= {
        isOpen
          ? {width: '100%', transition: 'width 5s'}
          : {width: 'auto', transition: 'width 0.5s'}
      }>
        {datas.map((data, index) => (

            <Button
              key={index}
              size='lg'
              width='100%'
              bg={data.bg}
              color={data.color}
              colorScheme={data.colorScheme}
              as={Link}
            >
              <Flex w='100%' justifyContent='left'>
              <Box fontSize='0.9em'>{data.icon}</Box>
                {isOpen 
                  ? mdDisplayButtons(data.title)
                  : ''
                }
              </Flex>
            </Button>
          
          ))}
      </VStack>
          </Router>
    )
}

export default SidebarButtons

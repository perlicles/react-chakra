import { Box, Button, Flex, VStack } from "@chakra-ui/react";
import { SidebarData } from '../externalData/SidebarData';
import { useEffect } from 'react';
import WebFont from "webfontloader";
import FadeIn from "react-fade-in";
import { Link } from 'react-router-dom'





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

    return (
      <VStack m='auto' mt='0' w='100%'  
      style= {
        isOpen
          ? {width: '100%'}
          : {width: 'auto'}
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
              to={data.path}
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
    )
}

export default SidebarButtons

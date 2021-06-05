import { VStack, Flex, Box, Center } from '@chakra-ui/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { CgPushChevronRightR } from 'react-icons/cg'
import SidebarButtons from './SidebarButtons';
import DrawerMenu from './DrawerMenu'

const Sidebar = ({onChangeDimentions, ...props}) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef();

  // const clickOutSideCheck = e => {
  //   if(node.current.contains(e.target)) {
  //     return;
  //   }
  //   setIsOpen(false);
  // }
  
  //Composição
  useEffect(() => {
    const { current } = node;
    const width = current?.offsetWidth??0;
    const height = current?.offsetHeight??0;
    onChangeDimentions({
      width: width,
      height: height
    })
  }, [isOpen])
  
  return (
    <Flex ref={node}
      bg='white'
      overflow='hidden'
      h='100%'
      position='fixed'
      top={0}
      left={0}
      minW="1rem"
      {...props}
    >
      <VStack w='100%' h={{base: '6em', md: '0'}}>
        <Box m='auto' w='100%' p='0'>
          <Center>
            <Box w='100%' display={{base: 'none', md: 'inline'}} m={{base: 'auto', md: '1.5em auto 1em auto'}} p={{md: '0'}}>
              <CgPushChevronRightR  
                style={
                  isOpen 
                  ? {transform: 'scaleX(-1)', margin: 'auto', marginRight: '0.3em'} 
                  : {transform: 'scaleX(1)', marginRight: 'auto', margin: 'auto'}} cursor='pointer' fontSize='1.7em' 
                  onClick={() => setIsOpen(!isOpen)}></CgPushChevronRightR>
            </Box>

            {/* DrawerMenu for small screens */}
            <Box display={{md: 'none'}} p={{base:'0 0.3em 0 0.3em'}} >
                <DrawerMenu />
            </Box>
          </Center>
        </Box>
          <Box p='0 0.3em 0 0.3em' w='100%' display={{base: 'none' , md: 'inline'}}>
            <SidebarButtons isOpen={isOpen} />
          </Box>
      </VStack>
    </Flex>
  )
}

export default Sidebar

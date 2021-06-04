import { VStack, Flex, Box, Center } from '@chakra-ui/layout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import { CgPushChevronRightR } from 'react-icons/cg'
import SidebarButtons from './SidebarButtons';
import DrawerMenu from './DrawerMenu'


const slide = {
  open: '270px',
  closed: '80px',
  transition: 'width 0.5s',
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const expandSidebar = () => setIsOpen((isSideOpen) => !isSideOpen);
  const node = useRef();

  const clickOutSideCheck = e => {
    if(node.current.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickOutSideCheck);
    return () => {
      document.removeEventListener('mousedown', clickOutSideCheck);
    };
  }, []);
  
  return (
    <Flex ref={node}
      bg='white'
      overflow='hidden'
      style={
        isOpen
          ? { width: slide.open, transition: slide.transition}
          : {width: slide.closed, transition: slide.transition}
      }
      h='auto'
      borderRadius='45px 0 0 45px'
      pt={{base: '0', md: '4'}}
      
      minW='3.5em'
      
    >
      <VStack w='100%' h={{base: '6em', md: '0'}}>
        <Box m='auto' w='100%' p='0'>
          <Center>
            <Box w='100%' display={{base: 'none', md: 'inline'}} m={{base: 'auto', md: '1.5em auto 1em auto'}} p={{md: '0'}}>
              <CgPushChevronRightR  
                style={
                  isOpen 
                  ? {transform: 'scaleX(-1)', margin: 'auto', marginRight: '0.3em', transition: '0.5s'} 
                  : {transform: 'scaleX(1)', marginRight: 'auto', margin: 'auto', transition: '0.5s'}} cursor='pointer' fontSize='1.7em' 
                  onClick={() => expandSidebar()}></CgPushChevronRightR>
            </Box>

            {/* DrawerMenu for small screens */}
            <Box display={{md: 'none'}} p={{base:'0 0.3em 0 0.3em'}} >
                <DrawerMenu />
            </Box>
          </Center>
        </Box>
      <Router>
        <Switch>
          <Box p='0 0.3em 0 0.3em' w='100%' display={{base: 'none' , md: 'inline'}}>
            <SidebarButtons isOpen={isOpen} />
              <Route path='/' />
          </Box>
        </Switch> 
      </Router>
      </VStack>
    </Flex>
  )
}

export default Sidebar

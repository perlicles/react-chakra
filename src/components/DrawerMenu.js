import { useDisclosure } from '@chakra-ui/hooks'
import { Box } from '@chakra-ui/layout'
import { Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay } from '@chakra-ui/modal'
import React from 'react'
import SidebarButtons from './SidebarButtons'
import { BiMenu } from 'react-icons/bi'

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
      <BiMenu fontSize='1.7em' ref={btnRef} onClick={onOpen} />
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent overflow='scroll'>
          <Box h='3em'>
            <DrawerCloseButton />
          </Box>
            <SidebarButtons isOpen={isOpen} />
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default DrawerMenu

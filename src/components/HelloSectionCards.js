import { Box, Flex, HStack, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { HelloSectionData } from '../externalData/HelloSectionData'
import { Wrap } from '@chakra-ui/layout';

const HelloSectionCards = () => {
  const datas = HelloSectionData;

  return (
    <Flex justifyContent='space-between' w='100%' minH='10em' p='0'>
      <Wrap spacing='2em' w='100%'>    
        {datas.map((data, index) => (
          <Box key={index} cursor='pointer' borderRadius='15px' bg='white'  w='100%' maxW='21.86em' m='0' p='1em 2em 1em 2em' boxShadow='base' overflow='hidden'>
            <Text as='b'fontSize='1em'>{data.title}</Text>
            <HStack h='100%'>
              <Text mt='-3em'><span style={{fontSize: '3.5em', fontWeight: 'bold'}}>{data.mainVal}</span><span style={{fontSize: '2em'}}>{data.secundaryVal}</span></Text>
              <Spacer/>
              <Box alignSelf='flex-end' color='#5263f9'  mb='0'>
                {data.icon}
              </Box>
            </HStack>
          </Box>
        ))}
      </Wrap>
        </Flex>
  )
}

export default HelloSectionCards

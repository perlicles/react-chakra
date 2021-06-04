import { Box, Center, Flex, Spacer, Text, Wrap } from '@chakra-ui/layout';
import React from 'react';
import { BsThreeDots, BsPause } from 'react-icons/bs';
import { IoIosArrowDropright } from 'react-icons/io';
import { CgAddR } from 'react-icons/cg'
import { Button } from '@chakra-ui/button';
import { BiCheckboxChecked } from 'react-icons/bi'
import { UpcomingBookingsData } from '../externalData/UpcomingBookingsData'

const UpcomingBookingsCards = () => {
  const datas = UpcomingBookingsData;

  return (
    <Flex justifyContent='space-between' minH='15em' p='0' >
      <Wrap spacing='1.5em' w='100%'>
      {datas.map((data, index) => (
        <Box key={index} borderRadius='20px' bg='white' h='14em'  w='100%' maxW='30.155em' m='0' p='2em 2em 1em 2em' boxShadow='base'>
        <Flex h='100%' flexDirection='column' justifyContent='space-between'>
          <Box>

          <Box>
            <Flex>
              <Box w='4px' h='auto' bg='#e07e4d' mr='0.8em' borderRadius='5px'></Box>
              <Box>
                <Text as='b'fontSize='1.5em'>{data.title}</Text>
                <Box>
                  <Text fontSize='0.8em' as='mark' as='b' bg='#ededed' mr='0.5em'>{data.tag1}</Text>
                  <Text fontSize='0.8em' as='mark' as='b' bg='#ededed'>{data.tag2}</Text>
                </Box>
              </Box>
              <Spacer/>
                <Box cursor='pointer'>
                  <BsThreeDots  size='1.5em' color='#a0a0a0'/>
                </Box>
            </Flex>
          </Box>
          <Box mt='1em'>
            <Flex >
              <Box>
                <Text  color='#a0a0a0' fontSize='1em'>Início</Text>
                <Text>{data.startTime}</Text>
              </Box>
              <Center m='0.5em'>
                <IoIosArrowDropright size='1.5em' color='black'/>
              </Center>
              <Box>
                <Text  color='#a0a0a0' fontSize='1em'>Fim</Text>
                <Text >{data.endTime}</Text>
              </Box>
            </Flex>
          </Box>
          </Box>
          
          <Box>
            <Flex>
                <Center>
                  <CgAddR size='1.3em' color='#a0a0a0'/>
                </Center>
                <Center>
                <Box ml='0.5em'>
                  <Text  color='#a0a0a0' fontSize='1em'>{data.footNotes1} {data.footNotes2}</Text>
                </Box>
                </Center>
              <Spacer />
              <Center>
              {data.status === 'Confirmado' 
                ? <Button fontSize='0.7em' h='auto' p='0.3em 0.5em 0.3em 0.5em'bg='#aae2c0'>
                    <BiCheckboxChecked size='1.3em'/>Confirmado
                  </Button>
                : <Button fontSize='0.7em' h='auto' p='0.3em 0.5em 0.3em 0.5em'bg='#fac7b6'>
                    <BsPause size='1.3em'/>Pendente
                  </Button>
              }
              </Center>
            </Flex>
          </Box>
        </Flex>
        </Box>
      ))}
      </Wrap>
    </Flex>
  )
}

export default UpcomingBookingsCards
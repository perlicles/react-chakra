import { Box, Center, Flex, Spacer, Text, Wrap } from '@chakra-ui/layout';
import React from 'react';
import { BsPeople } from 'react-icons/bs';
import { Button } from '@chakra-ui/button';
import { BiCheckboxChecked } from 'react-icons/bi'
import { UpComingEventsData }  from '../externalData/UpcomingEventsData'
import { Image } from '@chakra-ui/react';

const UpcomingEventsCards = () => {
  const datas = UpComingEventsData;

  return (
    <Flex minH='15em' p='0'>
      <Wrap spacing='1em' >
      {datas.map((data, index) => (
        <Box key={index} borderRadius='20px' bg='white' w='100%' h='14em' maxW='30em' m='0'  boxShadow='base'>
          <Flex h='100%'>
          <Box h='100%' w='53%' p='0' overflow='hidden' borderRadius='10px' boxShadow='xs' >
            <Image src={data.img} objectFit='cover' h='100%'/>
          </Box>
          <Box m={{base: '1em 0.5em 1em 0.5em', md:'2em 1em 2em 1em'}}>
          <Flex h='100%' flexDirection='column' justifyContent='space-between'>
            <Box>
            <Box>
              <Flex>
                <Box>
                  <Text as='b'fontSize='1em'>{data.title}</Text>
                </Box>
              </Flex>
            </Box>
            <Box mt='1em'>
              <Flex >
                <Box>
                  <Text  color='#a0a0a0' fontSize='1em'>Início</Text>
                  <Text>{data.startTime}</Text>
                </Box>
              </Flex>
            </Box>
            </Box>
            <Box>
              <Flex>
                  <Center>
                    <BsPeople size='1.3em' color='#a0a0a0'/>
                  </Center>
                  <Center>
                  <Box ml='0.5em'>
                    <Text  color='#a0a0a0' fontSize='1em'>{data.subscribed}</Text>
                  </Box>
                  </Center>
                <Spacer />
                <Center>
                {data.buyStatus === 'Sim' 
                  ? <Button fontSize='0.7em' h='auto' p='0.3em 0.5em 0.3em 0.5em'bg='#eeeeee'>
                      <BiCheckboxChecked size='1.3em'/>Ingresso aquirido
                    </Button>
                  : <Button fontSize='1.2em' h='auto' bg='none' p='0.3em 0.5em 0.3em 0.5em'>
                      R$ {data.price}
                    </Button>
                }
                </Center>
              </Flex>
            </Box>
          </Flex>
          </Box>
          </Flex>
        </Box>
      ))}
    </Wrap>
  </Flex>
  )
}

export default UpcomingEventsCards
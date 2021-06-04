import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/layout';
import React from 'react';
import { BiLike } from 'react-icons/bi'
import { Avatar } from '@chakra-ui/react';
import { HottestDiscussionBoardsData } from '../externalData/HottestDiscussionBoardsData';
import { RiReplyLine } from 'react-icons/ri';
import { Wrap } from '@chakra-ui/react'

const HottestDiscussionBoardsCards = () => {
  const datas = HottestDiscussionBoardsData;

  return (
    <Flex minH='14em' p='0'>
      <Wrap spacing='1em' justify='space-between' w='100%'>
      {datas.map((data, index) => (
        <Box key={index} borderRadius='20px' bg='white' h='14em'  w='100%' maxW='30em' m='0'  boxShadow='base'  p={{base:'1em 0.5em 1em 0.5em', md: '2em 1em 2em 1em'}}>
            <Flex h='100%' flexDirection='column' justifyContent='space-between'>
              <Flex>
                <Avatar mr='0.7em' name={data.name} src={data.avatar} />
                <Center>
                  <Text>{data.name}</Text>
                </Center>
              </Flex>
              <Box>
                <Text as='b'fontSize='1.3em'>{data.title}</Text>
              </Box>
              <Spacer/>
              <Box>
                <Flex>
                  <Center>
                    <BiLike size='1.3em' color='black'/>
                  </Center>
                  <Center>
                    <Box ml='0.5em'>
                      <Text  color='#a0a0a0' fontSize='1em'>{data.likes} {data.likes !== '' ? 'likes' : ''}</Text>
                    </Box>
                  </Center>
                  <Center ml='1em'>
                    <RiReplyLine size='1.3em' color='#a0a0a0'/>
                  </Center>
                  <Center>
                    <Box ml='0.5em'>
                      <Text  color='#a0a0a0' fontSize='1em'>{data.replies} {data.replies !== "" ? 'replies' : ''}</Text>
                    </Box>
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

export default HottestDiscussionBoardsCards
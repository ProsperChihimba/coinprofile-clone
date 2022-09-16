import React from 'react'
import { Box, Container, Text, Flex, Center, Image } from '@chakra-ui/react'

const Profits = () => {
    return (
        <Box bg='#F79898' borderTop='2px' borderBottom='2px'>
            <Container pt='11.52rem' pb='4.8rem' w='100%'>
                <Box mb='35px'>
                    <Text as='b' fontSize='3.0rem' w='490px' letterSpacing='normal' textAlign='center'>
                        Send, spend and earn with crypto and cash
                    </Text>
                </Box>
                <Box m='0px auto 6.38rem'>
                    <Text textAlign='center' fontSize='18px' fontWeight='500' >
                        Live your life on crypto. Make day-to-day spending a breeze with cash any time you need it
                    </Text>
                </Box>
                <Flex gap='20px'>
                    <Box w='292px' h='297px' p='4.02rem 2.34rem' bg='white' border='1px' rounded='lg'>
                        <Center>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653017437/coinprofile%202.0/send.svg' width='84px' height='auto' />
                        </Center>
                        <Center>
                            <Text fontWeight='700' lineHeight='3.8rem' fontSize='2.08333rem'>Send</Text>
                        </Center>
                        <Center>
                            <Text lineHeight='2.22rem' fontSize='1.22rem' fontWeight='500' color='rgb(31, 32, 35)'>Pay anyone, instantly</Text>
                        </Center>
                    </Box>
                    <Box w='292px' h='297px' p='4.02rem 2.34rem' bg='white' border='1px' rounded='lg'>
                        <Center>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653017437/coinprofile%202.0/send.svg' width='84px' height='auto' />
                        </Center>
                        <Center>
                            <Text fontWeight='700' lineHeight='3.8rem' fontSize='2.08333rem'>Send</Text>
                        </Center>
                        <Center>
                            <Text lineHeight='2.22rem' fontSize='1.22rem' fontWeight='500' color='rgb(31, 32, 35)'>Pay anyone, instantly</Text>
                        </Center>
                    </Box>
                    <Box w='292px' h='297px' p='4.02rem 2.34rem' bg='white' border='1px' rounded='lg'>
                        <Center>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653017437/coinprofile%202.0/send.svg' width='84px' height='auto' />
                        </Center>
                        <Center>
                            <Text fontWeight='700' lineHeight='3.8rem' fontSize='2.08333rem'>Send</Text>
                        </Center>
                        <Center>
                            <Text lineHeight='2.22rem' fontSize='1.22rem' fontWeight='500' color='rgb(31, 32, 35)'>Pay anyone, instantly</Text>
                        </Center>
                    </Box>
                </Flex>
            </Container>
        </Box>
    )
}

export default Profits
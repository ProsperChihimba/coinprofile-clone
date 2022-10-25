import React from 'react';
import { Box, Text, Flex, Center, Image } from '@chakra-ui/react'

const Security = () => {
    return (
        <Box bg='rgb(242, 237, 220)' borderBottom='2px'>
            <Box pt='11.52rem' pb='10.8rem' pr='150px' pl='150px' w='100%'>
                <Box mb='35px' w='100%'>
                    <Center>
                        <Text fontWeight='600' fontSize='3.0rem'  w='490px' letterSpacing='normal' textAlign='center'>
                            You can count on us
                        </Text>
                    </Center>
                </Box>
                <Box m='0px auto 6.38rem' w='100%'>
                    <Center>
                        <Text textAlign='center' w='490px' fontSize='18px' fontWeight='500' >
                            We’re passionate about making everyday financial life of our customers as easy, seamless and delightful as possible.
                        </Text>
                    </Center>
                </Box>
                <Flex gap='100px'>
                    <Box w='292px' h='297px' p='4.02rem 2.34rem' bg='white' border='1px' rounded='lg'>
                        <Center>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653072964/coinprofile%202.0/chat.svg' width='84px' height='auto' />
                        </Center>
                        <Center>
                            <Text fontWeight='700' lineHeight='3.8rem' fontSize='1.5rem'>24/7 support</Text>
                        </Center>
                        <Center>
                            <Text lineHeight='2.22rem' fontSize='1.22rem' fontWeight='500' color='rgb(31, 32, 35)'>We’re always here to help</Text>
                        </Center>
                    </Box>
                    <Box w='292px' h='297px' p='4.02rem 2.34rem' bg='white' border='1px' rounded='lg'>
                        <Center>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653072889/coinprofile%202.0/fraudProtection.svg' width='84px' height='auto' />
                        </Center>
                        <Center>
                            <Text fontWeight='700' lineHeight='3.8rem' fontSize='1.5rem'>Fraud Protection</Text>
                        </Center>
                        <Center>
                            <Text lineHeight='2.22rem' textAlign='center' fontSize='1.22rem' fontWeight='500' color='rgb(31, 32, 35)'>We follow AML/KYC standards</Text>
                        </Center>
                    </Box>
                    <Box w='292px' h='297px' p='4.02rem 2.34rem' bg='white' border='1px' rounded='lg'>
                        <Center>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653072768/coinprofile%202.0/lock.svg' width='84px' height='auto' />
                        </Center>
                        <Center>
                            <Text fontWeight='700' lineHeight='3.8rem' fontSize='1.5rem'>Secure</Text>
                        </Center>
                        <Center>
                            <Text lineHeight='2.22rem'  textAlign='center' fontSize='1.22rem' fontWeight='500' color='rgb(31, 32, 35)'>With 2FA, only you can access your account</Text>
                        </Center>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Security
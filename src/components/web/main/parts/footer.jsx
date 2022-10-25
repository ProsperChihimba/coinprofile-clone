import React from 'react';
import { Box, Text, Flex, Center, Image, Link } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Footer = () => {

    const footerList = [
        'About Us',
        'Legal',
        'Resources',
        'Security',
        'Support'
    ]
    return (
        <Box pl='15px' bg='black' >
            <Center>
                <Box w='100%' maxW='1140px' pt='5.2rem'>
                    <Flex gap='10px' mb='100px'>
                        <Box>
                            <Text
                                textAlign='left'
                                fontSize='3rem'
                                fontWeight='900'
                                color='white'
                                lineHeight='4.8rem'
                                w='550px'
                                m='16.4px 0'
                            >
                                The easiest way to send, spend, and earn with crypto
                            </Text>
                            <Flex>
                                <Center>
                                    <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653095984/coinprofile%202.0/forwardArrow.svg' h='43px' />
                                    <Text color='rgb(247, 152, 152)' ml='15px' fontSize='1.3rem' lineHeight='1.38rem' fontWeight='500'>Got questions? Talk to us</Text>
                                </Center>
                            </Flex>
                            <Flex>
                                <Center>
                                    <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653095984/coinprofile%202.0/forwardArrow.svg' h='43px' />
                                    <Text color='rgb(247, 152, 152)' ml='15px' fontSize='1.3rem' lineHeight='1.38rem' fontWeight='500'>Join our community</Text>
                                </Center>
                            </Flex>
                        </Box>
                        <Box pl='5rem'>
                            <Text
                                textAlign='left'
                                lineHeight='4.8rem'
                                opacity='0.6'
                                fontSize='1.14rem'
                                fontWeight='900'
                                color='rgb(255, 255, 255)'
                            >
                                Learn more about Coinprofile
                            </Text>
                            {footerList.map((row) => 
                                <Text
                                m='0px 1.38889rem 1.38889rem 0px'
                                color='rgb(255, 255, 255)'
                                fontSize='1.21rem'
                                lineHeight='1.21rem'
                                textAlign='left'
                                fontWeight='500'
                            >
                                {row}
                            </Text>
                            )}
                            <Text
                                textAlign='left'
                                lineHeight='4.8rem'
                                opacity='0.6'
                                fontSize='1.14rem'
                                fontWeight='900'
                                color='rgb(255, 255, 255)'
                            >
                                Stay in touch
                            </Text>
                            <Flex gap='20px'>
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653098533/coinprofile%202.0/twitter.svg' h='45px' />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653098552/coinprofile%202.0/intagram.svg' h='45px' />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653098729/coinprofile%202.0/linkedin.svg' h='45px' />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653098583/coinprofile%202.0/tiktok.svg' h='45px' />
                            </Flex>
                        </Box>
                    </Flex>
                    <Flex>
                        <Center>
                            <Box
                                w='550px'
                            >
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653093948/coinprofile%202.0/logoWhite.svg' h='35px' />
                            </Box>
                            <Box
                                ml='5rem'
                            >
                                <Text
                                    textAlign='left'
                                    opacity='0.6'
                                    fontSize='1.14rem'
                                    fontWeight='900'
                                    color='rgb(255, 255, 255)'
                                    w='268px'
                                >
                                    1209 Orange Street, Wilmington, Delaware, United States.
                                </Text>
                                <Text
                                    textAlign='left'
                                    lineHeight='4.8rem'
                                    opacity='0.6'
                                    fontSize='1.14rem'
                                    fontWeight='900'
                                    color='rgb(255, 255, 255)'
                                >
                                    +1(206) 922-8971
                                </Text>
                            </Box>
                        </Center>
                    </Flex>
                </Box>
            </Center>
            <Center>
                <Link color='white' mt={10} mb={10} href='https://github.com/ProsperChihimba/' isExternal>
                    Made with ❤️ by Prosper Chihimba <ExternalLinkIcon mx='2px' />
                </Link>
            </Center>
        </Box>
    )
}

export default Footer
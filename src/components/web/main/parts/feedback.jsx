import React from 'react'
import { Box, Text, Flex, Center, Image, Spacer } from '@chakra-ui/react'

const Feedback = () => {
    return (
        <Box bg='rgb(237, 183, 243)' borderBottom='2px'>
            <Box pt='11.52rem' pb='10.8rem' pr='150px' pl='150px' w='100%'>
                <Box mb='35px' w='100%'>
                    <Center>
                        <Text fontWeight='600' fontSize='3.0rem'  w='490px' letterSpacing='normal' textAlign='center'>
                            Don’t just take our word for it
                        </Text>
                    </Center>
                </Box>
                <Flex maxW='880px' justifyContent='space-between'>
                    <Box>
                        <Box mb='20px' border='1px' bg='white' borderRadius='5px' w='430px' maxW='100%' p='2.01rem 2.08rem' >
                            <Text textAlign='left' fontSize='1.1rem' fontWeight='500' mb='20px' color='rgb(31, 32, 35)'>The new Coinprofile send flow feels like magic!!</Text>
                            <Flex>
                                <Flex gap='10px'>
                                    <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653083408/coinprofile%202.0/dave.svg' w='48px' />
                                    <Box>
                                        <Text fontWeight='700' mb='1px' fontSize='1.1rem' letterSpacing='normal' textAlign='center'>
                                            David Nadwa
                                        </Text>
                                        <Text fontSize='0.82rem' fontWeight='500'>@justvibesncode</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653083103/coinprofile%202.0/twitterLogo.svg' w='45px' />
                            </Flex>
                        </Box>
                        <Box pb='50px' border='1px' bg='white' borderRadius='5px' w='430px' maxW='100%' p='2.01rem 2.08rem' >
                            <Text textAlign='left' fontSize='1.1rem' fontWeight='500' mb='20px' color='rgb(31, 32, 35)'>Using Coinprofile, I can send money from the U.K. to Nigeria in about 5-10 minutes.</Text>
                            <Flex>
                                <Flex gap='10px'>
                                    <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1663183812/coinprofile%202.0/profilephotos/michael_vsbdlc-_2__szaba1.webp' w='48px' />
                                    <Box>
                                        <Text fontWeight='700' mb='1px' fontSize='1.1rem' letterSpacing='normal' textAlign='center'>
                                            Michael Ugwu
                                        </Text>
                                        <Text fontSize='0.82rem' fontWeight='500'>@iam_metamike</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653083103/coinprofile%202.0/twitterLogo.svg' w='45px' />
                            </Flex>
                        </Box>
                    </Box>
                    <Box>
                        <Box mb='20px' border='1px' bg='white' borderRadius='5px' w='430px' maxW='100%' p='2.01rem 2.08rem' >
                            <Text textAlign='left' fontSize='1.1rem' fontWeight='500' mb='20px' color='rgb(31, 32, 35)'>
                                Coinprofile is an amazing service that has been invaluable to me as Nigerian in the NFT space, allowing me to sell quickly without hassle.
                            </Text>
                            <Flex>
                                <Flex gap='10px'>
                                    <Image src="https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1663184216/coinprofile%202.0/profilephotos/arinze_ljwlm3_lyhfbn.webp" w='48px' />
                                    <Box>
                                        <Text fontWeight='700' mb='1px' fontSize='1.1rem' letterSpacing='normal' textAlign='center'>
                                            Anthony Azekwoh
                                        </Text>
                                        <Text fontSize='0.82rem' fontWeight='500'>@AnthonyAzekwoh</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653083103/coinprofile%202.0/twitterLogo.svg' w='45px' />
                            </Flex>
                        </Box>
                        <Box pb='50px' border='1px' bg='white' borderRadius='5px' w='430px' maxW='100%' p='2.01rem 2.08rem' >
                            <Text textAlign='left' fontSize='1.1rem' fontWeight='500' mb='20px' color='rgb(31, 32, 35)'>I used Coinprofile for the first time and my transfer was so fast like light. Fantastic company.</Text>
                            <Flex>
                                <Flex gap='10px'>
                                    <Image src="https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1663184430/coinprofile%202.0/profilephotos/tia_xhtgue_q38yek.webp" w='48px' />
                                    <Box>
                                        <Text fontWeight='700' mb='1px' fontSize='1.1rem' letterSpacing='normal' textAlign='center'>
                                            Tia Dalma
                                        </Text>
                                        <Text fontSize='0.82rem' fontWeight='500'>@tyadalmah</Text>
                                    </Box>
                                </Flex>
                                <Spacer />
                                <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653083103/coinprofile%202.0/twitterLogo.svg' w='45px' />
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default Feedback
import React from 'react'
import { Box, Text, Image, Center } from '@chakra-ui/react'

const Features = () => {
    return (
        <Box borderBottom='2px' bg='rgb(244, 237, 125)' pt='80px' pr='150px' pl='150px' pb='50px'>
            <Box w='100%' mb='10px'>
                <Center>
                    <Box w='100%'>
                        <Text w='305px' fontWeight='700' mb='1rem' fontSize='1.8rem'>Pay anyone, instantly</Text>
                        <Text w='305px' lineHeight='2.22rem' fontSize='1.05rem' color='rgb(31, 32, 35)' fontWeight='500'>
                            Send and receive money anytime, anywhere. It’s fast, free, and seamless.
                        </Text>
                    </Box>
                    <Box w='100%'>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653066664/coinprofile%202.0/payAnyOne.svg' w='356px' maxW='100%' />
                    </Box>
                </Center>
            </Box>
            <Box w='100%' mb='20px'>
                <Center>
                    <Box w='100%'>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653066461/coinprofile%202.0/atmCard.svg' w='356px' maxW='100%' ml='4rem' />
                    </Box>
                    <Box w='100%'>
                        <Text w='305px' fontWeight='700' mb='1rem' fontSize='1.8rem'>Get a debit card to spend anywhere</Text>
                        <Text w='305px' lineHeight='2.22rem' fontSize='1.05rem' color='rgb(31, 32, 35)' fontWeight='500'>
                            Spend effortlessly with your Coinprofile card in 150+ currencies with no hidden fees
                        </Text>
                    </Box>
                </Center>
            </Box>
            <Box w='100%' mb='10px'>
                <Center>
                    <Box w='100%'>
                        <Text w='305px' fontWeight='700' mb='1rem' fontSize='1.8rem'>Earn up to 10% interest. Paid weekly.</Text>
                        <Text w='305px' lineHeight='2.22rem' fontSize='1.05rem' color='rgb(31, 32, 35)' fontWeight='500'>
                            Earn rewards on your USD balance while keeping it safe on your Coinprofile wallet. No strings attached.
                        </Text>
                    </Box>
                    <Box w='100%'>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1653066535/coinprofile%202.0/interests.svg' w='356px' maxW='100%' />
                    </Box>
                </Center>
            </Box>
        </Box>
    )
}

export default Features
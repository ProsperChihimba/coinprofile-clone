import React from 'react'
import {
    Box,
    Container,
    Flex,
    Spacer,
    Center,
    Button,
    Text,
    Image,
    FormControl,
    FormLabel,
    Input,
} from '@chakra-ui/react'
import check from '../../../../assets/CheckCircle_btyue9.svg'
import './index.css'

const Welcome = () => {
    return (
        <Container maxW={1140} pt={3} pb={3}>
            <Flex>
                <Box pt='13%' width='100%'>
                    <Text pb='30px' fontSize='2.47222rem' fontWeight='900' color='rgb(31, 32, 35)' lineHeight='3.88rem'>Send, spend, and earn <br /> with crypto</Text>
                    <Flex direction='column' gap={5}>
                        <Box>
                            <Flex>
                                <Center gap={4}>
                                    <Image src={check} boxSize="26px" />
                                    <Text color='rgb(31, 32, 35)' fontSize='1.189rem' fontWeight='400' ><b>Send</b> and receive money from anywhere</Text>
                                </Center>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex>
                                <Center gap={4}>
                                    <Image src={check} boxSize="26px" />
                                    <Text color='rgb(31, 32, 35)' fontSize='1.189rem' fontWeight='400' ><b>Spend</b> internationally with your USD card</Text>
                                </Center>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex>
                                <Center gap={4}>
                                    <Image src={check} boxSize="26px" />
                                    <Text color='rgb(31, 32, 35)' fontSize='1.189rem' fontWeight='400' ><b>Earn</b> up to 10% interest on your USD balance</Text>
                                </Center>
                            </Flex>
                        </Box>
                        <Box pt='20px'>
                            <Flex>
                                <Center gap={4}>
                                    <Button bg='transparent' borderWidth='1px' borderColor='black' color='black' size='md' p='22px' >
                                        See how it works
                                    </Button>
                                </Center>
                            </Flex>
                        </Box>
                    </Flex>
                </Box>
                <Spacer />
                <Box pt='13%' w='100%'>
                    <Box w='329px' bg='white' p={30} rounded='md' border='1px' >
                        <FormControl >
                            <FormLabel>1 BTC = 19,582.97 USD</FormLabel>
                            <Input type='send' borderColor='black' mb='20px' />
                            <Input type='send' borderColor='black' mb='20px' />
                            <Button bg='black' color='white' size='md' p='22px' >
                                Send money within 10 minutes
                            </Button>
                        </FormControl>
                    </Box>
                </Box>
            </Flex>
            
            <Center pb='50px'>
                <Flex mt='100px' gap='40px'>
                    <Box>
                        <Text>Backed by</Text>
                    </Box>
                    <Box>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1663197100/coinprofile%202.0/celo_wev22g_rrdfif.webp' width='auto' height='34px' />
                    </Box>
                    <Box>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1663197188/coinprofile%202.0/yc_dvgm0k-_1__ck2but.webp' width='auto' height='34px' />
                    </Box>
                    <Box>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1663197291/coinprofile%202.0/flori_uizrdo_b09nw2.webp' width='auto' height='34px' />
                    </Box>
                </Flex>
            </Center>
        </Container>
    )
}

export default Welcome
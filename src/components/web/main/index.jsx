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
    FormHelperText,
} from '@chakra-ui/react'
import check from '../../../assets/CheckCircle_btyue9.svg'
import './index.css'

export const MainBody = () => {

    return (
        <Container maxW={1140} pt={3} pb={3} h='100vh'>
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
                    </Flex>
                </Box>
                <Spacer />
                <Box pt='13%' w='100%'>
                    <Box w='329px' bg='white' p={30} rounded='md' border='1px' >
                        <FormControl >
                            <FormLabel>1 BTC = 19,582.97 USD</FormLabel>
                            <Input type='send' />
                        </FormControl>
                    </Box>
                    
                </Box>
            </Flex>
        </Container>
    )
}

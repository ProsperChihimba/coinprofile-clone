import React from 'react'
import {
    Box,
    Text,
    Center,
    FormControl,
    Input,
    Button,
    Flex,
    Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { AiOutlineGoogle } from "react-icons/ai";

const Login = () => {
    return (
        <Box centerContent>
            <Box pt={10}>
                <Box pb='20px'>
                    <Center flexDir='column'>
                    <svg width="47" height="51" viewBox="0 0 47 51" fill="none"><path d="M35.6298 39.6999L34.4993 31.5604L19.2755 33.1431C21.0842 26.5863 23.8728 20.2556 27.5657 14.5278L27.7164 14.4524L27.2642 27.4907L36.911 28.3197L41.0561 10.6088L22.6669 5.25781C11.8143 7.36805 4.42842 21.6122 5.33281 37.8912L15.4318 44.9755L35.6298 39.6999Z" fill="white"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M40.8379 38.9769C41.2046 41.6171 39.5376 44.114 36.9586 44.7876L16.7606 50.0632C15.2665 50.4534 13.6764 50.1672 12.4122 49.2804L2.31317 42.196C0.994171 41.2707 0.172187 39.7918 0.0828142 38.1831C-0.415367 29.2158 1.35041 20.6158 4.93994 13.8088C8.50457 7.04907 14.1852 1.55075 21.6633 0.0966679C22.4848 -0.0630599 23.3325 -0.0244124 24.136 0.209397L42.5252 5.56036C45.2091 6.34132 46.8128 9.08563 46.1759 11.8073L42.0307 29.5182C41.7286 30.8091 40.9688 31.8881 39.9534 32.6085L40.8379 38.9769ZM34.4993 31.5607L19.2754 33.1434C19.784 31.2997 20.3701 29.4739 21.032 27.6744C21.3655 26.7674 21.7184 25.867 22.0903 24.9745C23.6045 21.3398 25.4345 17.8335 27.5657 14.5281L27.7164 14.4527L27.2642 27.491L36.911 28.32L41.0561 10.609L22.6669 5.25807C11.8142 7.36831 4.4284 21.6124 5.33279 37.8914L15.4318 44.9758L35.6298 39.7002L34.4993 31.5607Z" fill="black"></path></svg>
                    <Text mt='10px' fontSize='1.389rem' fontWeight='500'>Sign in to your account</Text>
                    </Center>
                </Box>
                <Center flexDir='column'>
                    <Box bg='white' h='100%' rounded='md' border='1px' w={330} p={5} pt={9}>
                        <FormControl>
                            <Input type='email' placeholder='Enter your email' border='1px' borderColor='rgba(0, 0, 0, 0.5)' mb={4} />
                            <Input type='email' placeholder='Enter password' border='1px' borderColor='rgba(0, 0, 0, 0.5)' mb={8} />
                            <Button bg='black' color='white' variant='solid' w='100%' mb={6}>
                                Sign in
                            </Button>
                            <Text
                                textDecoration='underline'
                                fontWeight='500'
                                fontSize={16}
                                cursor='pointer'
                                textAlign='center'
                                color='black'
                                mb={5}
                            >
                                Forgot passoword?
                            </Text>
                            <Button bg='white' border='1px' color='black' variant='solid' w='100%' mb={5} leftIcon={<AiOutlineGoogle />}>
                                Sign in with Google
                            </Button>
                        </FormControl>
                    </Box>
                    <Flex>
                        <Text
                            fontWeight='500'
                            fontSize={16}
                            cursor='pointer'
                            textAlign='center'
                            color='black'
                            mt={5}
                        >
                            Don’t have an account?&nbsp;
                        </Text>
                        <Text
                            textDecoration='underline'
                            fontWeight='500'
                            fontSize={16}
                            cursor='pointer'
                            textAlign='center'
                            color='black'
                            mt={5}
                        >
                            Create an account
                        </Text>
                    </Flex>
                </Center>
            </Box>
            <Center>
                <Link color='black' mt={10} href='https://github.com/ProsperChihimba/' isExternal>
                    Made with ❤️ by Prosper Chihimba <ExternalLinkIcon mx='2px' />
                </Link>
            </Center>
        </Box>
    )
}

export default Login 
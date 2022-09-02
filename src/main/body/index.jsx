import React from 'react'
import {
    Box,
    Text,
    Flex,
    Button,
    Center
} from '@chakra-ui/react'
import { Sidebar } from '../../sidebar'
import { AiOutlineCaretDown } from "react-icons/ai";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

const Body = () => {
    return (
        <Box
            display='grid'
            gridTemplateColumns='10rem auto'
        >
            <Sidebar />
            <Box
                bg='white'
                rounded='md'
                border='1px'
                height='80vh'
            >
                <Box p={45}>
                    <Box pb='61px'>
                        <Text as='b'>Welcome! 👋🏽</Text>
                    </Box>
                    <Box pb={25}>
                        <Text as='b'>USD 1000.00</Text>
                    </Box>
                    <Box>
                        <Flex gap={12}>
                            <Box>
                                <Flex>
                                    <Center>
                                        <Text mr={2}>Estimated Total balance in</Text>
                                        <Button
                                            rightIcon={<AiOutlineCaretDown />}
                                            rounded='3xl'
                                            h='30px'
                                        >
                                            USD
                                        </Button>
                                    </Center>
                                </Flex>
                            </Box>
                            <Flex gap={4}>
                                <Button leftIcon={<FaRegPaperPlane />} bg='black' color='white' variant='solid'>
                                    Send Money
                                </Button>
                                <Button leftIcon={<IoIosAdd size={30} />} bg='white' color='black' variant='solid' border='1px'>
                                    Add Money
                                </Button>
                            </Flex>
                        </Flex>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Body
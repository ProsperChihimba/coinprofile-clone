import React from 'react'
import {
    Box,
    Text,
    Flex,
    Button,
    Center,
    Avatar,
    Spacer,
    Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars';
import { Sidebar } from '../../sidebar'
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsArrow90DegRight, BsArrowClockwise } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FiArrowDownLeft } from "react-icons/fi";

const Body = () => {
    return (
        <>
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
                    <Scrollbars
                        renderTrackHorizontal={props => <div {...props} style={{ display: 'none' }} className="track-horizontal" />}
                        renderTrackVertical={props => <div {...props} style={{ display: 'none' }} className="track-vertical" />}
                    >
                        <Box p={45}>
                        {/* currency row */}
                            <Box mt='2px' mb='40px'>
                                <Flex>
                                    <Center>
                                        <Text mr={2}  fontSize={16} fontWeight='400'>Nigerian Naira</Text>
                                        <Button
                                            rightIcon={<AiOutlineCaretDown />}
                                            rounded='3xl'
                                            h='30px'
                                        >
                                            NGN
                                        </Button>
                                    </Center>
                                </Flex>
                            </Box>

                            {/* Balance row */}
                            <Text
                                textAlign='left'
                                mb='20px'
                                fontSize='16px'
                                fontWeight='400'
                                opacity='0.6'
                            >
                                Balance
                            </Text>
                            <Flex mb='25px'>
                                <Center>
                                    <Text
                                        fontSize='20px'
                                        fontWeight='500'
                                        opacity='0.6'
                                    >
                                        NGN&nbsp;
                                    </Text>
                                    <Text
                                        fontSize='40px'
                                        fontWeight='500'
                                        mb='10px'
                                    >
                                        0
                                    </Text>
                                    <Text
                                        fontSize='20px'
                                        fontWeight='500'
                                        opacity='0.6'
                                    >
                                        .00
                                    </Text>
                                </Center>
                                
                            </Flex>

                            {/* Buttons row */}
                            <Box mb='61px'>
                            <Flex gap={4}>
                                <Button leftIcon={<IoIosAdd size={30} color='white' />} bg='black' color='white' variant='solid' border='1px'>
                                    Add Money
                                </Button>
                                <Button disabled leftIcon={<FaRegPaperPlane />} bg='white' color='black' variant='solid' border='1px'>
                                    Send Money
                                </Button>
                                
                                <Button disabled leftIcon={<BsArrow90DegRight />} bg='white' color='black' variant='solid' border='1px'>
                                    Withdraw
                                </Button>
                                <Button leftIcon={<BsArrowClockwise size={22} />} bg='white' color='black' variant='solid' border='1px'>
                                    Convert
                                </Button>
                            </Flex>
                        </Box>
                        </Box>
                    </Scrollbars>
                </Box>
            </Box>
        </>
    )
}

export default Body
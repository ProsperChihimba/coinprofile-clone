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
                        <Box pb='61px'>
                            <Text as='b'>Welcome! 👋🏽</Text>
                        </Box>
                        <Box pb={25}>
                            <Text as='b'>USD 1000.00</Text>
                        </Box>
                        <Box mb='61px'>
                            <Flex gap={12}>
                                <Box mt={2}>
                                    <Flex>
                                        <Center>
                                            <Text mr={2} opacity='0.5' fontSize={16} fontWeight='400'>Estimated Total balance in</Text>
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
                        <Box pb='61px'>
                            <Text opacity='0.5' mb={3} fontSize={16} fontWeight='400'>C’mon, do something</Text>
                            <Flex gap={5}>
                                <Box bg='rgba(0, 0, 0, 0.05)'  minW='279px' rounded='md' p={21}>
                                    <Text fontSize={18} fontWeight='500' color='rgb(0, 0, 0)' >Refer & earn $4 💸</Text>
                                    <Text opacity='0.5' fontSize={14} pt={2} pb={2}>
                                        You’ll both get $2 when your friend <br /> does a transaction of $20 and above.
                                    </Text>
                                    <Text
                                        textDecoration='underline'
                                        fontWeight='500'
                                        fontSize={16}
                                        cursor='pointer'
                                    >Get referral link</Text>
                                </Box>
                                <Box bg='rgba(0, 0, 0, 0.05)'  minW='279px' rounded='md' p={21}>
                                    <Text fontSize={18} fontWeight='500' color='rgb(0, 0, 0)' >Earn up to 5% interest 💰</Text>
                                    <Text opacity='0.5' fontSize={14} pt={4} pb={4}>
                                        Earn interest on your USD balance, <br /> paid weekly.
                                    </Text>
                                    <Button rounded='3xl' h={25} w='fit-content' bg='black' color='white' variant='solid'>
                                        Comming soon
                                    </Button>
                                </Box>
                                <Box bg='transparent'  minW='279px' rounded='md' p={21}>
                                    <Text opacity='0.7' fontWeight='500' fontSize={14}  pb={6}>
                                        We’re constantly improving our <br /> product, so we always appreciate any <br /> feedback you might have
                                    </Text>
                                    <Text
                                        textDecoration='underline'
                                        fontWeight='500'
                                        fontSize={16}
                                        cursor='pointer'
                                    >Suggest a feature</Text>
                                </Box>
                            </Flex>
                        </Box>
                        <Box w='100%'>
                            <Text opacity='0.5' mb={3} fontSize={16} fontWeight='500'>Here’s what you’ve been up to</Text>
                            <Flex pl={2}>
                                <Flex>
                                    <Center gap={4}>
                                        <Avatar size='sm' bg='#CEF6D8' icon={<FiArrowDownLeft color='green' fontSize='1.5rem' />} />
                                        <Flex direction='column'>
                                            <Text fontSize={16} fontWeight='500'>@balanceV1</Text>
                                            <Text fontSize={16} fontWeight='500' color='rgba(0, 0, 0, 0.5)'>Received • May 13</Text>
                                        </Flex>
                                    </Center>
                                </Flex>
                                <Spacer />
                                <Text fontSize={16} fontWeight='500'>0+</Text>
                            </Flex>
                        </Box>
                        <Text
                            textDecoration='underline'
                            fontWeight='500'
                            fontSize={16}
                            cursor='pointer'
                            mt={7}
                            mb={25}
                        >
                            See all
                        </Text>
                    </Box>
                </Scrollbars>
            </Box>
        </Box>
        <Center>
            <Link color='black' mt={3} href='https://github.com/ProsperChihimba/' isExternal>
                Made with ❤️ by Prosper Chihimba <ExternalLinkIcon mx='2px' />
            </Link>
        </Center>
        </>
    )
}

export default Body
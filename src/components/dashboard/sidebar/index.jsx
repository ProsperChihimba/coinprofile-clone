import React from 'react'
import {
    Box,
    Flex,
    Image,
    Text,
    Spacer
} from '@chakra-ui/react'

export const Sidebar = () => {
    return (
        <Box pt={5}>
            <Flex direction='column' gap={24}>
                <Flex direction='column' gap={8}>
                    <Box>
                        <Flex>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1654551364/coinprofile%202.0/HouseColored.svg' />
                            <Text as='b' pl={4}>Home</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1654551364/coinprofile%202.0/Wallet.svg' />
                            <Text as='b' pl={4}>Balances</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1654551364/coinprofile%202.0/CreditCard.svg' />
                            <Text as='b' pl={4}>Cards</Text>
                        </Flex>
                    </Box>
                    <Box>
                        <Flex>
                            <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1654551364/coinprofile%202.0/GearSix.svg' />
                            <Text as='b' pl={4}>Settings</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Spacer />
                <Box>
                    <Flex>
                        <Image src='https://res.cloudinary.com/payourse-technologies-inc/image/upload/v1654656139/coinprofile%202.0/chat_jp2gcw.svg' />
                        <Text as='b' pl={4}>Get help</Text>
                    </Flex>
                </Box>
            </Flex>
        </Box>
    )
}

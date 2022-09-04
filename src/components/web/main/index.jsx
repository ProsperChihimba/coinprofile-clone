import React from 'react'
import {
    Box,
    Container,
    Flex,
    Spacer,
    Center,
    Button
} from '@chakra-ui/react'

export const MainBody = () => {
    return (
        <Container maxW={1140} pt={3} pb={3} bg='white' h='100vh'>
            <Flex>
                <Box>Hey</Box>
                <Spacer />
                <Box>Hey</Box>
            </Flex>
        </Container>
    )
}

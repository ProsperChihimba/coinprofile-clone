import React from 'react'
import { Box, Text, Flex, Center, Image } from '@chakra-ui/react'

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
            </Box>
        </Box>
    )
}

export default Feedback
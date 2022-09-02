import React from 'react'
import { Box } from '@chakra-ui/react'
import { Sidebar } from '../../sidebar'

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
                height={200}
            >
                Hello
            </Box>
        </Box>
    )
}

export default Body
import React from 'react'
import {
    Box,
    Text,
    Flex,
    Button,
    Center,
    Link
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Scrollbars } from 'react-custom-scrollbars';
import { Sidebar } from '../../sidebar'
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsArrow90DegRight, BsArrowClockwise } from "react-icons/bs";
import { FaRegPaperPlane } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";

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
                    ></Scrollbars>
                </Box>
            </Box>
        </>
    )
}

export default Body
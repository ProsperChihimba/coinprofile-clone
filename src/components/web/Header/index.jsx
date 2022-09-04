import React from 'react'
import {
    Box,
    Container,
    Flex,
    Spacer,
    Center,
    Button
} from '@chakra-ui/react'

export const WebHeader = () => {
    return (
        <Box
            bg='white'
            minH='65px'
            borderBottom='1px'
        >
            <Container maxW={1140} pt={3} pb={3}>
                <Center>
                    <Flex>
                        <svg width="160" height="30" viewBox="0 0 160 30" fill="none"><path d="M8.40962 22.5666L8.37926 22.5962C5.88977 22.5962 3.86579 21.8756 2.30733 20.4344C0.769111 18.9931 0 17.1471 0 14.8963C0 12.6259 0.779231 10.7799 2.33769 9.35834C3.89615 7.91708 5.91001 7.19645 8.37926 7.19645C10.3425 7.19645 12.0123 7.66041 13.3886 8.58835C14.7851 9.51629 15.706 10.77 16.1513 12.3495H12.0831C11.7391 11.7374 11.2432 11.2537 10.5955 10.8983C9.94784 10.5232 9.20909 10.3356 8.37926 10.3356C7.08391 10.3356 6.01121 10.7601 5.16114 11.6091C4.33131 12.458 3.91639 13.5439 3.91639 14.8667C3.91639 16.1895 4.33131 17.2754 5.16114 18.1244C6.01121 18.9733 7.10415 19.3978 8.43998 19.3978C9.79604 19.3978 10.8687 18.9635 11.6581 18.0948C12.4677 17.2063 12.8016 16.0711 12.66 14.689H16.6067C16.7484 17.0188 16.0501 18.9141 14.5119 20.3751C12.9737 21.8361 10.9396 22.5666 8.40962 22.5666Z" fill="black"></path><path d="M27.1776 22.5666C24.7083 22.5666 22.6843 21.846 21.1056 20.4047C19.5269 18.9635 18.7376 17.1175 18.7376 14.8667C18.7376 12.616 19.5269 10.77 21.1056 9.32873C22.6843 7.88746 24.7083 7.16683 27.1776 7.16683C29.6266 7.16683 31.6404 7.88746 33.2191 9.32873C34.7978 10.77 35.5872 12.616 35.5872 14.8667C35.5872 17.1175 34.7978 18.9635 33.2191 20.4047C31.6404 21.846 29.6266 22.5666 27.1776 22.5666ZM23.8684 18.154C24.7387 19.003 25.8417 19.4274 27.1776 19.4274C28.5134 19.4274 29.6164 19.003 30.4868 18.154C31.3571 17.2853 31.7922 16.1895 31.7922 14.8667C31.7922 13.5439 31.3571 12.458 30.4868 11.6091C29.6164 10.7404 28.5134 10.306 27.1776 10.306C25.8417 10.306 24.7387 10.7404 23.8684 11.6091C23.0183 12.458 22.5933 13.5439 22.5933 14.8667C22.5933 16.1895 23.0183 17.2853 23.8684 18.154Z" fill="black"></path><path d="M42.7245 4.38302C42.1781 4.85686 41.4899 5.09378 40.6601 5.09378C39.8302 5.09378 39.132 4.85686 38.5653 4.38302C38.0188 3.88944 37.7455 3.27739 37.7455 2.54689C37.7455 1.81639 38.0188 1.21422 38.5653 0.740374C39.132 0.246791 39.8302 0 40.6601 0C41.4899 0 42.1781 0.246791 42.7245 0.740374C43.2912 1.21422 43.5746 1.81639 43.5746 2.54689C43.5746 3.27739 43.2912 3.88944 42.7245 4.38302ZM38.7474 22.2705V7.46298H42.5424V22.2705H38.7474Z" fill="black"></path><path d="M55.6689 7.16683H55.6385C57.3994 7.16683 58.7959 7.6999 59.8281 8.76604C60.8604 9.83218 61.3765 11.2932 61.3765 13.1491V22.2705H57.5208V13.8302C57.5208 12.7443 57.2273 11.8954 56.6404 11.2833C56.0534 10.6713 55.2337 10.3653 54.1813 10.3653C53.0074 10.3653 52.0763 10.7404 51.3882 11.4906C50.7 12.2409 50.3559 13.2675 50.3559 14.5706V22.3001H46.561V7.4926H50.3559V10.3949H50.3863C51.3173 8.24284 53.0782 7.16683 55.6689 7.16683Z" fill="black"></path><path d="M74.5393 7.16683V7.22606C76.6645 7.22606 78.4354 7.95656 79.8522 9.41757C81.2892 10.8786 82.0077 12.7147 82.0077 14.926C82.0077 17.1175 81.2892 18.9437 79.8522 20.4047C78.4354 21.8657 76.6645 22.5962 74.5393 22.5962C73.2844 22.5962 72.1712 22.3198 71.1997 21.767C70.2485 21.1945 69.5198 20.3949 69.0138 19.3682H68.9531V30H65.1582V7.4926H68.9531V10.4245H69.0138C69.5198 9.39783 70.2485 8.59822 71.1997 8.02567C72.1712 7.45311 73.2844 7.16683 74.5393 7.16683ZM73.4463 19.4571V19.4867C74.8024 19.4867 75.9156 19.0622 76.7859 18.2132C77.6562 17.3643 78.0914 16.2784 78.0914 14.9556C78.0914 13.6525 77.6562 12.5765 76.7859 11.7275C75.9156 10.8786 74.8024 10.4541 73.4463 10.4541C72.0903 10.4541 70.9771 10.8786 70.1068 11.7275C69.2365 12.5765 68.8013 13.6525 68.8013 14.9556C68.8013 16.2586 69.2365 17.3346 70.1068 18.1836C70.9771 19.0326 72.0903 19.4571 73.4463 19.4571Z" fill="black"></path><path d="M93.7899 7.16683L93.7595 7.13722C94.0227 7.13722 94.2149 7.14709 94.3364 7.16683V10.8391H93.5774C90.3592 10.8391 88.7502 12.7443 88.7502 16.5548V22.2705H84.9552V7.46298H88.5984V11.8164H88.6288C89.3979 8.71668 91.1182 7.16683 93.7899 7.16683Z" fill="black"></path><path d="M104.085 22.5666C101.615 22.5666 99.5914 21.846 98.0127 20.4047C96.434 18.9635 95.6447 17.1175 95.6447 14.8667C95.6447 12.616 96.434 10.77 98.0127 9.32873C99.5914 7.88746 101.615 7.16683 104.085 7.16683C106.534 7.16683 108.548 7.88746 110.126 9.32873C111.705 10.77 112.494 12.616 112.494 14.8667C112.494 17.1175 111.705 18.9635 110.126 20.4047C108.548 21.846 106.534 22.5666 104.085 22.5666ZM100.775 18.154C101.646 19.003 102.749 19.4274 104.085 19.4274C105.42 19.4274 106.524 19.003 107.394 18.154C108.264 17.2853 108.699 16.1895 108.699 14.8667C108.699 13.5439 108.264 12.458 107.394 11.6091C106.524 10.7404 105.42 10.306 104.085 10.306C102.749 10.306 101.646 10.7404 100.775 11.6091C99.9254 12.458 99.5003 13.5439 99.5003 14.8667C99.5003 16.1895 99.9254 17.2853 100.775 18.154Z" fill="black"></path><path d="M123.555 3.87956H123.494C122.361 3.87956 121.592 4.11649 121.187 4.59033C120.782 5.06417 120.58 5.69595 120.58 6.48568V7.46298H125.407V10.5429H120.58V22.2705H116.846V10.5429H114.053V7.46298H116.846V6.24877C116.846 4.49161 117.372 3.11945 118.424 2.13228C119.497 1.12537 120.985 0.621916 122.887 0.621916C123.798 0.621916 124.648 0.730504 125.437 0.94768V4.11649C124.749 3.95854 124.122 3.87956 123.555 3.87956Z" fill="black"></path><path d="M132.202 4.38302C131.656 4.85686 130.968 5.09378 130.138 5.09378C129.308 5.09378 128.61 4.85686 128.043 4.38302C127.497 3.88944 127.223 3.27739 127.223 2.54689C127.223 1.81639 127.497 1.21422 128.043 0.740374C128.61 0.246791 129.308 0 130.138 0C130.968 0 131.656 0.246791 132.202 0.740374C132.769 1.21422 133.052 1.81639 133.052 2.54689C133.052 3.27739 132.769 3.88944 132.202 4.38302ZM128.225 22.2705V7.46298H132.02V22.2705H128.225Z" fill="black"></path><path d="M136.255 22.2705V0.94768H140.05V22.2705H136.255Z" fill="black"></path><path d="M155.618 16.1698H159.474C159.352 18.0652 158.543 19.6051 157.045 20.7897C155.567 21.9546 153.726 22.537 151.519 22.537C149.07 22.537 147.067 21.8164 145.508 20.3751C143.97 18.9141 143.201 17.0484 143.201 14.7779C143.201 12.5469 143.96 10.7206 145.478 9.29911C147.016 7.85785 148.989 7.13722 151.398 7.13722C153.807 7.13722 155.719 7.82823 157.136 9.21027C158.573 10.5923 159.251 12.4383 159.17 14.7483H146.874C146.895 16.1895 147.32 17.3346 148.15 18.1836C148.979 19.0128 150.072 19.4274 151.428 19.4274C152.582 19.4274 153.543 19.1313 154.313 18.539C155.102 17.927 155.537 17.1372 155.618 16.1698ZM151.337 9.89141C149.455 9.89141 148.139 10.6318 147.391 12.1125H155.132C154.505 10.6318 153.24 9.89141 151.337 9.89141Z" fill="black"></path></svg>
                    </Flex>
                    <Spacer />
                    <Flex gap={4}>
                        <Button bg='white' color='black' variant='solid' border='1px' pt='10px' pr='27px' pb='10px' pl='27px'>
                            Login
                        </Button>
                        <Button bg='black' color='white' variant='solid' pt='10px' pr='27px' pb='10px' pl='27px'>
                            Sign up
                        </Button>
                    </Flex>
                </Center>
            </Container>
        </Box>
    )
}

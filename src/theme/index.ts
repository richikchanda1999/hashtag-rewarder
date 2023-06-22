import { extendTheme } from '@chakra-ui/react';
import { arvo, gloria } from 'src/theme/fonts';


const theme = extendTheme({
    // Set the fonts like this
    fonts: {
        body: [arvo.style.fontFamily, gloria.style.fontFamily],
        heading: arvo.style.fontFamily,
    },
    // Set the colors like this
    colors: {
        brand: {
            400: '#1db227',
            500: '#ABFE2C',
        }
    }
});


export default theme;
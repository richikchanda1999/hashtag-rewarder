import { extendTheme } from '@chakra-ui/react';
import { arvo, gloria } from 'src/theme/fonts';


const theme = extendTheme({
    // Set the fonts like this
    fonts: {
        body: [arvo.style.fontFamily, gloria.style.fontFamily],
        heading: arvo.style.fontFamily,
    },
});


export default theme;
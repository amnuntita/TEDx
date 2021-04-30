import { extendTheme } from "@chakra-ui/react"

const Button = {
    baseStyle:{
        px: "2rem",
        py: "1.5rem",
        color: "white",
        boxShadow: "sm",
        fontSize: "xl",
        borderRadius: "5rem",
        h: "4rem",
        w: "10rem",
    }
}
const theme = extendTheme({
    screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }
    
        md: '768px',
        // => @media (min-width: 768px) { ... }
    
        lg: '1024px',
        // => @media (min-width: 1024px) { ... }
    
        xl: '1280px',
        // => @media (min-width: 1280px) { ... }
    
    },
    components: {
        Button,
    },
})

export default theme;
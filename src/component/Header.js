import React from "react"
import { Box, Flex, Text,Link, Image} from "@chakra-ui/react"
import {CloseIcon,HamburgerIcon, SearchIcon} from "@chakra-ui/icons"

const MenuItems = props => {
  const { children, isLast, to = "/", ...rest } = props
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      fontWeight="semibold"
      {...rest}
    >
      <Link href={to}>{children}</Link>
    </Text>
  )
}

const Header = props => {
  const [show, setShow] = React.useState(false)
  const toggleMenu = () => setShow(!show)

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      px={6}
      py={4}
      boxShadow="md"
      {...props}
    >
      <Flex align="center">
        <Image src="/images/logo.svg"/>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={toggleMenu}>
        {show ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Box
        display={{ base: show ? "block" : "none", md: "block" }}
        flexBasis={{ base: "100%", md: "auto" }}
      >
        <Flex
          align={["center", "center", "center", "center"]}
          justify={["center", "space-between", "flex-end", "flex-end"]}
          direction={["column", "row", "row", "row"]}
          pt={[4, 4, 0, 0]}
        >
          <MenuItems to="#match">Find A Match</MenuItems>
          <MenuItems to="#personalities">Dog's Personalities</MenuItems>
          <MenuItems to="#aboutus">About Us</MenuItems>
          <MenuItems to="#contactus">Contact Us</MenuItems>
          <MenuItems to="#search" isLast><SearchIcon color="gray.700" /></MenuItems>
        </Flex>
      </Box>
    </Flex>
  )
}

export default Header;
import React from "react";
import {
  Container,
  SimpleGrid,
  Box,
  Grid,
  Flex,
  Center,
  Button,
  Image,
  Text,
  Stack,
  Heading,
  CardBody,
  Card,
  Divider,
  CardFooter,
  ButtonGroup,
  CardHeader,
  Avatar,
  IconButton,
} from "@chakra-ui/react";

import {BsThreeDotsVertical} from "@chakra-ui/icons";
import { BiLike } from  "@chakra-ui/icons";
import { BiShare}  from  "@chakra-ui/icons";
import { BiChat } from  "@chakra-ui/icons";

// import Navbar from "../navbar/Navbar";
import { logo } from "../../public/hulk.jpg";
import { BiHomeAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";

const Homepage = () => {
  return (
    <>
      <Container
        maxW="100%"
        h="100vh"
        // bgGradient={[
        //   "linear(to-tr, teal.300, yellow.400)",
        //   "linear(to-t, blue.200, teal.500)",
        //   "linear(to-b, orange.100, purple.300)",
        // ]}
      >
        <Grid m="auto" templateColumns="20% 55% 20%" gap="2.5%">
          <Box bgColor="white" boxShadow="lg" h="100vh" p="2">
            <Box h="200px">
              <Center>
                <Image
                  boxSize="300px"
                  src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-instagram-logo-website-icon-app-icon-22.png"
                  alt="logo"
                />
              </Center>
            </Box>

            <Box boxShadow="2xl" p="5" m="auto">
              <Box>
                <Center>
                  <Button m="auto" colorScheme="blackAlpha" w="80%" size="lg">
                    <BiHomeAlt />
                    Home
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto" colorScheme="blackAlpha" w="80%" size="lg">
                    Profile
                  </Button>
                </Center>
              </Box>
            </Box>
          </Box>

          {/* mid container */}

          <Box
            overflow="scroll"
            overflowX="hidden"
            // bgColor="transparent"
            h="100vh"
          >
            <Box
              boxShadow="2xl"
              w="80%"
              borderRadius="10px"
              h="200px"
              m="auto"
              pt="4"
            ></Box>

            <Box w="fit-content" h="400px" m="auto" mt="5">
              <Card maxW="sm">
                <CardHeader>
                  <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                      <Avatar
                        name="Segun Adebayo"
                        src="https://bit.ly/sage-adebayo"
                      />

                      <Box>
                        <Heading size="sm">Segun Adebayo</Heading>
                        <Text>Creator, Chakra UI</Text>
                      </Box>
                    </Flex>
                    <IconButton
                      variant="ghost"
                      colorScheme="gray"
                      aria-label="See menu"
                    
                    />
                  </Flex>
                </CardHeader>
                <CardBody>
                  <Text>
                    With Chakra UI, I wanted to sync the speed of development
                    with the speed of design. I wanted the developer to be just
                    as excited as the designer to create a screen.
                  </Text>
                </CardBody>
                <Image
                  objectFit="cover"
                  src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                  alt="Chakra UI"
                />

                <CardFooter
                  justify="space-between"
                  flexWrap="wrap"
                  sx={{
                    "& > button": {
                      minW: "136px",
                    },
                  }}
                >
                  <Button flex="1" variant="ghost" >
                    Like
                  </Button>
                  <Button flex="1" variant="ghost" >
                    Comment
                  </Button>
                  <Button flex="1" variant="ghost" >
                    Share
                  </Button>
                </CardFooter>
              </Card>
            </Box>
          </Box>

          <Box bgColor="gray.50" h="100vh"></Box>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;

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
  Heading,
  CardBody,
  Card,
  Divider,
  CardFooter,
  ButtonGroup,
  CardHeader,
  Avatar,
  IconButton,
  Input,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import Styles from "../../styles/Homepage.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

// import Navbar from "../navbar/Navbar";
import { BiHomeAlt, BiMessageAlt } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { AiOutlineLike, AiOutlinePoweroff } from "react-icons/ai";
import { getStaticProps } from "./getData";

const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  console.log(getStaticProps.data)

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
          <Box
            borderRightColor='gray.50'
            bgColor="white"
            // boxShadow="lg"
            borderRight='1px solid lightgray'
            h="100vh"
            p="2"
          >
            <Box h="200px">
              <Center>
                <Image
                  boxSize="150px"
                  src="https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-icon-instagram-logo-instagram-text-icon-18.png"
                  alt="logo"
                />
              </Center>
            </Box>

            <Box p="5" m="auto" >
              <Box>
                <Center>
                  <Button m="auto" variant = 'outline'  w="80%" size="lg">
                    <BiHomeAlt />
                    Home
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto"  variant = 'outline'  w="80%" size="lg">
                    Profile
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto"  variant = 'outline'  w="80%" size="lg">
                    Create Post
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto"  variant = 'outline'  w="80%" size="lg">
                   <AiOutlinePoweroff/> Logout
                  </Button>
                </Center>
              </Box>
            </Box>
          </Box>

          {/* mid container */}

          <Box
            className={Styles.scrollbar}
            // bgColor="transparent"
            overflow="scroll"
            overflowX="hidden"
            h="100vh"
          >
            {/* Top Section */}
            <Box
              // boxShadow="sm"
              // border="1px solid black"
              w="60%"
              borderRadius="10px"
              h="100px"
              m="auto"
              pt="4"
              boxShadow='xs'
            >
             < Input type='file'/>

            </Box>

            {/* Scroll section */}

            <SimpleGrid columns={1}>
              <Box w="fit-content" h="fit-content" m="auto" boxShadow='lg' mt="5">
                <Card maxW="sm">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      >
                        <Icon as={BsThreeDotsVertical} />
                      </IconButton>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
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
                    <Button flex="1" variant="ghost">
                      <AiOutlineLike /> Like
                    </Button>
                    <Button flex="1" variant="ghost">
                      <BiMessageAlt /> Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                      <FiShare /> Share
                    </Button>
                  </CardFooter>
                </Card>
              </Box>
              <Box w="fit-content" h="fit-content" boxShadow='lg' m="auto" mt="5">
                <Card maxW="sm">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      >
                        <Icon as={BsThreeDotsVertical} />
                      </IconButton>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
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
                    <Button flex="1" variant="ghost">
                      <AiOutlineLike /> Like
                    </Button>
                    <Button flex="1" variant="ghost">
                      <BiMessageAlt /> Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                      <FiShare /> Share
                    </Button>
                  </CardFooter>
                </Card>
              </Box>
              <Box w="fit-content" boxShadow='lg' h="fit-content" m="auto" mt="5">
                <Card maxW="sm">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      >
                        <Icon as={BsThreeDotsVertical} />
                      </IconButton>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
                    </Text>
                  </CardBody>
                  <Image
                    objectFit="cover"
                    cursor='pointer'
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
                    <Button flex="1" variant="ghost">
                      <AiOutlineLike /> Like
                    </Button>
                    <Button flex="1" variant="ghost">
                      <BiMessageAlt /> Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                      <FiShare /> Share
                    </Button>
                  </CardFooter>
                </Card>
              </Box>
              <Box w="fit-content" boxShadow='2xl' h="fit-content" m="auto" mt="5">
                <Card maxW="sm">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      >
                        <Icon as={BsThreeDotsVertical} />
                      </IconButton>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
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
                    <Button flex="1" variant="ghost">
                      <AiOutlineLike /> Like
                    </Button>
                    <Button flex="1" variant="ghost">
                      <BiMessageAlt /> Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                      <FiShare /> Share
                    </Button>
                  </CardFooter>
                </Card>
              </Box>
              <Box w="fit-content" h="fit-content" m="auto" mt="5">
                <Card maxW="sm">
                  <CardHeader>
                    <Flex spacing="4">
                      <Flex
                        flex="1"
                        gap="4"
                        alignItems="center"
                        flexWrap="wrap"
                      >
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
                      >
                        <Icon as={BsThreeDotsVertical} />
                      </IconButton>
                    </Flex>
                  </CardHeader>
                  <CardBody>
                    <Text>
                      With Chakra UI, I wanted to sync the speed of development
                      with the speed of design. I wanted the developer to be
                      just as excited as the designer to create a screen.
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
                    <Button flex="1" variant="ghost">
                      <AiOutlineLike /> Like
                    </Button>
                    <Button flex="1" variant="ghost">
                      <BiMessageAlt /> Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                      <FiShare /> Share
                    </Button>
                  </CardFooter>
                </Card>
              </Box>
            </SimpleGrid>
          </Box>

          {/* Right Container */}

          <Box  h="100vh">
           <Box w='80%' m='auto'>
           <Flex justifyContent='space-around' alignItems='center'>
              {/* <Flex> */}
              <Avatar size='sm' src="https://bit.ly/broken-link" />

              <Box p={2}>
                <Button ref={btnRef} colorScheme="teal" size='sm' onClick={onOpen}>
                 <BiMessageAlt/>
                </Button>
                <Drawer
                  isOpen={isOpen}
                  placement="right"
                  onClose={onClose}
                  finalFocusRef={btnRef}
                  size='sm'
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Chat with customer care</DrawerHeader>

                    <DrawerBody>
                      <Input placeholder="Type here..." />
                    </DrawerBody>

                    <DrawerFooter>
                      
                      <Button colorScheme="blue">Save</Button>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              </Box>
              {/* </Flex> */}
            </Flex>
           </Box>

           <Box  mt={10} boxShadow='lg'  borderRadius='10px'>
           <Box w='80%' m='auto' p='1'  bgColor='gray.50' boxShadow='sm' >
              <Text fontWeight='600' textAlign='center' fontSize='lg' >Suggested for you </Text>
              
            </Box>
            <Box  w='80%' m='auto' mt='1rem' p='1' >
              <Flex justifyContent='space-between' alignItems='center'  >
              <Text fontSize='lg' >User Name </Text>
             <Button size='sm'> <Text>+Follow</Text></Button>
              </Flex>
              
            </Box>
            <Box w='80%' m='auto' p='1' >
              <Flex justifyContent='space-between' alignItems='center'  >
              <Text fontSize='lg' >User Name </Text>
             <Button size='sm'> <Text>+Follow</Text></Button>
              </Flex>
              
            </Box>
            <Box w='80%' m='auto' p='1' >
              <Flex justifyContent='space-between' alignItems='center'  >
              <Text fontSize='lg' >User Name </Text>
             <Button size='sm'> <Text>+Follow</Text></Button>
              </Flex>
              
            </Box>
            <Box w='80%' m='auto' p='1' >
              <Flex justifyContent='space-between' alignItems='center'  >
              <Text fontSize='lg' >User Name </Text>
             <Button size='sm'> <Text>+Follow</Text></Button>
              </Flex>
              
            </Box>
            <Box w='80%' m='auto' p='1' >
              <Flex justifyContent='space-between' alignItems='center'  >
              <Text fontSize='lg' >User Name </Text>
             <Button size='sm'> <Text>+Follow</Text></Button>
              </Flex>
              
            </Box>
         
           </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;

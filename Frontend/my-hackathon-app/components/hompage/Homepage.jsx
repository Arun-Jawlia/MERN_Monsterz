import React, { useEffect, useState } from "react";
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
  CardFooter,
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
  useToast,
} from "@chakra-ui/react";

import { Icon } from "@chakra-ui/react";
import Styles from "../../styles/Homepage.module.css";
import { BsThreeDotsVertical } from "react-icons/bs";

// import Navbar from "../navbar/Navbar";
import { BiHomeAlt, BiMessageAlt } from "react-icons/bi";
import { FiShare } from "react-icons/fi";
import { AiOutlineLike, AiOutlinePoweroff } from "react-icons/ai";
import axios from "axios";

const Homepage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [data, setData] = useState([]);
  const toast = useToast();

  let token;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    token = localStorage.getItem("token");
  }
  console.log(token);






  let user;
  if (typeof window !== "undefined") {
    // Perform localStorage action
    user = localStorage.getItem("userData");
  }
  console.log(user);







  let headers = {
    authentication: `Bearer ${token}`,
  };

  const getData = () => {
    axios
      .get("https://cobalt-blue-bison-hem.cyclic.app/user", { headers })

      // .then(res=>res.json())
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };




  useEffect(() => {
    getData();
  }, []);





  console.log(data);
  if (data !== undefined) {
    console.log(data);
  }

  return (
    <>
      <Container
        maxW="100%"
        h="100vh"
     
      >
        <Grid m="auto" templateColumns="20% 55% 20%" gap="2.5%">
          <Box
            borderRightColor="gray.50"
            bgColor="white"
            // boxShadow="lg"
            borderRight="1px solid lightgray"
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

            <Box p="5" m="auto">
              <Box>
                <Center>
                  <Button m="auto" variant="outline" w="80%" size="lg">
                    <BiHomeAlt />
                    Home
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto" variant="outline" w="80%" size="lg">
                    Profile
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto" variant="outline" w="80%" size="lg">
                    Create Post
                  </Button>
                </Center>
              </Box>
              <br />
              <Box>
                <Center>
                  <Button m="auto" variant="outline" w="80%" size="lg">
                    <AiOutlinePoweroff /> Logout
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
              boxShadow="xs"
            >
              <Input type="file" />
            </Box>

            {/* Scroll section */}

            <SimpleGrid columns={1}>
              {data.length > 0 &&
                data?.map((item) => {
                  return (
                    <Box
                      w="fit-content"
                      h="fit-content"
                      m="auto"
                      boxShadow="lg"
                      mt="5"
                    >
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
                                src={item.image_url}
                              />

                              <Box>
                                <Heading size="sm">{item.username}</Heading>
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
                          <Text>{item.desc}</Text>
                        </CardBody>
                        <Image
                          objectFit="cover"
                          src={item.image_url}
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
                  );
                })}
            </SimpleGrid>
          </Box>

          {/* Right Container */}

          <Box h="100vh">
            <Box w="80%" m="auto">
              <Flex justifyContent="space-around" alignItems="center">
                {/* <Flex> */}
                <Avatar size="sm" src="https://bit.ly/broken-link" />

                <Box p={2}>
                  <Button
                    ref={btnRef}
                    colorScheme="teal"
                    size="sm"
                    onClick={onOpen}
                  >
                    <BiMessageAlt />
                  </Button>
                  <Drawer
                    isOpen={isOpen}
                    placement="right"
                    onClose={onClose}
                    finalFocusRef={btnRef}
                    size="sm"
                  >
                    <DrawerOverlay />
                    <DrawerContent>
                      <DrawerCloseButton />
                      <DrawerHeader> end-to-end encrpyted </DrawerHeader>

                      <DrawerBody>
                        <Flex>
                          <Box
                            h="70vh"
                            p={2}
                            w="50%"
                            boxShadow='lg'
                            // border="1px solid black"
                          ></Box>
                          <Box
                            h="70vh"
                            p={2}
                            w="50%"
                            boxShadow='lg'
                            // border="1px solid black"
                          ></Box>
                        </Flex>
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

            <Box mt={10} boxShadow="lg" borderRadius="10px">
              <Box w="80%" m="auto" p="1" bgColor="gray.50" boxShadow="sm">
                <Text fontWeight="600" textAlign="center" fontSize="lg">
                  Suggested for you{" "}
                </Text>
              </Box>
              <Box w="80%" m="auto" h="auto" mt="1rem" p="1">
                {data.map((item) => {
                  return (
                    <Flex
                      p={2}
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Text fontSize="lg">{item.username}</Text>
                      <Button
                        onClick={() =>
                          toast({
                            title: "You followed",
                            description: "You followed successfully",
                            status: "success",
                            duration: 9000,
                            isClosable: true,
                          })
                        }
                        size="sm"
                      >
                        {" "}
                        <Text>+Follow</Text>
                      </Button>
                    </Flex>
                  );
                })}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Container>
    </>
  );
};

export default Homepage;

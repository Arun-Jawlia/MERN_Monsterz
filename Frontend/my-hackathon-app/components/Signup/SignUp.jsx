import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import styles from "../../styles/SignUp.module.css";
import axios from 'axios'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = () => {
    const payload = {
      email,
      password,
      username,
      number,
      name,
    };
    console.log(payload);

    axios.post("https://cobalt-blue-bison-hem.cyclic.app/signup",payload) 
      // method: "POST",
      // body: JSON.stringify(payload),
      // // body:payload,
      // Headers: {
      //   "Content-Type": "application/json",
      // },
    
      // .then((res) => res.json())
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Box className={styles.hero}>
        <Text
          fontSize="30px"
          fontWeight="600"
          textAlign="center"
          marginTop="50px"
        >
          Sign Up Page
        </Text>
        <Box margin="auto" className={styles.InputBox} padding="2%">
          <Input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
          />
          <Input
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
          <Input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            isRequired
          />
          {/* <Input type="number" placeholder="Mobile Number" /> */}

          <InputGroup className={styles.InputBox} gap={2}>
            <InputLeftAddon className={styles.InputBoxleft} children="+91" />
            <Input
              value={number}
              type="number"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Mobile Number"
            />
          </InputGroup>

          <Input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            isRequired
          />

          <Box textAlign="center" marginTop="30px">
            <Button
              onClick={handleSubmit}
              backgroundColor="#fa5d00"
              className={styles.Button}
              fontSize="18px"
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;

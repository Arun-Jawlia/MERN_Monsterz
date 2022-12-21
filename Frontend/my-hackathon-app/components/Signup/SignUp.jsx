
import React from 'react'
import { Box, Button, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import styles from "../../styles/SignUp.module.css";

const SignUp = () => {
  return (
    <>
      <Box className={styles.hero} >
        <Text fontSize="30px" fontWeight="600" textAlign="center" marginTop="50px">
          Sign Up Page
        </Text>
        <Box margin="auto" className={styles.InputBox} padding="2%">
          <Input type="text" placeholder="Name" />
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="Email" isRequired />
          {/* <Input type="number" placeholder="Mobile Number" /> */}

          <InputGroup className={styles.InputBox} gap={2}>
            <InputLeftAddon className={styles.InputBoxleft} children='+91' />
            <Input type='number' placeholder='Mobile Number' />
          </InputGroup>
          
          <Input type="password" placeholder="Password" isRequired />

          <Box textAlign="center" marginTop="30px">
            <Button backgroundColor="#fa5d00" className={styles.Button} fontSize="18px">
              Sign Up
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default SignUp
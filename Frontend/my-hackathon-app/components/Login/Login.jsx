
import React from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import styles from "../../styles/SignUp.module.css";

const Login = () => {
  return (
    <>
      <Box className={styles.hero} >
        <Text fontSize="30px" fontWeight="600" textAlign="center" marginTop="50px">
          Login Page
        </Text>
        <Box margin="auto" className={styles.InputBox} padding="2%">
          {/* <Input type="text" placeholder="Name" /> */}
          <Input type="text" placeholder="Username / Email" isRequired />
          
          <Input type="password" placeholder="Password" isRequired />

          <Box textAlign="center" marginTop="30px">
            <Button backgroundColor="#fa5d00" className={styles.Button} fontSize="18px">
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
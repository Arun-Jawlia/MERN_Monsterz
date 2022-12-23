
import React, { useState } from 'react'
import { Box, Button, Input, Text } from '@chakra-ui/react'
import styles from "../../styles/SignUp.module.css";
import axios from 'axios';

const Login = () => {

  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const handleSubmit=()=>
  {

    const payload={
      email,
      password,
    }

    axios.post('https://cobalt-blue-bison-hem.cyclic.app/login',payload)
    .then(res=>{
      console.log(res.data)
      let token = localStorage.setItem('token', res.data.token)
      // console.log(token)
      let userData = localStorage.setItem('userData',JSON.stringify(  res.data.byEmail[0]))
      // console.log(userData)
    })
    .catch(err=>console.log(err))
  }


  return (
    <>
      <Box className={styles.hero} >
        <Text fontSize="30px" fontWeight="600" textAlign="center" marginTop="50px">
          Login Page
        </Text>
        <Box margin="auto" className={styles.InputBox} padding="2%">
          {/* <Input type="text" placeholder="Name" /> */}
          <Input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Username / Email" isRequired />
          
          <Input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" isRequired />

          <Box textAlign="center" marginTop="30px">
            <Button onClick={handleSubmit} backgroundColor="#fa5d00" className={styles.Button} fontSize="18px">
              Log in
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Login
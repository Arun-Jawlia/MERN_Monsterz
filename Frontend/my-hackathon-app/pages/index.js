import Head from "next/head";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "../styles/Home.module.css";
// import Navbar from "../components/navbar/Navbar";
import Homepage from "../components/hompage/Homepage";
import Navbar from "../components/navbar/Navbar";
import SignUp from "../Components/Signup/SignUp";
import Login from "../Components/Login/Login";
import Profile from "../Components/Profile/Profile";
import getData from "../components/hompage/getData";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Social App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
<<<<<<< HEAD
        <SignUp/>
        <Login/>
        <Homepage />
=======
        {/* <Homepage /> */}
        {/* <Navbar /> */}
        {/* <SignUp/> */}
        {/* <Login/> */}
        <Profile/>
        {/* <getData/> */}
>>>>>>> c4d2226b3ea49af23eaf555e5977bf7da4edd54e
      </main>
    </>
  );
}
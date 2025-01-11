import { motion } from "motion/react";
import React, { Suspense } from "react";
import Typewriter from "typewriter-effect";
import Shape from "./Shape";
import { Canvas } from "@react-three/fiber";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
// import mypho from "../../assets/mypic.png";
import mypho from "../../../public/assets/label.png";
// import Resume from "../../../public/assets/MD ABSAR.pdf";

import Resume from '/myresume.pdf?url'
// import Resume from 'MD ABSAR.pdf'
const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.8,
    },
  },
};
const Hero = () => {
  return (
    <div className="h-screen relative">
      <div className="absolute sm:top-4 top-20 -z-10 w-full h-full left-0">
        <Canvas>
          <Suspense fallback="loading...">
            <Shape />
            //set it in the bg
          </Suspense>
        </Canvas>
      </div>
      <div className="pt-28 pl-6  sm:pl-12">
        <div className="sm:text-4xl text-2xl font-bold">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            // delay={{ stagger: 1000 }}
            className="sm:mt-4 -mt-8"
          >
            <h1 className="text-pink-300">Hey There,</h1>
            <h1 className="mt-4">I'm Md Absar,</h1>
          </motion.div>
          <div className="flex gap-2 mt-2 sm:mt-4">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              A.
            </motion.h1>
            <div className="text-violet-200">
              <Typewriter
                options={{
                  strings: [
                    "FrontEnd Developer!",
                    "Backend Developer!",
                    "FullStack Developer!",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
          </div>
        </div>
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="flex gap-8 sm:mt-16 mt-8"
        >
          <motion.a
            variants={awardVariants}
            href={Resume}
            target="_blank"
            download={"MyResume.pdf"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out"
          >
            My Resume
            {/* target="_blank"
            download={"MyResume.pdf"}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:scale-105 transition duration-300 ease-in-out" */}
          </motion.a>
          <motion.a
            variants={awardVariants}
            href={"https://web.whatsapp.com/send?phone=8002895833"}
            target="_blank"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 hover:scale-105 transition duration-300 ease-in-out"
          >
            Hire Me
          </motion.a>
        </motion.div>
      </div>
      {/* <div className="absolute sm:bottom-0 bottom-10 sm:ml-10 sm:w-[28rem] sm:mt-96 w-[21rem] sm:left-96 left-4"> */}
      <div className="absolute sm:bottom-0 h-full bottom-10 w-[40rem] ml-80">
        {/* <img src="hero.png" alt="" /> */}
        <img src={mypho} className="mt-20"/>
      </div>
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        transition={{ duration: 1 }}
        animate={{ x: 0, opacity: 1 }}
        className="flex flex-col items-center gap-6 text-2xl fixed right-4 bottom-6"
      >
        <a
          target="_blank"
          href={
            "https://www.linkedin.com/in/md-absar-3a3033217?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          }
        >
          <SiLinkedin />
        </a>
        <a
          target="_blank"
          href={
            "https://www.facebook.com/profile.php?id=61557143755675&mibextid=ZbWKwL"
          }
        >
          <FaFacebook />
        </a>
        <a
          target="_blank"
          href={
            "https://www.instagram.com/aasu_shaikh_01/profilecard/?igsh=emdlMTlsZWJqZjE="
          }
        >
          <FaSquareInstagram />
        </a>
        <a
          target="_blank"
          href={"https://x.com/MdAbsar46217506?t=didCP6sdxHDcWPWARw0-uA&s=08"}
        >
          <BsTwitterX />
        </a>

        <a target="_blank" href={"https://github.com/aasu-shaikh-01"}>
          <FaGithub />
        </a>
      </motion.div>
    </div>
  );
};

export default Hero;

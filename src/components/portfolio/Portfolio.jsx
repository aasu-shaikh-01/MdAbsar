// import { motion, useScroll, useTransform } from "motion/react";
// import React, { useRef } from "react";
// const ListItem = ({ item }) => {
//   return (
//     <div className="h-screen flex-col sm:flex-row flex justify-center overflow-hidden w-screen items-center">
//       <div className="px-16 sm:px-0">
//         <img src={item.img} alt="" width={"600rem"} />
//       </div>
//       <div className="px-16 sm:w-1/2">
//         <h1 className="font-bold text-2xl my-3">{item.title}</h1>
//         <p>{item.desc}</p>
//         <a href={item.link}>
//           <button className="bg-amber-800 p-2 rounded-lg mt-3">
//             View Project
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };
// const Portfolio = () => {
//   const items = [
//     {
//       id: 1,
//       img: "/p1.jpg",
//       title: "Full Stack Blog Application",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//       link: "/",
//     },
//     {
//       id: 2,
//       img: "/p2.jpg",
//       title: "School Management System",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//       link: "/",
//     },
//     {
//       id: 3,
//       img: "/p3.jpg",
//       title: "Real-time Chat Application",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//       link: "/",
//     },
//     {
//       id: 4,
//       img: "/p4.jpg",
//       title: "Social Media Project",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//       link: "/",
//     },
//     {
//       id: 5,
//       img: "/p5.jpg",
//       title: "Animated Portfolio Website",
//       desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure laboriosam tempore consectetur, atque maiores culpa quia, repellat id, dicta esse fugit neque voluptatem provident itaque voluptates minima. Repudiandae, provident hic.",
//       link: "/",
//     },
//   ];
//   const ref = useRef();
//   const { scrollYProgress } = useScroll({ target: ref });

//   const xTranslate = useTransform(
//     scrollYProgress,
//     [1, 0],
//     // [0, 1],
//     [0, -window.innerWidth * items.length]
//   );

//   return (
//     <div className="h-[600vh] relative" ref={ref}>
//       <motion.div
//         className="flex sticky top-0 w-max h-screen"
//         style={{ x: xTranslate }}
//       >
//         {items.map((item) => {
//           return <ListItem item={item} key={item.id} />;
//         })}
//       </motion.div>
//       <section className="h-screen" />
//       <section className="h-screen" />
//       <section className="h-screen" />
//       <section className="h-screen" />
//     </div>
//   );
// };

// export default Portfolio;

import { motion } from "motion/react";
import one from "../../../public/assets/project1.png";
import two from "../../../public/assets/project3.png";
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const items = [
    {
      id: 1,
      img: one,
      title: "Hospital Management System",
      desc: "With admin dashboard it optimizes hospital operations by managing patients, staff, and resources through an intuitive interface. It ensures seamless, fast, and accurate healthcare administration with robust back-end support. - MERN, Authorization And Authentication With JWT, etc.",
      link: "https://hospital-managements-systems.netlify.app",
      gotogit: "https://github.com/aasu-shaikh-01",
    },
    {
      id: 2,
      img: two,
      title: "Portfolio Website",
      desc: "This portfolio website, developed using the MERN stack, was created just before building my own portfolio. It reflects my expertise in designing and developing full-stack applications through real-world projects like the HMS (Hospital Management System). - MERN",
      link: "https://first-portfolio-mern.netlify.app",
      gotogit: "https://github.com/aasu-shaikh-01",
    },
    {
      id: 3,
      img: "/p3.jpg",
      title: "Real-time Chat Application",
      desc: "Under Process...",
      link: "/",
      gotogit: "https://github.com/aasu-shaikh-01",
    },
  ];
  const awardVariants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.01,
        staggerChildren: 0.2,
      },
    },
  };
  return (
    <motion.div
      className="flex gap-4 mx-4 sm:mx-0 flex-wrap"
      variants={awardVariants}
      initial="initial"
      animate="animate"
    >
      {items.map((item) => {
        return (
          <motion.div
            className="bg-slate-900 sm:w-[23rem] p-6 mx-2 rounded-xl flex flex-col justify-center items-center gap-4"
            // className="bg-slate-900 sm:w-[23rem] px-4 py-4 mx-4 rounded-xl flex flex-col justify-center items-center gap-4"
            variants={awardVariants}
            key={item.id}
          >
            <div className="">
              <img src={item.img} alt="" width={"400rem"} />
            </div>
            <div className="">
              <h1 className="font-bold text-2xl my-2">{item.title}</h1>
              <p>{item.desc}</p>
              <a href={item.link} target="_blank">
                <button className="bg-amber-800 p-2 rounded-lg mt-3">
                  View Project
                </button>
              </a>
              <a href={item.gotogit} target="_blank">
                <button
                  className="bg-amber-800 p-2 rounded-lg mt-3 ml-2
                "
                >
                  <div className="flex justify-center items-center gap-2">
                    View Code <FaGithub size={"1.2rem"} />
                  </div>
                </button>
              </a>
              <span className="ml-4 bg-green-500 rounded-md p-1 px-2 text-xs">Live</span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default Portfolio;

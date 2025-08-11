import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap, Abhi_image } from '../assets';

const Hero = () => {
  return (
    <>
      <div className="top-0 left-0 z-0 absolute w-screen h-[100vh]">
        <img
          src={bwmap}
          alt="world map"
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>
      <div className="top-0 left-0 z-0 absolute w-screen h-[100vh]">
        <img
          src={worldmap}
          alt="world map"
          className="sm:hidden block w-full h-full object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col bg-hero-mobile sm:bg-hero mx-auto w-full h-screen overflow-hidden">

        {/* Left Text Content */}
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="sm:hidden bg-[#0a0a0a] rounded-full w-5 h-5" />
            <div className="sm:hidden w-1 h-40 sm:h-80 bw-gradient" />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              <span
                className="font-mova font-extrabold text-[50px] text-eerieBlack sm:text-[90px] sm:text-battleGray uppercase">
                Abhishek
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-eerieBlack`}>
              I design and develop user <br className="hidden sm:block" />
              interfaces and web applications.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start xxs:mt-4 sm:-ml-[3rem] w-screen"></div>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="bottom-32 xs:bottom-10 absolute flex justify-center items-center w-full">
          <a href="#about">
            <div
              className="flex justify-center items-start p-2 border-4 border-dim border-french rounded-3xl w-[35px] h-[64px]">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="bg-taupe mb-1 rounded-full w-3 h-3"
              />
            </div>
          </a>
        </div>

        {/* Image Container with Black Shade */}
        <div className="right-0 bottom-0 absolute flex justify-end items-end w-full h-full">
          <div className="relative sm:h-[90vh] md:h-[70vh] xl:h-[80vh]">
            <img
              src={Abhi_image}
              alt="shaquille"
              className="h-full object-contain"
            />
            {/* Black Shade Overlay */}
            <div className="bottom-0 absolute bg-black bg-opacity-0 w-full h-full"></div>

          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;

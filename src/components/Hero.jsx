import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { bwmap, worldmap, Abhi_image } from '../assets';

const Hero = () => {
  return (
    <>
      {/* Background Images */}
      <div className="top-0 left-0 z-0 absolute w-screen h-screen">
        <img
          src={bwmap}
          alt="world map"
          className="hidden sm:block w-full h-full object-cover"
        />
      </div>
      <div className="top-0 left-0 z-0 absolute w-screen h-screen">
        <img
          src={worldmap}
          alt="world map"
          className="sm:hidden block w-full h-full object-cover"
        />
      </div>

      <section
        className="relative flex sm:flex-row flex-col bg-hero-mobile sm:bg-hero mx-auto w-full h-screen overflow-hidden"
      >
        {/* Left Text Content */}
        <div
          className={`absolute inset-0 sm:top-[20%] top-[15%] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-col sm:flex-row items-start justify-between gap-3`}
        >
          {/* Side Line */}
          <div className="flex flex-col justify-center items-center mt-3 sm:mt-5 ml-3">
            <div className="sm:hidden bg-[#0a0a0a] rounded-full w-4 md:w-5 h-4 md:h-5" />
            <div className="sm:hidden w-1 h-32 sm:h-80 bw-gradient" />
          </div>

          {/* Main Text */}
          <div className="flex-1">
            <h1 className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase overflow-hidden`}>
              Hi, I'm{' '}
              <span className="z-10 relative font-mova font-extrabold text-[40px] text-battleGray xs:text-[50px] sm:text-[70px] md:text-[90px] uppercase">
                Abhishek__.
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-eerieBlack text-sm xs:text-base sm:text-lg md:text-xl`}
            >
              I design and develop user{' '}
              <br className="hidden sm:block" />
              interfaces and web applications.
            </p>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="bottom-16 xs:bottom-10 absolute flex justify-center items-center w-full">
          <a href="#about">
            <div className="flex justify-center items-start p-2 border-4 border-dim border-french rounded-3xl w-[35px] h-[64px]">
              <motion.div
                animate={{ y: [0, 24, 0] }}
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

        {/* Right Image */}
        <div className="right-0 bottom-0 absolute flex justify-end items-end w-full h-full">
          <div className="relative h-[60vh] xs:h-[70vh] sm:h-[80vh] lg:h-[90vh]">
            <img
              src={Abhi_image}
              alt="Abhishek"
              className="w-auto h-full object-contain"
            />
            <div className="bottom-0 absolute bg-black bg-opacity-0 w-full h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

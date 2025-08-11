import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover, } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
        } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)}>
      <div
        className="top-0 left-0 z-10 absolute bg-jetLight opacity-[0.5] rounded-[24px] w-full h-full"></div>

      <img
        src={image}
        alt={name}
        className="absolute rounded-[24px] w-full h-full object-cover"
      />

      {active !== id ? (
        <div className="flex justify-start items-center pr-[4.5rem]">
          <h3
            className="lg:bottom-[7rem] z-0 z-20 absolute w-[200px] h-[30px] font-beckman font-extrabold text-[18px] text-timberWolf sm:text-[27px] uppercase leading-none tracking-[1px] whitespace-nowrap lg:rotate-[-90deg] lg:origin-[0,0]">
            {name}
          </h3>
        </div>
      ) : (
        <>
          <div
            className="bottom-0 z-20 absolute flex-col justify-start bg-[rgba(0,0,0,0.5)] p-8 rounded-b-[24px] w-full">
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="flex justify-center items-center bg- opacity-[0.8] sm:opacity-[0.9] rounded-full w-10 sm:w-11 h-10 sm:h-11 cursor-pointer">
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            <h2
              className="-mt-[1rem] sm:mt-0 font-beckman font-bold text-[24px] text-timberWolf sm:text-[32px] uppercase">
              {name}
            </h2>
            <p
              className="max-w-3xl font-poppins text-[12px] text-silver sm:text-[14px] leading-[18px] sm:leading-[24px] tracking-[1px]">
              {description}
            </p>
            <button
              className="flex justify-between items-center gap-1 hover:bg-battleGray mt-[16px] sm:mt-[22px] py-5 pr-3 pl-2 rounded-[10px] w-[125px] sm:w-[138px] h-[46px] sm:h-[50px] font-beckman font-bold text-[14px] text-timberWolf sm:text-[16px] hover:text-eerieBlack whitespace-nowrap transition duration-[0.2s] ease-in-out live-demo glassmorphism"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}>
              <img
                src={pineapple}
                alt="pineapple"
                className="w-[30px] sm:w-[34px] h-[30px] sm:h-[34px] object-contain btn-icon"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Case Studies</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Projects.</h2>
      </motion.div>

      <div className="flex w-full">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 max-w-3xl text-[18px] text-taupe leading-[30px]">
          These projects demonstrate my expertise with practical examples of
          some of my work, including brief descriptions and links to code
          repositories and live demos. They showcase my ability to tackle
          intricate challenges, adapt to various technologies, and efficiently
          oversee projects.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}>
        <div className="flex lg:flex-row flex-col gap-5 mt-[50px] min-h-[70vh]">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');

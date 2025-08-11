import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="p-[1px] rounded-[20px] w-full xs:w-[250px] card-gradient">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex flex-col justify-evenly items-center bg-jetLight px-12 py-5 rounded-[20px] min-h-[280px]">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="font-bold text-[18px] text-taupe text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 max-w-3xl text-[18px] text-taupe leading-[30px]"
      >
        I'm a passionate <strong>Full-Stack Developer</strong> and <strong>AI & ML enthusiast</strong> currently pursuing my B.Tech in Artificial Intelligence and Machine Learning.
        Over the last few years, I've built <strong>real-world applications</strong> — from AI-powered academic platforms to
        production-level websites — while competing and excelling in national hackathons like
        <strong> Smart India Hackathon (AIR-6)</strong> and <strong>FedEx Hackathon at IIT Madras (AIR-5)</strong>.
        <br /><br />
        My skill set spans <strong>React.js, Next.js, Flutter, Node.js, Express.js, MongoDB, Firebase</strong> and more, with strong foundations in
        <strong> Data Structures, Algorithms, and UI/UX design</strong>.
        I thrive in collaborative environments, having led and contributed to diverse teams across startups,
        freelancing projects, and open-source initiatives.
        <br /><br />
        Whether it's <strong>optimizing routes in logistics</strong>,
        <strong>building accessible tech for differently-abled users</strong>, or
        <strong>crafting engaging user interfaces</strong>, my goal is to blend innovation with usability —
        creating solutions that actually make an impact.
      </motion.p>


      <div className="flex flex-wrap gap-10 mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');

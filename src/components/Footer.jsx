import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { bwmap } from "../assets";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: 'GitHub',
            url: 'https://github.com/AbhishekRDJ',
            icon: <FaGithub />
        },
        {
            name: 'LinkedIn',
            url: 'linkedin.com/in/abhishek-sangule-07b202319/',
            icon: <FaLinkedin />
        },
        {
            name: 'Leetcode',
            url: 'https://leetcode.com/u/Abhishekidz207/',
            icon: <SiLeetcode />
        },
        {
            name: 'Email',
            url: 'mailto:abhisheksangule6@gmail.com',
            icon: <FaEnvelope />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.footer
            className="relative bg-eerieBlack overflow-hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            {/* Background Map Image */}
            <div className="absolute inset-0 opacity-5">
                <img
                    src={bwmap}
                    alt="world map background"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className={`${styles.paddingX} max-w-7xl mx-auto relative z-10`}>
                {/* Main Footer Content */}
                <div className="gap-8 grid grid-cols-1 md:grid-cols-3 py-12">

                    {/* Branding Section */}
                    <motion.div
                        className="md:col-span-1"
                        variants={itemVariants}
                    >
                        <h2 className="mb-3 font-mova font-extrabold text-[28px] text-battleGray sm:text-[32px] uppercase tracking-wider">
                            Abhishek__.
                        </h2>
                        <p className="mb-6 text-timberWolf text-sm sm:text-base leading-relaxed">
                            Designing and building modern, functional, and aesthetic web experiences.
                            Passionate about creating beautiful, user-centered digital solutions.
                        </p>

                        {/* Social Links */}
                        <div className="flex space-x-4 text-lg">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-timberWolf hover:text-battleGray transition-colors duration-300"
                                    whileHover={{ scale: 1.2, y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Navigation Links */}
                    <motion.div
                        className="md:col-span-1"
                        variants={itemVariants}
                    >
                        <h4 className="mb-4 font-poppins font-semibold text-battleGray text-lg">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {navLinks.map((link) => {
                                // Determine scroll percentage based on link title
                                let scrollPercent = 0;
                                if (link.title.toLowerCase() === "about") scrollPercent = 1.0;
                                else if (link.title.toLowerCase() === "projects") scrollPercent = 3.6;
                                else if (link.title.toLowerCase() === "contact") scrollPercent = 7.3;

                                const handleClick = (e) => {
                                    if (scrollPercent > 0) {
                                        e.preventDefault();
                                        const scrollToPosition = window.innerHeight * scrollPercent;
                                        window.scrollTo({ top: scrollToPosition, behavior: "smooth" });
                                    }
                                    // else normal navigation happens (e.g. home link)
                                };

                                return (
                                    <li key={link.id}>
                                        <Link
                                            to={link.id === "home" ? "/" : `#${link.id}`}
                                            className="text-timberWolf hover:text-battleGray text-sm sm:text-base transition-colors duration-300"
                                            onClick={handleClick}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>

                    </motion.div>

                    {/* Contact Section */}
                    <motion.div
                        className="md:col-span-1"
                        variants={itemVariants}
                    >
                        <h4 className="mb-4 font-poppins font-semibold text-battleGray text-lg">
                            Let's Connect
                        </h4>
                        <div className="space-y-4 text-timberWolf text-sm sm:text-base">
                            <p>Ready to start a project or just want to chat?</p>
                            <motion.a
                                href="mailto:abhisheksangule6@gmail.com"
                                className="inline-block bg-battleGray hover:bg-battleGray/80 px-6 py-2 rounded-lg font-medium text-eerieBlack transition-colors duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Get In Touch
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom Bar */}
                <motion.div
                    className="py-6 border-t border-battleGray/20"
                    variants={itemVariants}
                >
                    <p className="flex flex-col gap-2 mb-2 text-silver text-xs">
                        <p> Email: abhisheksangule6@gmail.com</p>

                        <p>Phone: +91 9011521496</p>
                    </p>


                    <div className="flex sm:flex-row flex-col justify-between items-center gap-4">
                        <p className="text-silver text-xs">
                            © {currentYear} Abhishek. All Rights Reserved.
                        </p>

                        <div className="flex space-x-6 text-silver text-xs">
                            <a
                                href="#privacy"
                                className="hover:text-battleGray transition-colors duration-300"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#terms"
                                className="hover:text-battleGray transition-colors duration-300"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Scroll to Top Button */}
                <motion.div
                    className="-top-6 right-8 absolute"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <motion.button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="flex justify-center items-center bg-battleGray hover:bg-battleGray/80 shadow-lg mt-10 rounded-full w-12 h-12 text-eerieBlack transition-colors duration-300"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
                        </svg>
                    </motion.button>
                </motion.div>
            </div >
        </motion.footer >
    );
};

export default Footer;
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { send, sendHover } from '../assets';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // sign up on emailjs.com (select the gmail service and connect your account).
    //click on create a new template then click on save.
    emailjs
      .send(
        'service_xw7suqr', // paste your ServiceID here (you'll get one when your service is created).
        'template_j31impe', // paste your TemplateID here (you'll find it under email templates).
        {
          from_name: form.name,
          to_name: 'Abhishek Sangule', // put your name here.
          from_email: form.email,
          to_email: 'abhisheksangule6@gmail.com', //put your email here.
          message: form.message,
        },
        'abGw5O9rGIhaEvYEz' //paste your Public Key here. You'll get it in your profile section.
      )
      .then(
        () => {
          setLoading(false);
          alert('Thank you. I will get back to you as soon as possible.');

          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert('Something went wrong. Please try again.');
        }
      );
  };

  return (
    <div
      className="flex xl:flex-row flex-col-reverse gap-10 -mt-[8rem] overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-jet p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadTextLight}>Contact.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 mt-10 font-poppins">
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-eerieBlack px-6 py-4 border-none rounded-lg outline-none font-medium text-timberWolf placeholder:text-taupe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-eerieBlack px-6 py-4 border-none rounded-lg outline-none font-medium text-timberWolf placeholder:text-taupe"
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-4 font-medium text-timberWolf">
              Your Message
            </span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message?"
              className="bg-eerieBlack px-6 py-4 border-none rounded-lg outline-none font-medium text-timberWolf placeholder:text-taupe resize-none"
            />
          </label>

          <button
            type="submit"
            className="flex justify-center items-center gap-3 sm:gap-4 bg-night hover:bg-battleGray py-5 rounded-[10px] w-[100px] sm:w-[130px] h-[45px] sm:h-[50px] font-beckman font-bold text-[16px] text-timberWolf sm:text-[20px] hover:text-eerieBlack whitespace-nowrap transition duration-[0.2s] ease-in-out live-demo"
            onMouseOver={() => {
              document
                .querySelector('.contact-btn')
                .setAttribute('src', sendHover);
            }}
            onMouseOut={() => {
              document.querySelector('.contact-btn').setAttribute('src', send);
            }}>
            {loading ? 'Sending' : 'Send'}
            <img
              src={send}
              alt="send"
              className="w-[23px] sm:w-[26px] h-[23px] sm:h-[26px] object-contain contact-btn"
            />
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');

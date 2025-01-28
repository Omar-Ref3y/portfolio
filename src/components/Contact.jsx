import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import styled from '@emotion/styled';

const ContactSection = styled.section`
  padding: 6rem 2rem;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--bg-primary);
  position: relative;
  overflow: hidden;
`;

const Container = styled(motion.div)`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem;
  background-color: var(--bg-secondary);
  border-radius: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3rem;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const ContactInfo = styled.div`
  @media (max-width: 768px) {
    text-align: center;
  }
`;

const ContactText = styled(motion.p)`
  color: var(--text-primary);
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactMethods = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactMethod = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--text-primary);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;

  @media (max-width: 768px) {
    justify-content: center;
  }

  &:hover {
    color: var(--accent-color);
  }

  i {
    font-size: 1.5rem;
    color: var(--accent-color);
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: var(--text-primary);
  font-size: 0.9rem;
`;

const Input = styled(motion.input)`
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const TextArea = styled(motion.textarea)`
  padding: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: var(--text-primary);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: var(--accent-color);
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
  border: none;
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  color: #10B981;
  margin-top: 1rem;
`;

const ErrorMessage = styled(motion.div)`
  text-align: center;
  color: #EF4444;
  margin-top: 1rem;
`;

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const socialLinks = [
    { icon: 'fab fa-github', href: 'https://github.com/Omar-Ref3y', label: 'GitHub' },
    { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/in/omar-refay-b20081253', label: 'LinkedIn' }
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const formItemVariants = {
    hidden: { 
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    hover: { 
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <ContactSection id="contact" ref={ref}>
      <Container
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <SectionTitle variants={itemVariants}>
          Get In Touch
        </SectionTitle>
        <SectionSubtitle variants={itemVariants}>
          Let's collaborate on your next project
        </SectionSubtitle>

        <ContactContent>
          <ContactInfo>
            <ContactText variants={itemVariants}>
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </ContactText>
            <ContactMethods>
              {socialLinks.map((link, index) => (
                <ContactMethod 
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ x: 10, color: 'var(--accent-color)' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={link.icon}></i>
                  {link.label}
                </ContactMethod>
              ))}
            </ContactMethods>
          </ContactInfo>

          <ContactForm
            onSubmit={handleSubmit}
            variants={containerVariants}
          >
            <FormGroup>
              <Label variants={formItemVariants}>Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                variants={formItemVariants}
                whileFocus={{ scale: 1.02, borderColor: 'var(--accent-color)' }}
              />
            </FormGroup>
            <FormGroup>
              <Label variants={formItemVariants}>Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                variants={formItemVariants}
                whileFocus={{ scale: 1.02, borderColor: 'var(--accent-color)' }}
              />
            </FormGroup>
            <FormGroup>
              <Label variants={formItemVariants}>Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                variants={formItemVariants}
                whileFocus={{ scale: 1.02, borderColor: 'var(--accent-color)' }}
              />
            </FormGroup>
            <SubmitButton
              type="submit"
              disabled={formStatus === 'submitting'}
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
            </SubmitButton>

            <AnimatePresence>
              {formStatus === 'success' && (
                <SuccessMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Message sent successfully! I'll get back to you soon.
                </SuccessMessage>
              )}

              {formStatus === 'error' && (
                <ErrorMessage
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  Oops! Something went wrong. Please try again later.
                </ErrorMessage>
              )}
            </AnimatePresence>
          </ContactForm>
        </ContactContent>
      </Container>
    </ContactSection>
  );
}

export default Contact;

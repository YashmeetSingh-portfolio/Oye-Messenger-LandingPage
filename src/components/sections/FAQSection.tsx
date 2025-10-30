import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiMinus } from 'react-icons/fi';
import { renderIcon } from '../../utils/iconUtils';
import {
  Container,
  Heading2,
  Paragraph,
  FadeInUp,
} from '../layout/CommonComponents';


const FAQSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 100px 0;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled(Heading2)`
  margin-bottom: 1rem;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.gradientStart} 0%,
      ${({ theme }) => theme.colors.gradientEnd} 100%
    );
    border-radius: 3px;
  }
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const FAQQuestion = styled.button<{ isOpen: boolean }>`
  width: 100%;
  text-align: left;
  padding: 1.25rem;
  background-color: ${({ isOpen, theme }) =>
    isOpen ? theme.colors.primary : theme.colors.cardBg};
  color: ${({ isOpen, theme }) => (isOpen ? 'white' : theme.colors.text)};
  font-size: 1.125rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ isOpen, theme }) =>
      isOpen ? theme.colors.primary : theme.colors.border};
  }
`;

const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
`;

const FAQAnswer = styled(motion.div)`
  padding: 0;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.cardBg};
`;

const FAQAnswerContent = styled.div`
  padding: 1.25rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  line-height: 1.6;
`;

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({
  question,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <FAQItem>
      <FAQQuestion isOpen={isOpen} onClick={onClick}>
        {question}
        <IconWrapper>
          {isOpen ? renderIcon(FiMinus, { size: 20 }) : renderIcon(FiPlus, { size: 20 })}
        </IconWrapper>
      </FAQQuestion>
      <AnimatePresence>
        {isOpen && (
          <FAQAnswer
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FAQAnswerContent>{answer}</FAQAnswerContent>
          </FAQAnswer>
        )}
      </AnimatePresence>
    </FAQItem>
  );
};

const FAQSection: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: 'Is Oye Messenger free to use?',
      answer: 'Yes, Oye Messenger is completely free to download and use. All basic features including messaging, voice calls, and video calls are available at no cost. We may offer premium features in the future, but the core functionality will always remain free.',
    },
    {
      id: 2,
      question: 'How secure is Oye Messenger?',
      answer: 'Oye Messenger uses end-to-end encryption for all messages and calls, ensuring that only you and the person you\'re communicating with can read or hear what is sent. We do not store your messages on our servers once they\'ve been delivered, and we have strict data protection policies in place.',
    },
    {
      id: 3,
      question: 'Can I use Oye Messenger on multiple devices?',
      answer: 'Currently, Oye Messenger supports one mobile device per account. We are working on multi-device support which will be available in a future update, allowing you to seamlessly use the app across your phone, tablet, and computer.',
    },
    {
      id: 4,
      question: 'How do I add contacts in Oye Messenger?',
      answer: 'You can add contacts in several ways: by searching for their username, scanning their QR code, or by syncing your phone contacts (with permission). Once you find someone, simply send them a contact request which they can accept or decline.',
    },
    {
      id: 5,
      question: 'What happens if I lose my phone or get a new one?',
      answer: 'If you lose your phone or get a new one, you can easily restore your account by verifying your phone number and entering the verification code sent to you. Your profile information will be restored, though message history may not be available unless you\'ve enabled cloud backup.',
    },
    {
      id: 6,
      question: 'Does Oye Messenger work internationally?',
      answer: 'Yes, Oye Messenger works globally as long as you have an internet connection. There are no additional charges for international messaging or calling through the app, though your standard data rates from your carrier may apply.',
    },
  ];

  const [openFAQs, setOpenFAQs] = useState<number[]>([]);

  const toggleFAQ = (id: number) => {
    setOpenFAQs((prevOpenFAQs) =>
      prevOpenFAQs.includes(id)
        ? prevOpenFAQs.filter((faqId) => faqId !== id)
        : [...prevOpenFAQs, id]
    );
  };

  return (
    <FAQSectionWrapper id="faq">
      <Container>
        <FadeInUp>
          <SectionHeader>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <Paragraph>
              Got questions about Oye Messenger? We've got answers to the most common questions.
            </Paragraph>
          </SectionHeader>
        </FadeInUp>

        <FAQContainer>
          {faqs.map((faq) => (
            <FAQItemComponent
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQs.includes(faq.id)}
              onClick={() => toggleFAQ(faq.id)}
            />
          ))}
        </FAQContainer>
      </Container>
    </FAQSectionWrapper>
  );
};

export default FAQSection;
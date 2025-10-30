import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';
import { renderIcon } from '../../utils/iconUtils';
import {
  Container,
  Heading2,
  Paragraph,
  FadeInUp,
} from '../layout/CommonComponents';


const TestimonialsSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.cardBg};
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

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 40px;
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;
  position: relative;
  z-index: 1;
`;

const QuoteIcon = styled.div`
  font-size: 5rem;
  position: absolute;
  top: -1rem;
  left: 2rem;
  opacity: 0.1;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Georgia, serif;
  z-index: -1;
`;

const TestimonialText = styled.p`
  font-size: 1.125rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  font-style: italic;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const UserAvatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.primary};
`;

const UserImage = styled.div<{ imageUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
`;

const UserDetails = styled.div`
  text-align: left;
`;

const UserName = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const UserRole = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textLight};
`;

const RatingStars = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const NavigationButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  cursor: pointer;
  z-index: 10;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  &.prev {
    left: 0;
  }
  
  &.next {
    right: 0;
  }
`;

const TestimonialDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;
`;

const Dot = styled.button<{ active: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: ${({ theme }) => theme.borderRadius.round};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.primary : theme.colors.border};
  transition: ${({ theme }) => theme.transitions.default};
  cursor: pointer;
  
  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.primary : theme.colors.textLight};
  }
`;

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Oye Messenger has completely transformed how I stay in touch with my family overseas. The video call quality is exceptional, and I love how easy it is to share photos and videos with everyone.",
      name: "Sarah Johnson",
      role: "Marketing Professional",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      id: 2,
      text: "As someone who manages remote teams, I needed a reliable messaging app. Oye Messenger's group chat and video call features have made collaboration so much easier. Highly recommend!",
      name: "Michael Chen",
      role: "Project Manager",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      rating: 5,
    },
    {
      id: 3,
      text: "I've tried many messaging apps, but Oye stands out with its clean interface and reliability. Messages send quickly, and I never have to worry about missing important notifications.",
      name: "Priya Patel",
      role: "College Student",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
      rating: 4,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <TestimonialsSectionWrapper id="testimonials">
      <Container>
        <FadeInUp>
          <SectionHeader>
            <SectionTitle>What Our Users Say</SectionTitle>
            <Paragraph>
              Don't just take our word for it. Here's what people around the world are saying about Oye Messenger.
            </Paragraph>
          </SectionHeader>
        </FadeInUp>

        <TestimonialsContainer>
          <NavigationButton className="prev" onClick={handlePrev}>
            {renderIcon(FiChevronLeft, { size: 24 })}
          </NavigationButton>

          <AnimatePresence mode="wait">
            <TestimonialCard
              key={testimonials[currentIndex].id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuoteIcon>"</QuoteIcon>
              <TestimonialText>
                {testimonials[currentIndex].text}
              </TestimonialText>
              <UserInfo>
                <UserAvatar>
                  <UserImage imageUrl={testimonials[currentIndex].avatar} />
                </UserAvatar>
                <UserDetails>
                  <UserName>{testimonials[currentIndex].name}</UserName>
                  <UserRole>{testimonials[currentIndex].role}</UserRole>
                  <RatingStars>
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>
                        {renderIcon(FiStar, {
                          size: 16,
                          fill: i < testimonials[currentIndex].rating ? 'currentColor' : 'none'
                        })}
                      </span>
                    ))}
                  </RatingStars>
                </UserDetails>
              </UserInfo>
            </TestimonialCard>
          </AnimatePresence>

          <NavigationButton className="next" onClick={handleNext}>
            {renderIcon(FiChevronRight, { size: 24 })}
          </NavigationButton>

          <TestimonialDots>
            {testimonials.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </TestimonialDots>
        </TestimonialsContainer>
      </Container>
    </TestimonialsSectionWrapper>
  );
};

export default TestimonialsSection;
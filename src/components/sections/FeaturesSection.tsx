import React from 'react';
import styled from 'styled-components';
import { FiMessageSquare, FiVideo, FiUsers, FiLock, FiImage, FiSend } from 'react-icons/fi';
import {
  Container,
  Heading2,
  Paragraph,
  Card,
  StaggerContainer,
  StaggerItem,
} from '../layout/CommonComponents';
import { renderIcon } from '../../utils/iconUtils';

const FeaturesSectionWrapper = styled.section`
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

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(Card)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 2rem;
  height: 100%;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const FeatureIconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.gradientStart} 0%,
    ${({ theme }) => theme.colors.gradientEnd} 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: white;
  font-size: 1.5rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FeatureDescription = styled(Paragraph)`
  margin-bottom: 0;
  font-size: 1rem;
`;

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <StaggerItem>
      <FeatureCard>
        <FeatureIconWrapper>{icon}</FeatureIconWrapper>
        <FeatureTitle>{title}</FeatureTitle>
        <FeatureDescription>{description}</FeatureDescription>
      </FeatureCard>
    </StaggerItem>
  );
};

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: renderIcon(FiMessageSquare),
      title: 'Instant Messaging',
      description: 'Send and receive messages instantly with friends and family. Enjoy rich text formatting, emojis, and stickers.',
    },
    {
      icon: renderIcon(FiVideo),
      title: 'Video Calls',
      description: 'Connect face-to-face with crystal clear video calls. Group video calls support up to 8 participants simultaneously.',
    },
    {
      icon: renderIcon(FiUsers),
      title: 'User Profiles',
      description: 'Customize your profile with photos, status updates, and personal information to express yourself.',
    },
    {
      icon: renderIcon(FiLock),
      title: 'Secure Messaging',
      description: 'Oye Messenger ensures your conversations remain private and secure at all times.',
    },
    {
      icon: renderIcon(FiImage),
      title: 'Media Sharing',
      description: 'Share photos, videos, documents, and more with your contacts quickly and easily.',
    },
    {
      icon: renderIcon(FiSend),
      title: 'Message Anyone',
      description: 'Connect with anyone in the Oye network. Find friends through the user directory or direct contact.',
    },
  ];

  return (
    <FeaturesSectionWrapper id="features">
      <Container>
        <SectionHeader>
          <SectionTitle>Powerful Features</SectionTitle>
          <Paragraph>
            Oye Messenger comes packed with all the features you need to stay connected with the people who matter most to you.
          </Paragraph>
        </SectionHeader>

        <StaggerContainer>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </FeaturesGrid>
        </StaggerContainer>
      </Container>
    </FeaturesSectionWrapper>
  );
};

export default FeaturesSection;

import React from 'react';
import styled, { useTheme } from 'styled-components';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import {
  Container,
  FlexRow,
  FlexColumn,
  Heading1,
  Paragraph,
  DownloadButton,
  FadeInUp,
} from '../layout/CommonComponents';
import { renderIcon } from '../../utils/iconUtils';
import { ThemeType } from '../../styles/theme';
import appScreenshot from '../../assets/images/app-screenshot.png';

const HeroWrapper = styled.section`
  padding: 160px 0 80px;
  background: linear-gradient(
    135deg,
    rgba(79, 70, 229, 0.05) 0%,
    rgba(124, 58, 237, 0.05) 100%
  );
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 140px 0 60px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 120px 0 40px;
  }
`;

const HeroContent = styled(FlexRow)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const HeroTextContent = styled(FlexColumn)`
  flex: 1;
  max-width: 600px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
    align-items: center;
    text-align: center;
  }
`;

const HeroImageContent = styled(FlexColumn)`
  flex: 1;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const HeroHeading = styled(Heading1)`
  font-size: 3.75rem;
  margin-bottom: 1.5rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.text} 0%,
    ${({ theme }) => theme.colors.primary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 3rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 2.5rem;
  }
`;

const HeroParagraph = styled(Paragraph)`
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  max-width: 540px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1.125rem;
  }
`;

const HighlightText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const AppImageContainer = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 600px;
  border-radius: 40px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
  border: 10px solid #333;
  background-color: #000;

  &:before {
    content: '';
    position: absolute;
    top: 12px;
    right: 40%;
    width: 12px;
    height: 12px;
    background-color: #333;
    border-radius: 50%;
    z-index: 10;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 250px;
    height: 500px;
  }
`;

const AppImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${appScreenshot});
  background-size: cover;
  background-position: center;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-top: 24px; /* Add space for status bar */
`;

const FloatingShape = styled(motion.div)<{ size: string; top: string; left: string; color: any }>`
  position: absolute;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  background-color: ${({ color }) => typeof color === 'function' ? color({ theme: {} }) : color};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  opacity: 0.1;
  z-index: -1;
`;

const DownloadCount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

const DownloadIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
`;

const HeroSection: React.FC = () => {
  const theme = useTheme() as ThemeType;
  return (
    <HeroWrapper id="home">
      <Container>
        <HeroContent>
          <HeroTextContent>
            <FadeInUp>
              <HeroHeading>
                Connect Instantly with Oye Messenger
              </HeroHeading>
              <HeroParagraph>
                Experience seamless communication with friends and family. 
                <HighlightText>Chat, video call, and share</HighlightText> moments 
                with a modern messaging app designed for everyone.
              </HeroParagraph>
              <DownloadButton as="a" href="/oye-messenger.apk" download>
                <DownloadIcon>
                  {renderIcon(FiDownload)}
                </DownloadIcon>
                Download Now
              </DownloadButton>
              <DownloadCount>
                Join over 1 million users worldwide
              </DownloadCount>
            </FadeInUp>
          </HeroTextContent>

          <HeroImageContent>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <AppImageContainer
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                  ease: 'easeInOut',
                }}
              >
                <AppImage />
              </AppImageContainer>
            </motion.div>
          </HeroImageContent>
        </HeroContent>
      </Container>

      {/* Decorative floating shapes */}
      <FloatingShape
        size="100px"
        top="20%"
        left="5%"
        color={theme.colors.primary}
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
      />
      <FloatingShape
        size="70px"
        top="70%"
        left="15%"
        color={theme.colors.secondary}
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
      />
      <FloatingShape
        size="120px"
        top="30%"
        left="85%"
        color={theme.colors.accent}
        animate={{ y: [0, 40, 0], x: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
      />
    </HeroWrapper>
  );
};

export default HeroSection;
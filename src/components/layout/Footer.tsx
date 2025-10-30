import React from 'react';
import styled from 'styled-components';
import { Container, FlexRow, FlexColumn } from './CommonComponents';
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from 'react-icons/fi';
import { renderIcon } from '../../utils/iconUtils';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.cardBg};
  padding: 4rem 0 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const FooterContainer = styled(Container)`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Logo = styled.div`
  font-size: 1.75rem;
  font-weight: 800;
  margin-bottom: 1rem;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.gradientStart} 0%,
    ${({ theme }) => theme.colors.gradientEnd} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const FooterDescription = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 1.5rem;
  max-width: 300px;
`;

const FooterHeading = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${({ theme }) => theme.colors.text};
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  margin-bottom: 0.75rem;
  transition: ${({ theme }) => theme.transitions.default};
  display: block;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateX(3px);
  }
`;

const SocialLinks = styled(FlexRow)`
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.25rem;
  transition: ${({ theme }) => theme.transitions.default};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.875rem;
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterWrapper>
      <FooterContainer>
        <FlexColumn>
          <Logo>Oye Messenger</Logo>
          <FooterDescription>
            Connect with friends and family seamlessly with Oye Messenger. Fast, secure, and feature-rich messaging platform.
          </FooterDescription>
          <SocialLinks>
            <SocialIcon href="#" aria-label="Instagram">
              {renderIcon(FiInstagram, { size: 20 })}
            </SocialIcon>
            <SocialIcon href="#" aria-label="Twitter">
              {renderIcon(FiTwitter, { size: 20 })}
            </SocialIcon>
            <SocialIcon href="#" aria-label="Facebook">
              {renderIcon(FiFacebook, { size: 20 })}
            </SocialIcon>
            <SocialIcon href="#" aria-label="LinkedIn">
              {renderIcon(FiLinkedin, { size: 20 })}
            </SocialIcon>
          </SocialLinks>
        </FlexColumn>
        
        <FlexColumn>
          <FooterHeading>Company</FooterHeading>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Press</FooterLink>
        </FlexColumn>
        
        <FlexColumn>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Community</FooterLink>
          <FooterLink href="#">Developers</FooterLink>
          <FooterLink href="#">Partners</FooterLink>
        </FlexColumn>
        
        <FlexColumn>
          <FooterHeading>Legal</FooterHeading>
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink href="#">Terms of Service</FooterLink>
          <FooterLink href="#">Cookie Policy</FooterLink>
          <FooterLink href="#">GDPR</FooterLink>
        </FlexColumn>
      </FooterContainer>
      
      <Container>
        <Copyright>
          © {currentYear} Oye Messenger. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
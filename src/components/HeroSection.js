import React from 'react';
import styled, { keyframes } from 'styled-components';
import { H1, MediumText } from './styles/TextStyles';
import { themes } from './styles/ColorStyles';
import PurchaseButton from './buttons/PurchaseButton';
import MockupAnimation from './animations/MockupAnmiation';
import Wavebackground from './bcakgrounds/waveBackground';

const animation = keyframes`
from{opacity:0; transform:translateY(-10px); filter:blur(10px)}
to{opacity:1;transform:translateY(0px); filter:blur(0px)}
`;
const Wrapper = styled.div`
  overflow: hidder;

  @media (max-width: 768px) {
    top: 30px;
  }

  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: grid;
  grid-template-columns: 360px auto;
  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px 20px 250px;
  }
`;

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 30px;
  > * {
    animation: ${animation} 1s forwards;
    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.3s;
    }
    :nth-child(3) {
      animation-delay: 0.6s;
    }
  }
`;

const Title = styled(H1)`
  color: ${themes.light.text1};
  @media (max-width: 450) {
    font-size: 48px;
  }
`;
const Description = styled(MediumText)`
  span {
    background: linear-gradient(180deg, #730040 0%, #301cbe 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: darkcyan;
  }
`;

const HeroSection = () => {
  return (
    <Wrapper>
      <Wavebackground />
      <ContentWrapper>
        <TextWrapper>
          <Title>Welcome</Title>
          <Description>
            This is a website from <span>gatsby</span>
            <br />
            Learn to design and code here!
          </Description>
          <PurchaseButton
            title='Start learning'
            subtitle='100hrs of learning '
          />
        </TextWrapper>
        <MockupAnimation />
      </ContentWrapper>
    </Wrapper>
  );
};

export default HeroSection;

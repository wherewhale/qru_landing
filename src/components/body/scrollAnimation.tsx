import { Animator, FadeIn, ScrollContainer, ScrollPage } from 'react-scroll-motion';

const ScrollAnimation = () => {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={FadeIn(30)}>안녕하세요</Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};

export default ScrollAnimation;

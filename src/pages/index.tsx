import { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';

import Navigator from '@/components/navigator';
import Ability from '@/containers/ability';
import About from '@/containers/about';
import Contact from '@/containers/contact';
import Intro from '@/containers/intro';

const Home: NextPage = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const abilityRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const refArr = [introRef, aboutRef, abilityRef, contactRef];
  const tabArr = [<Intro />, <About />, <Ability />, <Contact />];

  const onScrollTo = (tab: string) => {
    if (tab === 'Intro') {
      introRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'About') {
      aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else if (tab === 'Ability') {
      abilityRef.current?.scrollIntoView({ behavior: 'smooth' });
    } else {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Landing Page For Q Are U?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {refArr.map((label, index) => (
          <div key={index} ref={refArr[index]}>
            {tabArr[index]}
          </div>
        ))}
        <Navigator onClick={onScrollTo} />
      </main>
    </>
  );
};

export default Home;

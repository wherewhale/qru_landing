import { NextPage } from 'next';
import Head from 'next/head';
import { useRef } from 'react';
import Divider from 'src/components/body/divider';
import Navigator from 'src/components/header/navigator';
import Layout from 'src/components/layout';
import Ability from 'src/containers/ability';
import About from 'src/containers/about';
import Contact from 'src/containers/contact';
import Intro from 'src/containers/intro';

const Home: NextPage = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const abilityRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const refArr = [introRef, aboutRef, abilityRef, contactRef];
  const tabArr = [<Intro key={'intro'} />, <About key={'about'} />, <Ability key={'ability'} />, <Contact key={'contact'} />];

  return (
    <>
      <Head>
        <title>Recognize QRU</title>
        <meta name="description" content="Landing Page For Q Are U?" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/static/images/common/favicon.ico" />
      </Head>
      <main>
        <Layout nav={<Navigator labels={['Intro', 'About', 'Ability', 'Contact']} refs={refArr} />}>
          {refArr.map((label, index) => (
            <div key={index} ref={refArr[index]}>
              {tabArr[index]}
              <Divider />
            </div>
          ))}
        </Layout>
      </main>
    </>
  );
};

export default Home;

import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

import Slider from 'react-slick';

import { sampleData } from './sampleData';
import styles from './slick.module.scss';

const Slick = () => {
  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    cssEase: 'linear',
  };
  return (
    <div>
      <Slider className={styles.slick} {...setting}>
        {sampleData.map((src, index) => (
          <div className={styles.imageWrapper} key={`${src}-${index}`}>
            <img src={`/static/images/Intro/business_card_back_${sampleData[index].src}.png`} className={styles.image} alt={sampleData[index].alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slick;

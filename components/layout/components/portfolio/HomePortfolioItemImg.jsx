import Image from 'next/image';
import { useEffect } from 'react';

import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomePortfolioItemImg() {
  const controls = useAnimation();
  const [ref, inView] = useInView({});

  const figureVariants = {
    initial: {
      y: '100%',
    },
    finish: {
      y: '0%',
      transition: {
        duration: 1,
      },
    },
  };

  const wrapperVariants = {
    initial: {
      y: '100%',
    },
    finish: {
      y: '0%',
      transition: {
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      controls.start('finish');
    }
  }, [controls, inView]);

  return (
    <div className='home__portfolio__item home__portfolio__item--img'>
      <motion.div
        ref={ref}
        className='img__wrapper'
        variants={wrapperVariants}
        initial='initial'
        animate={controls}
      >
        <motion.figure
          variants={figureVariants}
          initial='initial'
          animate={controls}
        >
          <Image src='/img.jpg' layout='fill' alt='#' />
        </motion.figure>
      </motion.div>
    </div>
  );
}

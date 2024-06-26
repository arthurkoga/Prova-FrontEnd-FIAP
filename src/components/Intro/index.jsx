import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './intro.module.css';
import imgIntro from '../../assets/imgs/intro.png';
import imgWater from '../../assets/imgs/water/water_191.jpg';

gsap.registerPlugin(ScrollTrigger);

export function Intro() {
    useEffect(() => {
        gsap.fromTo(`.${styles.h1}`, 
            { x: 0 }, 
            { x: -1500, 
              ease: "power1",
              scrollTrigger: {
                  trigger: `.${styles.title}`,
                  start: 'top 80%',
                  end: 'bottom 10%',
                  scrub: 1
              }
            }
        );

        gsap.fromTo(`.${styles.h2}`, 
            { x: -1500 }, 
            { x: 0, 
              ease: "power1",
              scrollTrigger: {
                  trigger: `.${styles.title}`,
                  start: 'top 80%',
                  end: 'bottom 10%',
                  scrub: 1
              }
            }
        );
             
        gsap.fromTo(`.${styles.skills}`,
            { x: -500 },
            {
                x: -2000,
                scrollTrigger: {
                    trigger: `.${styles.title2}`,
                    start: 'top 100%',
                    end: 'bottom 10%',
                    scrub: true,
                }
            }
        );

        gsap.fromTo(`.${styles.tutoriais}`,
            { x: -1500 },
            {
                x: 0,
                scrollTrigger: {
                    trigger: `.${styles.title2}`,
                    start: 'top 100%',
                    end: 'bottom 10%',
                    scrub: true,
                }
            }
        );
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1 className={styles.h1}>CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO. CURSOS E IMERSÕES. UMA NOVA CULTURA DE MERCADO.</h1>
                <h2 className={styles.h2}>TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. PRESENTE E FUTURO. TECNOLOGIA, INOVAÇÃO E NEGÓCIOS. </h2>
            </div>
            <img className={styles.img} src={imgIntro} alt="Imagem de introdução" />
            <div className={styles.title2}>
                <p className={styles.skills}>SKILLS • CONHECIMENTO  • SKILLS • CONHECIMENTO • SKILLS • CONHECIMENTO • SKILLS • CONHECIMENTO • SKILLS • CONHECIMENTO</p>
                <p className={styles.tutoriais}>MUITO. MUITO ALÉM DOS TUTORIAIS. MUITO. MUITO ALÉM DOS TUTORIAIS. MUITO. MUITO ALÉM DOS TUTORIAIS. MUITO. MUITO ALÉM DOS TUTORIAIS.</p>
            </div>
            <div className={styles.water}>
                <img src={imgWater} alt="Imagem da água" />
            </div>
        </div>
    );
}

"use client";

import '../../styles/about.css';
import Image from 'next/image';
import imgProfile2 from '../../assets/img/dry-wall.jpg';
import { useEffect, useRef, useState } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  const [imageVisible, setImageVisible] = useState(false);
  const [infoVisible, setInfoVisible] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLDivElement;
          if (entry.isIntersecting) {
            if (target === imageRef.current) {
              setImageVisible(true);
            }
            if (target === infoRef.current) {
              setInfoVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (infoRef.current) observer.observe(infoRef.current);

    return () => observer.disconnect();
  }, [isClient]);

  if (!isClient) return null;

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="row">
          <div className="section-title">
            <h2 className="typing no-select">Sobre Nós</h2>
          </div>
        </div>
        <div className="row">
          <div
            className={`image-about no-select ${imageVisible ? 'visible' : ''}`}
            ref={imageRef}>
            <div className="img-box inner-shadow">
              <Image
                src={imgProfile2}
                alt="Parede de Dry-wall"
                fill
                sizes="300px"
                style={{ objectFit: 'cover', borderRadius: '8px' }}
              />
            </div>
          </div>
          <div
            className={`informations-about no-select ${infoVisible ? 'visible' : ''}`}
            ref={infoRef}
          >
            <p>
              Com atuação contínua desde 1992, a Gesso 2000 é uma empresa familiar especializada em soluções técnicas e decorativas em gesso, unindo tradição, inovação e excelência em acabamento.
            </p>
            <p>
              Nossa trajetória começou há mais de três décadas, com profissionais experientes que transmitiram seus conhecimentos e práticas ao longo das gerações. Esse legado nos permitiu evoluir, mantendo a qualidade artesanal que nos diferencia, ao mesmo tempo em que incorporamos novas tecnologias, materiais e métodos construtivos.
            </p>
            <p>
              O nome Gesso 2000 surgiu em meio ao clima de incertezas que antecedia o ano 2000 — um marco simbólico de transformação. Enquanto muitos acreditavam que o mundo poderia mudar drasticamente, decidimos investir no que sabíamos fazer de melhor: moldar espaços com qualidade e precisão. Hoje, em 2025, esse nome representa solidez, longevidade e compromisso com o futuro da construção civil e da decoração.
            </p>
            <p>Atendemos projetos residenciais, comerciais e corporativos com foco em:</p>
            <ul>
              <li>Rebaixamento de tetos</li>
              <li>Sancas e molduras</li>
              <li>Iluminação embutida</li>
              <li>Divisórias e painéis em drywall</li>
              <li>Soluções acústicas e térmicas com gesso</li>
            </ul>
            <p>
              Acreditamos que o acabamento é uma das etapas mais importantes da obra, e por isso trabalhamos com planejamento rigoroso, execução qualificada e respeito aos prazos.
            </p>
            <p><strong>Gesso 2000 — há mais de 30 anos moldando qualidade e confiança em cada projeto.</strong></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

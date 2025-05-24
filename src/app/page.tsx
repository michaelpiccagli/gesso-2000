'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';

import '../styles/home.css';

export default function Home() {
  return (
    <>
      <section className="home-carousel">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 6000 }}
          speed={2000}
          loop
          className="swiper-home"
        >
          <SwiperSlide>
            <div className="carousel-slide" style={{ backgroundImage: "url('/images/gesso-sala.jpg')" }}>
              <h1 className="carousel-text">Transformando ambientes com elegância</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide" style={{ backgroundImage: "url('/images/gesso-3d.jpg')" }}>
              <h1 className="carousel-text">Soluções modernas em gesso</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="carousel-slide" style={{ backgroundImage: "url('/images/gesso-sala-2.jpg')" }}>
              <h1 className="carousel-text">Detalhes que fazem a diferença</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <a
        href="https://wa.me/5511993353912"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp">
        <Image
          src="/icons/whatsapp.svg"
          alt="WhatsApp" width={50} height={50} priority />
      </a>

    </>
  );
}

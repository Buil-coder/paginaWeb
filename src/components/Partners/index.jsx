"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 5,
  spaceBetween: 0,
  // autoplay: {
  //     delay: 2500,
  //     disableOnInteraction: false,
  // },
  loop: true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    767: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    1350: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
};
export default function Partners() {
  return (
    <>
      {/*Brand One Start*/}
      <section className="brand-one">
        <div className="container">
          <div className="section-title text-center ">
            <div className="section-title text-left">
              <div className="section-title__tagline-box">
                <span className="section-title__tagline">
                  UNIDADES DE NEGOCIO
                </span>
              </div>
              {/*               <h3 className="section-title__title">
                Soluciones Integrales para Proyectos Exitosos
              </h3> */}
            </div>
          </div>

          <Swiper
            {...swiperOptions}
            className="thm-swiper__slider swiper-container"
          >
            <div className="swiper-wrapper">
              <SwiperSlide>
                <a
                  href="https://www.dga-ing.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/partners/wordpress.png"
                    alt="Goar Frame"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://gemmaperu.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/img/partners/trello.png" alt="Goar Frame" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://territorialinmobiliaria.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/partners/webflow.png"
                    alt="Goar Frame"
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://goar.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/assets/img/partners/google.png" alt="Goar Frame" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a
                  href="https://ghg.com.pe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/assets/img/partners/dribbble.png"
                    alt="Goar Frame"
                  />
                </a>
              </SwiperSlide>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
}

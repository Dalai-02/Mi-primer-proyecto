import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import MovieCard from "./MovieCard";

function MovieCarousel({ movies, onVerDetalle }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false
      }}
      loop
      grabCursor
      slidesPerView={1}
      spaceBetween={16}
      breakpoints={{
        480: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 3
        },
        1024: {
          slidesPerView: 4
        },
        1280: {
          slidesPerView: 5
        }
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie.id}>
          <MovieCard
            title={movie.titulo}
            image={movie.imagen}
            onVerDetalle={() => onVerDetalle(movie.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default MovieCarousel;

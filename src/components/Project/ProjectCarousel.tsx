import type { ImageType } from "./Project.tsx";

// TS interfaces
interface CarouselType {
    images : ImageType ;
    nextSlide : () => void;
    prevSlide : () => void;
}

function ProjectCarousel({images, nextSlide, prevSlide} : CarouselType) {

  return (
      <div className="carousel">
          <img src={images.url} alt={images.title}/>
          <button className="prev" onClick={prevSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
              </svg>
          </button>
          <button className="next" onClick={nextSlide}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>

          </button>
      </div>
  );
}

export default ProjectCarousel;
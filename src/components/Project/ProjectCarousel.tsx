import type { ImageType } from "./Project.tsx";

// TS interfaces
interface CarouselType {
    images : ImageType ;
}

function ProjectCarousel({images} : CarouselType) {

  return (
    <div className="carousel">
 <img src={images.url} alt={images.title} />
    </div>
  );
}

export default ProjectCarousel;
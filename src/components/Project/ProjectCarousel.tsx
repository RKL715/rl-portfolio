interface CarouselType {
    images : ImageType [];
}

export interface ImageType {
    id: number;
    title : string
    url : string; //replace with src
}

function ProjectCarousel({images} : CarouselType) {
  return (
    <div className="carousel">
        {images.map((img, index) => (
            <img key={index} src={img.url} alt={img.title} />
        ))}
    </div>
  );
}

export default ProjectCarousel;
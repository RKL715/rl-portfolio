import type { ImageType } from "./Project.tsx";
import {useEffect, useState} from "react";
import ReactDOM from "react-dom";

// TS interfaces
interface CarouselType {
    images : ImageType ;
    nextSlide : () => void;
    prevSlide : () => void;
}

interface ModalType {
    src : string;
    alt : string;
    close : () => void;

}

function Modal({src, alt, close} : ModalType) {
    const [modalContainer] = useState(document.createElement("div"));

    useEffect(() => {
        modalContainer.className = "modal-container";
        document.body.appendChild(modalContainer);
        return () => {
            document.body.removeChild(modalContainer);
        }
    }, [modalContainer]);

    return ReactDOM.createPortal (
        <div className="modal" onClick={close}>
            <img src={src} alt={alt}/>
        </div>
        , modalContainer
    );
}

function ProjectCarousel({images, nextSlide, prevSlide} : CarouselType) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) };

  return (
      <div className="carousel" aria-label="Carousel">
            {isOpen && <Modal src={images.src} alt={images.title} close={closeModal}/>}
          <img src={images.src} alt={images.title} onClick={openModal} />
          <button className="prev" onClick={prevSlide} tabIndex={0} aria-label="Previous slide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
              </svg>
          </button>
          <button className="next" onClick={nextSlide} tabIndex={0} aria-label="Next slide">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
              </svg>
          </button>
      </div>
  );
}

export default ProjectCarousel;
import type { ImageType } from "./Project.tsx";
import {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {ArrowIcons} from "../ArrowIcons/ArrowIcons.tsx";
import SwipeEvents from "../MobileControl/SwipeEvents.tsx";

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
    nextSlide : () => void;
    prevSlide : () => void;
}

function Modal({src, alt, close, prevSlide, nextSlide} : ModalType) {
    const [modalContainer] = useState(document.createElement("div"));
    const modalRef = useRef<HTMLDivElement>(null);
    const swipeHandlers = SwipeEvents({ onSwipedLeft: () => nextSlide(), onSwipedRight: () => prevSlide() });

    useEffect(() => {
        modalContainer.className = "modal-container";
        document.body.appendChild(modalContainer);

        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                close();
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                close();
            }
            if (event.key === 'ArrowRight') {
                nextSlide();
            }
            if (event.key === 'ArrowLeft') {
                prevSlide();
            }
        });

        return () => {
            document.body.removeChild(modalContainer);
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', (event) => {
                if (event.key === 'Escape') {
                    close();
                }
                if (event.key === 'ArrowRight') {
                    nextSlide();
                }
                if (event.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
        }
    }, [modalContainer, close]);

    return ReactDOM.createPortal (
        <div className="modal" ref={modalRef}  {...swipeHandlers} >
            <div className="image">
                <img src={src} alt={alt}/>
                <button className="close-button" onClick={close}>X</button>
            </div>
            <button className="slideNav prev" onClick={prevSlide} tabIndex={0} aria-label="Previous slide">
                <ArrowIcons direction="prev"/>
            </button>
            <button className="slideNav next" onClick={nextSlide} tabIndex={0} aria-label="Next slide">
                <ArrowIcons direction="next"/>
            </button>
        </div>
        , modalContainer
    );
}

function ProjectCarousel({images, nextSlide, prevSlide} : CarouselType) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => { setIsOpen(true) };
    const closeModal = () => { setIsOpen(false) };

    const swipeHandlers = SwipeEvents({ onSwipedLeft: () => nextSlide(), onSwipedRight: () => prevSlide() });

  return (
      <div className="carousel" aria-label="Carousel" {...swipeHandlers}>
            {isOpen && <Modal src={images.src} alt={images.title} close={closeModal} prevSlide={prevSlide} nextSlide={nextSlide}/>}
          <img src={images.src} alt={images.title} onClick={openModal}/>
          <button className="prev" onClick={prevSlide} tabIndex={0} aria-label="Previous slide">
              <ArrowIcons direction="prev"/>
          </button>
          <button className="next" onClick={nextSlide} tabIndex={0} aria-label="Next slide">
              <ArrowIcons direction="next"/>
          </button>
      </div>
  );
}

export default ProjectCarousel;
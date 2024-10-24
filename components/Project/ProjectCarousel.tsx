import type { ImageType } from "./Project.tsx";
import {useEffect, useRef, useState} from "react";
import ReactDOM from "react-dom";
import {ArrowIcons} from "../ArrowIcons/ArrowIcons.tsx";
import Image from 'next/image';
import styles from "./ProjectCarousel.module.scss";

// TS interfaces
interface CarouselType {
    images : ImageType ;
    nextSlide : () => void;
    prevSlide : () => void;
}

interface ModalType {
    src : string;
    alt : string;
    width : number;
    height : number;
    close : () => void;
    nextSlide : () => void;
    prevSlide : () => void;
}

function Modal({src, alt, close, prevSlide, nextSlide} : ModalType) {
    const [modalContainer] = useState(document.createElement("div"));
    const modalRef = useRef<HTMLDivElement>(null);

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
        <div className={styles.modalContainer} ref={modalRef}   >
            <div className={styles.image}>
                <Image
                    src={src}
                    alt={alt}
                    width={50}
                    height={50}
                    layout="responsive"
                    objectFit="contain"
                />
                <button className={styles.closeButton} onClick={close}>X</button>
                <button className={`${styles.slideNav} ${styles.prev}`} onClick={prevSlide} tabIndex={0}
                        aria-label="Previous slide">
                    <ArrowIcons direction="prev"/>
                </button>
                <button className={`${styles.slideNav} ${styles.next}`} onClick={nextSlide} tabIndex={0}
                        aria-label="Next slide">
                    <ArrowIcons direction="next"/>
                </button>
            </div>
        </div>
        , modalContainer
    );
}

function ProjectCarousel({images, nextSlide, prevSlide}: CarouselType) {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true)
    };
    const closeModal = () => {
        setIsOpen(false)
    };


    return (
      <div className={styles.carousel} aria-label="Carousel" >
            {isOpen && (
                <Modal
                    src={images.src}
                    alt={images.title}
                    width={600}
                    height={400}
                    close={closeModal}
                    prevSlide={prevSlide}
                    nextSlide={nextSlide}/>
            )}
          <div onClick={openModal}>
               <Image
                     src={images.src}
                     alt={images.title}
                     width={50}
                     height={50}
                     layout="responsive"
          />
            </div>
          <button className={styles.prev} onClick={prevSlide} tabIndex={0} aria-label="Previous slide">
              <ArrowIcons direction="prev"/>
          </button>
          <button className={styles.next} onClick={nextSlide} tabIndex={0} aria-label="Next slide">
              <ArrowIcons direction="next"/>
          </button>
      </div>
  );
}

export default ProjectCarousel;
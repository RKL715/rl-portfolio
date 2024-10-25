import type { ImageType } from "./Project.tsx";
import Image from 'next/image';
import styles from "./ProjectCarousel.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css/zoom';
import {Keyboard, Navigation, Zoom, Pagination} from 'swiper/modules';

interface ProjectCarouselProps {
    images: ImageType[];
    current: number;
    nextSlide: () => void;
    prevSlide: () => void;
}

export default function ProjectCarousel ({ images,current}: ProjectCarouselProps) {
    if (!Array.isArray(images) || images.length <= 0) {
        return <p>No Image</p>
    }

    return (
        <div className={styles.carousel} aria-label="Carousel">
            <Swiper
                keyboard={{
                    enabled: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                modules={[Keyboard, Navigation, Zoom, Pagination]}
                navigation={true}
                zoom={{
                    maxRatio: 2,
                }}
                initialSlide={current}
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-zoom-container">
                            <Image className={styles.img}
                                src={image.src}
                                alt={image.title}
                                width={50}
                                height={50}
                                layout="responsive"
                            />
                        </div>
                    </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
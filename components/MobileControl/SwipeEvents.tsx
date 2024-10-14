import React, {useState} from "react";

interface SwipeInput {
    onSwipedLeft: () => void;
    onSwipedRight: () => void;
}

interface SwipeOutput {
    onTouchStart: (event: React.TouchEvent) => void;
    onTouchMove: (event: React.TouchEvent) => void;
    onTouchEnd: () => void;
}

export default (input: SwipeInput): SwipeOutput =>{
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const minSwipeDistance = 50;

    const onTouchStart = (event: React.TouchEvent) => {
        setTouchEnd(0); // prevent swipe on touch start
        setTouchStart(event.touches[0].clientX);
    }

    const onTouchMove = (event: React.TouchEvent) => { setTouchEnd(event.touches[0].clientX); }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            input.onSwipedLeft();
        }
        if (isRightSwipe) {
            input.onSwipedRight();
        }
    }

    return {onTouchStart, onTouchMove, onTouchEnd};
}
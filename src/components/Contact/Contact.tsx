import React, {useEffect, useRef} from 'react';

interface ContactModalProps {
    closeContactModal: () => void;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


function ContactModal ( {closeContactModal, isVisible, setIsVisible} : ContactModalProps) {

    // TO Create a reference to the modal
    const modalRef = useRef<HTMLDivElement>(null);

    // TO Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                setIsVisible(false);
                setTimeout(() => {
                    closeContactModal();
                }, 500);
            }
        }
    // TO Close modal when pressing escape key
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setIsVisible(false);
                setTimeout(() => {
                    closeContactModal();
                }, 500);
            }
        }

    // Event listeners for click outside and escape key
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapePress);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapePress);
        }
    }, [closeContactModal]);

    // TO Handle form submission
    const handleSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        setIsVisible(false);
        setTimeout(() => {
            closeContactModal();
        }, 500);
    }

    // TO Render the contact form
    return (
        <div className={`contact-form ${isVisible ? "fade-in" : "fade-out"}`} ref={modalRef}>
            <div className="contact-form-top">
                <h2 className="contact-form-title">CONTACT</h2>
            </div>

            <form onSubmit={handleSubmit}
                  action="https://formsubmit.co/ray.fameley@pm.me" method="POST">
            <div className="contact-form-fields">
                <label htmlFor="name"></label>
                <input type="text" id="name" name="name" placeholder="NAME" required/>

                <label htmlFor="email"></label>
                <input type="email" id="email" name="email" placeholder="E-MAIL" required/>

                <label htmlFor="message"></label>
                <textarea id="message" name="message" placeholder="MESSAGE" required></textarea>

                <button type="submit" className="submit">
                    <img src="/icons/Paper_send.png" alt="Bouton envoyer le mail" width="30"/>
                </button>
            </div>
        </form>
</div>
)
}

export default ContactModal

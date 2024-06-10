import React, { useEffect, useRef } from 'react';

interface ContactModalProps {
    closeContactModal: () => void;
}


function ContactModal ( {closeContactModal} : ContactModalProps) {

    // TO Create a reference to the modal
    const modalRef = useRef<HTMLDivElement>(null);

    // TO Close modal when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeContactModal();
            }
        }
    // TO Close modal when pressing escape key
        const handleEscapePress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeContactModal();
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
        closeContactModal();
    }

    // TO Render the contact form
    return (
    <div className="contact-form" ref={modalRef}>
        <div className="contact-form-top">
        <h2 className="contact-form-title">CONTACT</h2>
        </div>

        <form onSubmit={handleSubmit}>
        <div className="contact-form-fields">
            <label htmlFor="name"></label>
            <input type="text" id="name" name="name" placeholder="NAME" required />

            <label htmlFor="email"></label>
            <input type="email" id="email" name="email" placeholder="E-MAIL" required />

            <label htmlFor="message"></label>
            <textarea id="message" name="message" placeholder="MESSAGE" required></textarea>

            <button type="submit" className="submit">
                <img src="public/Paper_send.png" alt="Bouton envoyer le mail" width="30"/>
            </button>
        </div>
        </form>
    </div>
    )
}

export default ContactModal

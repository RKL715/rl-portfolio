import React, {useEffect, useRef, useState} from 'react';
import mail_sending from '/icons/mail_sending.webp';

interface ContactModalProps {
    closeContactModal: () => void;
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}


function ContactModal ( {closeContactModal} : ContactModalProps) {

    const modalRef = useRef<HTMLDivElement>(null); // TO Create a reference to the modal
    const [isVisible, setIsVisible] = useState(true); // TO Create a state to manage the visibility of the modal
    const [result, setResult] = useState(''); // TO Create a state to manage the result of the form submission

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
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult('sending');

        const formData = new FormData(event.currentTarget);
        formData.append("access_key", "5fe833ef-4663-4411-a3f9-c1e1c9ad4e48");

        const response = await fetch ("https://api.web3forms.com/submit",{
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('success');
            event.currentTarget.reset ();
            closeContactModal();
        } else {
            setResult(data.message);
        }
    };

    // TO Render the contact form
    return (
        <div className={`contact-form ${isVisible ? "fade-in" : "fade-out"}`} ref={modalRef}>
            <div className="contact-form-top">
                <h2 className="contact-form-title">CONTACT</h2>
            </div>

            <form onSubmit={handleSubmit}>
                <div className="contact-form-fields">
                    <label htmlFor="name"></label>
                    <input type="text" id="name" name="name" placeholder="NAME" required/>

                    <label htmlFor="email"></label>
                    <input type="email" id="email" name="email" placeholder="E-MAIL" required/>

                    <label htmlFor="message"></label>
                    <textarea id="message" name="message" placeholder="MESSAGE" required></textarea>

                    <button type="submit" className="submit">
                        {result !== 'sending' && result !=='success' && <img src="/icons/send_mail.webp" alt="Bouton envoyer le mail" width="30"/>}
                        {result === 'sending' &&  <img src={mail_sending} alt="Mail en cours d'envoi" className="sending" width="30"/>}
                        {result === 'success' ? <img src="/icons/checked.webp" alt="Mail envoyé" width="30"/> : null}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactModal

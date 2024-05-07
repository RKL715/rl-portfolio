import React from 'react';
interface ContactModalProps {
    closeContactModal: () => void;
}


function ContactModal ( {closeContactModal} : ContactModalProps) {

    const handleSubmit = (event : React.FormEvent) => {
        event.preventDefault();
        closeContactModal();
    }


    return (
    <div className="contact-form">
        <h2 className="contact-form-title">Contact</h2>

        <button onClick={closeContactModal} className="contact-form-close">X</button>
        <form onSubmit={handleSubmit}>

            <label htmlFor="filter">Objet</label>
            <select id="filter" name="filter" required>
                <option value="projet">Projet</option>
                <option value="question">Question</option>
                <option value="autre">Autre</option>
            </select>

            <label htmlFor="name">Nom</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required></textarea>

            <button type="submit">Envoyer</button>
        </form>
    </div>
    )
}

export default ContactModal

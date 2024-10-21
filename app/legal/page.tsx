import styles from './Legal.module.scss'

function LegalTerms () {
    return (
        <div className={styles.PrivacyContainer}>
            <h2>Politique de Confidentialité</h2>
            <p>Lorsque vous remplissez le formulaire de contact, votre nom, votre adresse e-mail et le contenu de votre message sont collectés afin de répondre à vos demandes.
             <br/>
                Vos informations personnelles ne seront utilisées que dans le but de vous contacter et de répondre à vos demandes. Elles ne seront en aucun cas partagées avec des tiers sans votre consentement explicite.
                <br/>
                Le formulaire de contact utilise le service tiers Web3forms (https://web3forms.com/).</p>
<br/>
            <p>Les icônes proviennent de <a href="https://icons8.com/license" target="_blank" rel="noreferrer">Icon8</a>.</p>

<br/>
            <p className={styles.licence}>GPL-3.0 License</p>
        </div>
    )
}

export default LegalTerms

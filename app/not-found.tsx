import styles from './NotFound.module.scss'
import Link from "next/link";

function NotFound () {
    return (
        <div className={styles.notFoundContainer}>
            <h2>Oups</h2>
            <p>Cette page n'existe pas.</p> <br/>
            <p>Pour revenir à l'accueil, <Link href="/">cliquez ici</Link></p>
        </div>
    )
}

export default NotFound
import styles from './NotFound.module.scss'

function NotFound () {
    return (
        <div className={styles.notFoundContainer}>
            <h2>Oups</h2>
            <p>Cette page n'existe pas.</p> <br/>
            <p>Pour revenir à l'accueil, <a href="/">cliquez ici</a></p>
        </div>
    )
}

export default NotFound
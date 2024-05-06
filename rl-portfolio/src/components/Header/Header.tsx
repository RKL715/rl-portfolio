import { Link } from 'react-router-dom';

function Header () {
    return (
        <header>
            <a className="header-logo" href="/">
                <img src="https://via.placeholder.com/150" alt="Logo du site de Rémy LAFAYE"/>
            </a>

            <div className="header-top-block">
                <h1>Rémy LAFAYE</h1>
                <p>Développeur intégrateur web</p>
            </div>

            <div className="header_middle_block">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Projets</Link> {/* replace to="/projets"  when it's done*/}
                        </li>
                        <li>
                            <a href="https://github.com/RKL715" target="_blank" rel="noopener noreferrer">Github</a>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="header_bottom_block">
                <button>Contact</button>
                {/*This button will open a contact modal*/}
            </div>
        </header>
    )
}

export default Header
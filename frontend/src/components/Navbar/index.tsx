import {ReactComponent as GithubIcone} from 'assets/img/github.svg';
import "./style.css";

function Navbar() {
    return (
        <header>
            <nav className="container">
                <div className="dsmovie-nav-content">
                    <h1>DSMovie</h1>
                    <a href="https://github.com/devsuperior/sds-dsmovie/tree/main/episodio1">
                        <div>
                            <GithubIcone />
                            <p>/devsuperior</p>
                        </div>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;
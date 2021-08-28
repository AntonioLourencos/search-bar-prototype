import './index.css';

const Header = (): JSX.Element => {
    return (
        <header id="Header">
            <div id="Logo">
                <span>Search News - AntonioLourencos</span>
            </div>
            <div id="Menu">
                <a href="https://newsapi.org/" rel="noreferrer" target="_blank">
                    <span>Services</span>
                </a>
                <a
                    href="https://github.com/antoniolourencos/"
                    rel="noreferrer"
                    target="_blank"
                >
                    <span>Repository</span>
                </a>
            </div>
        </header>
    );
}

export default Header;

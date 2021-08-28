import './index.css';

const Footer = (): JSX.Element => {
    return (
        <footer id="Footer">
            <div id="Networking">
                <span>
                    Created by{" "}
                    <a
                        href="https://github.com/antoniolourencos/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <span>AntonioLourencos</span>
                    </a>
                </span>
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
        </footer>
    );
}

export default Footer;

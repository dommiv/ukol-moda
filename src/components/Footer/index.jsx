import React from 'react';
import './style.css';

const Footer = ({year, author}) => {
    return (
        <div className="footer">
            <footer class="footer">
                <p> &copy; {year}, {author} </p>
                <p class="footer__disclosure">Jsme fiktivní firma, která nic neprodává a v žádném případě ani za nic neručí.</p>
            </footer>
        </div>
    );
};

export default Footer
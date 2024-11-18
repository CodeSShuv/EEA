import React from 'react';
import './footer.css'; // Import the CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <p className="quote">
                "A different language is a different vision of life." – Federico Fellini
            </p>
            <div className="contact-info">
                <h4>Contact Us</h4>
                <p>Email: info@educationcourse.com</p>
                <p>Phone: +1 (123) 456-7890</p>
                <p>Address: 123 Education St, Learning City, LC 12345</p>
            </div>
        </footer>
    );
};

export default Footer;
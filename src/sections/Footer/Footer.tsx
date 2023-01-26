import { FC } from 'react';
import { Logo } from '../../components/Logo/Logo';
import icon_1 from '../../images/social/icon_1.svg';
import icon_2 from '../../images/social/icon_2.svg';
import icon_3 from '../../images/social/icon_3.svg';
import icon_4 from '../../images/social/icon_4.svg';
import './Footer.css';

export const Footer: FC = () => {
  return (
    <div className="footer_wrapper">
        <footer className="footer">
            <div className="footer_content wrapper">
                <div className="footer_address">
                    <Logo />
                    <p className="footer_address_text">
                        Wisconsin Ave, Suite 700<br />
                        Chevy Chase, Maryland 20815
                    </p>
                </div>

                <div className="footer_company">
                    <span className="footer_title">Company</span>
                    <ul className="footer_company_links">
                        <li className="company_link"><a href="#about_section">About Us</a></li>
                        <li className="company_link"><a href="#review_section">Review</a></li>
                        <li className="company_link"><a href="#steps_section">Steps</a></li>
                        <li className="company_link"><a href="#gallery_section">Gallery</a></li>
                        <li className="company_link"><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <div className="footer_social">
                    <span className="footer_title">Social media</span>
                    <ul className="footer_social_links">
                        <li className="social_link"><a href="#">
                            <img src={icon_1} alt="social icon" height="24" />
                        </a></li>
                        <li className="social_link"><a href="#">
                            <img src={icon_2} alt="social icon" height="24" />
                        </a></li>
                        <li className="social_link"><a href="#">
                            <img src={icon_3} alt="social icon" height="24" />
                        </a></li>
                        <li className="social_link"><a href="#">
                            <img src={icon_4} alt="social icon" height="24" />
                        </a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  );
}

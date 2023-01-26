import { FC } from 'react';
import { Logo } from '../../components/Logo/Logo';
import './Header.css';

export const Header: FC = () => {
  return (
    <header className="header wrapper">
        <Logo />

        <nav className="header_links">
            <a href="#about_section" className="header_links_item">About</a>
            <a href="#technologies_section" className="header_links_item">Programms</a>
            <a href="#steps_section" className="header_links_item">Steps</a>
            <a href="#questions_section" className="header_links_item">Questions</a>
            <a href="#contact_section" className="header_links_item">Get in touch</a>
        </nav>
    </header>
  );
}

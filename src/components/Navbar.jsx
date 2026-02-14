import { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const styles = {
        nav: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1.5rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
        },
        logo: {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: 'var(--accent-primary)',
            textDecoration: 'none',
        },
        links: {
            display: 'flex',
            gap: '2rem',
        },
        link: {
            color: 'var(--text-primary)',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: '500',
            transition: 'color 0.2s',
            cursor: 'pointer',
        },
        linkHover: {
            color: 'var(--accent-primary)',
        }
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav style={styles.nav}>
            <a href="#" style={styles.logo} onClick={() => scrollToSection('hero')}>
                DataSci.Port
            </a>
            <div style={styles.links}>
                {['About', 'Skills', 'Resume', 'Projects', 'Contact'].map((item) => (
                    <a header-link="true"
                        key={item}
                        onClick={() => scrollToSection(item.toLowerCase())}
                        style={styles.link}
                        onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                        onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
                    >
                        {item}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

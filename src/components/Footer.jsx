const Footer = () => {
    const styles = {
        footer: {
            padding: '3rem 2rem',
            backgroundColor: 'var(--bg-secondary)',
            textAlign: 'center',
            marginTop: '4rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        },
        text: {
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            marginBottom: '1rem',
        },
        links: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            marginBottom: '1.5rem',
        },
        link: {
            color: 'var(--text-primary)',
            fontSize: '1rem',
            transition: 'color 0.2s',
        }
    };

    return (
        <footer style={styles.footer}>
            <div style={styles.links}>
                <a href="https://www.linkedin.com/in/basantlal-prajapati" style={styles.link}>LinkedIn</a>
                <a href="https://www.github.com/Basant2206" style={styles.link}>GitHub</a>
                <a href="#" style={styles.link}>Kaggle</a> 
                <a href="#" style={styles.link}>Twitter</a>
                
            </div>
            <p style={styles.text}>
                © {new Date().getFullYear()} All right reserved to Basant lal prajapati.
            </p>
            
        </footer>
    );
};

export default Footer;

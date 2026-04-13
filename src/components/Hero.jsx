const Hero = () => {
    const styles = {
        section: {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '0 2rem',
            background: 'linear-gradient(to bottom, var(--bg-primary), var(--bg-secondary))',
            position: 'relative',
            overflow: 'hidden',
        },
        eyebrow: {
            color: 'var(--accent-primary)',
            fontSize: '1.2rem',
            marginBottom: '1rem',
            letterSpacing: '2px',
            textTransform: 'uppercase',
        },
        title: {
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            background: 'linear-gradient(45deg, #fff, #a0a0a0)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        highlight: {
            color: 'var(--accent-secondary)',
            background: 'linear-gradient(45deg, var(--accent-primary), var(--accent-secondary))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
        },
        subtitle: {
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            marginBottom: '3rem',
        },
        cta: {
            padding: '1rem 2.5rem',
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'var(--bg-primary)',
            backgroundColor: 'var(--accent-primary)',
            borderRadius: '50px',
            border: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 0 20px var(--accent-glow)',
        }
    };

    return (
        <section id="hero" style={styles.section}>
            <p style={styles.eyebrow}>Hello, I'm Basant Lal Prajapati</p>
            <h1 style={styles.title}>
                Data Scientist <br />
                <span style={styles.highlight}>& AI Engineer</span>
            </h1>
            <p style={styles.subtitle}>
                Results driven Data Scientist (ISI Kolkata alumnus) building end-to-end ML pipelines and scaling AI solutions.
            </p>
            <button
                style={styles.cta}
                onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.boxShadow = '0 0 30px var(--accent-glow)';
                }}
                onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.boxShadow = '0 0 20px var(--accent-glow)';
                }}
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
                View My Work
            </button>
        </section>
    );
};

export default Hero;

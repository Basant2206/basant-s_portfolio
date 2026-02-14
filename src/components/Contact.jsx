const Contact = () => {
    const styles = {
        section: {
            padding: '6rem 2rem',
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '2rem',
        },
        text: {
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            marginBottom: '3rem',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            textAlign: 'left',
        },
        inputGroup: {
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        },
        label: {
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
        },
        input: {
            padding: '1rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            outline: 'none',
            transition: 'border-color 0.2s',
        },
        textarea: {
            padding: '1rem',
            backgroundColor: 'var(--bg-card)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'var(--radius-sm)',
            color: 'var(--text-primary)',
            fontSize: '1rem',
            outline: 'none',
            minHeight: '150px',
            resize: 'vertical',
        },
        button: {
            padding: '1rem 2rem',
            backgroundColor: 'var(--accent-primary)',
            color: 'var(--bg-primary)',
            border: 'none',
            borderRadius: 'var(--radius-sm)',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            transition: 'transform 0.2s, background-color 0.2s',
        }
    };

    return (
        <section id="contact" style={styles.section}>
            <h2 style={styles.title}>Get In Touch</h2>
            <p style={styles.text}>
                Interested in collaborating or have a question? Feel free to reach out!
            </p>
            <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Name</label>
                    <input type="text" style={styles.input} placeholder="Your Name" />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Email</label>
                    <input type="email" style={styles.input} placeholder="your.email@example.com" />
                </div>
                <div style={styles.inputGroup}>
                    <label style={styles.label}>Message</label>
                    <textarea style={styles.textarea} placeholder="Project details or just a hello..." />
                </div>
                <button
                    style={styles.button}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;

import { certifications, contactInfo } from '../data/certifications';

const Resume = () => {
    const styles = {
        section: {
            padding: '6rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            backgroundColor: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            marginTop: '2rem',
        },
        header: {
            textAlign: 'center',
            marginBottom: '3rem',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '1rem',
        },
        contactGrid: {
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap',
            marginBottom: '3rem',
        },
        contactItem: {
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-secondary)',
            fontSize: '1.1rem',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            padding: '0.8rem 1.5rem',
            borderRadius: 'var(--radius-md)',
            transition: 'color 0.2s',
            textDecoration: 'none',
        },
        subTitle: {
            fontSize: '1.8rem',
            marginBottom: '2rem',
            borderLeft: '4px solid var(--accent-secondary)',
            paddingLeft: '1rem',
        },
        certGrid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem',
        },
        certCard: {
            backgroundColor: 'var(--bg-card)',
            padding: '1.5rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
        },
        certTitle: {
            fontSize: '1.1rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
        },
        certIssuer: {
            color: 'var(--accent-primary)',
            fontSize: '0.9rem',
        },
        certDate: {
            color: 'var(--text-secondary)',
            fontSize: '0.85rem',
            fontStyle: 'italic',
        },
        downloadBtn: {
            display: 'inline-block',
            marginTop: '3rem',
            padding: '0.8rem 2rem',
            backgroundColor: 'transparent',
            border: '1px solid var(--accent-primary)',
            color: 'var(--accent-primary)',
            borderRadius: 'var(--radius-sm)',
            fontSize: '1rem',
            fontWeight: '600',
            textDecoration: 'none',
            transition: 'all 0.2s',
            cursor: 'pointer',
        },
        link: {
            display: 'inline-block',
            color: 'var(--bg-primary)',
            backgroundColor: 'var(--text-primary)',
            padding: '0.6rem 1.2rem',
            fontWeight: '600',
            borderRadius: 'var(--radius-sm)',
            marginRight: '1rem',
            fontSize: '0.9rem',
        }
    };

    return (
        <section id="resume" style={styles.section}>
            <div style={styles.header}>
                <h2 style={styles.title}>Resume & Certifications</h2>
            </div>

            <div style={styles.contactGrid}>
                <a href={`mailto:${contactInfo.email}`} style={styles.contactItem}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                    📧 {contactInfo.email}
                </a>
                <div style={styles.contactItem}>
                    📱 {contactInfo.phone}
                </div>
                <div style={styles.contactItem}>
                    📍 {contactInfo.location}
                </div>
            </div>

            <div>
                <h3 style={styles.subTitle}>Certifications</h3>
                <div style={styles.certGrid}>
                    {certifications.map((cert) => (
                        <div key={cert.id} style={styles.certCard}>
                            <div style={styles.certTitle}>{cert.title}</div>
                            <div style={styles.certIssuer}>{cert.issuer}</div>
                            <div style={styles.certDate}>{cert.date}</div>
                            <a href={cert.link} style={styles.link}>View Certificate</a>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ textAlign: 'center' }}>
                <a href="https://drive.google.com/file/d/1s_RZCpEJj4yfQkhPr8TGZpiBtAJg3Ghu/view?usp=sharing" style={styles.downloadBtn}
                    onMouseEnter={(e) => {
                        e.target.style.backgroundColor = 'var(--accent-primary)';
                        e.target.style.color = 'var(--bg-primary)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--accent-primary)';
                    }}
                >
                    Download Full Resume (PDF)
                </a>
            </div>
        </section>
    );
};

export default Resume;

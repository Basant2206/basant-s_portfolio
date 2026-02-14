import { skills } from '../data/skills';

const Skills = () => {
    const styles = {
        section: {
            padding: '6rem 2rem',
            backgroundColor: 'var(--bg-secondary)',
        },
        container: {
            maxWidth: '1200px',
            margin: '0 auto',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '3rem',
            textAlign: 'center',
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
        },
        card: {
            backgroundColor: 'var(--bg-card)',
            padding: '2rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid rgba(126, 6, 6, 0.05)',
            transition: 'transform 0.3s ease',
        },
        category: {
            color: 'var(--accent-secondary)',
            marginBottom: '1.5rem',
            fontSize: '1.3rem',
            fontWeight: '600',
        },
        list: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.8rem',
        },
        item: {
            backgroundColor: 'rgba(62, 82, 240, 0.05)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-sm)',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)',
            border: '1px solid rgba(6, 231, 17, 0.1)',
            transition: 'all 0.2s',
        }
    };

    return (
        <section id="skills" style={styles.section}>
            <div style={styles.container}>
                <h2 style={styles.title}>Technical Skills</h2>
                <div style={styles.grid}>
                    {skills.map((skillGroup, index) => (
                        <div
                            key={index}
                            style={styles.card}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <h3 style={styles.category}>{skillGroup.category}</h3>
                            <div style={styles.list}>
                                {skillGroup.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        style={styles.item}
                                        onMouseEnter={(e) => {
                                            e.target.style.backgroundColor = 'var(--accent-primary)';
                                            e.target.style.color = 'var(--bg-primary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                                            e.target.style.color = 'var(--text-secondary)';
                                        }}
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;

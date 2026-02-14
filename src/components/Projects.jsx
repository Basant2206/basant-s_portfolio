import { projects } from '../data/projects';

const Projects = () => {
    const styles = {
        section: {
            padding: '6rem 2rem',
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
        },
        card: {
            backgroundColor: 'var(--bg-card)',
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            border: '1px solid rgba(255, 255, 255, 0.05)',
        },
        image: {
            width: '100%',
            height: '200px',
            objectFit: 'cover',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
        },
        content: {
            padding: '1.5rem',
        },
        projectTitle: {
            fontSize: '1.4rem',
            marginBottom: '0.8rem',
            color: 'var(--text-primary)',
        },
        description: {
            color: 'var(--text-secondary)',
            fontSize: '1rem',
            marginBottom: '1.5rem',
            lineHeight: '1.5',
        },
        techStack: {
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginBottom: '1.5rem',
        },
        tag: {
            fontSize: '0.8rem',
            color: 'var(--accent-primary)',
            backgroundColor: 'rgba(0, 243, 255, 0.1)',
            padding: '0.2rem 0.6rem',
            borderRadius: '12px',
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
        <section id="projects" style={styles.section}>
            <h2 style={styles.title}>Featured Projects</h2>
            <div style={styles.grid}>
                {projects.map((project) => (
                    <div
                        key={project.id}
                        style={styles.card}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <div style={styles.image}>
                            <img
                                src={project.image}
                                alt={project.title}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover'
                                }}
                            />
                        </div>
                        <div style={styles.content}>
                            <h3 style={styles.projectTitle}>{project.title}</h3>
                            <p style={styles.description}>{project.description}</p>
                            <div style={styles.techStack}>
                                {project.tech.map((t, i) => (
                                    <span key={i} style={styles.tag}>{t}</span>
                                ))}
                            </div>
                            <a href={project.link} style={styles.link}>View Project</a>
                            <a href={project.github} style={{ ...styles.link, backgroundColor: 'transparent', color: 'var(--text-primary)', border: '1px solid var(--text-primary)' }}>GitHub</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

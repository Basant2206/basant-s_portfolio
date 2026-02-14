const About = () => {
    const styles = {
        section: {
            padding: '6rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '2rem',
            borderLeft: '5px solid var(--accent-primary)',
            paddingLeft: '1rem',
        },
        text: {
            color: 'var(--text-secondary)',
            fontSize: '1.2rem',
            lineHeight: '1.8',
            marginBottom: '1.5rem',
        },
        highlight: {
            color: 'var(--text-primary)',
            fontWeight: '600',
        }
    };

    return (
        <section id="about" style={styles.section}>
            <h2 style={styles.title}>About Me</h2>
            <p style={styles.text}>
                I am a results-driven <span style={styles.highlight}>Data Scientist</span> and ISI Kolkata alumnus with expertise in building end-to-end ML pipelines, Data Analysis, Natural Language Processing, and Generative AI.
                I specialize in translating complex data into actionable insights that solve real business problems.
            </p>
            <p style={styles.text}>
                Passionate about MLOps and scaling AI solutions, I have experience developing predictive systems, traffic control agents using Deep Q-Learning, and AI-powered hiring assistants.
                My goal is to build intelligent systems that are not only accurate but also robust and scalable.
            </p>
        </section>
    );
};

export default About;

const Contact = () => {
    const styles = {
        section: {
            padding: '6rem 2rem',
            maxWidth: '1000px',
            margin: '0 auto',
            textAlign: 'center',
        },
        title: {
            fontSize: '2.5rem',
            marginBottom: '1.5rem',
        },
        text: {
            color: '#d8d6d6',
            fontSize: '1.1rem',
            marginBottom: '1rem',
            textAlign: 'center'
        },
        list: {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.5rem',
            listStyle: 'none',
            padding: 0,
            marginTop: '2rem',
            marginBottom: '3rem',
        },
        listItem: {
            background: '#ffffff',
            color: '#333',
            padding: '1.2rem',
            borderRadius: '12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
            fontWeight: '500',
            textAlign: 'left',          
            display: 'flex',            
            alignItems: 'center',
            gap: '0.5rem'
        },
        button: {
            display: 'inline-block',
            marginTop: '1rem',
            padding: '1rem 2.5rem',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            color: '#fff',
            borderRadius: '30px',
            textDecoration: 'none',
            fontWeight: '600',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            transition: '0.3s'
        }
    };

    const services = [
        "Data Analysis Projects",
        "Power BI Dashboard Development",
        "SQL & Database Work",
        "Machine Learning / AI Projects",
        "Data Visualization",
        "Data-Driven Decision Support",
        "AI Agent Development",
        "LLM Prompt Engineering",
        "Website Development",
        "Freelance Collaboration",
        "Internship Opportunities",
        "Full-Time Job Opportunities",
        "General Queries / Guidance"
    ];

    return (
        <section id="contact" style={styles.section}>
            <h2 style={styles.title}>Get In Touch</h2>

            <p style={styles.text}>
                Interested in collaborating or have a question? Feel free to reach out!
            </p>
            <p style={styles.text}>
                You can contact me for, but not limited to:
            </p>

            {/* Card Grid */}
            <ul style={styles.list}>
                {services.map((service, index) => (
                    <li key={index} style={styles.listItem}>
                    <span style={{ color: '#25D366', fontWeight: 'bold' }}>✔</span>
                    <span>{service}</span>
                    </li>
                ))}
            </ul>

            {/* WhatsApp Button */}
            <a
                href="https://wa.me/917003792267?text=Hello%20I%20want%20to%20connect%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                style={styles.button}
            >
                Chat on WhatsApp
            </a>
        </section>
    );
};

export default Contact;
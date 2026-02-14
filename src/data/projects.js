import project1 from '../assets/bike.png';
import project2 from '../assets/traffic.png';
import project3 from '../assets/fraud.png';
import project4 from '../assets/hiringassistant.png';

export const projects = [
  {
    id: 1,
    title: "Predictive Maintenance for Bike Sharing",
    description: "End-to-end system predicting bike component failures to enhance safety and availability using synthetic data and ML models.",
    tech: ["Python", "FastAPI", "XGBoost", "React.js", "PostgreSQL", "Docker"],
    image: project1,
    link: "https://github.com/Basant2206/Predictive-Maintenance-for-Bike-Sharing-frontend",
    github: "https://github.com/Basant2206/Predictive-Maintenance-for-Bike-Sharing"
  },
  {
    id: 2,
    title: "AI Powered Adaptive Traffic Signal Control",
    description: "Deep Q-Learning agent optimizing traffic signals in real-time using SUMO simulation, achieving 80% improvement over fixed timers.",
    tech: ["Python", "PyTorch", "SUMO", "FastAPI", "React.js"],
    image: project2,
    link: "https://github.com/Basant2206/Dashboard_Adaptive_Traffic",
    github: "https://github.com/Basant2206/Adaptive_Traffic"
  },
  {
    id: 3,
    title: "Fraud Transaction Detection",
    description: "ML model predicting fraudulent transactions using various algorithms like Random Forest and Gradient Boosting with SMOTE.",
    tech: ["Python", "Scikit-learn", "Pandas", "Machine Learning"],
    image: project3,
    link: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Hiring Assistant Chatbot",
    description: "AI-powered chatbot for talent scouting that conducts technical interviews and performs sentiment analysis using LLMs.",
    tech: ["Streamlit", "LangChain", "OpenAI GPT", "Hugging Face"],
    image: project4,
    link: "https://github.com/Basant2206/HiringAssistantchatbot_for_TalentScout_using_Streamlit_OpenAI",
    github: "https://github.com/Basant2206/HiringAssistantchatbot_for_TalentScout_using_Streamlit_OpenAI"
  }
];

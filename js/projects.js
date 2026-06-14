// Sample Projects Data (Replace with your actual projects)
const projects = [
    {
        id: 1,
        title: "E-Commerce API",
        category: "backend",
        description: "RESTful API for e-commerce platform with JWT authentication, product management, and payment integration.",
        tech: ["Node.js", "Express", "MongoDB", "JWT"],
        image: "https://via.placeholder.com/400x250?text=E-Commerce+API",
        liveLink: "#",
        codeLink: "https://github.com/yourusername/project1"
    },
    {
        id: 2,
        title: "Task Management App",
        category: "fullstack",
        description: "Fullstack task manager with real-time updates, user authentication, and team collaboration features.",
        tech: ["React", "Node.js", "Socket.io", "PostgreSQL"],
        image: "https://via.placeholder.com/400x250?text=Task+Manager",
        liveLink: "#",
        codeLink: "https://github.com/yourusername/project2"
    },
    {
        id: 3,
        title: "Portfolio Dashboard",
        category: "frontend",
        description: "Interactive dashboard with charts, data visualization, and responsive design.",
        tech: ["React", "Chart.js", "Tailwind CSS"],
        image: "https://via.placeholder.com/400x250?text=Dashboard",
        liveLink: "#",
        codeLink: "https://github.com/yourusername/project3"
    },
    {
        id: 4,
        title: "Real-time Chat App",
        category: "fullstack",
        description: "Instant messaging app with rooms, private messages, and file sharing capabilities.",
        tech: ["Node.js", "Socket.io", "React", "MongoDB"],
        image: "https://via.placeholder.com/400x250?text=Chat+App",
        liveLink: "#",
        codeLink: "https://github.com/yourusername/project4"
    }
];

// Render Projects
function renderProjects(projectsToRender) {
    const container = document.getElementById('projects-container');
    if (!container) return;
    
    container.innerHTML = projectsToRender.map(project => `
        <div class="project-card" data-aos="fade-up" data-category="${project.category}">
            <img src="${project.image}" alt="${project.title} screenshot">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" target="_blank" class="btn-live">Live Demo <i class="fas fa-external-link-alt"></i></a>
                    <a href="${project.codeLink}" target="_blank" class="btn-code">Code <i class="fab fa-github"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Filter Projects
function filterProjects(category) {
    const filtered = category === 'all' 
        ? projects 
        : projects.filter(p => p.category === category);
    renderProjects(filtered);
}

// Event Listeners for Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterProjects(btn.getAttribute('data-filter'));
    });
});

// Initial Render
renderProjects(projects);

// Add CSS for projects page
const style = document.createElement('style');
style.textContent = `
    .projects-hero {
        padding: 120px 0 60px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        text-align: center;
    }
    
    .projects-hero h1 {
        font-size: 3rem;
        margin-bottom: 1rem;
    }
    
    .filter-buttons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-bottom: 3rem;
        flex-wrap: wrap;
    }
    
    .filter-btn {
        padding: 10px 25px;
        border: 2px solid var(--primary-color);
        background: transparent;
        color: var(--primary-color);
        border-radius: 25px;
        cursor: pointer;
        transition: var(--transition);
    }
    
    .filter-btn:hover,
    .filter-btn.active {
        background: var(--primary-color);
        color: white;
    }
    
    .projects-container {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
        gap: 2rem;
    }
    
    .project-card {
        background: white;
        border-radius: 15px;
        overflow: hidden;
        box-shadow: var(--card-shadow);
        transition: var(--transition);
    }
    
    .project-card:hover {
        transform: translateY(-5px);
    }
    
    .project-card img {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
    
    .project-info {
        padding: 1.5rem;
    }
    
    .project-info h3 {
        margin-bottom: 0.5rem;
        color: var(--primary-color);
    }
    
    .project-tech {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
        margin: 1rem 0;
    }
    
    .tech-tag {
        background: var(--light-bg);
        padding: 5px 10px;
        border-radius: 15px;
        font-size: 0.85rem;
    }
    
    .project-links {
        display: flex;
        gap: 1rem;
    }
    
    .btn-live, .btn-code {
        padding: 8px 20px;
        border-radius: 20px;
        text-decoration: none;
        transition: var(--transition);
    }
    
    .btn-live {
        background: var(--primary-color);
        color: white;
    }
    
    .btn-code {
        background: var(--dark-bg);
        color: white;
    }
    
    @media (max-width: 768px) {
        .projects-container {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(style);

AOS.init();
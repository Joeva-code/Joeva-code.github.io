// Initialize AOS Animation
AOS.init({
    duration: 1000,
    once: true
});

// Typed Text Animation
const typedTextElement = document.getElementById('typed-text');
const texts = ['Fullstack Developer', 'Node.js Expert', 'API Designer', 'Problem Solver'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeText, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeText, 500);
    } else {
        setTimeout(typeText, isDeleting ? 50 : 100);
    }
}

typeText();

// Skill Bar Animation
const skillBars = document.querySelectorAll('.skill-progress');
const animateSkills = () => {
    skillBars.forEach(bar => {
        const skillValue = bar.getAttribute('data-skill');
        bar.style.width = skillValue + '%';
    });
};

// Intersection Observer for Skills
const skillsSection = document.querySelector('.skills');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkills();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (skillsSection) observer.observe(skillsSection);

// Counter Animation
const counters = document.querySelectorAll('.stat-number');
const animateCounters = () => {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let current = 0;
        const increment = target / 100;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current);
                setTimeout(updateCounter, 10);
            } else {
                counter.textContent = target;
            }
        };
        updateCounter();
    });
};

const aboutSection = document.querySelector('.about');
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            aboutObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

if (aboutSection) aboutObserver.observe(aboutSection);

// Fetch GitHub Stats (Replace 'yourusername' with your actual GitHub username)
async function fetchGitHubStats() {
    const username = 'yourusername'; // Change this to your GitHub username
    
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        
        document.getElementById('repo-count').textContent = data.public_repos || 'N/A';
        document.getElementById('follower-count').textContent = data.followers || 'N/A';
        
        // Fetch stars count (requires additional API call)
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await reposResponse.json();
        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        document.getElementById('star-count').textContent = totalStars || '0';
    } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        document.getElementById('repo-count').textContent = 'Error';
        document.getElementById('star-count').textContent = 'Error';
        document.getElementById('follower-count').textContent = 'Error';
    }
}

fetchGitHubStats();

// Mobile Menu Toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('nav ul');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
    });
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {


    //1. MOBILE SIDEBAR


const hamburgerBtn = document.getElementById('hamburgerBtn');
const closeDrawerBtn = document.getElementById('closeDrawerBtn');
const navDrawer = document.getElementById('navDrawer');
const navOverlay = document.getElementById('navOverlay');
const navLinks = document.querySelectorAll('.nav-links a');

function openSidebar() {
    if (!navDrawer || !navOverlay || !hamburgerBtn) return;
    navDrawer.classList.add('active');
    navOverlay.classList.add('active');
    hamburgerBtn.classList.add('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
}

function closeSidebar() {
    if (!navDrawer || !navOverlay || !hamburgerBtn) return;
    navDrawer.classList.remove('active');
    navOverlay.classList.remove('active');
    hamburgerBtn.classList.remove('is-open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

function toggleSidebar() {
    if (!navDrawer) return;
    navDrawer.classList.contains('active') ? closeSidebar() : openSidebar();
}

hamburgerBtn?.addEventListener('click', toggleSidebar);
closeDrawerBtn?.addEventListener('click', closeSidebar);
navOverlay?.addEventListener('click', closeSidebar);
navLinks.forEach(link => link.addEventListener('click', closeSidebar));

document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && navDrawer?.classList.contains('active')) {
        closeSidebar();
    }
});

    //2. RANDOM NEON LIGHT BEAMS

const beamContainer = document.getElementById('bgBeams');

function spawnRandomBeam() {
    if (!beamContainer) return;

    const beam = document.createElement('div');
    beam.classList.add('shooting-beam');

    const startX = Math.random() * 100;
    const startY = Math.random() * 100;
    const angle = Math.floor(Math.random() * 360);
    const width = Math.floor(Math.random() * 400) + 250;
    const duration = (Math.random() * 4 + 3).toFixed(2);
    const maxOpacity = (Math.random() * 0.45 + 0.25).toFixed(2);

    beam.style.left = `${startX}vw`;
    beam.style.top = `${startY}vh`;
    beam.style.width = `${width}px`;
    beam.style.setProperty('--angle', `${angle}deg`);
    beam.style.setProperty('--duration', `${duration}s`);
    beam.style.setProperty('--max-opacity', maxOpacity);

    beamContainer.appendChild(beam);
    setTimeout(() => beam.remove(), duration * 2000);
}

if (beamContainer) {
    for (let i = 0; i < 4; i++) {
        setTimeout(spawnRandomBeam, i * 50);
    }
    setInterval(spawnRandomBeam, 50);
}


    //3. CONTACT FORM


const contactForm = document.getElementById('contactForm');
const formSuccessAlert = document.getElementById('formSuccessAlert');
const alertText = document.getElementById('alertText');

if (contactForm) {
    contactForm.addEventListener('submit', e => {
        e.preventDefault();

        const senderName = document.getElementById('senderName')?.value.trim();

        if (alertText && senderName) {
            alertText.textContent = `TRANSMISSION_SENT // Thank you, ${senderName}! Your message has been received.`;
        }

        formSuccessAlert?.classList.add('show');
        contactForm.reset();

        setTimeout(() => {
            formSuccessAlert?.classList.remove('show');
        }, 5000);
    });
}

    //4. TECH STACK INTERACTIONS


const techItems = document.querySelectorAll('.tech-list li');
const techHint = document.getElementById('techHint');
const defaultHintText = '[HOVER OR TAP A MODULE]';

if (techItems.length && techHint) {
    techItems.forEach(item => {
        const showDetail = () => {
            techItems.forEach(el => el.classList.remove('selected'));
            item.classList.add('selected');
            techHint.textContent = `> ${item.getAttribute('data-detail')}`;
            techHint.classList.add('active');
        };

        item.addEventListener('mouseenter', showDetail);
        item.addEventListener('click', showDetail);
    });

    document.querySelector('.tech-overview')?.addEventListener('mouseleave', () => {
        techItems.forEach(el => el.classList.remove('selected'));
        techHint.textContent = defaultHintText;
        techHint.classList.remove('active');
    });
}

    //5. GITHUB PROJECT CONFIGURATION
    
const GITHUB_USERNAME = 'TRESTEVOYCE';

// ONLY repositories listed here will appear.
// Use the exact GitHub repository name.
const allowedProjects = [
    'booking-system',
    'tunga-guide-webiste',
    'albumize',
    'capesonecct'
];

const projectsTrack = document.getElementById('projectsTrack');
const prevProjectBtn = document.getElementById('prevProjectBtn');
const nextProjectBtn = document.getElementById('nextProjectBtn');
const carouselCounter = document.getElementById('carouselCounter');
const carouselDotsContainer = document.getElementById('carouselDots');

// Custom information for your featured projects.
const featuredProjects = {
    'booking-system': {
        owner: 'Kram-Nevets',
        title: 'Booking System for Hotel or Resort',
        description: 'A booking system for managing reservations at hotels or resorts. Includes a REST API for handling room availability, bookings, payments, and user activity tracking.',
        image: 'sources/images/Booking_API.jpg',
        technologies: [
            'Python / Django',
            'Django REST',
            'Simple JWT',
            'PostgreSQL / SQLite',
            'Cloudinary',
            'Render',
            'GitHub',
            'Git'
        ],
        demo: null,
        github: 'https://github.com/Kram-Nevets/booking-system'
    },

    'tunga-guide-webiste': {
        title: 'Tunga Guide',
        description: 'An interactive cultural and tourism portal dedicated to showcasing the history, leadership, and local tourist attractions of Tunga, Leyte.',
        image: 'sources/images/Screenshot 2026-11-27 124641.png',
        technologies: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'Render',
            'Git / GitHub'
        ],
        demo: 'https://tunga-guide-webiste.onrender.com/',
        github: 'https://github.com/TRESTEVOYCE/Tunga-Guide-Webiste'
    },

    'albumize': {
        title: 'Albumize',
        description: 'A Django-based Photo Album Web Application allowing authenticated users to upload photos, organize albums, and manage gallery collections in a structured interface.',
        image: 'sources/images/Screenshot 2026-11-27 130107.png',
        technologies: [
            'Python / Django',
            'Tailwind CSS',
            'JavaScript',
            'PostgreSQL',
            'Cloudinary',
            'Render',
            'GitHub',
            'Git'
        ],
        demo: 'https://albumize.onrender.com/',
        github: 'https://github.com/TRESTEVOYCE/Albumize'
    },
    'capesonecct': {
        title: 'Capesonnect',
        description: 'A job matching platform built for PESO Carigara to help applicants and employers on finding jobs less hussle and easier. It also helps PESO carigara in monitoring their employers and applicants. The system also helps generate PESO reports that is submitted to different offices such as DOLE.',
        image: 'sources/images/Screenshot 2026-11-27 141203.png',
        technologies: [
            'Python / Django',
            'Tailwind CSS',
            'JavaScript',
            'PostgreSQL',
            'Cloudinary',
            'Render',
            'GitHub',
            'Git'
        ],
        demo: 'https://capesonecct.onrender.com/',
        github: 'https://github.com/TRESTEVOYCE/CAPESONECCT'
    }
};


    //6. HELPER FUNCTIONS

function escapeHTML(value) {
    return String(value ?? '').replace(/[&<>"']/g, char => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    })[char]);
}

function safeImageURL(value) {
    if (!value) return '';

    try {
        const url = new URL(value, window.location.href);
        return ['http:', 'https:'].includes(url.protocol) ? url.href : '';
    } catch {
        return '';
    }
}

function getGitHubPreviewImage(repo) {
    return `https://opengraph.githubassets.com/1/${encodeURIComponent(repo.full_name)}`;
}

function isSafeLink(value) {
    try {
        return ['http:', 'https:'].includes(new URL(value).protocol);
    } catch {
        return false;
    }
}


    // 7. GENERATE PROJECT CARD


function createProjectCard(repo, index, featured = null) {
    const title = featured?.title || repo.name.replaceAll('-', ' ');
    const description = featured?.description || repo.description || 'No description available for this repository.';
    const image = safeImageURL(featured?.image || getGitHubPreviewImage(repo));
    const technologies = featured?.technologies || [repo.language || 'Various'];
    const githubURL = isSafeLink(featured?.github || repo.html_url)
        ? (featured?.github || repo.html_url)
        : repo.html_url;
    const demoURL = featured?.demo && isSafeLink(featured.demo) ? featured.demo : null;
    const projectNumber = String(index + 1).padStart(2, '0');

    const card = document.createElement('article');
    card.className = 'project-card';

    card.innerHTML = `
        <div class="hud-corner top-left"></div>
        <div class="hud-corner top-right"></div>
        <div class="hud-corner bottom-left"></div>
        <div class="hud-corner bottom-right"></div>

        <div class="project-meta-bar">
            <span class="project-id">PRJ_${projectNumber} // ${escapeHTML(repo.name)}</span>
            <span class="project-status">${featured ? 'FEATURED' : 'GITHUB ARCHIVE'}</span>
        </div>

        ${image ? `
            <div class="project-thumb">
                <img src="${escapeHTML(image)}" alt="${escapeHTML(title)} Screenshot" loading="lazy">
                <div class="project-scanline" aria-hidden="true"></div>
            </div>
        ` : ''}

        <div class="project-info">
            <h3>${escapeHTML(title)}</h3>
            <p>${escapeHTML(description)}</p>

            <div class="project-tags">
                ${technologies.map(tech => `<span>${escapeHTML(tech)}</span>`).join('')}

                ${!featured ? `
                    <span>★ ${Number(repo.stargazers_count) || 0}</span>
                    <span>Forks: ${Number(repo.forks_count) || 0}</span>
                ` : ''}
            </div>

            <div class="project-actions">
                ${demoURL ? `
                    <a href="${escapeHTML(demoURL)}" class="project-link" target="_blank" rel="noopener noreferrer">
                        View Project <span class="arrow">&rarr;</span>
                    </a>
                ` : ''}

                <a href="${escapeHTML(githubURL)}" class="project-link" target="_blank" rel="noopener noreferrer">
                    View on Github <span class="arrow">&rarr;</span>
                </a>
            </div>
        </div>
    `;

    const projectImage = card.querySelector('.project-thumb img');

    if (projectImage) {
        projectImage.addEventListener('error', () => {
            projectImage.closest('.project-thumb')?.remove();
        });
    }

    return card;
}



    // 8. DYNAMIC PROJECT CAROUSEL


function initializeProjectCarousel() {
    if (!projectsTrack || !carouselDotsContainer) return;

    // 1. Remove old clones if initialized again.
    projectsTrack.querySelectorAll('[data-carousel-clone="true"]')
        .forEach(clone => clone.remove());

    // 2. Get original cards.
    const cards = [...projectsTrack.querySelectorAll('.project-card')];
    const totalSlides = cards.length;

    let currentIndex = 0;

    if (!totalSlides) return;

    // 3. Generate pagination dots.
    carouselDotsContainer.innerHTML = cards.map((_, index) => `
        <button type="button"
            class="dot ${index === 0 ? 'active' : ''}"
            data-index="${index}"
            aria-label="Go to project ${index + 1}">
        </button>
    `).join('');

    const carouselDots = [...carouselDotsContainer.querySelectorAll('.dot')];

    // 4. Create duplicate cards.
    function createCloneSet() {
        const fragment = document.createDocumentFragment();

        cards.forEach(card => {
            const clone = card.cloneNode(true);

            clone.dataset.carouselClone = 'true';
            clone.setAttribute('aria-hidden', 'true');

            // Avoid duplicate IDs.
            clone.removeAttribute('id');

            clone.querySelectorAll('[id]').forEach(element => {
                element.removeAttribute('id');
            });

            // Keep cloned links out of keyboard navigation.
            clone.querySelectorAll(
                'a, button, input, select, textarea, [tabindex]'
            ).forEach(element => {
                element.setAttribute('tabindex', '-1');
            });

            fragment.appendChild(clone);
        });

        return fragment;
    }

    // 5. Add duplicate sets around the originals.
    projectsTrack.prepend(createCloneSet(), createCloneSet());
    projectsTrack.append(createCloneSet(), createCloneSet());

    const allCards = [...projectsTrack.querySelectorAll('.project-card')];

    // Original cards start after two cloned sets.
    const middleStart = totalSlides * 2;

    // 6. Calculate the actual horizontal position of a card.
    function getCardPosition(card) {
        return card.getBoundingClientRect().left
            - projectsTrack.getBoundingClientRect().left
            + projectsTrack.scrollLeft;
    }

    // 7. Calculate the width of one complete set.
    function getSetWidth() {
        return getCardPosition(allCards[middleStart + totalSlides])
            - getCardPosition(allCards[middleStart]);
    }

    let setWidth = getSetWidth();

    // 8. Update counter and dots.
    function updateCarouselUI(index) {
        currentIndex = (index % totalSlides + totalSlides) % totalSlides;

        if (carouselCounter) {
            carouselCounter.textContent =
                `${String(currentIndex + 1).padStart(2, '0')} / ${String(totalSlides).padStart(2, '0')}`;
        }

        carouselDots.forEach((dot, idx) => {
            dot.classList.toggle('active', idx === currentIndex);
        });
    }

    // 9. Navigate to the nearest copy of the requested project.
    function scrollToSlide(index) {
        const targetIndex =
            (index % totalSlides + totalSlides) % totalSlides;

        const candidates = allCards.filter((_, physicalIndex) =>
            physicalIndex % totalSlides === targetIndex
        );

        const targetCard = candidates.reduce((closest, card) => {
            return Math.abs(getCardPosition(card) - projectsTrack.scrollLeft) <
                Math.abs(getCardPosition(closest) - projectsTrack.scrollLeft)
                ? card
                : closest;
        });

        projectsTrack.scrollTo({
            left: getCardPosition(targetCard),
            behavior: 'smooth'
        });

        updateCarouselUI(targetIndex);
    }

    // 10. Configure controls.
    const showControls = totalSlides > 1;

    if (prevProjectBtn) prevProjectBtn.hidden = !showControls;
    if (nextProjectBtn) nextProjectBtn.hidden = !showControls;
    carouselDotsContainer.hidden = !showControls;

    if (prevProjectBtn) {
        prevProjectBtn.onclick = () => scrollToSlide(currentIndex - 1);
    }

    if (nextProjectBtn) {
        nextProjectBtn.onclick = () => scrollToSlide(currentIndex + 1);
    }

    carouselDots.forEach(dot => {
        dot.addEventListener('click', () => {
            scrollToSlide(Number(dot.dataset.index));
        });
    });

    // 11. Handle infinite scrolling.
    function handleInfiniteScroll() {
        if (!setWidth) return;

        let position = projectsTrack.scrollLeft;

        // Reposition when entering the previous duplicate set.
        if (position < setWidth) {
            position += setWidth;
        }

        // Reposition when entering the next duplicate set.
        else if (position >= setWidth * 3) {
            position -= setWidth;
        }

        if (position !== projectsTrack.scrollLeft) {
            projectsTrack.scrollLeft = position;
        }

        // 12. Find the card closest to the left edge.
        const trackRect = projectsTrack.getBoundingClientRect();

        let closestIndex = 0;
        let closestDistance = Infinity;

        allCards.forEach((card, index) => {
            const distance = Math.abs(
                card.getBoundingClientRect().left - trackRect.left
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        // Convert physical index into original project index.
        const logicalIndex =
            (closestIndex - middleStart + totalSlides) % totalSlides;

        updateCarouselUI(logicalIndex);
    }

    // 13. Listen to actual scrolling.
    projectsTrack.addEventListener('scroll', handleInfiniteScroll, {
        passive: true
    });

    // 14. Start at the first original card.
    projectsTrack.scrollLeft = getCardPosition(allCards[middleStart]);

    updateCarouselUI(0);

    // 15. Update dimensions on window resize.
    window.addEventListener('resize', () => {
        setWidth = getSetWidth();

        if (setWidth) {
            projectsTrack.scrollLeft =
                getCardPosition(allCards[middleStart + currentIndex]);
        }
    });
}



//Fetch GitHub repositories and display them in the carousel


function fetchGitHubProjects() {
if (!projectsTrack) return;

projectsTrack.innerHTML = '';

const projects = Object.entries(featuredProjects);

projects.forEach(([repoName, config], index) => {
    const repo = {
        name: repoName,
        full_name: `${config.owner || GITHUB_USERNAME}/${repoName}`,
        description: config.description,
        html_url: config.github,
        language: config.technologies?.[0] || 'Various',
        stargazers_count: 0,
        forks_count: 0,
        archived: false,
        private: false
    };

    const card = createProjectCard(repo, index, config);
    projectsTrack.appendChild(card);
});

console.log(`Loaded ${projects.length} featured projects.`);
initializeProjectCarousel();
}

fetchGitHubProjects();


/* =========================================
    10. DARK / LIGHT THEME TOGGLE
    ========================================= */

const themeToggleBtn = document.getElementById('themeToggleBtn');
const themeLabel = document.getElementById('themeLabel');
const rootElement = document.documentElement;

function applyTheme(theme) {
    if (theme === 'light') {
        rootElement.setAttribute('data-theme', 'light');
        if (themeLabel) themeLabel.textContent = 'LIGHT';
    } else {
        rootElement.removeAttribute('data-theme');
        if (themeLabel) themeLabel.textContent = 'DARK';
    }
}

const currentSavedTheme = localStorage.getItem('portfolio_theme') || 'dark';
applyTheme(currentSavedTheme);

themeToggleBtn?.addEventListener('click', () => {
    const isLight = rootElement.getAttribute('data-theme') === 'light';
    const nextTheme = isLight ? 'dark' : 'light';

    localStorage.setItem('portfolio_theme', nextTheme);
    applyTheme(nextTheme);
});

});

    //7. HERO HEADLINE TYPING ANIMATION (1.5s)

const heroLine1 = document.getElementById('heroLine1');
const heroLine2 = document.getElementById('heroLine2');

if (heroLine1 && heroLine2) {
    const line1Text = 'WEB';
    const line2Text = 'DEVELOPER/>';
    const totalChars = line1Text.length + line2Text.length; // 14 characters total
    const typingSpeed = Math.floor(1500 / totalChars); // Finishes in ~1.5 seconds

    let charIndex = 0;

    function typeHeroTitle() {
        if (charIndex < line1Text.length) {
            heroLine1.textContent += line1Text.charAt(charIndex);
            charIndex++;
            setTimeout(typeHeroTitle, typingSpeed);
        } else if (charIndex < totalChars) {
            const line2Index = charIndex - line1Text.length;
            heroLine2.textContent += line2Text.charAt(line2Index);
            charIndex++;
            setTimeout(typeHeroTitle, typingSpeed);
        }
    }

    typeHeroTitle();
}


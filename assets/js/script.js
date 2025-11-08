// JavaScript para funcionalidades interactivas del CV

document.addEventListener('DOMContentLoaded', function() {
    // Navbar mobile toggle
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (navbarToggle) {
        navbarToggle.addEventListener('click', function() {
            navbarMenu.classList.toggle('active');
        });
        
        // Cerrar menu al hacer click en un enlace
        const navbarLinks = navbarMenu.querySelectorAll('.navbar-link');
        navbarLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling para enlaces internos
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Scroll Reveal Animation con clases CSS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);

    // Observar todas las secciones
    document.querySelectorAll('.section').forEach((section, index) => {
        section.classList.add('scroll-reveal');
        if (index > 0) { // No animar la primera sección (Sobre Mí)
            observer.observe(section);
        } else {
            section.classList.add('revealed'); // Primera sección visible inmediatamente
        }
    });

    // Observar cards de proyectos con delays escalonados
    document.querySelectorAll('.project-card').forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.classList.add(`delay-${Math.min(index + 1, 3)}`);
        observer.observe(card);
    });

    // Observar items de educación desde la izquierda
    document.querySelectorAll('.education-item').forEach((item, index) => {
        item.classList.add('scroll-reveal-left');
        item.classList.add(`delay-${Math.min(index + 1, 4)}`);
        observer.observe(item);
    });

    // Observar grupos de habilidades desde la derecha
    document.querySelectorAll('.skill-group').forEach((group, index) => {
        group.classList.add('scroll-reveal-right');
        group.classList.add(`delay-${index + 1}`);
        observer.observe(group);
    });

    // Observar blog preview cards
    document.querySelectorAll('.blog-preview-card').forEach((card, index) => {
        card.classList.add('scroll-reveal');
        card.classList.add(`delay-${Math.min(index + 1, 3)}`);
        observer.observe(card);
    });

    // Efecto de hover mejorado para las tarjetas de proyecto
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Animación de las habilidades al hacer hover
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Función para cambiar el tema (opcional)
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        
        // Cambiar el icono del botón
        const icon = themeButton.querySelector('i');
        if (isDark) {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }

    // Cargar tema guardado
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Botón de tema (puedes agregarlo al HTML si quieres)
    const themeButton = document.createElement('button');
    themeButton.innerHTML = '<i class="fas fa-moon"></i>';
    themeButton.className = 'theme-toggle';
    themeButton.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4299e1;
        color: white;
        border: 2px solid #63b3ed;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(66, 153, 225, 0.3);
        z-index: 1000;
        transition: all 0.3s ease;
        font-size: 16px;
    `;
    
    themeButton.addEventListener('click', toggleTheme);
    document.body.appendChild(themeButton);
    
    // Inicializar el icono correcto según el tema actual
    const icon = themeButton.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }

    // Efecto de typing para el título (opcional)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }

    // Aplicar efecto de typing al nombre (opcional)
    const nameElement = document.querySelector('.profile-info h1');
    if (nameElement) {
        const originalText = nameElement.textContent;
        // Descomenta la siguiente línea si quieres el efecto de typing
        // typeWriter(nameElement, originalText, 150);
    }

    // Contador animado para estadísticas (si las agregas)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        updateCounter();
    }

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Función para copiar información de contacto
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            // Mostrar notificación de éxito
            const notification = document.createElement('div');
            notification.textContent = '¡Copiado al portapapeles!';
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                left: 50%;
                transform: translateX(-50%);
                background: #28a745;
                color: white;
                padding: 10px 20px;
                border-radius: 5px;
                z-index: 1000;
                animation: slideDown 0.3s ease;
            `;
            
            document.body.appendChild(notification);
            setTimeout(() => {
                notification.remove();
            }, 2000);
        });
    }

    // Agregar funcionalidad de copiar a los elementos de contacto
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach(item => {
        item.style.cursor = 'pointer';
        item.addEventListener('click', function() {
            const text = this.textContent.trim();
            copyToClipboard(text);
        });
    });

    // Efecto parallax suave para el header
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const header = document.querySelector('.header');
        if (header) {
            header.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });

    // Preloader (opcional)
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });
});

// Blog functionality
class BlogManager {
    constructor() {
        this.articles = [];
        this.currentFilter = 'all';
        this.articlesPerPage = 6;
        this.currentPage = 1;
        this.init();
    }

    init() {
        this.loadArticles();
        this.setupEventListeners();
        this.renderArticles();
    }

  

    setupEventListeners() {
        // Filtros
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setActiveFilter(e.target.dataset.filter);
            });
        });

        // Botón cargar más
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            loadMoreBtn.addEventListener('click', () => {
                this.loadMoreArticles();
            });
        }
    }

    setActiveFilter(filter) {
        this.currentFilter = filter;
        this.currentPage = 1;
        
        // Actualizar botones activos
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-filter="${filter}"]`).classList.add('active');
        
        this.renderArticles();
    }

    getFilteredArticles() {
        if (this.currentFilter === 'all') {
            return this.articles;
        }
        return this.articles.filter(article => article.category === this.currentFilter);
    }

    renderArticles() {
        const filteredArticles = this.getFilteredArticles();
        const articlesToShow = filteredArticles.slice(0, this.currentPage * this.articlesPerPage);
        const blogGrid = document.getElementById('blog-grid');
        
        if (!blogGrid) return;

        blogGrid.innerHTML = '';
        
        articlesToShow.forEach(article => {
            const articleElement = this.createArticleElement(article);
            blogGrid.appendChild(articleElement);
        });

        // Mostrar/ocultar botón cargar más
        const loadMoreBtn = document.getElementById('load-more-btn');
        if (loadMoreBtn) {
            if (articlesToShow.length < filteredArticles.length) {
                loadMoreBtn.style.display = 'inline-flex';
                loadMoreBtn.disabled = false;
            } else {
                loadMoreBtn.style.display = 'none';
            }
        }
    }

    createArticleElement(article) {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'blog-article';
        articleDiv.setAttribute('data-category', article.category);
        
        const categoryNames = {
            'ai': 'Inteligencia Artificial',
            'web': 'Desarrollo Web',
            'tutorial': 'Tutorial',
            'project': 'Proyecto'
        };

        articleDiv.innerHTML = `
            <div class="blog-article-image">
                <span>${article.icon}</span>
            </div>
            <div class="blog-article-content">
                <div class="blog-article-meta">
                    <span class="blog-article-category">${categoryNames[article.category]}</span>
                    <span class="blog-article-date">
                        <i class="fas fa-calendar"></i>
                        ${this.formatDate(article.date)}
                    </span>
                </div>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="blog-article-tags">
                    ${article.tags.map(tag => `<span class="blog-tag">${tag}</span>`).join('')}
                </div>
                <div class="blog-article-footer">
                    <a href="#" class="read-more-btn" data-article-id="${article.id}">
                        <i class="fas fa-arrow-right"></i>
                        Leer más
                    </a>
                    <span class="read-time">
                        <i class="fas fa-clock"></i>
                        ${article.readTime}
                    </span>
                </div>
            </div>
        `;

        // Agregar evento click al botón "Leer más"
        const readMoreBtn = articleDiv.querySelector('.read-more-btn');
        readMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.showArticleModal(article);
        });

        return articleDiv;
    }

    formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }

    loadMoreArticles() {
        this.currentPage++;
        this.renderArticles();
    }

    showArticleModal(article) {
        // Crear modal para mostrar el artículo completo
        const modal = document.createElement('div');
        modal.className = 'article-modal';
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 20px;
        `;

        const categoryNames = {
            'ai': 'Inteligencia Artificial',
            'web': 'Desarrollo Web',
            'tutorial': 'Tutorial',
            'project': 'Proyecto'
        };

        modal.innerHTML = `
            <div class="modal-content" style="
                background: white;
                border-radius: 12px;
                max-width: 800px;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                position: relative;
            ">
                <button class="modal-close" style="
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    background: #f0f0f0;
                    border: none;
                    border-radius: 50%;
                    width: 40px;
                    height: 40px;
                    cursor: pointer;
                    font-size: 18px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                ">×</button>
                <div style="padding: 40px;">
                    <div style="margin-bottom: 20px;">
                        <span style="background: #dbeafe; color: #3182ce; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: 500;">
                            ${categoryNames[article.category]}
                        </span>
                        <span style="color: #718096; margin-left: 12px; font-size: 0.85rem;">
                            <i class="fas fa-calendar"></i> ${this.formatDate(article.date)}
                        </span>
                    </div>
                    <h1 style="font-size: 2rem; font-weight: 600; color: #1a202c; margin-bottom: 20px; line-height: 1.3;">
                        ${article.title}
                    </h1>
                    <div style="margin-bottom: 20px;">
                        ${article.tags.map(tag => `<span style="background: #e0f2fe; color: #0369a1; padding: 4px 8px; border-radius: 4px; font-size: 0.8rem; margin-right: 6px;">${tag}</span>`).join('')}
                    </div>
                    <div style="color: #4a5568; line-height: 1.6; font-size: 1.1rem;">
                        <p style="margin-bottom: 20px;">${article.excerpt}</p>
                        <p style="margin-bottom: 20px;">${article.content}</p>
                        <p style="margin-bottom: 20px;">Este es un ejemplo de contenido extendido del artículo. En una implementación real, aquí tendrías el contenido completo del artículo con formato HTML, imágenes, código, y más detalles técnicos.</p>
                        <p style="margin-bottom: 20px;">El sistema de blog está diseñado para ser fácilmente extensible. Puedes agregar más artículos simplemente añadiendo objetos al array de artículos en el JavaScript, o integrar con un CMS como WordPress, Strapi, o Sanity.</p>
                    </div>
                    <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0f2fe; display: flex; justify-content: space-between; align-items: center;">
                        <span style="color: #718096; font-size: 0.9rem;">
                            <i class="fas fa-clock"></i> Tiempo de lectura: ${article.readTime}
                        </span>
                        <button class="modal-close" style="
                            background: #3182ce;
                            color: white;
                            border: none;
                            padding: 10px 20px;
                            border-radius: 6px;
                            cursor: pointer;
                            font-weight: 500;
                        ">Cerrar</button>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners para cerrar modal
        const closeButtons = modal.querySelectorAll('.modal-close');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                document.body.removeChild(modal);
            });
        });

        // Cerrar al hacer click fuera del contenido
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                document.body.removeChild(modal);
            }
        });

        // Cerrar con tecla Escape
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                document.body.removeChild(modal);
                document.removeEventListener('keydown', handleEscape);
            }
        };
        document.addEventListener('keydown', handleEscape);
    }
}

// Inicializar el blog cuando el DOM esté listo
// COMENTADO: Ya no se necesita porque Jekyll genera los posts automáticamente
// document.addEventListener('DOMContentLoaded', function() {
//     // Inicializar el blog
//     new BlogManager();
// });

// CSS adicional movido al archivo styles.css

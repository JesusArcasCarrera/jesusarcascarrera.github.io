---
layout: blog
title: "Blog"
permalink: /blog/
---

<section class="hero">
    <div class="hero-container">
        <div class="hero-content">
            <div class="hero-image">
                <img src="{{ '/assets/images/FOTOPERFIL.png' | relative_url }}" alt="{{ site.author }}" class="profile-picture">
            </div>
            <div class="hero-text">
                <h1 class="hero-title">{{ site.author }}</h1>
                <p class="hero-subtitle">Mis artículos sobre programación, inteligencia artificial y desarrollo web</p>
                <div class="hero-cta">
                    <a href="{{ '/' | relative_url }}" class="btn btn-secondary">
                        <i class="fas fa-arrow-left"></i>
                        Volver al CV
                    </a>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="section section-articles">
    <h2><i class="fas fa-blog"></i> Artículos</h2>
    
    {% if site.posts.size > 0 %}
    <div class="blog-grid" id="blog-grid">
        {% for post in site.posts %}
        <article class="blog-article" data-category="{{ post.category | default: 'general' }}">
            <a href="{{ post.url | relative_url }}" class="blog-article-link">
                <div class="blog-article-content-wrapper">
                    <div class="blog-article-header">
                        {% if post.category %}
                        <span class="blog-article-category">
                            {% case post.category %}
                                {% when 'ai' %}<i class="fas fa-brain"></i> IA
                                {% when 'web' %}<i class="fas fa-code"></i> Web
                                {% when 'tutorial' %}<i class="fas fa-book"></i> Tutorial
                                {% when 'project' %}<i class="fas fa-project-diagram"></i> Proyecto
                                {% else %}{{ post.category }}
                            {% endcase %}
                        </span>
                        {% endif %}
                        <span class="blog-article-date">
                            {{ post.date | date: "%d %b %Y" }}
                        </span>
                    </div>
                    <div class="blog-article-body">
                        <h3 class="blog-article-title">{{ post.title }}</h3>
                        <p class="blog-article-excerpt">
                            {{ post.excerpt | default: post.content | strip_html | truncatewords: 30 }}
                        </p>
                    </div>
                    <div class="blog-article-footer">
                        <div class="blog-article-meta">
                            {% if post.readTime %}
                            <span class="read-time">
                                <i class="fas fa-clock"></i>
                                {{ post.readTime }}
                            </span>
                            {% endif %}
                            {% if post.tags %}
                            <div class="blog-article-tags">
                                {% if post.tags.first %}
                                    {% for tag in post.tags limit: 2 %}
                                    <span class="blog-tag">{{ tag }}</span>
                                    {% endfor %}
                                {% else %}
                                    {% assign tags_string = post.tags | to_string | replace: '"', '' | replace: '[', '' | replace: ']', '' %}
                                    {% assign tags_array = tags_string | split: ', ' %}
                                    {% if tags_array.size == 1 %}
                                        {% assign tags_array = tags_string | split: ',' %}
                                    {% endif %}
                                    {% for tag in tags_array limit: 2 %}
                                        {% assign tag_clean = tag | strip %}
                                        {% if tag_clean != '' and tag_clean != ',' %}
                                        <span class="blog-tag">{{ tag_clean }}</span>
                                        {% endif %}
                                    {% endfor %}
                                {% endif %}
                            </div>
                            {% endif %}
                        </div>
                        <span class="read-more-btn">
                            Leer artículo
                            <i class="fas fa-arrow-right"></i>
                        </span>
                    </div>
                </div>
            </a>
        </article>
        {% endfor %}
    </div>
    {% else %}
    <div class="no-posts">
        <div class="no-posts-icon">📝</div>
        <h2>No hay artículos aún</h2>
        <p>¡Vuelve pronto para ver nuevos contenidos!</p>
    </div>
    {% endif %}
</section>


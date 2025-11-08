# Portafolio Personal - Jekyll + GitHub Pages

Sitio web personal construido con Jekyll y hosteado en GitHub Pages. Incluye CV, blog y proyectos.

## 🚀 Estructura del Proyecto

```
.
├── _config.yml          # Configuración de Jekyll
├── _layouts/            # Plantillas HTML
│   ├── cv.html         # Layout para el CV
│   ├── default.html    # Layout por defecto
│   └── post.html       # Layout para posts del blog
├── _includes/          # Componentes reutilizables
│   ├── header.html     # Encabezado del CV
│   ├── footer.html     # Pie de página
│   └── navigation.html # Navegación
├── _posts/             # Posts del blog (formato: YYYY-MM-DD-titulo.md)
├── assets/             # Recursos estáticos
│   ├── css/           # Estilos CSS
│   ├── js/            # Scripts JavaScript
│   └── images/        # Imágenes
├── index.md           # Página principal (CV)
├── blog.md            # Página del blog
└── Gemfile            # Dependencias de Ruby/Jekyll
```

## 📋 Requisitos Previos

- Ruby (versión 2.7 o superior)
- Bundler
- Git

## 🛠️ Instalación Local

1. **Clonar el repositorio:**
```bash
git clone https://github.com/JesusArcasCarrera/jesusarcascarrera.github.io.git
cd jesusarcascarrera.github.io
```

2. **Instalar dependencias:**
```bash
bundle install
```

3. **Ejecutar el servidor local:**
```bash
bundle exec jekyll serve
```

4. **Abrir en el navegador:**
Visita `http://localhost:4000` para ver el sitio localmente.

## 📝 Crear un Nuevo Post

1. Crea un nuevo archivo en `_posts/` con el formato:
   ```
   YYYY-MM-DD-titulo-del-post.md
   ```

2. Añade el front matter al inicio del archivo:
   ```yaml
   ---
   title: "Título del Post"
   excerpt: "Breve descripción del post"
   category: "ai"  # ai, web, tutorial, project
   tags: "Python, Machine Learning"
   date: "2024-01-20"
   readTime: "10 min"
   icon: "🤖"
   ---
   ```

3. Escribe el contenido en Markdown.

## 🎨 Personalización

### Modificar el CV

Edita el archivo `index.md` para actualizar tu información personal, experiencia, educación, etc.

### Cambiar Estilos

Modifica `assets/css/styles.css` para personalizar los colores, fuentes y diseño.

### Actualizar Configuración

Edita `_config.yml` para cambiar:
- Información personal
- Enlaces de redes sociales
- Configuración de SEO
- Navegación

## 🌐 Despliegue en GitHub Pages

1. **Haz commit y push de tus cambios:**
```bash
git add .
git commit -m "Actualizar sitio"
git push origin main
```

2. **GitHub Pages construirá automáticamente el sitio** en unos minutos.

3. **Tu sitio estará disponible en:**
   `https://jesusarcascarrera.github.io`

## 📚 Recursos Útiles

- [Documentación de Jekyll](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Liquid Template Language](https://shopify.github.io/liquid/)

## 🔧 Comandos Útiles

```bash
# Construir el sitio sin servidor
bundle exec jekyll build

# Servidor con recarga automática
bundle exec jekyll serve --livereload

# Limpiar y reconstruir
bundle exec jekyll clean
bundle exec jekyll build
```

## 📄 Licencia

Este proyecto es de uso personal. Siéntete libre de usarlo como base para tu propio portafolio.

---

**Desarrollado con ❤️ usando Jekyll y GitHub Pages**


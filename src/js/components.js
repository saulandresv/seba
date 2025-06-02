// Función para cargar componentes HTML
async function loadComponent(componentPath, containerId) {
    try {
        const response = await fetch(componentPath);
        if (response.ok) {
            const html = await response.text();
            document.getElementById(containerId).innerHTML = html;
        } else {
            console.error(`Error loading component: ${componentPath}`);
        }
    } catch (error) {
        console.error(`Error fetching component: ${componentPath}`, error);
    }
}

// Cargar header y footer cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Cargar header
    if (document.getElementById('header-container')) {
        loadComponent('components/header.html', 'header-container');
    }
    
    // Cargar footer
    if (document.getElementById('footer-container')) {
        loadComponent('components/footer.html', 'footer-container');
    }
}); 
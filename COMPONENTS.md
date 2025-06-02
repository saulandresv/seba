# 📦 Componentes Reutilizables - INFOMAP

Este proyecto utiliza un sistema de componentes modular que permite reutilizar el header y footer en múltiples páginas.

## 🗂️ Estructura de Componentes

```
├── components/
│   ├── header.html      # Header reutilizable
│   └── footer.html      # Footer reutilizable
├── js/
│   └── components.js    # JavaScript para cargar componentes
└── pages/              # Tus páginas adicionales
    └── *.html
```

## 🚀 Cómo usar los componentes en una nueva página

### 1. Estructura básica de una nueva página:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Página - INFOMAP</title>
    
    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="favicon.ico">
    
    <!-- Fuente Rajdhani -->
    <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <link href="css/styles.css" rel="stylesheet">
</head>
<body class="font-sans bg-dark text-white">
    <!-- Header Container -->
    <div id="header-container"></div>

    <!-- Tu contenido principal aquí -->
    <main class="pt-24 min-h-screen">
        <!-- Contenido específico de tu página -->
    </main>

    <!-- Footer Container -->
    <div id="footer-container"></div>

    <!-- JavaScript para cargar componentes -->
    <script src="js/components.js"></script>
</body>
</html>
```

### 2. Elementos clave:

- **`<div id="header-container"></div>`** - Contenedor donde se carga el header
- **`<div id="footer-container"></div>`** - Contenedor donde se carga el footer  
- **`<script src="js/components.js"></script>`** - Script que carga los componentes
- **`class="pt-24"`** - Padding-top para compensar el header fijo

## ✏️ Modificar componentes

### Para editar el header:
1. Modifica `components/header.html`
2. Ejecuta `npm run build` para aplicar cambios

### Para editar el footer:
1. Modifica `components/footer.html`  
2. Ejecuta `npm run build` para aplicar cambios

## 🔧 Desarrollo

### Comandos disponibles:

```bash
# Compilar proyecto completo
npm run build

# Desarrollo (compila + servidor local)
npm run dev

# Solo servidor local
npx http-server . -p 3000 -o
```

### Flujo de desarrollo:

1. **Edita archivos en `src/`** (para desarrollo)
2. **Ejecuta `npm run build`** (sincroniza con raíz)
3. **Los cambios se reflejan automáticamente**

## 🌐 Para GitHub Pages

Los archivos en la raíz del proyecto son los que usa GitHub Pages:
- `index.html` - Página principal
- `components/` - Componentes
- `js/` - JavaScript
- `css/` - Estilos compilados
- `img/` - Imágenes

## 📝 Ejemplo: Crear página "Servicios"

1. **Crea `servicios.html`** en la raíz:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <title>Servicios - INFOMAP</title>
    <!-- ... head content igual que template.html ... -->
</head>
<body class="font-sans bg-dark text-white">
    <div id="header-container"></div>
    
    <main class="pt-24">
        <div class="container mx-auto px-4 py-20">
            <h1 class="text-5xl font-bold text-center mb-16">
                Nuestros Servicios
            </h1>
            <!-- Tu contenido específico de servicios -->
        </div>
    </main>
    
    <div id="footer-container"></div>
    <script src="js/components.js"></script>
</body>
</html>
```

2. **Actualiza navegación** en `components/header.html`:

```html
<a href="servicios.html" class="text-lg hover:text-secondary transition-colors">Servicios</a>
```

¡Y listo! Tu nueva página tendrá automáticamente el header y footer consistentes. 🎉 
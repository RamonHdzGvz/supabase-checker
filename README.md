# 🧩 MonchitoLabs Web

**MonchitoLabs** es una base de desarrollo web moderna y escalable construida con **Angular 20**, **TailwindCSS 4** y **PrimeNG 20**, diseñada para crear aplicaciones modulares bajo el enfoque de **Atomic Design**.

---

## 🚀 Stack Tecnológico

| Capa | Tecnología | Descripción |
|------|-------------|-------------|
| Framework principal | **Angular 20** | Aplicación modular, standalone y optimizada. |
| Estilos | **TailwindCSS 4** | Sistema de utilidades modernas con import simplificado. |
| UI Kit | **PrimeNG 20** | Kit UI con componentes diversos listos para ser usados. |
| Backend / API | **Supabase** | Gestión de datos y autenticación. |
| Almacenamiento | **Cloudinary** | Almacenamiento de imágenes y recursos. |
| Hosting | **Netlify** | Despliegue rápido, CI/CD integrado. |

---

## 🧱 Estructura del Proyecto

```bash
src/
└── app/
    ├── core/                          # Servicios, interceptores, guards globales
    │   ├── services/
    │   │   └── api.service.ts
    │   ├── interceptors/
    │   │   └── auth.interceptor.ts
    │   ├── guards/
    │   │   └── auth.guard.ts
    │   └── core.module.ts
    │
    ├── shared/                        # Componentes reutilizables (Atomic Design)
    │   ├── atoms/                     # Elementos base (botones, iconos, inputs)
    │   ├── molecules/                 # Combinaciones simples de átomos
    │   ├── organisms/                 # Componentes complejos (navbar, footer)
    │   └── shared.module.ts
    │
    ├── templates/                     # Estructuras de página (layouts)
    │   └── main-layout/
    │       ├── main-layout.component.ts
    │       ├── main-layout.component.html
    │       └── main-layout.stories.ts
    │
    └── pages/                         # Páginas concretas de la app
        ├── home/
        │   ├── home.component.ts
        │   ├── home.component.html
        │   └── home.stories.ts
        ├── about/
        │   ├── about.component.ts
        │   ├── about.component.html
        │   └── about.stories.ts
        └── contact/
            ├── contact.component.ts
            ├── contact.component.html
            └── contact.stories.ts
```
---

## ⚙️ Scripts Disponibles

| Comando | Descripción |
|----------|-------------|
| `npm start` | Ejecuta la app Angular en modo desarrollo (`ng serve`). |
| `npm run build` | Compila el proyecto para producción. |

---

## 🧩 Enfoque de Desarrollo Atómico

Este proyecto sigue la metodología de **Atomic Design**, organizada de menor a mayor complejidad:

| Nivel | Carpeta | Descripción |
|-------|----------|-------------|
| **Atoms** | `shared/atoms/` | Elementos básicos e independientes (botones, inputs, iconos). |
| **Molecules** | `shared/molecules/` | Combinaciones simples de átomos (inputs con label, card simple). |
| **Organisms** | `shared/organisms/` | Bloques grandes de UI (navbar, footer, modales). |
| **Templates** | `templates/` | Layouts que definen estructura y posición de organismos. |
| **Pages** | `pages/` | Páginas concretas que consumen templates y organismos. |

Cada componente incluye su propia historia en Storybook (`*.stories.ts`) para documentación y prueba visual.

---

## 🧰 Recomendaciones de Desarrollo

### 📦 Generar componentes standalone

Para crear un nuevo componente atómico:

```bash
ng g c shared/atoms/button --standalone --skip-tests
```
> 🔹 Todos los componentes deben ser **standalone** (sin módulos tradicionales).  
> 🔹 Usa un sufijo consistente:  
> `*.component.ts`, `*.component.html`, `*.stories.ts`.

---

### 🧩 Generar servicios, guards e interceptores

##bash
ng g s core/services/api  
ng g g core/guards/auth  
ng g interceptor core/interceptors/auth

---

### 🎨 Formateo de código (Prettier)

Configuración recomendada (`.prettierrc`):

```json
{
  "useTabs": false,
  "tabWidth": 2,
  "printWidth": 120,
  "singleQuote": true,
  "bracketSpacing": true,
  "bracketSameLine": true,
  "trailingComma": "es5",
  "overrides": [
    {
      "files": ["*.html", "*.component.html"],
      "options": {
        "parser": "angular",
        "useTabs": false,
        "tabWidth": 2
      }
    }
  ]
}
```

---

### 🧠 Buenas prácticas

- **Un componente = una carpeta.**  
  Cada componente debe tener su propio espacio (HTML, TS, CSS, stories).  
- **Evita dependencias circulares.**  
  Los componentes de `atoms` nunca deben importar de `molecules` o `organisms`.  
- **Usa Tailwind para todo.**  
  No mezcles estilos inline o frameworks adicionales.  
- **Documenta siempre en Storybook.**  
  Cada nuevo componente debe incluir su `.stories.ts` con al menos un estado base.

---

## 🧑‍💻 Entorno de desarrollo

### Requisitos previos
- Node.js 20+
- Angular CLI 20+
- npm 10+

### Instalación

```bash
npm install
```

### Levantar el proyecto

```bash
npm start
```
```

---

## 🧭 Misión del Proyecto

Crear una base de componentes y layouts reutilizables, de bajo costo operativo, altamente compatibles y sostenibles, que sirva como núcleo para todos los proyectos de **MonchitoLabs** (web y mobile).

---

© 2025 **MonchitoLabs** — Desarrollado por Ramón Hernández  
Arquitectura atómica y diseño modular.


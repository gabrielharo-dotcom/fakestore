# FakeStore Catalog

Aplicación web desarrollada en **React + Vite** que consume la API pública [FakeStore API](https://fakestoreapi.com/products) para mostrar un catálogo de productos con diseño moderno, navegación entre rutas y filtros por categoría.

---

## Demo en vivo

**Deploy:** [https://fakestore-ebon.vercel.app](https://fakestore-ebon.vercel.app)

**Video demostrativo:** [Ver en YouTube](#)

---

## Tecnologías usadas

| Tecnología | Descripción |
|---|---|
| [React 19](https://react.dev/) | Librería principal de UI |
| [Vite 8](https://vite.dev/) | Bundler y servidor de desarrollo |
| [React Router DOM 7](https://reactrouter.com/) | Navegación entre rutas |
| [Tailwind CSS 4](https://tailwindcss.com/) | Estilos utilitarios |
| [shadcn/ui](https://ui.shadcn.com/) | Componentes de UI (Card, Badge, Skeleton, Table) |
| [Lucide React](https://lucide.dev/) | Íconos |
| [pnpm](https://pnpm.io/) | Gestor de paquetes |
| [Vercel](https://vercel.com/) | Deploy y hosting |

---

## Estructura del proyecto

```
src/
├── components/
│   ├── ui/          # Componentes de shadcn (card, badge, skeleton...)
│   ├── Navbar.jsx   # Barra de navegación con blur al hacer scroll
│   └── ProductCard.jsx  # Tarjeta de producto para la Home
├── hooks/
│   └── useProducts.js   # Custom hook para consumir la FakeStore API
├── lib/
│   └── utils.js     # Helper cn() de shadcn
├── pages/
│   ├── Home.jsx     # Ruta "/" — hero + grid de productos
│   └── Entities.jsx # Ruta "/entities" — listado con filtros
├── App.jsx          # Configuración de rutas
├── main.jsx         # Entry point
└── index.css        # Variables de tema y estilos globales
```

---

## Pasos para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/fakestore-react.git
cd fakestore-react
```

### 2. Instalar dependencias

```bash
pnpm install
```

### 3. Iniciar el servidor de desarrollo

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### 4. Build para producción

```bash
pnpm build
```

---

## Rutas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Hero con nombre y descripción del proyecto + grid de todos los productos |
| `/entities` | Listado de productos con filtros por categoría |

---

## API utilizada

**FakeStore API** — `https://fakestoreapi.com/products`

Propiedades consumidas por producto:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `id` | number | Identificador único |
| `title` | string | Nombre del producto |
| `price` | number | Precio en USD |
| `category` | string | Categoría del producto |
| `image` | string | URL de la imagen |
| `rating.rate` | number | Puntuación promedio |
| `rating.count` | number | Cantidad de reseñas |

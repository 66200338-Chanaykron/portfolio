# Portfolio - Chanatkron Ariya-Amonlert

A professional portfolio website built with React, Vite, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Installation

1.  Clone the repository (if you haven't already).
2.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

Create a production-ready build:

```bash
npm run build
```

The output will be in the `dist` directory.

### Customization

- **Content**: Update `src/data/resumeData.js` to change the text, skills, and experience.
- **Images**: Place your profile picture in `src/assets` or `public` and update the reference in `src/components/Hero.jsx`.
- **Resume PDF**: Add your PDF resume to `public` folder and link it in `src/components/Hero.jsx` (currently set to `#`).

## Technologies

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/) (Icons)
- [Framer Motion](https://www.framer.com/motion/) (Animations)

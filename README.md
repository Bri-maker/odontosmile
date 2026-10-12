# OdontoSmile PASCO

Landing page de la clínica dental **OdontoSmile Pasco**, lista para publicar en **GitHub Pages**.

## Vista previa local

Abre `index.html` en el navegador, o sirve la carpeta con un servidor estático:

```bash
# Con Python
python -m http.server 8080

# Con Node (npx)
npx serve .
```

Luego visita `http://localhost:8080`.

## Publicar en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `odontosmile-pasco`).
2. Sube estos archivos a la rama `main`:

```bash
git init
git add .
git commit -m "Initial commit: landing OdontoSmile PASCO"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

3. En GitHub: **Settings → Pages → Build and deployment**
   - Source: **Deploy from a branch**
   - Branch: `main` / carpeta `/ (root)`
4. Guarda. En unos minutos la web estará en:

`https://TU-USUARIO.github.io/TU-REPO/`

> Si el repo se llama `TU-USUARIO.github.io`, la web queda en la raíz del dominio.

## Estructura

```
├── index.html
├── css/styles.css
├── js/main.js
├── assets/
│   ├── favicon.svg
│   └── hero-dentist.jpg
└── README.md
```

Todos los recursos usan rutas relativas (`./css/...`, `./assets/...`) para que funcionen en GitHub Pages.

## Personalizar

- Teléfono: busca `9XX XXX XXX` / `51900000000` en `index.html`
- Correo y dirección: sección Contacto del footer
- Redes sociales: enlaces del bloque `.social`

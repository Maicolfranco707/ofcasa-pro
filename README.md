# Ofcasa Pro

Página web de Ofcasa Pro: limpieza de oficinas, consultorios y hogares en El Poblado, Medellín.

Hecha con Next.js y Tailwind CSS.

## Páginas

- `/` Inicio
- `/servicios` Servicios
- `/empresas` Planes para empresas
- `/nosotros` Nosotros
- `/contacto` Contacto, reservas y preguntas frecuentes

## Correr en tu computador

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Dónde cambiar cosas

- Teléfono, redes y servicios: `lib/site.ts`
- Colores y tipografías: `app/globals.css`
- Foto del equipo: guarda la foto como `public/img/equipo.jpg`
- Antes y después: pon las fotos en `public/img/` y agrégalas en `antesDespues` dentro de `lib/site.ts`. La sección aparece sola.
- Testimonios: agrega opiniones reales en `testimonios` dentro de `lib/site.ts`. La sección aparece sola.

## Publicar

Cada `git push` a `main` actualiza la página en Vercel automáticamente.

# CRIS/OS Portfolio

Portafolio profesional bilingüe de Cristian Rubén Salcedo Díaz. Presenta trabajo de Product Design, Design Systems, UX/UI, frontend y flujos asistidos por IA mediante casos de estudio verificables.

## Estado

Primer prototipo en construcción. El contenido marcado como pendiente no debe publicarse como afirmación final hasta validar autoría, alcance y confidencialidad.

## Stack

- Nuxt 4, Vue 3 y TypeScript.
- Generación estática para cPanel.
- CSS propio basado en tokens semánticos.
- Tipografía del sistema, sin solicitudes a proveedores externos.
- Vitest para pruebas de lógica y contenido.
- ESLint y type checking en la cadena de calidad.

## Desarrollo

Requiere Node.js 22 o superior.

```bash
npm install
npm run dev
```

Validación:

```bash
npm run lint
npm run typecheck
npm test
npm run generate
```

El artefacto estático queda en `.output/public`.

## Variables

Copiar `.env.example` a `.env` solo cuando sea necesario. Nunca guardar secretos bajo prefijos públicos ni versionar archivos `.env`.

## Arquitectura

- `app/`: interfaz, rutas, componentes, contenido y estilos.
- `public/`: recursos públicos estáticos.
- `tests/`: pruebas automatizadas.
- `docs/`: arquitectura, contenido, despliegue, calidad y decisiones.

La Home se implementa en Nuxt/Vue. Las futuras demostraciones React y Angular se compilarán como artefactos aislados, sin incorporarlas al bundle principal.

El contenido se organiza en tres ramas profesionales: Frontend Engineering, UX/UI–Product Design y Diseño Gráfico.

## Contenido y privacidad

No agregar nombres internos, datos personales, métricas no verificadas ni capturas con información sensible. Consultar `docs/content/confidentiality.md`.

## Despliegue

No publicar manualmente el código fuente. Generar el sitio y transferir únicamente `.output/public` al document root aislado definido en el runbook.

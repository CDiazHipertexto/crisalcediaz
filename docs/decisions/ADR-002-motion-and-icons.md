# ADR-002 — Movimiento e iconografía

- Estado: aceptada
- Fecha: 2026-09-03

## Contexto

El prototipo necesitaba comunicar progresión al hacer scroll, facilitar la orientación mediante navegación activa y mostrar herramientas con iconografía reconocible. La solución debía preservar generación estática, contenido sin JavaScript, rendimiento y `prefers-reduced-motion`.

## Opciones evaluadas

1. CSS e `IntersectionObserver` propios.
2. GSAP con ScrollTrigger.
3. Anime.js.
4. Motion para JavaScript.
5. Migrar o incorporar Astro.

Astro no es una librería de animación sino otro framework web; incorporarlo duplicaría responsabilidades ya resueltas por Nuxt. GSAP y Anime.js son válidos para secuencias complejas, pero exceden las necesidades actuales.

## Decisión

- Usar `motion` para revelado progresivo mediante `inView`, con importación dinámica solo en cliente.
- Mantener navegación activa mediante una implementación nativa y pequeña basada en posición de scroll.
- Usar `simple-icons` para SVG inline seleccionados y un fallback tipográfico para tecnologías sin símbolo disponible.
- Mantener el marquee en CSS y detenerlo con `prefers-reduced-motion`.

## Consecuencias

- El contenido sigue visible y navegable sin JavaScript.
- Las animaciones no modifican el flujo ni provocan layout shift.
- El bundle incorpora únicamente la funcionalidad y los SVG utilizados tras tree shaking.
- Toda nueva animación debe explicar su propósito y tener comportamiento reducido.

## Reversión

Eliminar `useSiteMotion`, retirar los atributos `data-reveal` y conservar los estados finales del CSS. El contenido y la arquitectura no dependen de Motion.

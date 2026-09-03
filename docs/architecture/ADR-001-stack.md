# ADR-001 — Stack y estrategia multiframe

- Estado: aceptada para prototipo
- Fecha: 2026-09-03

## Contexto

El portafolio debe ser rápido, indexable, accesible, publicable en cPanel y demostrar experiencia con Vue, React y Angular. Cargar tres frameworks en una sola página elevaría JavaScript, complejidad, superficie de seguridad y coste de mantenimiento.

## Opciones consideradas

1. Nuxt/Vue como aplicación única.
2. Next/React como aplicación única.
3. Angular como aplicación única.
4. Microfrontends con tres frameworks en cada visita.
5. Shell Nuxt con demostraciones aisladas, estáticas y bajo demanda.

## Decisión

Usar Nuxt 4, Vue 3 y TypeScript para el shell editorial y la generación estática. Crear posteriormente:

- Una experiencia React para visualización conversacional, trazas y evaluaciones de IA.
- Una experiencia Angular para reglas empresariales, formularios, tablas y estados complejos.
- Una experiencia Vue integrada con contenido, navegación y Design System.

React y Angular se construirán en workspaces separados y emitirán artefactos independientes bajo rutas como `/lab/react/` y `/lab/angular/`. La Home solo cargará enlaces, previews estáticos y metadatos.

## Consecuencias

- El bundle principal conserva rendimiento y coherencia.
- Cada framework demuestra una decisión arquitectónica, no una lista de logos.
- CI debe validar tres builds cuando el laboratorio exista.
- Los tokens compartidos deberán exportarse a CSS/JSON sin acoplar componentes.

## Riesgos

- Duplicación de configuración y pruebas.
- Navegación y analítica fragmentadas.
- Mayor esfuerzo de actualización.
- Posible confusión si las demos no explican por qué existe cada framework.

## Mitigación

Limitar cada demo a un problema concreto, compartir tokens como paquete estático y usar presupuestos de rendimiento independientes.

## Reversión

Las demos son artefactos desacoplados. Pueden retirarse sin cambiar el shell Nuxt ni las URLs principales.


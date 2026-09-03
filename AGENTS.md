# AGENTS.md

## Contexto

Este repositorio contiene el portafolio profesional bilingüe de Cristian Rubén Salcedo Díaz. Su objetivo es demostrar Design Engineering, Product Design, Design Systems, UX/UI, frontend y uso responsable de IA.

## Reglas obligatorias

- No inventar experiencia, roles, resultados, métricas, clientes o estudios.
- Marcar como `TODO` cualquier dato no confirmado.
- Diferenciar trabajo real, anonimizado, conceptual y académico.
- No revelar ni leer el contenido de `.env`; comprobar secretos solo de forma booleana.
- No almacenar tokens, credenciales, PII o datos internos.
- No publicar capturas sin anonimización y autorización.
- No hacer push, despliegues o cambios DNS sin aprobación explícita.
- Mantener contenido, presentación, lógica y datos separados.
- Evitar JavaScript cuando HTML/CSS semántico sea suficiente.

## Arquitectura

- Shell: Nuxt 4 + Vue 3 + TypeScript.
- Salida primaria: generación estática para cPanel.
- React y Angular: demos aisladas y cargadas bajo demanda; nunca en el bundle de la Home.
- IA: backend separado; ninguna clave en cliente.
- Tokens: nombres semánticos compartidos entre diseño y código.

## Comandos

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run generate
```

## Estándares

- WCAG 2.2 AA.
- HTML semántico, foco visible, teclado, reduced motion y touch targets.
- Commits Conventional Commits.
- Contenido español e inglés alineado.
- URLs, metadatos y structured data consistentes.

## Definición de terminado

La funcionalidad debe ser responsive, accesible, probada, documentada, sin errores de consola, sin secretos y reversible mediante un commit claro.


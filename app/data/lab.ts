import type { Locale } from './portfolio'

export interface LabContent {
  locale: Locale
  alternatePath: string
  languageLabel: string
  hero: { eyebrow: string; title: string; description: string; note: string }
  system: {
    eyebrow: string
    title: string
    description: string
    layers: Array<{ number: string; title: string; description: string; examples: string[] }>
    statusLabel: string
  }
  frameworks: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ name: string; responsibility: string; reason: string; route: string; status: string }>
  }
  ai: {
    eyebrow: string
    title: string
    description: string
    items: Array<{ title: string; status: string; description: string; evidence: string }>
    guardrail: string
  }
  back: string
  archive: string
  resume: string
}

export const labContent: Record<Locale, LabContent> = {
  es: {
    locale: 'es',
    alternatePath: '/en/system-lab',
    languageLabel: 'EN',
    hero: {
      eyebrow: 'CRIS/OS · SYSTEM + AI LAB',
      title: 'Decisiones de diseño convertidas en arquitectura observable.',
      description: 'Este laboratorio separa tres temas que en la Home competían por atención: el Design System, la estrategia multi-framework y la evolución hacia productos asistidos por IA.',
      note: 'La Especialización en Inteligencia Artificial está en curso desde agosto de 2026. Las líneas siguientes son exploraciones y roadmap; no se presentan como experiencia profesional terminada.',
    },
    system: {
      eyebrow: '01 · DESIGN SYSTEM',
      title: 'Un lenguaje común entre intención y ejecución.',
      description: 'CRIS/OS funciona como infraestructura de producto: define decisiones reutilizables, reduce ambigüedad y conecta diseño, contenido, accesibilidad y código.',
      layers: [
        { number: '01', title: 'Foundations', description: 'Reglas compartidas para que la interfaz tenga ritmo, contraste y comportamiento consistente.', examples: ['Color semántico', 'Tipografía fluida', 'Espaciado', 'Grid', 'Motion'] },
        { number: '02', title: 'Tokens', description: 'Variables que expresan intención y permiten cambiar temas sin acoplar componentes a valores visuales.', examples: ['Primitivos', 'Semánticos', 'Componente', 'Estado', 'Tema'] },
        { number: '03', title: 'Componentes', description: 'Contratos de interfaz documentados con propósito, API, contenido, teclado y casos borde.', examples: ['Button', 'Navigation', 'Card', 'Dialog', 'Chat'] },
      ],
      statusLabel: 'Implementado en este prototipo',
    },
    frameworks: {
      eyebrow: '02 · FRAMEWORK STRATEGY',
      title: 'Tres tecnologías, tres responsabilidades claras.',
      description: 'La versatilidad se demuestra mejor tomando buenas decisiones que cargando tres frameworks en una misma vista. Cada demo será aislada, medible y removible.',
      items: [
        { name: 'Vue / Nuxt', responsibility: 'Shell editorial', reason: 'Contenido bilingüe, SEO, navegación, Design System y generación estática.', route: 'Producción actual', status: 'IMPLEMENTADO' },
        { name: 'React', responsibility: 'Experimento agentic', reason: 'Interfaz conversacional, fuentes, trazas y evaluación de respuestas.', route: '/lab/react', status: 'ROADMAP' },
        { name: 'Angular', responsibility: 'Flujo enterprise', reason: 'Reglas, formularios, tablas, validaciones, estados y aprobaciones.', route: '/lab/angular', status: 'ROADMAP' },
      ],
    },
    ai: {
      eyebrow: '03 · AI SPECIALIZATION PATH',
      title: 'Aprender, prototipar, evaluar y documentar.',
      description: 'La especialización se convertirá progresivamente en evidencia pública mediante experimentos pequeños, casos reproducibles y evaluación responsable.',
      items: [
        { title: 'AI Product Design', status: 'EN EXPLORACIÓN', description: 'Diseño de expectativas, control humano, explicabilidad, confianza y recuperación ante errores.', evidence: 'Próximo entregable: heurísticas UX para Ask Cris.' },
        { title: 'Agentes + RAG', status: 'ARQUITECTURA', description: 'Fuentes estructuradas, recuperación con citas, límites de herramientas y respuestas que reconocen incertidumbre.', evidence: 'Base actual: fallback local con fuentes públicas.' },
        { title: 'NLP + automatización', status: 'ROADMAP ACADÉMICO', description: 'Clasificación de intención, extracción responsable y automatización de tareas repetibles.', evidence: 'TODO: definir ejercicio, dataset y criterios de evaluación.' },
        { title: 'Visión por computador', status: 'ROADMAP ACADÉMICO', description: 'Exploración de accesibilidad visual, clasificación y análisis de activos gráficos.', evidence: 'TODO: delimitar un caso sin datos sensibles.' },
        { title: 'Evaluación de IA', status: 'PRIORIDAD', description: 'Conjuntos de prueba, precisión de fuentes, abstención, seguridad, coste y experiencia de usuario.', evidence: 'Próximo entregable: matriz de evals para Ask Cris.' },
        { title: 'IA responsable', status: 'TRANSVERSAL', description: 'Privacidad, minimización de datos, transparencia, supervisión humana y análisis de riesgo.', evidence: 'Guardrails documentados antes de integrar una API real.' },
      ],
      guardrail: 'Nada se presenta como resultado profesional hasta contar con evidencia, contexto, pruebas y autorización para publicarlo.',
    },
    back: 'Volver al portafolio',
    archive: 'Ver archivo visual',
    resume: 'Ver currículum',
  },
  en: {
    locale: 'en',
    alternatePath: '/system-lab',
    languageLabel: 'ES',
    hero: {
      eyebrow: 'CRIS/OS · SYSTEM + AI LAB',
      title: 'Design decisions turned into observable architecture.',
      description: 'This lab separates three topics that competed for attention on the Home page: the Design System, the multi-framework strategy and the evolution toward AI-assisted products.',
      note: 'The Artificial Intelligence specialization has been in progress since August 2026. The following lines are explorations and roadmap items, not completed professional experience.',
    },
    system: {
      eyebrow: '01 · DESIGN SYSTEM',
      title: 'A shared language between intent and execution.',
      description: 'CRIS/OS works as product infrastructure: it defines reusable decisions, reduces ambiguity and connects design, content, accessibility and code.',
      layers: [
        { number: '01', title: 'Foundations', description: 'Shared rules that give the interface consistent rhythm, contrast and behavior.', examples: ['Semantic color', 'Fluid type', 'Spacing', 'Grid', 'Motion'] },
        { number: '02', title: 'Tokens', description: 'Variables that express intent and allow themes to change without coupling components to visual values.', examples: ['Primitive', 'Semantic', 'Component', 'State', 'Theme'] },
        { number: '03', title: 'Components', description: 'Documented UI contracts covering purpose, API, content, keyboard and edge cases.', examples: ['Button', 'Navigation', 'Card', 'Dialog', 'Chat'] },
      ],
      statusLabel: 'Implemented in this prototype',
    },
    frameworks: {
      eyebrow: '02 · FRAMEWORK STRATEGY',
      title: 'Three technologies, three clear responsibilities.',
      description: 'Versatility is better demonstrated through sound decisions than by loading three frameworks into one view. Each demo will be isolated, measurable and removable.',
      items: [
        { name: 'Vue / Nuxt', responsibility: 'Editorial shell', reason: 'Bilingual content, SEO, navigation, Design System and static generation.', route: 'Current production', status: 'IMPLEMENTED' },
        { name: 'React', responsibility: 'Agentic experiment', reason: 'Conversational UI, sources, traces and response evaluation.', route: '/lab/react', status: 'ROADMAP' },
        { name: 'Angular', responsibility: 'Enterprise flow', reason: 'Rules, forms, tables, validations, states and approvals.', route: '/lab/angular', status: 'ROADMAP' },
      ],
    },
    ai: {
      eyebrow: '03 · AI SPECIALIZATION PATH',
      title: 'Learn, prototype, evaluate and document.',
      description: 'The specialization will progressively become public evidence through small experiments, reproducible cases and responsible evaluation.',
      items: [
        { title: 'AI Product Design', status: 'EXPLORING', description: 'Expectations, human control, explainability, trust and error recovery.', evidence: 'Next deliverable: UX heuristics for Ask Cris.' },
        { title: 'Agents + RAG', status: 'ARCHITECTURE', description: 'Structured sources, cited retrieval, tool boundaries and answers that acknowledge uncertainty.', evidence: 'Current base: local fallback grounded in public sources.' },
        { title: 'NLP + automation', status: 'ACADEMIC ROADMAP', description: 'Intent classification, responsible extraction and automation of repeatable tasks.', evidence: 'TODO: define exercise, dataset and evaluation criteria.' },
        { title: 'Computer vision', status: 'ACADEMIC ROADMAP', description: 'Exploring visual accessibility, classification and graphic asset analysis.', evidence: 'TODO: scope a case without sensitive data.' },
        { title: 'AI evaluation', status: 'PRIORITY', description: 'Test sets, source precision, abstention, safety, cost and user experience.', evidence: 'Next deliverable: an eval matrix for Ask Cris.' },
        { title: 'Responsible AI', status: 'CROSS-CUTTING', description: 'Privacy, data minimization, transparency, human oversight and risk analysis.', evidence: 'Guardrails documented before integrating a real API.' },
      ],
      guardrail: 'Nothing is presented as a professional result until evidence, context, tests and publication approval exist.',
    },
    back: 'Back to portfolio',
    archive: 'View visual archive',
    resume: 'View resume',
  },
}

<script setup lang="ts">
const props = defineProps<{ locale: 'es' | 'en'; label: string }>()

const dialog = ref<HTMLDialogElement | null>(null)
const answer = ref('')

interface AssistantCopy {
  title: string
  intro: string
  close: string
  questions: Array<[string, string]>
}

const copy = computed<AssistantCopy>(() => props.locale === 'es'
  ? {
      title: 'Ask Cris · modo local',
      intro: 'Elige una pregunta. Las respuestas provienen únicamente del contenido público del prototipo.',
      close: 'Cerrar',
      questions: [
        ['¿Cuál es su enfoque profesional?', 'Cristian conecta Product Design, Design Systems, UX/UI, frontend y flujos asistidos por IA. Fuente: Perfil.'],
        ['¿Con qué tecnologías trabaja?', 'Su experiencia declarada incluye HTML, CSS/SCSS, JavaScript, Angular, Vue, WordPress, Magento, Salesforce Lightning y Liferay. Fuente: Perfil profesional.'],
        ['¿Cuál es su experiencia reciente?', 'Desde octubre de 2023 trabaja como Tech Consultant en Frontend Web, implementando interfaces con Angular, Liferay, HTML, SCSS y JavaScript. Fuente: Experiencia.'],
        ['¿Cuál es su formación?', 'Es Profesional en Comunicación Visual y Tecnólogo en Comunicación Gráfica por UNIMINUTO, con formación complementaria en desarrollo web. Fuente: Educación.'],
        ['¿Qué hay en AI Lab?', 'AI Lab documentará experimentos de AI Product Design, agentes, RAG, automatización y evaluación responsable. Fuente: AI Lab.'],
        ['¿Cómo puedo contactarlo?', 'Puedes continuar por LinkedIn o correo desde la sección Contacto. Fuente: Contacto.'],
      ],
    }
  : {
      title: 'Ask Cris · local mode',
      intro: 'Choose a question. Answers come only from the prototype’s public content.',
      close: 'Close',
      questions: [
        ['What is his professional focus?', 'Cristian connects Product Design, Design Systems, UX/UI, frontend and AI-assisted workflows. Source: About.'],
        ['Which technologies does he use?', 'His stated experience includes HTML, CSS/SCSS, JavaScript, Angular, Vue, WordPress, Magento, Salesforce Lightning and Liferay. Source: Professional profile.'],
        ['What is his recent experience?', 'Since October 2023 he has worked as a Frontend Web Tech Consultant, implementing interfaces with Angular, Liferay, HTML, SCSS and JavaScript. Source: Experience.'],
        ['What is his education?', 'He holds degrees in Visual Communication and Graphic Communication from UNIMINUTO, with complementary web development training. Source: Education.'],
        ['What is in the AI Lab?', 'AI Lab will document AI Product Design, agents, RAG, automation and responsible evaluation experiments. Source: AI Lab.'],
        ['How can I contact him?', 'You can continue through LinkedIn or email from the Contact section. Source: Contact.'],
      ],
    })

function open() {
  answer.value = ''
  dialog.value?.showModal()
}

function selectAnswer(value: string) {
  answer.value = value
}

defineExpose({ open })
</script>

<template>
  <button class="button button--secondary" type="button" @click="open">{{ label }}</button>
  <dialog ref="dialog" class="assistant-dialog" @click.self="dialog?.close()">
    <div class="assistant-dialog__head">
      <div>
        <p class="eyebrow">PUBLIC SOURCES / FALLBACK</p>
        <h2>{{ copy.title }}</h2>
      </div>
      <button class="icon-button" type="button" :aria-label="copy.close" @click="dialog?.close()">×</button>
    </div>
    <p>{{ copy.intro }}</p>
    <div class="assistant-dialog__questions">
      <button v-for="question in copy.questions" :key="question[0]" type="button" @click="selectAnswer(question[1])">
        {{ question[0] }}
      </button>
    </div>
    <p v-if="answer" class="assistant-dialog__answer" aria-live="polite">{{ answer }}</p>
  </dialog>
</template>

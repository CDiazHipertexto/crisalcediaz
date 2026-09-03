import {
  siAngular,
  siBehance,
  siCss,
  siFigma,
  siGit,
  siGithub,
  siHtml5,
  siJavascript,
  siJira,
  siMailchimp,
  siNuxt,
  siPhp,
  siReact,
  siSass,
  siSymfony,
  siTypescript,
  siVtex,
  siVuedotjs,
  siWhatsapp,
  siWoocommerce,
  siWordpress,
  siYoutube,
  type SimpleIcon,
} from 'simple-icons'

const icons: Record<string, SimpleIcon> = {
  angular: siAngular,
  behance: siBehance,
  css: siCss,
  css3: siCss,
  figma: siFigma,
  git: siGit,
  github: siGithub,
  html: siHtml5,
  html5: siHtml5,
  javascript: siJavascript,
  jira: siJira,
  mailchimp: siMailchimp,
  nuxt: siNuxt,
  php: siPhp,
  react: siReact,
  sass: siSass,
  scss: siSass,
  symfony: siSymfony,
  typescript: siTypescript,
  vtex: siVtex,
  vue: siVuedotjs,
  'vue.js': siVuedotjs,
  whatsapp: siWhatsapp,
  woocommerce: siWoocommerce,
  wordpress: siWordpress,
  youtube: siYoutube,
}

const normalize = (label: string) => label
  .toLowerCase()
  .replace(/·.*$/, '')
  .replace(/\(.*/, '')
  .replace(/\/.*/, '')
  .trim()

export const getTechIcon = (label: string) => icons[normalize(label)]

export const marqueeTools = [
  'HTML5',
  'CSS3',
  'Sass',
  'JavaScript',
  'TypeScript',
  'Angular',
  'Vue.js',
  'React',
  'Nuxt',
  'Figma',
  'Git',
  'WordPress',
  'WooCommerce',
  'VTEX',
  'PHP',
  'Symfony',
]

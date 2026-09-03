import type { Locale } from './portfolio'

export interface ArchiveContent {
  locale: Locale
  alternatePath: string
  languageLabel: string
  hero: { eyebrow: string; title: string; description: string; back: string }
  web: {
    eyebrow: string
    title: string
    description: string
    featured: Array<{ title: string; sector: string; url: string; image: string; alt: string; width: number; height: number }>
    allTitle: string
    allDescription: string
    all: Array<{ title: string; url: string }>
    visit: string
    previewLabel: string
  }
  motion: {
    eyebrow: string
    title: string
    description: string
    channelLabel: string
    channelUrl: string
    playLabel: string
    openLabel: string
    videos: Array<{ id: string; title: string; description: string; thumbnail: string }>
  }
}

const implementations = [
  { title: 'Yo Leo Online', url: 'https://yoleo.online/' },
  { title: 'Alimentos Alduque', url: 'https://www.alimentosalduque.com.co/' },
  { title: 'Me Muevo y Leo', url: 'https://memuevoyleo.com/' },
  { title: 'Hotel Saint George', url: 'https://www.marfasaintgeorge.com/' },
  { title: 'Hotel Fraye Nashville', url: 'https://www.hotelfrayenashville.com/' },
  { title: 'Longboards Melbourne Beach', url: 'https://www.longboardsmelbournebeach.com/' },
  { title: 'Bohemian Charlotte Meetings', url: 'https://bohemian-charlotte-meetings.tambo.site/' },
  { title: 'Beverly Laurel Motor Hotel', url: 'https://beverly-laurel-motor-hotel.tambo.site/' },
  { title: 'Heritage Park Hospitality', url: 'http://heritage-park-hospitality-wedd.tambo.site/' },
  { title: 'TPG Hotels & Resorts', url: 'http://tpg-hotels-resorts-marinas.tambo.site/' },
  { title: 'Nonantum Weddings', url: 'https://nonantum-weddings.tambo.site/' },
  { title: 'Arizona Compass Grill', url: 'https://arizona-compass-grill.tambo.site/' },
  { title: 'InterContinental Buckhead', url: 'https://intercon-buckhead-redesign.tambo.site/' },
  { title: 'The Inn at Stockbridge', url: 'https://www.stockbridgeinn.com/' },
  { title: 'Kessler Charters', url: 'https://kessler-charters.tambo.site/' },
  { title: 'Hotel Vesper', url: 'https://hotel-vesper.tambo.site/' },
]

export const archiveContent: Record<Locale, ArchiveContent> = {
  es: {
    locale: 'es',
    alternatePath: '/en/archive',
    languageLabel: 'EN',
    hero: {
      eyebrow: 'ARCHIVO VISUAL · EVIDENCIA SELECCIONADA',
      title: 'Del archivo de diseño a una historia navegable.',
      description: 'Una selección de interfaces web y piezas audiovisuales desarrolladas desde el diseño. Los mockups permiten observar composición, responsive, sistemas visuales y adaptación a cada marca.',
      back: 'Volver al portafolio',
    },
    web: {
      eyebrow: 'WEB · DISEÑO + IMPLEMENTACIÓN',
      title: 'Experiencias construidas para contextos editoriales y hospitality.',
      description: 'Muestras preservadas del proceso de diseño e implementación. El alcance individual y las decisiones de cada proyecto se ampliarán en casos de estudio.',
      featured: [
        { title: 'Hotel Fraye Nashville', sector: 'Hospitality · Frontend', url: 'https://www.hotelfrayenashville.com/', image: '/images/web/hotel-fraye.webp', alt: 'Página principal de Hotel Fraye con narrativa editorial y fotografía de interiores.', width: 1000, height: 4187 },
        { title: 'Longboards Melbourne Beach', sector: 'Hospitality · Frontend', url: 'https://www.longboardsmelbournebeach.com/', image: '/images/web/longboards.webp', alt: 'Página de Longboards con identidad costera, módulos de menú y entretenimiento.', width: 1000, height: 4185 },
        { title: 'InterContinental Buckhead', sector: 'Hospitality · UX/UI', url: 'https://intercon-buckhead-redesign.tambo.site/', image: '/images/web/intercontinental.webp', alt: 'Diseño web de InterContinental Buckhead con módulos de habitaciones, gastronomía y eventos.', width: 1000, height: 6308 },
        { title: 'Nonantum Weddings', sector: 'Hospitality · UX/UI', url: 'https://nonantum-weddings.tambo.site/', image: '/images/web/nonantum.webp', alt: 'Experiencia web para bodas de Nonantum con fotografía costera y formulario de planeación.', width: 1000, height: 3075 },
        { title: 'TPG Hotels & Resorts', sector: 'Hospitality · Frontend', url: 'http://tpg-hotels-resorts-marinas.tambo.site/', image: '/images/web/tpg.webp', alt: 'Sitio corporativo de TPG Hotels and Resorts con portafolio de marcas y servicios.', width: 1000, height: 4992 },
        { title: 'The Inn at Stockbridge', sector: 'Hospitality · UX/UI', url: 'https://www.stockbridgeinn.com/', image: '/images/web/stockbridge.webp', alt: 'Página de The Inn at Stockbridge con narrativa de alojamiento, gastronomía y bodas.', width: 1000, height: 3354 },
      ],
      allTitle: 'Inventario web',
      allDescription: '16 implementaciones únicas declaradas. Algunos dominios son archivos de demostración y pueden cambiar o dejar de estar disponibles.',
      all: implementations,
      visit: 'Visitar sitio',
      previewLabel: 'Vista desplazable del diseño',
    },
    motion: {
      eyebrow: 'MOTION · COMUNICACIÓN AUDIOVISUAL',
      title: 'Piezas que organizan información en el tiempo.',
      description: 'Tres ejercicios publicados en mi canal. La reproducción se activa únicamente al solicitarla para reducir carga inicial y conexiones con terceros.',
      channelLabel: 'Ver canal de YouTube',
      channelUrl: 'https://www.youtube.com/@cristianrsalcedodiaz229',
      playLabel: 'Reproducir video',
      openLabel: 'Abrir en YouTube',
      videos: [
        { id: 'wpKGBAqxByw', title: 'Animotion inducciones', description: 'Pieza informativa para comunicar fechas de inducción mediante ritmo, jerarquía y movimiento.', thumbnail: '/images/motion/animotion-inducciones.webp' },
        { id: 'yXxhGUVNyqU', title: 'Animotion cierre inscripciones', description: 'Animación promocional enfocada en cierre de inscripciones y recordación de fecha.', thumbnail: '/images/motion/animotion-inscripciones.webp' },
        { id: 'TPnonwRnPzc', title: 'Open Campus · Animotion', description: 'Pieza audiovisual para presentar fechas de un evento académico de forma clara y dinámica.', thumbnail: '/images/motion/open-campus.webp' },
      ],
    },
  },
  en: {
    locale: 'en',
    alternatePath: '/archive',
    languageLabel: 'ES',
    hero: {
      eyebrow: 'VISUAL ARCHIVE · SELECTED EVIDENCE',
      title: 'From design archive to a navigable story.',
      description: 'A selection of websites and motion pieces developed from design. The mockups reveal composition, responsive thinking, visual systems and brand adaptation.',
      back: 'Back to portfolio',
    },
    web: {
      eyebrow: 'WEB · DESIGN + IMPLEMENTATION',
      title: 'Experiences built for publishing and hospitality contexts.',
      description: 'Preserved samples from the design and implementation process. Individual scope and project decisions will be expanded in future case studies.',
      featured: [
        { title: 'Hotel Fraye Nashville', sector: 'Hospitality · Frontend', url: 'https://www.hotelfrayenashville.com/', image: '/images/web/hotel-fraye.webp', alt: 'Hotel Fraye homepage with editorial storytelling and interior photography.', width: 1000, height: 4187 },
        { title: 'Longboards Melbourne Beach', sector: 'Hospitality · Frontend', url: 'https://www.longboardsmelbournebeach.com/', image: '/images/web/longboards.webp', alt: 'Longboards page with a coastal identity, menu modules and entertainment content.', width: 1000, height: 4185 },
        { title: 'InterContinental Buckhead', sector: 'Hospitality · UX/UI', url: 'https://intercon-buckhead-redesign.tambo.site/', image: '/images/web/intercontinental.webp', alt: 'InterContinental Buckhead design featuring rooms, dining and event modules.', width: 1000, height: 6308 },
        { title: 'Nonantum Weddings', sector: 'Hospitality · UX/UI', url: 'https://nonantum-weddings.tambo.site/', image: '/images/web/nonantum.webp', alt: 'Nonantum wedding experience with coastal photography and a planning form.', width: 1000, height: 3075 },
        { title: 'TPG Hotels & Resorts', sector: 'Hospitality · Frontend', url: 'http://tpg-hotels-resorts-marinas.tambo.site/', image: '/images/web/tpg.webp', alt: 'TPG Hotels and Resorts corporate website featuring its brand and service portfolio.', width: 1000, height: 4992 },
        { title: 'The Inn at Stockbridge', sector: 'Hospitality · UX/UI', url: 'https://www.stockbridgeinn.com/', image: '/images/web/stockbridge.webp', alt: 'The Inn at Stockbridge page featuring lodging, dining and wedding storytelling.', width: 1000, height: 3354 },
      ],
      allTitle: 'Web inventory',
      allDescription: '16 unique declared implementations. Some domains are demo archives and may change or become unavailable.',
      all: implementations,
      visit: 'Visit website',
      previewLabel: 'Scrollable design preview',
    },
    motion: {
      eyebrow: 'MOTION · AUDIOVISUAL COMMUNICATION',
      title: 'Pieces that organize information over time.',
      description: 'Three exercises published on my channel. Playback is activated only on request to reduce initial load and third-party connections.',
      channelLabel: 'View YouTube channel',
      channelUrl: 'https://www.youtube.com/@cristianrsalcedodiaz229',
      playLabel: 'Play video',
      openLabel: 'Open on YouTube',
      videos: [
        { id: 'wpKGBAqxByw', title: 'Induction animotion', description: 'An informational piece communicating induction dates through rhythm, hierarchy and motion.', thumbnail: '/images/motion/animotion-inducciones.webp' },
        { id: 'yXxhGUVNyqU', title: 'Registration closing animotion', description: 'A promotional animation focused on registration closing and date recall.', thumbnail: '/images/motion/animotion-inscripciones.webp' },
        { id: 'TPnonwRnPzc', title: 'Open Campus · Animotion', description: 'An audiovisual piece presenting academic event dates in a clear, dynamic format.', thumbnail: '/images/motion/open-campus.webp' },
      ],
    },
  },
}

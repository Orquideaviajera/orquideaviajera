import type {
  ServiceCardData,
  SupportItem,
  ProcessStep,
  ProblemItem,
  SolutionItem,
  DifferentiatorItem,
  NavLink,
  FooterColumn,
} from '@/types';

/* ---------- BRAND ---------- */
export const BRAND = {
  name: 'Orquídea Viajera',
  claim: 'Hacemos tu camino a España más seguro y sencillo.',
  tagline: 'Asesoría de visados · Acompañamiento en España',
  whatsappCta: 'Agenda tu evaluación',
  whatsappLink: '#contacto',
} as const;

/* ---------- NAVIGATION ---------- */
export const NAV_LINKS: ReadonlyArray<NavLink> = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Acompañamiento', href: '#acompanamiento' },
  { label: 'Proceso', href: '#proceso' },
  { label: 'Diferenciales', href: '#diferenciales' },
  { label: 'Contacto', href: '#contacto' },
];

/* ---------- PROBLEMS ---------- */
export const PROBLEMS: ReadonlyArray<ProblemItem> = [
  {
    title: 'Procesos confusos y burocráticos',
    description: 'Cada consulado tiene sus matices. Sin guía experta, es fácil perderse en formularios, citas y requisitos cambiantes.',
  },
  {
    title: 'Riesgo real de rechazo',
    description: 'Un detalle mal documentado puede invalidar todo el expediente. Las negativas tienen consecuencias y costo emocional.',
  },
  {
    title: 'Falta de claridad sobre qué hacer',
    description: 'Información dispersa, contradictoria o desactualizada en internet. Te quedas sin saber qué paso es el siguiente.',
  },
  {
    title: 'Aislamiento al llegar a España',
    description: 'Aterrizar es solo el inicio. Empadronamiento, NIE, banca, sanidad: trámites esenciales sin acompañamiento.',
  },
];

/* ---------- SOLUTIONS ---------- */
export const SOLUTIONS: ReadonlyArray<SolutionItem> = [
  {
    title: 'Acompañamiento completo',
    description: 'Desde la evaluación inicial hasta la resolución del trámite. No te dejamos a mitad de camino.',
    icon: 'shield',
  },
  {
    title: 'Asesoría personalizada',
    description: 'Cada caso es único. Estudiamos tu perfil, tus tiempos y tus objetivos antes de proponer una ruta.',
    icon: 'compass',
  },
  {
    title: 'Servicio 100% online',
    description: 'Trabajamos contigo donde estés. Sin desplazamientos, con la misma cercanía y profundidad.',
    icon: 'wifi',
  },
];

/* ---------- SERVICIOS PRINCIPALES ---------- */
export const TOURISM_SERVICE: ServiceCardData = {
  tag: 'Servicio · 01',
  title: 'Visa de turismo',
  description: 'Viajar a España con la tranquilidad de tener cada documento en su lugar.',
  features: [
    'Evaluación del perfil del solicitante',
    'Análisis de requisitos económicos y personales',
    'Preparación completa del expediente',
    'Revisión estratégica de documentos',
    'Orientación para reducir riesgos de rechazo',
    'Acompañamiento durante todo el proceso',
  ],
};

export const STUDY_SERVICE: ServiceCardData = {
  tag: 'Servicio · 02',
  title: 'Visa de estudios',
  description: 'El primer paso de tu formación en España, bien dado desde el origen.',
  features: [
    'Análisis del perfil académico',
    'Asesoría en la elección de estudios',
    'Revisión de carta de admisión o matrícula',
    'Estrategia financiera para demostrar solvencia',
    'Preparación completa del expediente',
    'Preparación para entrevista consular (si aplica)',
  ],
};

/* ---------- ACOMPAÑAMIENTO EN ESPAÑA ---------- */
export const SPAIN_SUPPORT_ITEMS: ReadonlyArray<SupportItem> = [
  {
    num: '01',
    title: 'Empadronamiento',
    description: 'En el municipio correspondiente.',
  },
  {
    num: '02',
    title: 'Solicitud de NIE / TIE',
    description: 'Identificación de extranjero.',
  },
  {
    num: '03',
    title: 'Apertura de cuenta bancaria',
    description: 'Banca residente y no residente.',
  },
  {
    num: '04',
    title: 'Sistema sanitario público',
    description: 'Tarjeta sanitaria y centro de salud.',
  },
  {
    num: '05',
    title: 'Homologación de títulos',
    description: 'Académicos y profesionales.',
  },
  {
    num: '06',
    title: 'Registro en extranjería',
    description: 'Según el tipo de visa.',
  },
  {
    num: '07',
    title: 'Orientación básica',
    description: 'Para tu vida cotidiana en España.',
  },
  {
    num: '08',
    title: 'Soporte continuo por WhatsApp',
    description: 'Comunicación directa, sin intermediarios.',
  },
];

/* ---------- PROCESO ---------- */
export const PROCESS_STEPS: ReadonlyArray<ProcessStep> = [
  { num: '01', title: 'Evaluación', description: 'Diagnóstico inicial del perfil.' },
  { num: '02', title: 'Propuesta', description: 'Presupuesto claro, sin sorpresas.' },
  { num: '03', title: 'Preparación', description: 'Documentación a medida.' },
  { num: '04', title: 'Revisión', description: 'Auditoría anti-rechazo.' },
  { num: '05', title: 'Presentación', description: 'Entrega del expediente.' },
  { num: '06', title: 'Seguimiento', description: 'Estado del trámite.' },
  { num: '07', title: 'Resolución', description: 'Hasta el resultado final.' },
];

/* ---------- DIFERENCIALES ---------- */
export const DIFFERENTIATORS: ReadonlyArray<DifferentiatorItem> = [
  {
    num: '01',
    title: 'Especialización en España',
    description: 'No somos generalistas. Conocemos a fondo los consulados, los matices y los criterios.',
  },
  {
    num: '02',
    title: 'Acompañamiento real',
    description: 'No te entregamos un PDF y desaparecemos. Te acompañamos hasta llegar y asentarte.',
  },
  {
    num: '03',
    title: 'Reducción de errores',
    description: 'Auditoría rigurosa del expediente antes de presentar. Cada detalle revisado.',
  },
  {
    num: '04',
    title: 'Atención personalizada',
    description: 'Casos únicos, estrategias únicas. Sin plantillas genéricas ni respuestas automáticas.',
  },
];

/* ---------- FOOTER ---------- */
export const FOOTER_COLUMNS: ReadonlyArray<FooterColumn> = [
  {
    title: 'Servicios',
    links: [
      { label: 'Visa de turismo', href: '#servicios' },
      { label: 'Visa de estudios', href: '#servicios' },
      { label: 'Acompañamiento en España', href: '#acompanamiento' },
      { label: 'Revisión de expediente', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Sobre nosotros', href: '#' },
      { label: 'Proceso', href: '#proceso' },
      { label: 'Diferenciales', href: '#diferenciales' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
];

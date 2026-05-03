export type Locale = 'en' | 'es';

export const ui = {
  en: {
    bio: 'Medical student at Universidad de La Laguna, working toward a career in clinical AI radiology. I build at the intersection of medicine and software.',
    sections: { writing: 'writing/', projects: 'projects/', elsewhere: 'elsewhere/' },
    backLink: '← claudio urdaneta',
    notFound: 'page not found',
  },
  es: {
    bio: 'TODO_ES_BIO — Spanish translation of the bio (user fills in)',
    sections: { writing: 'escritura/', projects: 'proyectos/', elsewhere: 'enlaces/' },
    backLink: '← claudio urdaneta',
    notFound: 'página no encontrada',
  },
} as const;

export const projectDescriptions: Record<Locale, Record<string, string>> = {
  en: {
    salvux: 'Permit-to-Work SaaS for industrial safety',
    alaric: 'Personal AI chief-of-staff, self-hosted',
  },
  es: {
    salvux: 'TODO_ES_SALVUX — SaaS de permisos de trabajo para seguridad industrial',
    alaric: 'TODO_ES_ALARIC — Asistente personal de IA, autoalojado',
  },
};

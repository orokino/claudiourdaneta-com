export type Locale = 'en' | 'es';

export const ui = {
  en: {
    bio: 'Medical student at Universidad de La Laguna, working toward a career in clinical AI radiology. I build at the intersection of medicine and software.',
    sections: { writing: 'writing/', projects: 'projects/', elsewhere: 'elsewhere/' },
    backLink: '← claudio urdaneta',
    notFound: 'page not found',
  },
  es: {
    bio: 'Estudiante de medicina en la Universidad de La Laguna, con miras a una carrera en radiología clínica con inteligencia artificial. Desarrollo proyectos en la intersección de la medicina y el software.',
    sections: { writing: 'escritura/', projects: 'proyectos/', elsewhere: 'enlaces/' },
    backLink: '← claudio urdaneta',
    notFound: 'página no encontrada',
  },
} as const;

export const projectDescriptions: Record<Locale, Record<string, string>> = {
  en: {
    salvux: 'Permit-to-Work SaaS for industrial safety',
    alaric: 'Personal AI chief of operation',
  },
  es: {
    salvux: 'SaaS de permisos de trabajo para seguridad industrial',
    alaric: 'Asistente personal de IA, jefe de operaciones',
  },
};

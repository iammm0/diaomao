export const site = {
  name: 'Mingjun Zhao',
  githubUser: 'iammm0',
  github: 'https://github.com/iammm0',
  avatar: '/avatar.jpg',
  headline: 'I build the systems that let AI agents act.',
  focus: 'AI Agent engineering · Security tooling · Execution infrastructure',
  roles: ['AI Agent engineering', 'Security tooling', 'Execution infrastructure'],
  exploring:
    'Currently exploring AI Security and safer, more reliable Agent Infrastructure.',
  bio: '爱是伟大的力量！',
  stack: ['Go', 'TypeScript', 'Python', 'Docker', 'PostgreSQL', 'SQLite', 'Redis'],
  projects: [
    {
      name: 'secbot',
      description:
        'An authorized security-testing workspace for AI-assisted security workflows.',
      tags: ['TypeScript', 'Security', 'AI Agent'],
      github: 'https://github.com/iammm0/secbot',
      url: 'https://secbot.site',
    },
    {
      name: 'execgo',
      description:
        'An agent-first execution kernel and action harness for reliable tool use.',
      tags: ['Go', 'Runtime', 'Infrastructure'],
      github: 'https://github.com/iammm0/execgo',
    },
    {
      name: 'mph-agent',
      description:
        'Converts natural-language COMSOL requirements into complete simulation models across geometry, physics, meshing, studies, and solving.',
      tags: ['Python', 'COMSOL', 'Domain Agent'],
      github: 'https://github.com/iammm0/mph-agent',
      url: 'https://mphagent.site',
    },
    {
      name: 'damn-agent',
      description:
        'A Chinese documentation site for understanding, building, and evaluating AI Agent systems.',
      tags: ['MDX', 'Documentation', 'Agent Engineering'],
      github: 'https://github.com/iammm0/damn-agent',
    },
  ],
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/iammm0',
      hint: '@iammm0',
    },
    {
      label: 'secbot.site',
      href: 'https://secbot.site',
      hint: 'Security workspace',
    },
    {
      label: 'mphagent.site',
      href: 'https://mphagent.site',
      hint: 'COMSOL agent',
    },
  ],
} as const

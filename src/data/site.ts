export const site = {
  name: '赵明俊',
  nameEn: 'Mingjun Zhao',
  title: '全栈开发工程师',
  githubUser: 'iammm0',
  github: 'https://github.com/iammm0',
  avatar: '/avatar.jpg',
  phone: '13839223109',
  email: '13839223109@163.com',
  headline: '用工程把 Agent 真正落地。',
  focus: 'AI 原生全栈 · Agent 工程 · 安全工具 · 执行基础设施',
  roles: ['AI 原生全栈', 'Agent 工程', '安全工具', '执行基础设施'],
  exploring:
    '当前聚焦 AI Security 与更可靠的 Agent Infrastructure，把编排、工具调用与交付闭环做到可观测、可部署。',
  bio: '爱是伟大的力量！',
  stack: [
    'Go',
    'TypeScript',
    'Python',
    'Vue 3',
    'React',
    'FastAPI',
    'Gin',
    'PostgreSQL',
    'MySQL',
    'Redis',
    'Docker',
    'LangGraph',
  ],
  contacts: [
    { label: '电话', value: '13839223109', href: 'tel:13839223109' },
    { label: '邮箱', value: '13839223109@163.com', href: 'mailto:13839223109@163.com' },
    { label: 'GitHub', value: '@iammm0', href: 'https://github.com/iammm0' },
  ],
  education: {
    school: '天津城建大学',
    degree: '本科',
    major: '应用物理学',
    period: '2022.09 — 2026.06',
  },
  skills: [
    {
      title: 'Agent 工程',
      items: [
        '掌握常见智能体设计范式与开发框架，可独立完成 Agent 架构设计与原生编排实现',
        '熟悉 Codex / Claude Code / Cursor，具备 MCP、Skills、Hooks 开发与集成能力',
        '熟悉主流大模型 API 与 Prompt 工程，具备企业级 RAG 落地经验，掌握 Qdrant 等向量库应用',
      ],
    },
    {
      title: '后端与数据',
      items: [
        '熟悉 FastAPI、Gin 与 RESTful 设计，可用 Kratos 搭建微服务并独立完成接口开发',
        '熟练使用 PostgreSQL、MySQL、Redis，具备数据建模与 SQL 优化能力',
      ],
    },
    {
      title: '前端与协作',
      items: [
        '熟悉 Next.js 与 TanStack 系列，能快速产出原型并做交互式需求梳理与验证',
        '熟练使用 Git，深度参与多人协作与分支管理，具备工程化与编码规范意识',
      ],
    },
    {
      title: '部署与运维',
      items: [
        '熟悉 Linux / Shell，可独立完成服务部署、日志排查与基础性能调优',
        '熟悉 Docker，了解 Kubernetes，熟悉 Nginx 反向代理与证书配置',
        '熟悉 Gitee Go / GitHub Actions、镜像版本管理、滚动更新与 Webhook 通知',
      ],
    },
  ],
  experience: [
    {
      company: '北京海洋无限网络科技有限公司',
      department: '技术研发二部',
      role: 'AI 原生全栈工程师',
      period: '2026.08 — 至今',
      project: '创意素材数据平台（鲸准）· 高分素材进度 + 账号收益进度双看板',
      summary:
        '面向鲸准创意团队素材量化管理，负责高优账号素材看板、高分素材看板、产能与账号录入三大核心板块的全栈建设与 CI/CD 落地。整合鲸准素材库、投放报表与本地业务配置，形成可追溯的素材发布与账号收益漏斗。',
      highlights: [
        '高优账号素材看板：按账号跟踪高优素材发布、消耗与高分达成，落地逐账号收益结算与消耗测算（LV5/LV4/LV3 单价、有效/高分/消耗缺口、跨月拒绝、上月配置复制），并打通明细、分组与 Excel 导出。',
        '高分素材看板：建设月目标与周排产、冲优发布/高分达成/高分率统计，落地 T-2 高分率与跨月周归属等复杂口径；前端实现多维表格、服务端分页与 Pinia + keep-alive 现场保留。',
        '产能与账号录入：Excel 批量导入 + 幂等 upsert，覆盖产能目标、团队/账号周排产与收益账号配置，配套表头校验、业务去重与旧口径拦截。',
        'CI/CD：主导 Gitee Go 流水线，自动构建前后端镜像并推送火山引擎连山云 CR，测试机 docker compose 滚动更新，健康检查探活、分支锁定防误发，配套飞书通知与密文凭据管理。',
        '工程质量：沉淀 25 个 SQL 迁移（含 rollback 与库守卫）、89 个 pytest、47 条验收清单，并优化大表关联查询以提升看板与导出稳定性。',
      ],
      stack: [
        'Vue 3',
        'TypeScript',
        'Arco Design Vue',
        'Pinia',
        'FastAPI',
        'SQLAlchemy',
        'MySQL',
        'Redis',
        'Docker',
        'Gitee Go',
      ],
    },
    {
      company: '重庆航畅科技有限公司',
      department: '算法一组（北京）',
      role: '算法工程师',
      period: '2026.03 — 2026.07',
      project: 'Crawler Infra · 多平台分布式爬虫基础设施',
      summary:
        '面向多平台内容采集与运营数据沉淀，设计并实现业务中台、中心调度器、SpiderCore 浏览器采集内核与平台爬虫适配层，统一管理账号、Profile、代理、任务模板、节点能力与采集结果。',
      highlights: [
        '拆分业务中台、中心调度器、SpiderCore 与平台 Adapter，明确双入口边界，降低中台、调度与采集内核耦合。',
        '基于 Go + Gin 实现业务中台，承接账号、登录会话、任务模板、节点池与 AI 设置；本地 API 代理 SpiderCore，敏感信息脱敏与环境变量隔离。',
        '构建 TypeScript + Playwright 的 SpiderCore 多 Worker 采集内核，提供 HTTP/Tool/CLI/SDK/WebUI/OpenAPI，支持任务队列、心跳、串行锁、超时恢复与多种结果输出。',
        '抽象平台 Adapter，支持小红书、抖音、Facebook 等登录协作与结构化采集；新增平台无需改动 Worker 调度核心。',
        '建设 React + Vite 运营后台与多节点中心调度器，打通结果入库、预览、AI 补全/重筛，形成配置下发到运营复核的闭环。',
      ],
      stack: [
        'Go',
        'Gin',
        'TypeScript',
        'Playwright',
        'React',
        'Vite',
        'TanStack Query',
        'PostgreSQL',
        'Redis',
        'Docker Compose',
      ],
    },
    {
      company: '上海华嘎科技有限公司',
      department: '技术研发部',
      role: '技术类实习生',
      period: '2025.12 — 2026.02',
      project: '老年人 AI 回忆录 · 化妆品功效评价系统',
      summary:
        '参与面向消费与合规场景的产品落地，覆盖引导式 Agent 应用与复杂 Word 模板字段映射工具。',
      highlights: [
        '老年人 AI 回忆录：搭建引导式 Agent 聊天助手，帮助梳理一生回忆并导出 PDF 传记或 EPUB 电子书。',
        '化妆品功效评价系统：处理 Word 模板与占位符字段映射，将纸质合同拟定流程从约两天优化至两三个小时。',
      ],
      stack: ['PostgreSQL', 'Redis', 'Kotlin', 'Python', 'Docker', '腾讯云'],
    },
    {
      company: '北京搜狐新媒体信息技术有限公司',
      department: '集团商业部',
      role: 'Golang 后端实习生',
      period: '2025.09 — 2025.12',
      project: 'Agent 知识库行业数据采集与检索支撑',
      summary:
        '为 Agent 知识库提供实时行业数据支撑，参与爬虫、清洗向量化管道与后台查询接口建设。',
      highlights: [
        '累计爬取 31 万+ 条结构化资讯，日均增量 1–2 万条，覆盖 1677 个广告主，数据采集成功率 95% 以上。',
        '参与爬虫模块开发与维护，实现重试、Cookie 池、滑块验证绕过与断点续爬。',
        '构建清洗与向量化管道写入 MySQL 与知识库，竞品追踪效率提升 70%，报告周期从 3 天缩至 4 小时。',
        '使用 Go + Gin 开发后台接口，响应 <200ms，日调用峰值 5 万次，支撑 8 个销售小组。',
      ],
      stack: ['MySQL', 'Python', 'Golang', 'FastGPT', 'Selenium', 'BeautifulSoup4'],
    },
  ],
  projects: [
    {
      name: 'secbot',
      description:
        '授权安全测试 AI 工作台。开源多入口安全 Agent（GitHub 73★ / 11 forks），NestJS + Ink TUI + SQLite，统一封装 Web / OSINT / MCP 与安全工具，组织 planning → tool execution → summarization 任务流。',
      tags: ['TypeScript', 'NestJS', 'Security', 'MCP'],
      github: 'https://github.com/iammm0/secbot',
      url: 'https://secbot.site',
      logo: '/logos/secbot.png',
    },
    {
      name: 'video-loom',
      description:
        'AI 短视频剪辑 Agent 平台。独立完成架构与核心开发，编排脚本文案、导演规划、旁白字幕、分镜素材、时间轴剪辑与成片导出，降低素材准备与人工剪辑成本。',
      tags: ['Python', 'FastAPI', 'LangGraph', 'React'],
      github: 'https://github.com/iammm0',
      logo: '/logos/video-loom.svg',
    },
    {
      name: 'execgo',
      description:
        'Agent-first 执行内核与 action harness，面向可靠工具调用与执行基础设施。',
      tags: ['Go', 'Runtime', 'Infrastructure'],
      github: 'https://github.com/iammm0/execgo',
      url: 'https://execgo.site',
      logo: '/logos/execgo.png',
    },
    {
      name: 'mph-agent',
      description:
        '将自然语言 COMSOL 需求转换为完整仿真模型，覆盖几何、物理、网格、研究与求解。',
      tags: ['Python', 'COMSOL', 'Domain Agent'],
      github: 'https://github.com/iammm0/mph-agent',
      url: 'https://mphagent.site',
      logo: '/logos/mph-agent.svg',
    },
    {
      name: 'damn-agent',
      description:
        '中文 Agent 工程文档站，系统梳理理解、构建与评测 AI Agent 的方法与实践。',
      tags: ['MDX', 'Documentation', 'Agent Engineering'],
      github: 'https://github.com/iammm0/damn-agent',
      url: 'https://damnagent.org',
      logo: '/logos/damn-agent.svg',
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
      hint: '安全测试工作台',
    },
    {
      label: 'execgo.site',
      href: 'https://execgo.site',
      hint: '执行内核',
    },
    {
      label: 'mphagent.site',
      href: 'https://mphagent.site',
      hint: 'COMSOL Agent',
    },
    {
      label: 'damnagent.org',
      href: 'https://damnagent.org',
      hint: 'Agent 文档',
    },
  ],
  nav: [
    { label: '经历', href: '#experience' },
    { label: '项目', href: '#projects' },
    { label: '技能', href: '#skills' },
    { label: '教育', href: '#education' },
    { label: '链接', href: '#links' },
  ],
} as const

# qiaomu-design-advisor

> Opinionated Design Advisor — Jobs-style product intuition + Rams-style functional purism + 58 real-world design system references.
>
> 偏执型设计顾问 — Jobs 式产品直觉 + Rams 式功能纯粹主义 + 58 个真实网站设计系统参考库。

**[English](#english) | [中文](#中文)**

---

<a name="english"></a>
## English

Not sure what design style to use? Just say "help me design" — AI will ask 2-3 questions to match you with one of 10 design archetypes, then provide pixel-perfect solutions based on real design systems from Stripe, Vercel, Linear, and more.

### Installation

#### Prerequisites

- [ ] Claude Code installed ([Installation Guide](https://docs.anthropic.com/claude/docs/claude-code))
- [ ] Node.js 18+ installed (verify: `node --version`)

#### Install Steps

```bash
npx skills add joeseesun/qiaomu-design-advisor
```

Verify installation:
```bash
ls ~/.claude/skills/qiaomu-design-advisor
```

### Core Capabilities

#### 1. Three-Phase Design Workflow

```
Phase 1: Diagnosis → Output report → Wait for confirmation
Phase 2: Three proposals (Incremental/Reshape/Ideal) → Wait for selection
Phase 3: Pixel-perfect execution
```

Each phase stops and waits for feedback — no assumptions.

#### 2. 58 Real-World DESIGN.md Systems

Based on [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md), includes complete design systems from 58 websites ([Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/)) — color palettes, typography, component styles, spacing systems, responsive rules, etc.

#### 3. Style Recommendation Engine (10 Design Archetypes)

Not sure what style you need? AI asks 2-3 diagnostic questions to match the best direction from 10 archetypes:

| # | Style | Representative Sites | One-liner |
|---|-------|---------------------|-----------|
| 1 | Minimal Precision | Vercel, Linear, Tesla | B&W, mathematically precise |
| 2 | Warm Premium | Stripe, Notion, Airbnb | Warm professionalism |
| 3 | Dark Professional | Cursor, Supabase, Superhuman | Immersive tooling |
| 4 | Vibrant Friendly | Figma, Miro, Airtable | Colorful, approachable |
| 5 | Cinematic Immersive | SpaceX, RunwayML, ElevenLabs | Full-screen impact |
| 6 | Enterprise Stable | IBM, HashiCorp, MongoDB | Structured, trustworthy |
| 7 | Financial Refined | Coinbase, Revolut, Kraken | Security + sophistication |
| 8 | Luxury Tactile | Ferrari, Lamborghini, Apple | Unspoken premium |
| 9 | Developer Native | Resend, Warp, Ollama | Terminal aesthetic |
| 10 | Content First | Notion, Mintlify, Claude | Reading experience priority |

### Usage Examples

```
"Help me design an AI product landing page"
"Redesign the payment page using Stripe's design style"
"This interface doesn't work, help me see what's wrong"
"Build a dashboard like Linear"
"Help me create a design system"
"Optimize the interaction experience of this page"
```

### Design System Coverage

**AI/ML** (12): Claude, Cursor, Replicate, Ollama, Cohere, ElevenLabs...

**Dev Tools** (14): Vercel, Linear, Supabase, Resend, Sentry, Raycast...

**Infrastructure** (6): Stripe, MongoDB, HashiCorp, ClickHouse, Sanity, Composio

**Design/Productivity** (10): Figma, Notion, Miro, Framer, Airtable, Pinterest...

**Fintech** (4): Coinbase, Revolut, Kraken, Wise

**Enterprise/Consumer** (7): Apple, Airbnb, Spotify, Uber, SpaceX, IBM, NVIDIA

**Automotive** (5): Ferrari, Lamborghini, BMW, Tesla, Renault

### Update Design Systems

```bash
# Update a single site
cd ~/.claude/skills/qiaomu-design-advisor/references/design-systems/{site}
npx getdesign@latest add {site}
```

### Acknowledgments

The design system Markdown files in this project come from [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md).

Thanks to the VoltAgent team for collecting and organizing complete design systems from 58 top websites, standardized according to the [Google Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/). These high-quality design references are the core foundation of this Skill.

If you need these design system files:
- **Original Repository**: https://github.com/VoltAgent/awesome-design-md
- **Format Specification**: https://stitch.withgoogle.com/docs/design-md/format/

### Troubleshooting

| Issue | Solution |
|-------|----------|
| "Design system files not found" | Check if `~/.claude/skills/qiaomu-design-advisor/references/design-systems/` directory exists |
| AI doesn't provide specific design proposals | Clearly tell AI which phase you're in (diagnosis/proposal/execution) to avoid skipping workflow |
| Want to reference a site not in the list | Manually add: `cd ~/.claude/skills/qiaomu-design-advisor/references/design-systems && npx getdesign@latest add <domain>` |

### License

MIT

### Follow the Author

If this project helps you, follow me for more AI tool shares:

- **X (Twitter)**: [@vista8](https://x.com/vista8)
- **WeChat Official Account「向阳乔木推荐看」**:

<p align="center">
  <img src="https://github.com/joeseesun/terminal-boost/raw/main/assets/wechat-qr.jpg?raw=true" alt="向阳乔木推荐看公众号二维码" width="300">
</p>

---

<a name="中文"></a>
## 中文

不知道该用什么设计风格？说一句"帮我设计"，AI 会通过 2-3 个问题帮你从 10 大风格原型中找到方向，再基于 Stripe、Vercel、Linear 等真实网站的设计系统给出像素级方案。

### 安装

#### 前置条件

- [ ] Claude Code 已安装（[安装指南](https://docs.anthropic.com/claude/docs/claude-code)）
- [ ] Node.js 18+ 已安装（验证：`node --version`）

#### 安装步骤

```bash
npx skills add joeseesun/qiaomu-design-advisor
```

验证安装：
```bash
ls ~/.claude/skills/qiaomu-design-advisor
```

### 核心能力

#### 1. 三阶段设计工作流

```
Phase 1: 诊断 → 输出诊断报告 → 等用户确认
Phase 2: 三套方案（渐进/重塑/理想）→ 等用户选择
Phase 3: 像素级执行
```

每个阶段强制停止等待反馈，不会自作主张。

#### 2. 58 个真实网站的 DESIGN.md 设计系统

基于 [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md)，内置 58 个网站的完整设计系统（[Google Stitch DESIGN.md 格式](https://stitch.withgoogle.com/docs/design-md/format/)），包含色板、字体、组件样式、间距系统、响应式规则等。

#### 3. 风格推荐引擎（10 大设计原型）

不确定要什么风格？AI 通过 2-3 个诊断问题，从 10 大原型中匹配最合适的方向：

| # | 风格 | 代表网站 | 一句话 |
|---|------|----------|--------|
| 1 | 极简精确 | Vercel, Linear, Tesla | 黑白、数学般精确 |
| 2 | 暖色高端 | Stripe, Notion, Airbnb | 温暖的专业感 |
| 3 | 深色专业 | Cursor, Supabase, Superhuman | 沉浸式工具 |
| 4 | 活力友好 | Figma, Miro, Airtable | 多色、亲和力 |
| 5 | 电影沉浸 | SpaceX, RunwayML, ElevenLabs | 全屏震撼视觉 |
| 6 | 企业稳重 | IBM, HashiCorp, MongoDB | 结构化、可信赖 |
| 7 | 金融精致 | Coinbase, Revolut, Kraken | 安全感 + 精致 |
| 8 | 奢华质感 | Ferrari, Lamborghini, Apple | 不言自明的高级 |
| 9 | 开发者原生 | Resend, Warp, Ollama | 终端风 |
| 10 | 内容优先 | Notion, Mintlify, Claude | 阅读体验至上 |

### 使用示例

```
"帮我设计一个 AI 产品的官网"
"参考 Stripe 的设计风格，重新设计支付页面"
"这个界面不行，帮我看看哪里有问题"
"做一个像 Linear 那样的仪表板"
"帮我建一个设计系统"
"优化这个页面的交互体验"
```

### 设计系统覆盖范围

**AI/ML** (12): Claude, Cursor, Replicate, Ollama, Cohere, ElevenLabs...

**开发工具** (14): Vercel, Linear, Supabase, Resend, Sentry, Raycast...

**基础设施** (6): Stripe, MongoDB, HashiCorp, ClickHouse, Sanity, Composio

**设计/效率** (10): Figma, Notion, Miro, Framer, Airtable, Pinterest...

**金融科技** (4): Coinbase, Revolut, Kraken, Wise

**企业/消费** (7): Apple, Airbnb, Spotify, Uber, SpaceX, IBM, NVIDIA

**汽车品牌** (5): Ferrari, Lamborghini, BMW, Tesla, Renault

### 更新设计系统

```bash
# 更新单个站点
cd ~/.claude/skills/qiaomu-design-advisor/references/design-systems/{site}
npx getdesign@latest add {site}
```

### 致谢

本项目的设计系统 Markdown 文件来自 [VoltAgent/awesome-design-md](https://github.com/VoltAgent/awesome-design-md) 项目。

感谢 VoltAgent 团队收集整理了 58 个顶级网站的完整设计系统，并遵循 [Google Stitch DESIGN.md 格式](https://stitch.withgoogle.com/docs/design-md/format/) 进行标准化。这些高质量的设计参考资料是本 Skill 的核心基础。

如果你也需要这些设计系统文件，可以直接访问：
- **原始仓库**: https://github.com/VoltAgent/awesome-design-md
- **格式规范**: https://stitch.withgoogle.com/docs/design-md/format/

### 常见问题

| 问题 | 解决方法 |
|------|----------|
| 提示"找不到设计系统文件" | 检查 `~/.claude/skills/qiaomu-design-advisor/references/design-systems/` 目录是否存在 |
| AI 没有给出具体的设计方案 | 明确告诉 AI 你处于哪个阶段（诊断/方案/执行），避免跳过工作流 |
| 想参考某个网站但不在列表中 | 可以手动添加：`cd ~/.claude/skills/qiaomu-design-advisor/references/design-systems && npx getdesign@latest add <网站域名>` |

### License

MIT

### 关注作者

如果这个项目对你有帮助，欢迎关注我获取更多 AI 工具分享：

- **X (Twitter)**: [@vista8](https://x.com/vista8)
- **微信公众号「向阳乔木推荐看」**:

<p align="center">
  <img src="https://github.com/joeseesun/terminal-boost/raw/main/assets/wechat-qr.jpg?raw=true" alt="向阳乔木推荐看公众号二维码" width="300">
</p>

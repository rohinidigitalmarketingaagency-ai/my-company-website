import React from 'react';
import { useParams } from 'react-router-dom';
import {
  Search, MousePointerClick, TrendingUp, Globe, FileText, Users,
  Check, ArrowRight, ChevronRight, BarChart2, Clock, Shield, Zap
} from 'lucide-react';

/* ─── Full service data ──────────────────────────────────────────── */
const serviceData = {
  seo: {
    slug: 'seo',
    Icon: Search,
    color: '#0ea5e9',
    label: 'SEARCH ENGINE OPTIMISATION',
    title: 'Technical SEO',
    tagline: 'Rank Higher, Stay There, Dominate Your Competition.',
    hero: 'At our digital agency, we focus on a data-backed approach to organic growth: helping search engines understand your business and helping high-intent customers find you. We dont settle for generic, uninspired strategies or vanity metrics, instead, we deploy sophisticated, end-to-end SEO solutions that transform your website into a powerful, compounding revenue engine built for scale.',
    outcome: 'Good rankings within 90 days',
    what: [
      'Full technical site audit & crawl error fixes',
      'Schema markup & structured data implementation',
      'Keyword research, content gap analysis',
      'Local & Global SEO & Google Business Profile optimisation',
      'Monthly rank tracking & competitor analysis reports',
    ],
    process: [
      { step: '01', title: 'Deep Audit', desc: 'We crawl every page of your site, identify technical errors, missed opportunities, and on-page weaknesses.' },
      { step: '02', title: 'Strategy Build', desc: 'A custom keyword map and content architecture is designed around your target audience\'s search intent.' },
      { step: '03', title: 'On-Page Execution', desc: 'Title tags, meta descriptions, headers, internal links, and schema are optimised for both users and search engines.' },
      { step: '04', title: 'Link Acquisition', desc: 'We secure high-authority backlinks through outreach.' },
      { step: '05', title: 'Monitor & Compound', desc: 'Monthly reporting, rank tracking, and continuous iteration keep your rankings climbing.' },
    ],
    metrics: [],
    faqs: [
      {q:'How long does SEO take to show results?', a: 'Most clients see measurable ranking improvements within 60–90 days. Significant traffic growth typically follows within 4–6 months of consistent work.'},
      { q: 'Do you guarantee Page 1 rankings?', a: 'We guarantee our process, effort, and transparency. While no ethical agency can guarantee specific rankings, our track record shows 90%+ of clients reach Page 1 for primary keywords within 6 months.' },
      { q: 'What industries do you specialise in?', a: 'We have deep experience in SaaS, e-commerce, healthcare, real estate, and professional services — but our methodology works across any industry.' },
    ],
  },
  ppc: {
    slug: 'ppc',
    Icon: MousePointerClick,
    color: '#0284c7',
    label: 'PAY-PER-CLICK ADVERTISING',
    title: 'PPC & Paid Advertising',
    tagline: 'Every Rupee Invested. Maximum Returns Delivered.',
    hero: 'our Pay-Per-Click (PPC) and paid media strategies are engineered for rapid, scalable revenue injection. We don’t just buy clicks; we architect high-converting acquisition funnels. By combining aggressive bidding strategies with compelling creatives and granular data analytics, we place your brand directly in front of high-intent buyers exactly when they are ready to convert.',
    outcome: 'Average ?x ROAS delivered',
    what: [
      'Google Search, Display & Shopping Ads setup',
      'Meta (Facebook & Instagram) campaign management',
      'YouTube & video advertising',
      'Conversion tracking & pixel implementation',
      'Weekly performance reporting with clear ROAS metrics',
    ],
    process: [
      { step: '01', title: 'Audience Research', desc: 'We map your ideal customer persona, their online behaviour, and the exact search terms and interests that trigger buying decisions.' },
      { step: '02', title: 'Campaign Architecture', desc: 'Custom campaign structures built for maximum Quality Score, relevancy, and conversion efficiency from day one.' },
      { step: '03', title: 'Creative Development', desc: 'High-converting ad copy and creative assets designed around your USP and tested continuously for performance.' },
      { step: '04', title: 'Launch & Monitor', desc: 'Campaigns go live with real-time monitoring. Underperforming ads are paused, top performers are scaled immediately.' },
      { step: '05', title: 'Scale & Optimise', desc: 'Weekly bid adjustments, audience expansions, and creative refreshes keep ROAS climbing as budgets scale.' },
    ],
    metrics: [],
    faqs: [
      { q: 'What is your minimum ad budget?', a: 'We work with budgets from ₹30,000/month, though we recommend ₹75,000+ for faster testing cycles and meaningful results.' },
      { q: 'How quickly will I see results?', a: 'Most campaigns deliver measurable leads or sales within the first 7–14 days. Full optimisation and peak ROAS typically takes 30–60 days.' },
      { q: 'Do you manage the creatives as well?', a: 'Yes — our team handles ad copywriting, static creative briefs, and performance analysis. Video production can be added as an optional service.' },
    ],
  },
  funnel: {
    slug: 'funnel',
    Icon: TrendingUp,
    color: '#0ea5e9',
    label: 'CONVERSION RATE OPTIMISATION',
    title: 'Filming and Editing',
    tagline: 'VIDEO PRODUCTION & POST-PRODUCTION.',
    hero: 'We produce, shoot, and meticulously edit high-impact video content — from commercial brand films to engaging social reels. We handle everything from the first storyboard to the final color grade to ensure your brand commands attention and drives measurable engagement.',
    outcome: 'Premium visual assets that elevate brand authority',
    what: [
      'Comprehensive pre-production & creative storyboarding',
      '4K cinematic on-location or studio filming',
      'Professional audio recording & sound design',
      'Advanced color grading & visual effects (VFX)',
      'Dynamic motion graphics & text animation',
    ],
    process: [
      { step: '01', title: 'Strategy & Concepting', desc: 'We collaborate to understand your brand identity, target audience, and campaign goals to craft a compelling creative brief and narrative.' },
      { step: '02', title: 'Pre-Production & Logistics', desc: 'We handle the storyboards, shot lists, location scouting, talent casting, and equipment scheduling to ensure a flawless, efficient shoot day.' },
      { step: '03', title: 'Production & Filming', desc: 'Our expert crew captures stunning high-resolution footage using top-tier cameras, precision lighting, and crystal-clear audio equipment.' },
      { step: '04', title: 'Editing & Post-Production', desc: 'We piece together the narrative, applying precision cuts, advanced color grading, sound mixing, and motion graphics to bring the vision to life.' },
      { step: '05', title: 'Final Delivery & Formatting', desc: 'The polished final cuts are exported and optimized perfectly for every platform you need (Website, YouTube, Instagram Reels, Broadcast).' },
    ],
    metrics: [],
    faqs: [
      { q: 'Do I need to provide my own scripts and ideas?', a: 'No — our team can handle the entire creative process from scratch. We offer full creative direction, scripting, and storyboarding, or we can collaborate directly on your existing concepts and bring them to life.' },
      { q: 'What types of videos do you specialize in producing?', a: 'We produce a comprehensive range of B2B and B2C content, including corporate brand anthems, commercial advertisements, fast-paced social media reels, documentary-style client testimonials, and in-depth product demonstrations.' },
      { q: 'How long does the production and editing process take?', a: 'Pre-production typically takes 1–2 weeks. Depending on the scale, filming is completed in 1 to 3 days. Your first high-quality editing drafts are usually delivered within 7–14 days after wrapping the shoot.' },
    ],
  },
  omnichannel: {
    slug: 'omnichannel',
    Icon: Globe,
    color: '#0284c7',
    label: 'INTEGRATED MARKETING',
    title: 'Paid ads',
    tagline: 'Turn Targeted Traffic Into Compounding Revenue.',
    hero: 'We architect, launch, and manage precision paid advertising campaigns across search and social channels. By combining rigorous audience targeting with high-speed creative testing, we position your brand directly in front of active buyers to scale customer acquisition efficiently.',
    outcome: 'Data-backed ad structures optimized for bottom-line ROI.',
    what: [
      'Comprehensive competitor intelligence & funnel tracking',
      'Cross-platform campaign architecture (Search, Display & Social)',
      'Advanced conversion API & tracking pixel deployment',
      'High-speed creative testing & asset formatting',
      'Negative keyword optimization & channel exclusions',
      'Omnichannel remarketing & audience nurturing sequences',
      'Granular performance dashboards & clear transparent tracking',
    ],
    process: [
      { step: '01', title: 'Audience & Competitor Analysis', desc: 'We audit your industry landscape, reverse-engineer high-performing competitor campaigns, and map out target demographics.' },
      { step: '02', title: 'Infrastructure & Tracking Setup', desc: 'We configure clean account architectures and deploy deep server-side tracking (Conversion APIs) to ensure precise data attribution.' },
      { step: '03', title: 'Asset & Copy Engineering', desc: 'Our team develops tailored ad text, hooks, and visual assets designed to capture attention and communicate strong value propositions.' },
      { step: '04', title: 'High-Speed A/B Testing', desc: 'We launch multi-variant campaigns, testing copy variants and audience segments against each other to systematically lower acquisition costs.' },
      { step: '05', title: 'Optimization & Scaling', desc: 'We continuously prune non-performing elements, reallocate capital to the highest-yielding ad sets, and steadily scale your spend.' },
    ],
    metrics: [],
    faqs: [
      { q: 'Do I need a massive ad budget to start running paid campaigns?', a: 'No — we build scalable structures that work with a wide range of budgets. We focus on launching lean, proven ad sets first to validate the targeting before recommending budget expansions.' },
      { q: 'Which platforms are best suited for my specific business?', a: 'Omnichannel marketing ensures every channel is coordinated with shared messaging, audience data, and attribution — so you\'re not wasting budget on inconsistent, siloed campaigns.' },
      { q: 'How long does it take to see tangible results from paid advertising?', a: 'Because paid media buys immediate traffic, initial data and leads can appear within days of launch. However, full algorithmic optimization and mature audience scaling typically take 2 to 4 weeks of continuous testing.' },
    ],
  },
  content: {
    slug: 'content',
    Icon: FileText,
    color: '#0ea5e9',
    label: 'CONTENT MARKETING',
    title: 'Content Strategy',
    tagline: 'Establish Authority and Drive High-Intent Traffic.',
    hero: 'We develop and execute comprehensive content ecosystems designed to capture search demand and build long-term brand equity. From high-level SEO mapping to authoritative copywriting, we engineer content that positions your business as the definitive industry leader.',
    outcome: 'Scalable organic architectures that compound brand visibility.',
    what: [
      'In-depth audience persona & search intent mapping',
      'Comprehensive SEO keyword & topic cluster strategy',
      'High-authority blog, article, and whitepaper creation',
      'Lead magnet engineering & conversion copywriting',
      'Email newsletter & nurture sequence development',
    ],
    process: [
      { step: '01', title: 'Audit & Gap Analysis', desc: 'We evaluate your existing content landscape, identify immediate technical opportunities, and analyze competitors to find high-value keyword gaps.' },
      { step: '02', title: 'Strategy & Topic Clustering', desc: 'We construct a precise topical roadmap, grouping interlinked keywords and core themes to build immense semantic authority for search engines.' },
      { step: '03', title: 'Drafting & Production', desc: 'Our specialized copywriters create high-quality, engaging, and technically optimized content tailored strictly to your unique brand voice.' },
      { step: '04', title: 'Optimization & Publishing', desc: 'Every asset undergoes rigorous SEO formatting—optimizing metadata, headers, schema markup, and internal linking structures before going live.' },
      { step: '05', title: 'Distribution & Amplification', desc: 'We maximize the ROI of each piece by repurposing core articles into micro-content for social channels, email lists, and secondary platforms.' },
    ],
    metrics: [],
    faqs: [
      { q: 'How is a content strategy different from just writing blog posts?', a: 'A strategy dictates why we are writing. Instead of publishing random, disconnected articles, a strategy ensures every single piece targets specific buyer intent, supports a broader enterprise SEO goal, and actively guides the reader toward a definitive conversion action.' },
      { q: 'Can you write for highly technical or specialized B2B industries?', a: 'Yes. We utilize a rigorous research framework and collaborate closely with your internal subject matter experts to ensure all content is factually accurate, technically sound, and speaks fluently to an advanced corporate audience.' },
      { q: 'When will we start seeing an increase in organic traffic?', a: 'Strategic content marketing is a powerful, long-term growth engine. While initial indexing happens quickly, substantial compounding organic traffic and domain authority shifts typically become highly visible between months 3 and 6 of consistent execution.' },
    ],
  },
  social: {
    slug: 'social',
    Icon: Users,
    color: '#0284c7',
    label: 'SOCIAL MEDIA MARKETING',
    title: 'Social Media Growth',
    tagline: 'Accelerate Brand Reach and Cultivate Loyal Communities.',
    hero: 'We design and execute data-driven social media strategies that elevate your brands digital presence. By blending algorithmic insight with compelling creative formats, we transform passive scrollers into active, engaged advocates for your business.',
    outcome: 'Sustainable audience acquisition and high-impact brand visibility.',
    what: [
      'Comprehensive platform auditing & profile optimization',
      'Strategic content calendar development & scheduling',
      'High-retention short-form video & reel production',
      'Proactive community management & audience engagement',
      'Influencer & strategic partnership outreach',
      'Trend monitoring & viral format adaptation',
      'Detailed sentiment analysis & engagement reporting',
    ],
    process: [
      { step: '01', title: 'Brand & Competitor Audit', desc: 'We analyze your current social footprint, identify gaps in your industrys digital landscape, and establish clear, consistent brand voice guidelines.' },
      { step: '02', title: 'Strategy & Pillar Development', desc: 'We define core content pillars—ranging from educational insights to behind-the-scenes culture—to ensure a balanced, highly engaging, and valuable feed.' },
      { step: '03', title: 'Asset Creation & Scheduling', desc: 'Our in-house creative team designs high-quality graphics, edits dynamic videos, and schedules your content during peak algorithmic engagement windows.' },
      { step: '04', title: 'Community Management', desc: 'We actively monitor your channels daily, responding to inquiries, fostering meaningful discussions, and amplifying positive user-generated content.' },
      { step: '05', title: 'Analytics & Refinement', desc: 'We track vital engagement metrics and audience demographics, adjusting the content mix every month to continually drive upward growth and wider reach.' },
    ],
    metrics: [],
    faqs: [
      { q: 'Which social media platforms should my business focus on?', a: 'It depends entirely on where your target demographic spends their time. We typically prioritize LinkedIn and X (Twitter) for B2B authority, while leveraging Instagram, TikTok, and YouTube Shorts for highly visual B2C brand awareness. We will audit your audience to recommend the exact right mix.' },
      { q: 'Do you create the content, or do we need to supply it?', a: 'We are a full-service growth agency. While we welcome any raw assets, team photos, or behind-the-scenes footage you want to provide, our team handles the heavy lifting—including all graphic design, video editing, and copywriting.' },
      { q: 'How do you measure the success of a social media campaign?', a: 'We look far beyond vanity metrics like raw follower counts. We measure true success through active engagement rates (shares and saves), profile reach, click-throughs to your core website, and overall brand sentiment to ensure your social growth translates into tangible business value.' },
    ],
  },
};

/* ─── Route map: URL param → data key ──────────────────────────────
   /services/seo  →  params.service = 'seo'  →  serviceData['seo']   */
const paramToKey = {
  seo:          'seo',
  ppc:          'ppc',
  funnel:       'funnel',
  omnichannel:  'omnichannel',
  content:      'content',
  social:       'social',
};

/* ─── Component ──────────────────────────────────────────────────── */
export default function ServiceDetailPage({ navigateTo }) {
  const { service } = useParams();          // comes from /services/:service
  const key = paramToKey[service];
  const s = serviceData[key];

  if (!s) {
    return (
      <div className="pt-32 text-center text-textSecondary min-h-screen">
        <p>Service not found.</p>
      </div>
    );
  }

  const { Icon, color, label, title, tagline, hero, outcome, what, process, metrics, faqs } = s;

  return (
    <div className="pt-20 bg-pageBg min-h-screen">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <div className="py-16 md:py-24 relative overflow-hidden" style={{ background: '#f0f7ff' }}>
        {/* Decorative circle */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: `${color}08` }} />
        <div className="max-w-5xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="section-label mb-4">{label}</div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-textPrimary mb-4 leading-tight">
              {title}
            </h1>
            <p className="text-xl font-semibold mb-4" style={{ color }}>
              {tagline}
            </p>
            <p className="text-textSecondary leading-relaxed mb-8 text-lg">{hero}</p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => navigateTo('contact')}
                className="btn-shine inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-bold text-sm"
                style={{ background: `linear-gradient(135deg, ${color}, #0284c7)`, boxShadow: `0 4px 18px ${color}44` }}>
                Get Started <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => navigateTo('services')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-textSecondary font-semibold text-sm border border-borderClr hover:border-accent transition-colors duration-200">
                All Services
              </button>
            </div>
          </div>

          {/* Outcome card */}
          <div className="flex flex-col gap-4">
            <div className="corp-card p-7 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 rounded-t-[14px]"
                style={{ background: `linear-gradient(90deg, ${color}, #14b8a6)` }} />
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ background: `${color}12`, border: `1px solid ${color}28` }}>
                <Icon className="w-6 h-6" style={{ color }} strokeWidth={1.75} />
              </div>
              <p className="text-xs font-bold text-textMuted uppercase tracking-wider mb-1">PROVEN OUTCOME</p>
              <p className="text-2xl font-extrabold gradient-text">{outcome}</p>
            </div>

            {/* Metric pills */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, i) => (
                <div key={i} className="corp-card p-4 text-center">
                  <p className="text-xs font-semibold text-textSecondary leading-snug">{m}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── What's Included ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="section-label mb-4">WHAT'S INCLUDED</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-textPrimary mb-6">
              Everything You Need to <span className="gradient-text">Dominate</span>
            </h2>
            <ul className="space-y-3">
              {what.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-textSecondary">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color }} strokeWidth={2.5} />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Why this service */}
          <div className="corp-card p-7 flex flex-col gap-4">
            {[
              { Icon: BarChart2, title: 'Data-Driven Only', desc: 'Every decision is backed by real analytics — no guesswork, no assumptions.' },
              { Icon: Shield, title: 'Transparent Reporting', desc: 'Monthly reports with plain-English insights you can understand and act on.' },
              { Icon: Zap, title: 'Fast Execution', desc: 'No lengthy onboarding. We get moving within 7 days of kickoff.' },
              { Icon: Clock, title: 'Long-Term Partnership', desc: 'We\'re invested in your growth — not just this month\'s numbers.' },
            ].map(({ Icon: I, title, desc }, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: `${color}10`, border: `1px solid ${color}22` }}>
                  <I className="w-4 h-4" style={{ color }} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="font-bold text-textPrimary text-sm mb-0.5">{title}</p>
                  <p className="text-xs text-textSecondary leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Our Process ──────────────────────────────────────────── */}
      <div className="py-16 md:py-20" style={{ background: '#f0f7ff' }}>
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="section-label mx-auto mb-3">OUR PROCESS</div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-textPrimary">
              How We <span className="gradient-text">Deliver Results</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            {process.map(({ step, title, desc }, i) => (
              <div key={i} className="corp-card group flex items-start gap-5 p-6">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-extrabold text-sm text-white group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `linear-gradient(135deg, ${color}, #0284c7)` }}>
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-textPrimary mb-1 group-hover:text-accent transition-colors duration-200">{title}</h3>
                  <p className="text-textSecondary text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FAQs ─────────────────────────────────────────────────── */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="text-center mb-10">
          <div className="section-label mx-auto mb-3">FAQS</div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-textPrimary">Common Questions</h2>
        </div>
        <div className="flex flex-col gap-4">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="corp-card p-6">
              <div className="flex items-start gap-3 mb-2">
                <ChevronRight className="w-5 h-5 flex-shrink-0 mt-0.5 text-accent" />
                <h3 className="font-bold text-textPrimary">{q}</h3>
              </div>
              <p className="text-textSecondary text-sm leading-relaxed pl-8">{a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom CTA ───────────────────────────────────────────── */}
      <div className="py-16 text-center" style={{ background: '#0f2557' }}>
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Get Started with {title}?
          </h2>
          <p className="text-blue-200/70 mb-8">
            Book a free audit and get a custom strategy built specifically for your business.
          </p>
          <button onClick={() => navigateTo('contact')}
            className="btn-shine inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-bold"
            style={{ background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', boxShadow: '0 4px 20px rgba(14,165,233,0.40)' }}>
            Book Audit <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

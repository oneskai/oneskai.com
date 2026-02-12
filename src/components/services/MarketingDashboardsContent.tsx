'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/analytics-services.css';

export function MarketingDashboardsContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    return (
        <div className="analytics-page">
            <section className="analytics-hero">
                <div className="analytics-hero-bg"><div className="analytics-grid"></div><div className="analytics-orb orb-1"></div><div className="analytics-orb orb-2"></div></div>
                <div className="analytics-container">
                    <div className="analytics-hero-layout">
                        <div className="analytics-hero-content">
                            <span className="analytics-badge"><Icon type="activity" />MARKETING DASHBOARDS</span>
                            <h1 className="analytics-hero-title">Real-Time Marketing <span>Intelligence</span></h1>
                            <p className="analytics-hero-subtitle">Custom dashboards that unify all your marketing data into actionable insights accessible anytime, anywhere.</p>
                            <div className="analytics-hero-actions">
                                <Link href="/contact" className="btn-analytics-primary">Get Dashboard Demo <Icon type="arrowRight" /></Link>
                                <Link href="#types" className="btn-analytics-outline">View Types</Link>
                            </div>
                            <div className="analytics-stats-row">
                                {[{value:'50+',label:'Data Sources'},{value:'Real-Time',label:'Data Updates'},{value:'100%',label:'Custom Built'}].map((s,i)=>(<div key={i} className="stat-pill-analytics"><span className="stat-num-analytics">{s.value}</span><span className="stat-label-analytics">{s.label}</span></div>))}
                            </div>
                        </div>
                        <div className="analytics-hero-visual">
                            <div className="dashboard-mockup">
                                <div className="dashboard-header-mock"><span>Executive Dashboard</span><span className="live-badge">Live</span></div>
                                <div className="dashboard-metrics-grid">
                                    {[{label:'MRR',value:'$245K',trend:'+22%'},{label:'CAC',value:'$89',trend:'-15%'},{label:'LTV',value:'$1.2K',trend:'+18%'}].map((m,i)=>(<div key={i} className="metric-card-mock"><div className="metric-label-mock">{m.label}</div><div className="metric-value-mock">{m.value}</div><div className="metric-trend-mock positive">{m.trend}</div></div>))}
                                </div>
                                <div className="dashboard-chart-mock">{[45,58,52,72,68,85,92].map((h,i)=>(<div key={i} className="chart-bar-mock" style={{height:`${h}%`}}></div>))}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="analytics-metrics" id="types">
                <div className="analytics-container">
                    <div className="section-header-analytics center"><span className="section-label-analytics">DASHBOARD TYPES</span><h2 className="section-title-analytics">Dashboards for Every <span>Need</span></h2></div>
                    <div className="metrics-categories-grid">
                        {[
                            {category:'Executive',icon:'briefcase',metrics:['Revenue','ROI','CAC vs LTV','Channel Mix']},
                            {category:'Campaign',icon:'target',metrics:['Spend','Impressions','CTR','Conversions']},
                            {category:'Social Media',icon:'hash',metrics:['Engagement','Reach','Followers','Mentions']},
                            {category:'SEO',icon:'search',metrics:['Rankings','Traffic','Backlinks','Core Web Vitals']}
                        ].map((c,i)=>(<div key={i} className="metrics-category-card"><div className="category-icon-wrapper"><Icon type={c.icon}/></div><h3>{c.category}</h3><ul className="metrics-list">{c.metrics.map((m,j)=>(<li key={j}><Icon type="check"/>{m}</li>))}</ul></div>))}
                    </div>
                </div>
            </section>
            <section className="analytics-services-section">
                <div className="analytics-container">
                    <div className="section-header-analytics center"><span className="section-label-analytics">FEATURES</span><h2 className="section-title-analytics">Built for <span>Your Needs</span></h2></div>
                    <div className="services-list-analytics">
                        {[
                            {service:'Data Integration',desc:'Connect GA4, ads platforms, CRM, and 50+ data sources'},
                            {service:'Real-Time Updates',desc:'Live data that refreshes automatically'},
                            {service:'Custom Visualizations',desc:'Charts, graphs, and tables designed for your KPIs'},
                            {service:'Mobile Access',desc:'View dashboards on any device, anywhere'},
                            {service:'Automated Alerts',desc:'Get notified when metrics hit thresholds'},
                            {service:'White Label',desc:'Brand dashboards with your logo for client reporting'}
                        ].map((s,i)=>(<div key={i} className="service-item-analytics"><div className="service-number">{String(i+1).padStart(2,'0')}</div><div className="service-content-analytics"><h4>{s.service}</h4><p>{s.desc}</p></div></div>))}
                    </div>
                </div>
            </section>
            <section className="analytics-pricing">
                <div className="analytics-container">
                    <div className="section-header-analytics center"><span className="section-label-analytics">INVESTMENT</span><h2 className="section-title-analytics">Dashboard <span>Packages</span></h2></div>
                    <div className="pricing-grid-analytics">
                        {[
                            {name:'Starter',price:'$1,500/mo',features:['1 Dashboard','5 Data Sources','Monthly Updates','Email Support'],cta:'Get Started'},
                            {name:'Professional',price:'$4,000/mo',features:['3 Dashboards','Unlimited Sources','Real-Time Updates','Custom Visualizations','Slack Alerts'],cta:'Start Building',popular:true},
                            {name:'Enterprise',price:'Custom',features:['Unlimited Dashboards','API Access','White Label','Dedicated Support','Custom Development'],cta:'Talk to Us'}
                        ].map((p,i)=>(<div key={i} className={`pricing-card-analytics ${p.popular?'popular':''}`}>{p.popular&&<span className="popular-badge-analytics">MOST POPULAR</span>}<h3>{p.name}</h3><div className="price-analytics">{p.price}</div><ul className="features-list-analytics">{p.features.map((f,j)=>(<li key={j}><Icon type="check"/>{f}</li>))}</ul><Link href="/contact" className={p.popular?'btn-analytics-primary':'btn-analytics-outline'}>{p.cta}</Link></div>))}
                    </div>
                </div>
            </section>
            <section className="analytics-faq">
                <div className="analytics-container">
                    <div className="faq-layout-analytics">
                        <div className="faq-sidebar-analytics"><span className="section-label-analytics">FAQ</span><h2 className="section-title-analytics">Common <span>Questions</span></h2></div>
                        <div className="faq-content-analytics">
                            {[
                                {q:'What platforms do you build dashboards in?',a:'We primarily use Google Looker Studio (Data Studio), Tableau, Power BI, and custom-built solutions depending on your needs and existing tech stack.'},
                                {q:'Can you connect to our CRM?',a:'Yes! We integrate with Salesforce, HubSpot, Pipedrive, and virtually any system with an API or data export capability.'},
                                {q:'How long does setup take?',a:'Basic dashboards: 1-2 weeks. Complex multi-source dashboards with custom visualizations: 3-4 weeks.'},
                                {q:'Can we edit dashboards ourselves?',a:'Absolutely. We provide training and documentation. For Looker Studio/Tableau dashboards, you&apos;ll have full edit access.'}
                            ].map((faq,i)=>(<details key={i} className="faq-item-analytics" open={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><summary>{faq.q}<Icon type="plus"/></summary><p>{faq.a}</p></details>))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="analytics-cta">
                <div className="analytics-container">
                    <div className="cta-content-analytics"><h2>Ready for Real-Time <span>Insights?</span></h2><p>Get a free dashboard demo tailored to your business.</p><Link href="/contact" className="btn-analytics-primary large">Get Free Demo <Icon type="arrowRight"/></Link></div>
                </div>
            </section>
        </div>
    );
}
export default MarketingDashboardsContent;

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/analytics-services.css';

export function ConversionAnalyticsContent() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    return (
        <div className="analytics-page">
            <section className="analytics-hero">
                <div className="analytics-hero-bg"><div className="analytics-grid"></div><div className="analytics-orb orb-1"></div><div className="analytics-orb orb-2"></div></div>
                <div className="analytics-container">
                    <div className="analytics-hero-layout">
                        <div className="analytics-hero-content">
                            <span className="analytics-badge"><Icon type="target" />CONVERSION ANALYTICS</span>
                            <h1 className="analytics-hero-title">Optimize Every <span>Conversion Point</span></h1>
                            <p className="analytics-hero-subtitle">Data-driven conversion rate optimization through funnel analysis, A/B testing, and behavioral insights.</p>
                            <div className="analytics-hero-actions">
                                <Link href="/contact" className="btn-analytics-primary">Get CRO Audit <Icon type="arrowRight" /></Link>
                                <Link href="#funnels" className="btn-analytics-outline">View Funnels</Link>
                            </div>
                            <div className="analytics-stats-row">
                                {[{value:'45%',label:'Avg CR Increase'},{value:'8x',label:'Testing Velocity'},{value:'95%',label:'Statistical Confidence'}].map((s,i)=>(<div key={i} className="stat-pill-analytics"><span className="stat-num-analytics">{s.value}</span><span className="stat-label-analytics">{s.label}</span></div>))}
                            </div>
                        </div>
                        <div className="analytics-hero-visual">
                            <div className="dashboard-mockup">
                                <div className="dashboard-header-mock"><span>Conversion Funnel</span><span className="live-badge">Live</span></div>
                                <div className="dashboard-metrics-grid">
                                    {[{label:'CR',value:'8.5%',trend:'+42%'},{label:'AOV',value:'$186',trend:'+18%'},{label:'Revenue',value:'$840K',trend:'+58%'}].map((m,i)=>(<div key={i} className="metric-card-mock"><div className="metric-label-mock">{m.label}</div><div className="metric-value-mock">{m.value}</div><div className="metric-trend-mock positive">{m.trend}</div></div>))}
                                </div>
                                <div className="dashboard-chart-mock">{[100,78,58,42,28,18,12].map((h,i)=>(<div key={i} className="chart-bar-mock" style={{height:`${h}%`}}></div>))}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="analytics-metrics" id="funnels">
                <div className="analytics-container">
                    <div className="section-header-analytics center"><span className="section-label-analytics">WHAT WE OPTIMIZE</span><h2 className="section-title-analytics">Every Step of the <span>Funnel</span></h2></div>
                    <div className="metrics-categories-grid">
                        {[
                            {category:'Landing Pages',icon:'layout',metrics:['Hero Optimization','Form Design','CTA Placement','Load Speed']},
                            {category:'Product Pages',icon:'shoppingCart',metrics:['Image Testing','Copy Testing','Trust Signals','Add to Cart']},
                            {category:'Checkout',icon:'creditCard',metrics:['Form Fields','Payment Options','Shipping Display','Abandoned Cart']},
                            {category:'Thank You',icon:'check',metrics:['Upsells','Cross-sells','Loyalty Signup','Referral Prompts']}
                        ].map((c,i)=>(<div key={i} className="metrics-category-card"><div className="category-icon-wrapper"><Icon type={c.icon}/></div><h3>{c.category}</h3><ul className="metrics-list">{c.metrics.map((m,j)=>(<li key={j}><Icon type="check"/>{m}</li>))}</ul></div>))}
                    </div>
                </div>
            </section>
            <section className="analytics-services-section">
                <div className="analytics-container">
                    <div className="section-header-analytics center"><span className="section-label-analytics">OUR APPROACH</span><h2 className="section-title-analytics">Systematic <span>Optimization</span></h2></div>
                    <div className="services-list-analytics">
                        {[
                            {service:'Funnel Analysis',desc:'Identify drop-off points and optimization opportunities'},
                            {service:'A/B Testing',desc:'Statistically valid experiments on every element'},
                            {service:'Heatmap Analysis',desc:'Visual data on where users click, scroll, and abandon'},
                            {service:'Session Recording',desc:'Watch real user sessions to understand friction'},
                            {service:'User Surveys',desc:'Qualitative feedback on why users convert or bounce'},
                            {service:'Multivariate Testing',desc:'Test multiple variations simultaneously'}
                        ].map((s,i)=>(<div key={i} className="service-item-analytics"><div className="service-number">{String(i+1).padStart(2,'0')}</div><div className="service-content-analytics"><h4>{s.service}</h4><p>{s.desc}</p></div></div>))}
                    </div>
                </div>
            </section>
            <section className="analytics-pricing">
                <div className="analytics-container">
                    <div className="section-header-analytics center"><span className="section-label-analytics">INVESTMENT</span><h2 className="section-title-analytics">CRO <span>Packages</span></h2></div>
                    <div className="pricing-grid-analytics">
                        {[
                            {name:'Starter',price:'$2,500/mo',features:['1 Funnel','Monthly Tests','Hotjar Setup','Basic Reports'],cta:'Get Started'},
                            {name:'Growth',price:'$6,000/mo',features:['3 Funnels','Weekly Tests','Advanced Analytics','Session Recording','Dedicated CRO Lead'],cta:'Start Optimizing',popular:true},
                            {name:'Enterprise',price:'Custom',features:['Unlimited Funnels','Daily Tests','Full Tool Stack','Multivariate Testing','CRO Team'],cta:'Talk to Us'}
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
                                {q:'How long until I see results?',a:'Initial insights within 2 weeks. First winning tests typically within 4-6 weeks. CRO is ongoing—continuous testing compounds improvements over time.'},
                                {q:'What tools do you use?',a:'Google Optimize, VWO, Optimizely, Hotjar, Microsoft Clarity, FullStory, and Crazy Egg depending on your needs and budget.'},
                                {q:'How many tests do you run?',a:'Depends on your traffic. Generally 2-4 concurrent tests with our Growth package, running continuously with new hypotheses.'},
                                {q:'Do you guarantee conversion lift?',a:'We guarantee rigorous testing methodology. Most clients see 20-50% conversion improvement within 6 months, but results vary by industry and traffic.'}
                            ].map((faq,i)=>(<details key={i} className="faq-item-analytics" open={openFaq===i} onClick={()=>setOpenFaq(openFaq===i?null:i)}><summary>{faq.q}<Icon type="plus"/></summary><p>{faq.a}</p></details>))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="analytics-cta">
                <div className="analytics-container">
                    <div className="cta-content-analytics"><h2>Ready to Boost <span>Conversions?</span></h2><p>Get a free funnel audit and discover optimization opportunities.</p><Link href="/contact" className="btn-analytics-primary large">Get Free Audit <Icon type="arrowRight"/></Link></div>
                </div>
            </section>
        </div>
    );
}
export default ConversionAnalyticsContent;

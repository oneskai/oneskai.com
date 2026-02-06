import { Icon } from '@/components/ui/Icon';

export function GrowthChartCard() {
    return (
        <div className="hero-card hero-card-main">
            <div className="card-header">
                <span className="card-tag">Live Dashboard</span>
                <span className="card-status">
                    <span className="status-dot"></span>
                    Real-time
                </span>
            </div>
            <div className="card-metrics">
                <div className="metric">
                    <span className="metric-label">Organic Traffic</span>
                    <span className="metric-value">+247%</span>
                    <div className="metric-bar">
                        <div className="metric-fill" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div className="metric">
                    <span className="metric-label">Conversion Rate</span>
                    <span className="metric-value">+89%</span>
                    <div className="metric-bar">
                        <div className="metric-fill accent" style={{ width: '65%' }}></div>
                    </div>
                </div>
                <div className="metric">
                    <span className="metric-label">Revenue Growth</span>
                    <span className="metric-value">+412%</span>
                    <div className="metric-bar">
                        <div className="metric-fill" style={{ width: '95%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

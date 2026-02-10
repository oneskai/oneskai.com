/* src/components/ui/WorkflowCard.tsx */
'use client';

import React from 'react';
import { Icon } from '@/components/ui/Icon';
import '@/styles/workflow-card.css';

interface WorkflowCardProps {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    icon: string;
    details: string[];
    showConnector?: boolean;
}

export function WorkflowCard({
    number,
    title,
    subtitle,
    description,
    icon,
    details,
    showConnector = false
}: WorkflowCardProps) {
    return (
        <div className="workflow-card">
            <div className="card-top">
                <span className="step-count">{number}</span>
                <div className="step-icon-box">
                    <Icon type={icon} />
                </div>
            </div>

            <div className="card-body">
                <span className="step-subtitle">{subtitle}</span>
                <h3 className="step-title">{title}</h3>
                <p className="step-description">{description}</p>

                <div className="step-checklist">
                    {details.map((detail, i) => (
                        <div key={i} className="checklist-item">
                            <Icon type="check" />
                            <span>{detail}</span>
                        </div>
                    ))}
                </div>
            </div>

            {showConnector && (
                <div className="workflow-connector">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path
                            d="M5 12h14m-7-7 7 7-7 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}

export default WorkflowCard;

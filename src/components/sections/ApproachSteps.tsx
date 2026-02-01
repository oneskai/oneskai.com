import { SectionHeader } from '@/components/ui/SectionHeader';
import type { ApproachStepsSection } from '@/types/sections';

interface ApproachStepsProps extends Partial<ApproachStepsSection> {
  staticData?: {
    label: string;
    title: string;
    steps: Array<{
      no: string;
      title: string;
      desc: string;
    }>;
  };
}

export function ApproachSteps({
  label,
  title,
  steps,
  staticData,
}: ApproachStepsProps) {
  const displayLabel = label || staticData?.label || 'OUR PROCESS';
  const displayTitle = title || staticData?.title || 'Our 4-step approach';

  const defaultSteps = [
    { no: '01', title: 'Discovery', desc: 'We deep dive into your business to understand your challenges and opportunities.' },
    { no: '02', title: 'Analysis & Planning', desc: 'Developing a comprehensive strategy and technical roadmap for success.' },
    { no: '03', title: 'Execution and setup', desc: 'Building and deploying your solution with precision and quality.' },
    { no: '04', title: 'Reporting and optimization', desc: 'Continuous monitoring and improvements to ensure peak performance.' },
  ];

  const displaySteps = steps?.map((s) => ({
    no: s.number,
    title: s.title,
    desc: s.description,
  })) || staticData?.steps || defaultSteps;

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader label={displayLabel} title={displayTitle} />
        <div className="approach-grid">
          {displaySteps.map((step, i) => (
            <div key={i} className="approach-step">
              <span className="approach-no">{step.no}</span>
              <h3 className="approach-title">{step.title}</h3>
              <p className="approach-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ApproachSteps;

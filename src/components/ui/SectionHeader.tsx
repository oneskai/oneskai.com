import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string | React.ReactNode;
  subtext?: string;
  light?: boolean;
  center?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtext,
  light = false,
  center = true,
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={cn('section-header', center ? 'text-center' : 'text-left', className)}>
      {label && <span className="section-label">{label}</span>}
      <h2 className={cn('section-title', light && 'white')}>{title}</h2>
      {subtext && <p className={cn('section-subtext', light && 'light')}>{subtext}</p>}
    </div>
  );
}

export default SectionHeader;

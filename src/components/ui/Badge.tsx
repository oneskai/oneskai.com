import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'new' | 'hiring';
  className?: string;
}

const variants = {
  default: 'bg-[#ffc700]/10 text-[#ffc700] border border-[#ffc700]/20',
  new: 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/20',
  hiring: 'bg-blue-500/10 text-blue-600 border border-blue-500/20',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-bold text-white uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;

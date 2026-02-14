import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'new' | 'hiring';
  className?: string;
}

const variants = {
  default: 'bg-[#ffc700] text-[#052e26]',
  new: 'bg-emerald-500 text-white',
  hiring: 'bg-accent-pink text-white',
};

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wide',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

export default Badge;

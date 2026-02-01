import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'new' | 'hiring';
  className?: string;
}

const variants = {
  default: 'bg-gradient-to-r from-purple-500 to-purple-700',
  new: 'bg-gradient-to-r from-green-500 to-emerald-600',
  hiring: 'bg-gradient-to-r from-blue-500 to-indigo-600',
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

import { FloatingCardProps } from "@/types/FloatingCardProps";
export default function FloatingCard({
  icon,
  title,
  subtitle,
  positionClasses,
  animationClass = "",
  iconBgClass = "bg-blue-50 text-slate-900", 
}: FloatingCardProps) {
  return (
    <div 
      className={`absolute ${positionClasses} ${animationClass} bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 z-20`}
    >
      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xl ${iconBgClass}`}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{title}</p>
        <p className="text-sm font-extrabold text-slate-900">{subtitle}</p>
      </div>
    </div>
  );
}
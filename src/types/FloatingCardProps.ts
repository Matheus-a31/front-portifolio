export interface FloatingCardProps {
  icon: string;
  title: string;
  subtitle: string;
  positionClasses: string; // Ex: "top-4 -left-2"
  animationClass?: string; // Ex: "animate-[bounce_3s...]"
  iconBgClass?: string;    // Ex: "bg-blue-50"
}
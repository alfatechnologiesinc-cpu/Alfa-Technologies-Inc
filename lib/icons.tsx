import {
  Laptop,
  Network,
  ShieldCheck,
  Printer,
  ClipboardList,
  Layers,
  BatteryCharging,
  Wrench,
  PhoneCall,
  Timer,
  Activity,
  FlaskConical,
  Boxes,
  Landmark,
  Factory,
  Building2,
  Calculator,
  Pill,
  HardHat,
  Wheat,
  GraduationCap,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Laptop,
  Network,
  ShieldCheck,
  Printer,
  ClipboardList,
  Layers,
  BatteryCharging,
  Wrench,
  PhoneCall,
  Timer,
  Activity,
  FlaskConical,
  Boxes,
  Landmark,
  Factory,
  Building2,
  Calculator,
  Pill,
  HardHat,
  Wheat,
  GraduationCap,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Layers;
}

// Centralizing the dynamic icon lookup here (rather than repeating
// `const Icon = getIcon(name)` at each call site) keeps the
// "component reference resolved during render" pattern in one place.
// getIcon() always returns the same function reference for a given
// name (a static lookup into iconMap), so identity is stable across
// re-renders and this does not reset any descendant state.
export function DynamicIcon({
  name,
  className,
  strokeWidth = 2,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = getIcon(name);
  // eslint-disable-next-line react-hooks/static-components -- see note above
  return <Icon className={className} strokeWidth={strokeWidth} />;
}

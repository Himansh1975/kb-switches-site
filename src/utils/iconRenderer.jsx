import {
  Zap,
  Power,
  Gauge,
  Activity,
  Settings,
  Home,
  Lightbulb,
  Camera,
  Building,
  Cpu,
  Smartphone,
  Mic,
  Wifi,
  Shield,
  CheckCircle,
  Award,
  Star
} from 'lucide-react';

const iconMap = {
  Zap,
  Power,
  Gauge,
  Activity,
  Settings,
  Home,
  Lightbulb,
  Camera,
  Building,
  Cpu,
  Smartphone,
  Mic,
  Wifi,
  Shield,
  CheckCircle,
  Award,
  Star
};

export const renderIcon = (iconName, className = "w-6 h-6") => {
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent className={className} /> : null;
};
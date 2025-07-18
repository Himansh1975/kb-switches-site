import React from 'react';
import { Timer, Activity, MapPin, Award } from 'lucide-react';
import { useLoadingState } from '../utils/useLoadingState';
import { SkeletonStats } from './SkeletonLoader';

const Stats = React.memo(() => {
  const [isLoading] = useLoadingState(true, 600);
  
  const stats = [
    {
      icon: <Timer className="w-8 h-8 text-blue-600 mx-auto mb-3" />,
      number: "5+ Years",
      label: "Industry Experience"
    },
    {
      icon: <Activity className="w-8 h-8 text-purple-600 mx-auto mb-3" />,
      number: "1L+",
      label: "Switch Cycles"
    },
    {
      icon: <MapPin className="w-8 h-8 text-green-600 mx-auto mb-3" />,
      number: "Pan India",
      label: "Distribution"
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600 mx-auto mb-3" />,
      number: "MSME",
      label: "Certified"
    }
  ];

  if (isLoading) {
    return <SkeletonStats />;
  }

  return (
    <section className="py-16 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              {stat.icon}
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Stats;
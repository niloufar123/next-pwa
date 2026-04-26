import React from 'react';

interface SkeletonLineConfig {
  height?: 'sm' | 'md' | 'lg' | 'xl';
  width?: 'full' | '3/4' | '1/2' | '1/3';
  color?: string;
  rounded?: 'md' | 'full';
}

interface SkeletonProps {
  lines?: number;
  lineConfigs?: SkeletonLineConfig[];
  className?: string;
  gap?: 'sm' | 'md' | 'lg';
  animate?: boolean;
}

const heightMap = {
  sm: 'h-3',
  md: 'h-4',
  lg: 'h-6',
  xl: 'h-8',
};

const widthMap = {
  full: 'w-full',
  '3/4': 'w-3/4',
  '1/2': 'w-1/2',
  '1/3': 'w-1/3',
};

const gapMap = {
  sm: 'space-y-2',
  md: 'space-y-4',
  lg: 'space-y-6',
};

const defaultLine: SkeletonLineConfig = {
  height: 'md',
  width: 'full',
  color: '#e2e8f0',
  rounded: 'md',
};

export default function Skeleton({
  lines = 3,
  lineConfigs = [],
  className = '',
  gap = 'md',
  animate = true,
}: SkeletonProps) {
  return (
    <div className={`p-4 ${className}`}>
      <div className={gapMap[gap]}>
        {Array.from({ length: lines }, (_, i) => {
          const config = { ...defaultLine, ...lineConfigs[i] };
          return (
            <div
              key={i}
              className={`
                ${heightMap[config.height!]}
                ${widthMap[config.width!]}
                ${config.rounded === 'full' ? 'rounded-full' : 'rounded-md'}
                ${animate ? 'animate-pulse' : ''}
              `}
              style={{ backgroundColor: config.color }}
            />
          );
        })}
      </div>
    </div>
  );
}
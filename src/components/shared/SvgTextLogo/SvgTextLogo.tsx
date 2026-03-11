import React, { SVGProps } from 'react';

interface SvgTextLogoProps extends SVGProps<SVGSVGElement> {
  text?: string;
  className?: string;
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text = 'Webild',
  className = '',
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 200 50"
      className={`w-32 h-auto ${className}`}
      {...props}
    >
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize="24"
        fontWeight="bold"
        fill="currentColor"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;

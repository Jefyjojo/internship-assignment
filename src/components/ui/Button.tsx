import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  asLink?: boolean;
  href?: string;
  onClick?: (e?: any) => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  asLink = false,
  href,
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-sans font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage disabled:opacity-50 disabled:cursor-not-allowed text-center";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-subtle",
    md: "px-6 py-3 text-[15px] rounded-subtle",
    lg: "px-7 py-3.5 text-base rounded-[6px]"
  };

  const variantStyles = {
    primary: "bg-sage text-white hover:bg-sage-hover shadow-sm active:translate-y-[1px]",
    secondary: "bg-beige-soft text-charcoal hover:bg-[#E4DDD3] active:translate-y-[1px]",
    outline: "border border-border-subtle bg-transparent text-charcoal hover:bg-beige-soft active:translate-y-[1px]",
    text: "bg-transparent text-charcoal hover:text-sage p-0 underline-offset-4 hover:underline"
  };

  const combinedClass = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} className={combinedClass} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

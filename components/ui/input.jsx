'use client';
import * as React from 'react';

import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="relative">
      <input
        type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
        className={cn(
          'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
          className
        )}
        ref={ref}
        {...props}
      />
      {type === 'password' && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 cursor-pointer">
          {showPassword ? (
            <EyeOff className="h-6 w-6" onClick={togglePasswordVisibility} />
          ) : (
            <Eye className="h-6 w-6" onClick={togglePasswordVisibility} />
          )}
        </div>
      )}
    </div>
  );
});
Input.displayName = 'Input';

export { Input };
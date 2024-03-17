'use client';

import { ThemeProvider } from 'next-themes';

export default function Providers({ children }) {
  return (
    <ThemeProvider defaultTheme='system' attribute='class'>
      <div className='text-blue-700 dark:text-gray-200 dark:bg-black-500 min-h-screen select-none transition-colors duration-300'>
        {children}
      </div>
    </ThemeProvider>
  );
}

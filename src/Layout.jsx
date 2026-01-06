import React from 'react';
import { Toaster } from 'sonner';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #081829;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #C9A24D, #E6C878);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #C9A24D;
        }

        ::selection {
          background: rgba(201, 162, 77, 0.3);
          color: #fff;
        }
      `}</style>
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#0A1D37',
            color: '#fff',
            border: '1px solid rgba(201, 162, 77, 0.3)',
          },
        }}
      />
      {children}
    </div>
  );
}
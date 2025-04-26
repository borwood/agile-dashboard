// A panel to use as a container for other components
// Should display in columns
import React from 'react';

const Panel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 flex flex-col items-center justify-center w-full max-w-md h-auto">
      {children}
    </div>
  );
}

export default Panel;
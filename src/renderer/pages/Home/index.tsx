import React from 'react';

export const Home: React.FC = () => {
  React.useEffect(() => {
    console.log('Home mounted');
  });
  return (
    <div>
      <h2>Introduction</h2>
      <ul>
        <li>PDF.js API: render pdf using pdfjs api</li>
        <li>PDF.js Viewer API: render pdf using pdfjs viewer api</li>
        <li>PDF.js Viewer HTML: reader pdf using pdfjs viewer html</li>
      </ul>
    </div>
  );
};

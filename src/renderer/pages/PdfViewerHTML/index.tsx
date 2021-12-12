import React from 'react';

import { CONSTANTS } from '@constants';
import './style.scss';

export const PdfViewerHTML: React.FC = () => {
  const { pdfUrl, pdfWebViewerUrl } = CONSTANTS;

  React.useEffect(() => {
    console.log('PdfViewerHTML mounted');
  });
  return (
    <div className="viewerHTML">
      <div>pdfUrl={pdfUrl}</div>
      <div>pdfWebViewerUrl={pdfWebViewerUrl}</div>
      <iframe
        className="pdfViewer"
        title="PdfViewerHTML"
        src={`${pdfWebViewerUrl}?file=${pdfUrl}`}
      />
    </div>
  );
};

import React from 'react';

import { CONSTANTS } from '@constants';
import './style.less';

export const PdfViewerHTML: React.FC = () => {
  const { pdfUrl, pdfWebViewerUrl } = CONSTANTS;

  React.useEffect(() => {
    console.log('PdfViewerHTML mounted');
  });
  return (
    <div className="iframe-viewer">
      <div>pdfUrl={pdfUrl}</div>
      <div>pdfWebViewerUrl={pdfWebViewerUrl}</div>
      <iframe
        className="iframe-viewer__container"
        title="PdfViewerHTML"
        src={`${pdfWebViewerUrl}?file=${pdfUrl}`}
      />
    </div>
  );
};

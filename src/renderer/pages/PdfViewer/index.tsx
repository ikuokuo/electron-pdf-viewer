/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { CONSTANTS } from '@constants';
import { PdfJsApi } from '@renderer/vendors/PdfJsApi';
import { PdfJsViewer } from '@renderer/vendors/PdfJsViewer';
import './style.less';

export const PdfViewer: React.FC = () => {
  const url = CONSTANTS.pdfUrl;

  const [numPages, setNumPages] = React.useState(0);

  const hrRef = React.useRef<HTMLHRElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    console.log('PdfViewer mounted');

    const container = containerRef.current;
    if (container == null) return;

    if (hrRef.current) {
      container.style.top = `${hrRef.current.offsetTop}px`;
    }

    const eventBus = new PdfJsViewer.EventBus(null);

    const pdfViewer = new PdfJsViewer.PDFViewer({
      container,
      eventBus,
      linkService: null,
      renderer: 'canvas',
      l10n: null,
    });

    eventBus.on('pagesinit', () => {
      console.log('pagesinit');
    });
    eventBus.on('pagesloaded', (e: any) => {
      console.log('pagesloaded');
      console.log(e);
      setNumPages(e.pagesCount);
    });
    eventBus.on('pagechanging', (e: any) => {
      console.log('pagechanging');
      console.log(e);
    });

    (async () => {
      const loadingTask = PdfJsApi.getDocument(url);
      const pdf = await loadingTask.promise;
      pdfViewer.setDocument(pdf);
    })();
  }, [url]);

  return (
    <div className="viewer">
      <div>url={url}</div>
      <div>numPages={numPages}</div>
      <div ref={hrRef} />
      <div ref={containerRef} className="container">
        <div className="pdfViewer" />
      </div>
    </div>
  );
};

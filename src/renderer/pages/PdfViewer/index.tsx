import React from 'react';

import * as pdfjsLib from 'pdfjs-dist/webpack';
/* remove `d.ts`
cat <<EOF > node_modules/pdfjs-dist/web/pdf_viewer.d.ts
export * from "pdfjs-dist/types/web/pdf_viewer.component";
EOF */
import { PDFViewer, EventBus } from 'pdfjs-dist/web/pdf_viewer';
import 'pdfjs-dist/web/pdf_viewer.css';

import { CONSTANTS } from '@constants';
import './style.scss';

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

    const eventBus = new EventBus(null);
    eventBus.on('pagesinit', () => {
      console.log('pagesinit');
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    eventBus.on('pagesloaded', (e: any) => {
      console.log('pagesloaded');
      console.log(e);
      setNumPages(e.pagesCount);
    });
    eventBus.on('pagerendered', () => {
      console.log('pagerendered');
    });
    const pdfViewer = new PDFViewer({
      container,
      eventBus,
      linkService: null,
      renderer: 'canvas',
      l10n: null,
    });

    (async () => {
      const loadingTask = pdfjsLib.getDocument(url);
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

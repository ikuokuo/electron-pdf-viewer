import React from 'react';

import * as pdfjsLib from 'pdfjs-dist/webpack';

import { CONSTANTS } from '@constants';
import './style.less';

export const Pdfjs: React.FC = () => {
  const url = CONSTANTS.pdfUrl;

  const [numPages, setNumPages] = React.useState(0);

  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    console.log('Pdfjs mounted');

    (async () => {
      const loadingTask = pdfjsLib.getDocument(url);
      const pdf = await loadingTask.promise;

      console.log(`PDF loaded, n=${pdf.numPages}`);
      setNumPages(pdf.numPages);

      const page = await pdf.getPage(1);

      const scale = 1.5;
      const viewport = page.getViewport({ scale });
      // Support HiDPI-screens.
      const outputScale = window.devicePixelRatio || 1;

      const canvas = canvasRef.current;
      if (canvas == null) return;
      const context = canvas.getContext('2d');

      canvas.width = Math.floor(viewport.width * outputScale);
      canvas.height = Math.floor(viewport.height * outputScale);
      canvas.style.width = `${Math.floor(viewport.width)}px`;
      canvas.style.height = `${Math.floor(viewport.height)}px`;

      const transform =
        outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

      const renderContext = {
        canvasContext: context,
        transform,
        viewport,
      };
      await page.render(renderContext);
      console.log('Page rendered!');
    })();
  }, [url]);

  return (
    <div className="pdfjs">
      <div>url={url}</div>
      <div>numPages={numPages}</div>
      <div className="container">
        <canvas ref={canvasRef} className="pdfViewer" />
      </div>
    </div>
  );
};

import React from 'react';
import NextDocument from 'next/document';
import { ServerStyleSheets as MaterialUiComponentSheets } from '@material-ui/core/styles';

export default class Document extends NextDocument {
  static async getInitialProps(ctx: any) {
    const materialUiSheet = new MaterialUiComponentSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: any) => (props: any) => materialUiSheet.collect(<App {...props} />),
      });
    const initialProps = await NextDocument.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: [
        <React.Fragment key="styles">
          {initialProps.styles}
          {materialUiSheet.getStyleElement()}
        </React.Fragment>,
      ],
    };
  }
}

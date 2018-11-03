export default ({body, title}) => `
  <!DOCTYPE html>
  <html>
    <head>
      <title>${title}</title>
      <style>
      html,
      body,
      root {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      </style>
    </head>
    <body>
      <div id="app">${body}</div>
    </body>
  </html>
`;

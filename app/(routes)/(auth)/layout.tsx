import React from "react";

const LayoutAuth = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html
      lang="en"
      className="bg-zinc-900"
    >
      <body>
        <h1>AuthLayout</h1>
        {children}
      </body>
    </html>
  );
};

export default LayoutAuth;

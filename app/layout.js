export const metadata = {
  title: 'Departure Risk Assessment',
  description: 'Assessment tool for departing employees',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          code {
            background-color: #f0f0f0;
            padding: 2px 4px;
            border-radius: 4px;
            font-family: monospace;
            font-weight: bold;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
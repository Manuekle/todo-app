import './globals.css';

export const metadata = {
  title: 'TO DO list',
  description: 'A simple to do list'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-cute">{children}</body>
    </html>
  );
}

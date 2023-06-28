/* eslint-disable import/named */
import './globals.css';
import Footer from '../components/footer';
import { taskProvider as TaskProvider } from '../context/taskProvider';

export const metadata = {
  title: 'Task List',
  description: 'A simple to do list'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-cute">
        <TaskProvider>{children}</TaskProvider>
        <Footer />
      </body>
    </html>
  );
}

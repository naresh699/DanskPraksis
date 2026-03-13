import './globals.css';

export const metadata = {
  title: 'DanskPraksis — Danish Exam Practice',
  description: 'Practice Danish PD2 and PD3 exams with intelligent grammar feedback, pronunciation, and comprehensive lessons.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>{children}</body>
    </html>
  );
}

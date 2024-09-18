// app/layout.tsx
import "./globals.css";
import Header from "./components/header";

//put components here to map so footer next
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />  
        {children}
      </body>
    </html>
  );
}

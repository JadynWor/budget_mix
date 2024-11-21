// app/layout.tsx
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import Provider from "@/components/Provider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className="antialiased" 
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
        }}
      >
        <Provider>
          <Header />  
          <main style={{
            flex: '1', // Allow the main content to grow and push the footer down
          }}>
            {children}
          </main>
          
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

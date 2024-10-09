// components/header.tsx
export default function Footer() {
    return (
      <div className="footer-content"  style={{ 
        display: 'flex', 
        flexDirection: 'column',  
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '10vh',
        textAlign: 'center' 
        
      }}>
      <p>&copy; {new Date().getFullYear()} Budget Mix Corporation. All rights reserved.</p>
      <nav>
          <ul className="footer-links">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/contact">Contact Us</a></li>
          </ul>
      </nav>
  </div>
    );
  }
  
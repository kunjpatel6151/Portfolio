export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="recruiter-footer">
      <div className="footer-content">
        <p className="footer-name">Kunj Patel</p>
        <p className="footer-copyright">© {currentYear} All Rights Reserved</p>
        <div className="footer-links">
          <a href="#home">Privacy</a>
          <a href="#home">Terms</a>
          <a href="#home">Contact</a>
        </div>
      </div>
    </footer>
  );
}

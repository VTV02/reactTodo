import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center py-3">
        <p className="mb-2 text-warning">
          &copy; 2025 VTV02. All rights reserved.
        </p>
        <ul className="footer-links list-inline mb-0">
          <li className="list-inline-item">
            <a href="#">Home</a>
          </li>
          <li className="list-inline-item">
            <a href="#">About</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Services</a>
          </li>
          <li className="list-inline-item">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

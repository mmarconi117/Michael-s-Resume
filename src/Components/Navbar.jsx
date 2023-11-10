import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className="primary-header_links">
        <div>
          <button>
            <Link className="link" to="/" rel="noopener noreferrer">
              Home
            </Link>
          </button>
          <button>
            <Link className="link" to="/cover" rel="noopener noreferrer">
              Cover
            </Link>
          </button>
          <button>
            <Link className="link" to="/contact" rel="noopener noreferrer">
              Contact
            </Link>
          </button>
          <button>
            <Link className="link" to="/references" rel="noopener noreferrer">
              References
            </Link>
          </button>
          <button>
            <a className="link"
              // href="https://www.linkedin.com/in/fish-kfishersr/details/certifications/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Certifications Coming Soon
            </a>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

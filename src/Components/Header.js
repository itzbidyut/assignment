import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <p>Product lists</p>
        </Link>
      </div>
    </div>
  );
}

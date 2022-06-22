export default function Navbar({ children, className }) {
  return (
    <nav className={`pt-8 ${className}`}>{children}</nav>
  );
}

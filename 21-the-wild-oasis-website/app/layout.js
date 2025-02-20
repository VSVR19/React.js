import Logo from './components/Logo';
import Navigation from './components/Navigation';

// This metadata object will be used to provide metadata for the layout.
const metadata = {
  title: 'The Wild Oasis',
};

// In Next.js, only the root layout is returned to the DOM.
// No other layout components or pages are returned.
// This is because Next.js only renders the root layout.

// CHILDREN
// Any layout component accepts a children prop.
// Whenever this layout component is rendered, the children prop will be replaced by the current page we are at- about, account, cabins, etc.
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        {/* https://ascii.cl/htmlcodes.htm */}
        <footer>&#169; The Wild Oasis</footer>
      </body>
    </html>
  );
};

export { metadata };
export default RootLayout;

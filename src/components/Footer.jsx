
function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <small>@Copyright {currentYear}. </small>
      <small>Made with 💞 by Vera</small>
    </footer>
  );
}

export default Footer;

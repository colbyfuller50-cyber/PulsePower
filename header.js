function renderHeader(active){
  const nav = `
  <header>
    <nav>
      <a href="index.html">Home</a>
      <a href="pricing.html">Pricing</a>
      <a href="locations.html">Locations</a>
      <a href="how-it-works.html">How It Works</a>
      <a href="faq.html">Q&A</a>
      <a href="contact.html">Contact</a>
      <a href="adspower.html">AdsPower</a>
    </nav>
  </header>`;
  document.getElementById('app-header').innerHTML = nav;
}
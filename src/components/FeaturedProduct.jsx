function FeaturedProduct() {
  return (
    <section className="hero-section">
      <h1>Riviana Dolce</h1>
      <img
        src="/bakery-project/images/products/chocolate-fudge-cake.webp"
        alt="Chocolate Fudge Cake"
        className="hero-image"
        width="500"
        height="200"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero--section"></div>
      <div className="hero--section">
        <p>The most <span>delicious</span> cakes on the planet or even more.</p>
      </div>
    </section>
  );
}

export default FeaturedProduct;

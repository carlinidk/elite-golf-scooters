export default function Products() {
  return (
    <section>
      <h2>Our Scooters</h2>
      <p>Precision engineered electric golf scooters.</p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "2rem" }}>
        <div className="fade-up">
          <h3>Pro Ride X</h3>
          <p>800W Dual Motor · 35km Range</p>
          <button className="primary-btn">Buy Now</button>
        </div>
        <div className="fade-up">
          <h3>Elite Fold</h3>
          <p>Ultra Compact · Silent Drive</p>
          <button className="primary-btn">Buy Now</button>
        </div>
      </div>
    </section>
  )
}

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section style={{ background: "var(--gradient-overlay)", color: "#fff" }}>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Push. Ride. Fold.<br />Play Your Game, Your Way.
      </motion.h1>
      <p>Premium electric golf scooters designed for elite performance.</p>
      <button className="secondary-btn">Explore Scooters</button>
    </section>
  )
}

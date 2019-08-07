import React from "react"
import HeroStyles from "./Hero.module.css"

export default () => (
  <div className={HeroStyles.hero}>
    <h1 className={HeroStyles.h1}>Stephen Bégay ~ Web Developer</h1>
    <p className={HeroStyles.p}>
      Passionate about web development. My fascination for new technologies
      always motivated me to learn more and create. As such, I enjoy taking on
      new challenges.
    </p>
  </div>
)

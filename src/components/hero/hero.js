import React from "react"
import HeroStyles from "./Hero.module.css"
import IconDecoration from "../../../static/assets/decorations.svg"
import Logosass from "../../../static/assets/logo-sass.svg"
import Logoreact from "../../../static/assets/logo-react.svg"
import Logonpm from "../../../static/assets/logo-npm.svg"
import Logogithub from "../../../static/assets/logo-github.svg"
import Logovscode from "../../../static/assets/logo-vscode.svg"
import Logotypescript from "../../../static/assets/logo-typescript.svg"
import Logoangular from "../../../static/assets/logo-angular.svg"
import Logohtml5 from "../../../static/assets/logo-html5.svg"
import Logovue from "../../../static/assets/logo-vue.svg"

export default () => (
  <div className={HeroStyles.hero}>
    <h1 className={HeroStyles.h1}>
      Stephen Bégay<span> - </span>Front-End Developer
    </h1>
    <p className={HeroStyles.p}>
      Passionate about web development. My fascination for new technologies
      always motivated me to learn more.
    </p>

    <IconDecoration className={HeroStyles.deco}></IconDecoration>

    <Logosass className={`${HeroStyles.svg} ${HeroStyles.sass}`}></Logosass>
    <Logoreact className={`${HeroStyles.svg} ${HeroStyles.react}`}></Logoreact>
    <Logonpm className={`${HeroStyles.svg} ${HeroStyles.npm}`}></Logonpm>
    <Logogithub
      className={`${HeroStyles.svg} ${HeroStyles.github}`}
    ></Logogithub>
    <Logovscode
      className={`${HeroStyles.svg} ${HeroStyles.vscode}`}
    ></Logovscode>
    <Logotypescript
      className={`${HeroStyles.svg} ${HeroStyles.typescript}`}
    ></Logotypescript>
    <Logoangular
      className={`${HeroStyles.svg} ${HeroStyles.angular}`}
    ></Logoangular>
    <Logohtml5 className={`${HeroStyles.svg} ${HeroStyles.html5}`}></Logohtml5>
    <Logovue className={`${HeroStyles.svg} ${HeroStyles.vue}`}></Logovue>
  </div>
)

import React from "react"
import heroPanelT001Styles from "./style.module.scss"
import { posts, navigationItems } from "../../data-simulation/simulation"

const HeroPanelT001 = () => {
  return (
    <section id="heroPanel-t-001">
      <section className={`d-width-x-100 m-width-x-100 darkThemeT002`}>
        <section className={`${heroPanelT001Styles.jumbotron}`}>
          <div className={heroPanelT001Styles.greetingContainer}>
            <div className={heroPanelT001Styles.card}>
              <span className={heroPanelT001Styles.subtitleTop}>
              Software Development_
              </span>
              <h1 className={heroPanelT001Styles.title}>
                BUILD IT WITH CODE
              </h1>

              <p className={heroPanelT001Styles.paragraph}>
                Why not build something amazing that will connect all of us?
              </p>
              <div>
                <a className={`${heroPanelT001Styles.linkPath}`} href="">
                  <span className={heroPanelT001Styles.linkText}>
                    Let's start that project
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className={heroPanelT001Styles.jumbotronImage}>
            <figure className={heroPanelT001Styles.imageHolder}>
              <img
                className={heroPanelT001Styles.imageSource}
                src="https://varjo.com/wp-content/uploads/2019/02/eyetracking2.gif"
              />
            </figure>
          </div>
        </section>
      </section>
    </section>
  )
}

export default HeroPanelT001

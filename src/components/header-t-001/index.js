import React from "react"
import headerT001Styles from "./style.module.scss"
import {navigationSkills} from "../../data-simulation/simulation"

const HeaderT001 = () => {
  
  return (
    <section
      id="headerT001Component"
      className={`${headerT001Styles.headerT001Component} `}
    >
      <div className={`${headerT001Styles.bgColor}`}>
        <section className={`${headerT001Styles.container} d-width-x-80 m-width-x-90 y-center darkThemeT002 `}>
          <section className={`${headerT001Styles.cont} d-row`}>
            <section className={headerT001Styles.signOff}>
              <h2 className={headerT001Styles.brandLogo}>A_</h2>
            </section>
            <nav className={headerT001Styles.navigation}>
              <ul className={headerT001Styles.list}>
                {navigationSkills.map((item, idx) => (
                  <li className={headerT001Styles.listItem}>
                    <a className={headerT001Styles.linkPath} href={item.link}>
                      <span className={headerT001Styles.linkText}>
                        {item.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              
            </nav>
          </section>
        </section>
      </div>
    </section>
  )
}

export default HeaderT001

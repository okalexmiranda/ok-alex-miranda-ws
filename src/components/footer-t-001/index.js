import React from "react"
import footerT001Styles from "./style.module.scss"

const FooterT001 = ({ navigationItems }) => {
  const {
    navigationSkills,
    navigationServices,
    navigationSocial,
  } = navigationItems
  return (
    <footer
      id={footerT001Styles.footerT001Component}
    >
      <section className={`marginX80 darkThemeT002`}>
        <section className={footerT001Styles.container}>
          <section className={footerT001Styles.signOff}>
            <h2 className={footerT001Styles.brandLogo}>A_</h2>
            <p className={footerT001Styles.brandName}>Alex Miranda</p>
            <p className={footerT001Styles.handle}>@okalexmiranda</p>
          </section>
          <nav className={footerT001Styles.navigation}>
            <ul className={footerT001Styles.list}>
              <h5 className={footerT001Styles.listTitle}>Services:</h5>
              {navigationServices.map((item, idx) => (
                <li className={footerT001Styles.listItem}>
                  <a className={footerT001Styles.linkPath} href={item.link}>
                    <span className={footerT001Styles.linkTitle}>
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className={footerT001Styles.list}>
              <h5 className={footerT001Styles.listTitle}>Skills:</h5>
              {navigationSkills.map((item, idx) => (
                <li className={footerT001Styles.listItem}>
                  <a className={footerT001Styles.linkPath} href={item.link}>
                    <span className={footerT001Styles.linkTitle}>
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <ul className={footerT001Styles.list}>
              <h5 className={footerT001Styles.listTitle}>Social:</h5>
              {navigationSocial.map((item, idx) => (
                <li className={footerT001Styles.listItem}>
                  <a className={footerT001Styles.linkPath} href={item.link}>
                    <span className={footerT001Styles.linkTitle}>
                      {item.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </section>
      </section>
    </footer>
  )
}

export default FooterT001

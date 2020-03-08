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
      id="footerT001Component"
      className={`${footerT001Styles.footerT001Component} `}
    >
      <div className={`${footerT001Styles.bgColor}`}>
        <section className={`${footerT001Styles.container} d-width-x-80 m-width-x-80 y-center darkThemeT002 `}>
          <section className={`${footerT001Styles.cont} d-row m-column`}>
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
                      <span className={footerT001Styles.linkText}>
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
                      <span className={footerT001Styles.linkText}>
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
                      
                      <figure className={footerT001Styles.imageHolder}><img className={footerT001Styles.imageSource} src={item.icon}/></figure>
                      <span className={footerT001Styles.linkText}>
                        {item.name}
                      </span></a>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </section>
      </div>
    </footer>
  )
}

export default FooterT001

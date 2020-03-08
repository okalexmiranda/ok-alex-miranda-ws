import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import FooterT001 from "../components/footer-t-001"
import HeroPanelT001 from "../components/hero-panel-t-001"

import "../global-styles/global.scss"

import {
  navigationSkills,
  navigationServices,
  navigationSocial,
} from "../data-simulation/simulation"

const Canvas = () => (
  <section>
    <SEO title="Footer" />
    <HeroPanelT001/>
    <FooterT001
        navigationItems={{
          navigationSkills,
          navigationServices,
          navigationSocial,
        }}
      />
  </section>
)

export default Canvas

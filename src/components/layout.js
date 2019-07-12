import React from "react"
import PropTypes from "prop-types"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <main>{children}</main>
    <footer>© {new Date().getFullYear()}, Johannes Brandt Nielsen</footer>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

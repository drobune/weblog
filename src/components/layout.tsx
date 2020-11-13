import * as React from "react"
import {Helmet} from "react-helmet"
import Navbar from "./navBar"
import styled from "styled-components"

const BodyContainer = styled.div`
margin: 0 auto;
max-width: 650px;
padding 0 1rem;
`

const Layout: React.FC =  ({ children }) => (
  <div>
    <Helmet>
      <title>"DROBUNE weblog"</title>
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <Navbar/>
    <BodyContainer>
      {children}
    </BodyContainer>
  </div>
)

export default Layout
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { Button } from "../components/Button.js"

import { FaApple } from "react-icons/fa"
import Info from "../components/info"
import Iu from "../components/iu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Link to="/products/"><h1>products page</h1></Link>
    <Link to="images">images</Link>
    <Info/>
    <h1 style={{ color: 'red' }}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
      <Iu/>
    </div>
    <FaApple/>
    <Button>I'm from styled</Button>
    <Link to="/page-2/">Go to page 2</Link>
    <br/>
    <Link to="/products/testing/">Testing Page</Link>
  </Layout>
)

export default IndexPage

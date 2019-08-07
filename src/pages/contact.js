import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Container from "../components/container/container"

export default () => (
  <Container>
    <Header headerText="Contact" />
    <p>Send us a message!</p>
    <Link to="./">go back Home</Link>
  </Container>
)

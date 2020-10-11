import React from 'react'

import Container from './Container'
import Row from './Row'
import Col from './Col'
import Box from './Box'

export default {
  title: 'Layouts',
}

export const box = () => (
  <Box padding="5px 20px" border="solid 1px black">
    Box
  </Box>
)

export const fullWidthBox = () => (
  <Box padding="5px 20px" border="solid 1px black" fullWidth>
    Full width Box
  </Box>
)

export const container = () => (
  <Container>
    <Row>
      <Col col xl="1" lg="2" md="3" sm="6">
        Hello Bootstrap Layout
      </Col>
    </Row>
    <Row>
      <Col col>
        <Box border="solid 1px black">Col 2</Box>
      </Col>
      <Col sm="8">
        <Box border="solid 1px black">Col 2</Box>
      </Col>
      <Col col>
        <Box border="solid 1px black">Col 3</Box>
      </Col>
    </Row>
  </Container>
)

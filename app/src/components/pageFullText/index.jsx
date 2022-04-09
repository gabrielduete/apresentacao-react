import React from 'react'
import PropTypes from 'prop-types'
import Wrapper from './styles'

function FullText({ title }) {
  return (
    <Wrapper>
      <h1>{title}</h1>
    </Wrapper>
  )
}

FullText.propTypes = {
  title: PropTypes.string.isRequired,
}

export default FullText

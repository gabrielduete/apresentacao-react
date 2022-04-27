import PropTypes from 'prop-types'
import ContainerLayout from './styles'

const Container = ({ children, center }) => {
  return (
    <ContainerLayout display={center ? 'flex' : 'block'}>
      {children}
    </ContainerLayout>
  )
}

Container.protoTypes = {
  children: PropTypes.node.isRequired,
  center: PropTypes.bool,
}

export default Container

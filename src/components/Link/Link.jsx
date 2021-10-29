import PropTypes from 'prop-types'
import {LinkStyled} from './LinkStyled'

const Link = ({children, ...props}) => (
	<LinkStyled {...props}>{children}</LinkStyled>
)

Link.propTypes = {
	children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
}

export default Link

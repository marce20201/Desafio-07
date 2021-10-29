import PropTypes from 'prop-types'
import images from 'utils/images'
import {LogoStyled, TitleStyled} from './LogoStyled'

const Logo = ({withText = true}) => (
	<LogoStyled>
		<img src={images.logo2} alt="logo GoodWater"/>
		{withText && <TitleStyled>GoodWater</TitleStyled>}
	</LogoStyled>
)

Logo.propTypes = {
	withText: PropTypes.bool,
}

export default Logo

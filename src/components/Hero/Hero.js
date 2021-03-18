import PropTypes from 'prop-types'

import './Hero.css'

import {
  HeroContainer,
  HeroWrapper,
  HeroBackdrop,
  HeroTitle,
  HeroDescription,
} from '../../styles/styles'

function Hero({ cover, title, description }) {
  return (
    <HeroContainer>
      <HeroBackdrop src={cover} alt='coverImage' />
      <HeroWrapper>
        <HeroTitle>{title}</HeroTitle>
        <HeroDescription>{description}</HeroDescription>
      </HeroWrapper>
    </HeroContainer>
  )
}

Hero.propTypes = {
  cover: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Hero

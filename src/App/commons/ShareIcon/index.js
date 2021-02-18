import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  RedditShareButton,
  EmailShareButton,

  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  RedditIcon,
  EmailIcon,
} from 'react-share'

import { DEFAULT_SHARE_MESSAGE } from './const'

const StyledFacebookIcon = styled(FacebookIcon)`
  opacity: 0.7;
  transition: 1s;

  &:hover {
    opacity: 1;
  }
`

const StyledTwitterIcon = styled(TwitterIcon)`
  opacity: 0.7;
  transition: 1s;

  &:hover {
    opacity: 1;
  }
`

const StyledLinkedinIcon = styled(LinkedinIcon)`
  opacity: 0.7;
  transition: 1s;

  &:hover {
    opacity: 1;
  }
`

const StyledRedditIcon = styled(RedditIcon)`
  opacity: 0.7;
  transition: 1s;

  &:hover {
    opacity: 1;
  }
`

const StyledEmailIcon = styled(EmailIcon)`
  opacity: 0.7;
  transition: 1s;

  &:hover {
    opacity: 1;
  }
`

export const StyledFacebookBtn = ({ link }) => {
  return (
    <FacebookShareButton
      quote={DEFAULT_SHARE_MESSAGE}
      url={link}
    >
      <StyledFacebookIcon size={25} round />
    </FacebookShareButton>
  )
}

StyledFacebookBtn.propTypes = {
  link: PropTypes.string,
}

export const StyledTwitterBtn = ({ link }) => {
  return (
    <TwitterShareButton
      quote={DEFAULT_SHARE_MESSAGE}
      url={link}
    >
      <StyledTwitterIcon size={25} round />
    </TwitterShareButton>
  )
}

StyledTwitterBtn.propTypes = {
  link: PropTypes.string,
}

export const StyledLinkedinBtn = ({ link }) => {
  return (
    <LinkedinShareButton
      quote={DEFAULT_SHARE_MESSAGE}
      url={link}
    >
      <StyledLinkedinIcon size={25} round />
    </LinkedinShareButton>
  )
}

StyledLinkedinBtn.propTypes = {
  link: PropTypes.string,
}

export const StyledRedditBtn = ({ link }) => {
  return (
    <RedditShareButton
      quote={DEFAULT_SHARE_MESSAGE}
      url={link}
    >
      <StyledRedditIcon size={25} round />
    </RedditShareButton>
  )
}

StyledRedditBtn.propTypes = {
  link: PropTypes.string,
}

export const StyledEmailBtn = ({ link }) => {
  return (
    <EmailShareButton
      quote={DEFAULT_SHARE_MESSAGE}
      url={link}
    >
      <StyledEmailIcon size={25} round />
    </EmailShareButton>
  )
}

StyledEmailBtn.propTypes = {
  link: PropTypes.string,
}

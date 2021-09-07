import React from 'react'
import { LinkIcon, FooterLink, FooterContainer, FooterLinksWrapper, FooterLinksContainer, FooterLinksItems, FooterLinkTitle, FooterWrapper } from './FooterElements'
import githubIcon from '../../images/github.png'
import linkedInIcon from '../../images/linkedin.png'
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <SocialIcon url="https://github.com/davidsquines" style={{ height: 50, width: 50 }}/>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <SocialIcon url="https://www.linkedin.com/in/david-quines7/" style={{ height: 50, width: 50 }}/>
                        </FooterLinksItems>
                        <FooterLinksItems>
                            <SocialIcon url="https://www.instagram.com/dsqsfl/"  style={{ height: 50, width: 50 }}/>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer

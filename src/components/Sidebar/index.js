import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute  } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/about' onClick={toggle}>
                        About Me
                    </SidebarLink>
                    <SidebarLink to='/experiance' onClick={toggle}>
                        Experiance
                    </SidebarLink>
                    <SidebarLink to='/projects' onClick={toggle}>
                        Projects
                    </SidebarLink>
                    <SidebarLink to='/awards' onClick={toggle}>
                        Awards
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/resume'>Resume</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar

import React from 'react'
import {Container, SidebarHeader, Title, SidebarBody} from "../container/RightSidebarStyles"
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";


const RightSidebar = (props) => {
  return (
    <Container transform={props.rightMenu ? 0 : 100}>
      <SidebarHeader>
        <Title>{props.name}</Title>
        <div onClick={props.closeSidebar}>
          <HighlightOffOutlinedIcon />
        </div>
      </SidebarHeader>
      <SidebarBody>
        {props.children}
      </SidebarBody>
    </Container>
  )
}

export default RightSidebar
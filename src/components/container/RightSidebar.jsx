import React from "react";
import {
  Container,
  SidebarHeader,
  Title,
  SidebarBody,
  CloseBtutton
} from "../container/RightSidebarStyles";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

const RightSidebar = (props) => {
  return (
    <Container transform={props.rightMenu ? 0 : 100}>
      <SidebarHeader>
        <Title>{props.name}</Title>
        <CloseBtutton onClick={props.closeSidebar}>
          <CloseRoundedIcon sx={{ fontSize: 24 }} />
        </CloseBtutton>
      </SidebarHeader>
      <SidebarBody>{props.children}</SidebarBody>
    </Container>
  );
};

export default RightSidebar;

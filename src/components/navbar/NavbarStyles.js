import styled from "styled-components";

export const Container = styled.div`
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  background: #ffffff;
  box-shadow: ${(props) =>
    props.stickyNav ? "0 3px 5px rgba(57, 63, 72, 0.3)" : "none"};
`;
export const Wrapper = styled.div`
  padding: 15px 30px;
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  margin-left: 25px;
  font-size: 1.75rem;
  font-weight: 600;
  color: #007aff;
  letter-spacing: 0.45rem;
`;
export const Left = styled.div`
  flex: 1;
`;
export const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;
export const MenuItem = styled.div`
  font-size: 1rem;
  cursor: pointer;
  margin-left: 25px;
`;

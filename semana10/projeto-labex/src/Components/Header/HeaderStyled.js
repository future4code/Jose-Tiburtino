import styled from "styled-components";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 40px;
  background-color: #26272b;
  color: white;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    width: 100%;
  }
`;

export const Menu = styled.ul``;

export const AssignmentIcon = styled(AssignmentIndIcon)`
  transform: scale(2);
`;

export const ExitToApp = styled(ExitToAppIcon)`
  transform: scale(2);
`;

export const AdmConfigIcon = styled(DesktopWindowsIcon)`
  transform: scale(1.6);
  margin-right: 50px;
`;

export const MenuItens = styled.li`
  display: inline;
  font-weight: 500;
  font-size: 1.6em;
  cursor: pointer;
  @media (min-device-width: 320px) and (max-device-width: 420px) {
    display: flex;
    flex-direction: row;
  }
`;

export const ImgLogo = styled.img`
  height: 90%;
  color: white;
  cursor: pointer;
`;

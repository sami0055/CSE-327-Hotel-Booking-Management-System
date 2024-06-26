import styled from "styled-components";

/**
 * SidebarContainer Component
 * 
 * This styled-component defines the styles for a sidebar container. It is positioned fixed
 * and has a white background with rounded corners. The component also includes styles 
 * for maximum height, vertical overflow scrolling, padding, and border.
 * 
 * @component
 * @example
 * return (
 *   <SidebarContainer>
 *     // child components here
 *   </SidebarContainer>
 * )
 */
export const SidebarContainer = styled.div`
    background: #fff;
    border-radius: 10px;
    position: fixed;
    width: 460px;
    max-height: calc(100vh - 100px);
    overflow-y: scroll;
    padding: 20px;
    border: 1px solid #d8d8d8;
`;

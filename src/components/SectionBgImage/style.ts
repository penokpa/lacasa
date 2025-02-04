import styled, { css } from "styled-components";

export const StyledDiv = styled.div<{ $bgImage: string }>`
  ${({ $bgImage }) => css`
    &.section-image-wrapper {
      background-image: url(https://images.unsplash.com/photo-1570598912132-0ba1dc952b7d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D);
      display: flex;
    //   align-items: center;
      flex-direction: column;
      padding: 250px 0;
      background-position: 50%;

      position: relative;
      background-size: cover;
      .menu-title-content {
        z-index: 2;
        position: relative;
        color: #fff;
        display: flex;
        flex-direction: column;
        /* justify-content: center; */
        /* align-items: center; */
        gap: 10px;
        .h1 {
          color: #fff;
        }

        .section-title {
          padding-top: 0 !important;
        }
      }
    }
  `}
`;


// https://ucarecdn.com/77fa410d-bf68-4302-b095-f97271021eaf/-/progressive/yes/-/format/auto/-/resize/2000x/

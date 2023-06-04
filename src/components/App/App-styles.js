import styled from '@emotion/styled';
import { css, Global } from '@emotion/react';

export const GlobalStyle = () => (
  <Global
    styles={css`
      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
        background-color: var(--color-lightpurple);
        min-height: 100vh;
      }
    `}
  />
)


export const Container = styled.div`
  &.desktop {
    max-width: 650px;
    margin: auto;
    padding: 15px;
  }
`;
Container.displayName = 'S.Container';

export { Spacer } from 'components/SharedStyles';

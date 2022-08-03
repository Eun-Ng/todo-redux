import styled from 'styled-components';

const Layout = ({children}) => {
  return <styledLayout>{children}</styledLayout>;
};

export {Layout};

const styledLayout = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`;

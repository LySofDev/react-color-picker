import styled from '../styled-components';

export const Container = styled.main`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 10vh 0;
`

export const Banner = styled.section`
  width: 80vw;
  height: 30vh;
  border: solid 1px black;
  box-sixing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color ? color : 'white'};
`

export const Colors = styled.section`
  width: 100vw;
  display: flex;
  margin-top: 10vh;
  justify-content: center;
`

export const Swatch = styled.div`
  height: 50px;
  width: 50px;
  border: solid 1px black;
  box-sixing: border-box;
  margin-left: 1em;
  background: ${({ color }) => color ? color : 'white' };
  &:first-of-type {
    margin-left: 0;
  }
`

export const Title = styled.div`
  background: white;
  border: solid 1px black;
  box-sixing: border-box;
  padding: 1em 2em;
  display: inline-block;
`

import styled from 'styled-components'

// Header

export const HeaderContainer = styled.header`
  z-index: 5;
  position: relative;
  top: 0;
  width: 100vw;
  height: 10vh;
  background-color: #003049;
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 5px rgba(15, 15, 15, 0.3);
  display: flex;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`

export const HeaderLogo = styled.img`
  width: 200px;
  height: 60px;
`

// Header Cart section

export const HeaderCartContainer = styled.div`
  color: rgb(233, 227, 227);
  margin-left: auto;
  font-size: 1.2rem;
  padding-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderCart__Icon = styled.div`
  font-size: 1.8em;
  position: relative;
  margin: 0 1px 0 auto;
`
export const HeaderCart__price = styled.span`
  font-size: 1.4rem;
  padding: 10px;

  @media (min-width: 768px) {
    position: absolute;
    right: 150px;
  }
`
export const HeaderCart__qty = styled.span`
  position: absolute;
  top: -15px;
  right: -30px;
  border-radius: 50%;
  background-color: #ccc;
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 1rem;
  font-weight: bold;
`

// Hero

export const HeroContainer = styled.section`
  height: max-content;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100vw;
  margin-top: 25px;
  flex-grow: 0;
  align-self: flex-start;

  @media (min-width: 768px) {
    height: 40vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 100vw;
    box-sizing: content-box;
  }
`
export const HeroBackdrop = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    height: 45vh;
    width: 100vw;
    object-fit: cover;

    box-shadow: 0 0 3px 5px rgba(15, 15, 15, 0.3);
  }
`

export const HeroWrapper = styled.div`
  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 45vh;
    z-index: 1;
  }
`

export const HeroTitle = styled.h1`
  margin-bottom: 25px;
  letter-spacing: 6px;
  font-size: 45px;
  letter-spacing: 6px;
  color: var(--first-color);

  @media (min-width: 768px) {
    color: var(--fifth-color);
    margin-bottom: 55px;

    font-size: 5rem;
  }
`

export const HeroDescription = styled.h2`
  display: none;

  @media (min-width: 768px) {
    color: var(--fifth-color);
    display: inline-flex;
    font-size: 1.6rem;
  }
`

// Cart

export const CartPage = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 10vh 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    max-width: 100vw;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

export const EmptycartMsg = styled.p`
  font-size: 2rem;
`

export const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;

  @media (min-width: 768px) {
    max-width: 100vw;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
`

export const CartFooter = styled.footer`
  height: 6vh;
  background-color: white;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 10px;
  width: 95vw;
  text-align: center;
  border-top: 1px solid rgba(25, 25, 25, 0.4);
  font-size: large;
  font-weight: bold;
  position: fixed;
  bottom: 0;

  @media (min-width: 768px) {
    width: 100vw;
    height: 8vh;
  }
`

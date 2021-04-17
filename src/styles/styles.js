import styled from 'styled-components'

// APP
export const AppContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  @media (min-width: 768px) {
    * {
      overflow-x: hidden;
    }
    align-items: center;
    overflow-x: hidden;
  }
`

// Default components!

export const BasicBtn = styled.button`
  position: relative;
  overflow: hidden;
  width: 7rem;
  color: #5585ff;
  border: 2px solid #5585ff;
  background-color: transparent;
  cursor: pointer;
  line-height: 2;
  margin: 10px;
  padding: 0;
  border-radius: 1.5rem;
  font-size: 1.2rem;
  text-transform: lowercase;
  outline: none;
  transition: transform 0.125s;
`

export const DefaultBlueBtn = styled.button`
  min-width: 100px;
  min-height: 30px;
  height: max-content;
  background-color: #003049;
  border: none;
  border-radius: 5px;
  color: white;
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover {
    background: #003049;
    cursor: pointer;
  }

  &:active {
    transform: scale(0.9);
  }
  &:focus {
    outline: none;
  }
`

export const CloseBtn = styled.button`
  margin: 0 auto 0 5px;
  height: 25px;
  background: transparent;
  border: none;
  cursor: pointer;
  opacity: 0.5;
  transition: all 0.35s ease-in-out;

  &:focus {
    outline: none;
    background: transparent;
    border: 1px solid transparent;
  }
  npm i styled-components &:active {
    outline: none;
    background: transparent;
  }
  &:hover {
    background: transparent;
    opacity: 1;
    transform: rotate(90deg);
  }
`

// Header

export const HeaderContainer = styled.header`
  z-index: 5;
  position: relative;
  top: 0;
  width: 100vw;
  height: 7vh;
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
  width: 180px;
  height: 60px;
`

// Header Cart section

export const HeaderCartContainer = styled.div`
  color: rgb(233, 227, 227);
  margin-left: auto;
  font-size: 16px;
  padding-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderCartIcon = styled.div`
  font-size: 16px;
  position: relative;
  margin: 0 1px 0 auto;
`
export const HeaderCartPrice = styled.span`
  font-size: 16px;
  padding: 10px;
  text-decoration: none;

  @media (min-width: 768px) {
    position: absolute;
    right: 150px;
  }
`
export const HeaderCartQty = styled.span`
  position: absolute;
  top: -4px;
  right: -30px;
  border-radius: 50%;
  background-color: #ccc;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  font-size: 16px;
  font-weight: bold;
`

// Main

export const Main = styled.main`
  background-color: white;
  margin-top: 80px;
  @media (min-width: 768px) {
    padding: 0px;
  }
`

// Hero

export const HeroContainer = styled.section`
  height: max-content;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 100vw;
  margin-bottom: 10px;
  flex-grow: 0;
  align-self: flex-start;

  @media (min-width: 768px) {
    height: 45vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    width: 100vw;
    box-sizing: content-box;
  }
`
export const HeroBackdrop = styled.img`
  width: 100%;
  height: 25vh;
  object-fit: cover;
  box-shadow: 0 0 3px 5px rgba(15, 15, 15, 0.3);

  @media (min-width: 768px) {
    height: 45vh;
    width: 100vw;
    object-fit: cover;

    box-shadow: 0 0 3px 5px rgba(15, 15, 15, 0.3);
  }
`

export const HeroWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100vw;
  height: 45vh;
  z-index: 1;
  @media (min-width: 768px) {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
    width: 100vw;
    height: 45vh;
    z-index: 1;
  }
`

export const HeroTitle = styled.h1`
  letter-spacing: 6px;
  font-size: 2.3rem;
  text-align: center;
  letter-spacing: 6px;
  margin-top: 50px;
  color: white;

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
// SearchBarSection
export const SearchProductsSect = styled.div`
  width: 100vw;
  height: 10vh;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    margin-top: 25px;
  }
`

// CategoriesFilter
export const CategoriesFilterSection = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-basis: 55%;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
`
// ProductList Component

export const ProductListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  @media (min-width: 768px) {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
  }
`

export const ProductsList = styled.div`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  padding: 0px 20px 0px 20px;

  @media (min-width: 768px) {
    width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    overflow-x: hidden;
  }
`
// Product Card

export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 350px;
  width: 70vw;
  border-radius: 8px;
  box-shadow: 0px 2px 5px 2px rgba(25, 25, 25, 0.25);
  margin: 25px 55px 25px 55px;
  scroll-snap-align: center;

  @media (min-width: 768px) {
    width: 250px;
    height: 350px;
    margin: 55px 25px 25px 25px;
    transition: all 0.2s ease-in-out;
  }
`

export const ProductCardImg = styled.img`
  margin-top: 15px;
  height: 180px;
  width: 220px;
  object-fit: scale-down;

  @media (min-width: 768px) {
    height: 50%;
    width: 50%;
    object-fit: scale-down;
  }
`

export const ProductCardContent = styled.div`
  height: 190px;
  width: 70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: inherit;
    height: 190px;
  }
`

export const ProductCardTitle = styled.h4`
  text-align: center;
  margin: 25px 25px 15px 25px;

  @media (min-width: 768px) {
    max-height: 3.6rem;
    font-size: 1rem;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow-y: hidden;
  }
`

export const PriceAndBtnWrapper = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-style: italic;
  margin: 5px 25px 25px 25px;
`

// Product PAGE

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12vh;
  align-items: center;
  height: 100vh;
  width: 100vw;

  @media (min-width: 768px) {
    flex-direction: row;
    padding: 12vh;
  }
`

// width: 100%;
// height: 300px;
// object-fit: contain;
// object-position: center;
// margin-top: 20px;

export const ProductImg = styled.img`
  height: 250px;
  width: 220px;
  object-fit: scale-down;
  margin-bottom: 25px;

  @media (min-width: 768px) {
    height: 70%;
    width: 70%;
    object-fit: scale-down;
    margin-top: 15px;
  }
`

export const ProductTextContent = styled.div`
  height: fit-content;
  width: 80vw;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > h3 {
    ${ProductCardTitle}
    text-align:left;
  }

  @media (min-width: 768px) {
    padding: 0;
    padding: 0 15px;
  }
`

export const ProductDescription = styled.p`
  margin: 15px 0;
  font-size: 1.2rem;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`

export const ProductPriceAndBtn = styled.span`
  border-top: 1px solid rgba(25, 25, 25, 0.4);
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 0 0;
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-weight: 800;
  font-style: italic;
  width: 100%;
  height: 8vh;

  & > button {
    width: max-content;
    padding: 2px 10px;
    font-size: 1.2rem;
  }
`

// Cart PAGE

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

// Checkout PAGE

export const CheckoutContainer = styled.div`
  font-family: 'Quicksand', sans-serif;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    * {
      overflow-x: hidden;
    }
    align-items: center;
    overflow-x: hidden;
  }
`

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  color: palevioletred;
  width: 300px;
  margin: 50px auto;
`

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
`

export const InputText = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 2px solid;
  outline: 0;
  font-size: 1.3rem;
  color: $white;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ .form__label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }
`

export const FormLabel = styled.label`
  margin-top: 3px;
  margin-bottom: 3px;
  font-size: 2.2rem;
  color: var(--first-color);
`

import './Header.css'

function Header(props) {
  console.log(props)
  return (
    <header>
      <img src={props.logo} alt='' />
    </header>
  )
}

export default Header

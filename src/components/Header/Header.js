import './Header.css'

function Header(props) {
  console.log(props)
  return (
    <header className='navbar top'>
      <img className='edgemonyLogo' src={props.logo} alt='' />
    </header>
  )
}

export default Header

import './Footer.css'

function Footer(props) {
  const today = new Date()
  const footerDate = today.getFullYear()
  return (
    <footer>
      <span>
        {footerDate} &copy;{props.company}
      </span>
    </footer>
  )
}

export default Footer

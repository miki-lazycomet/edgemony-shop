import './LabelBTNs.css'

function LabelBTNs({ logo, title }) {
  return (
    <LabelBTNs className='LabelBTNs'>
      <img src={logo} alt={title} />
    </LabelBTNs>
  )
}

export default LabelBTNs

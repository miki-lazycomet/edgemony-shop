// import PropTypes from 'prop-types'

import './ErrorComp.css'

function ErrorComp({
  bannerIsOpen,
  closeErrBanner,
  apiError,
  setRetry,
  retry,
}) {
  return (
    <div className={`ErrorComp ${bannerIsOpen ? `bannerIsOpen ` : ''}`}>
      <span>{apiError}</span>
      <button type='button' onClick={() => setRetry(!retry)}>
        Retry
      </button>
      <button
        className='X-Btn'
        type='button'
        onClick={() => closeErrBanner(!bannerIsOpen)}
      >
        ✖
      </button>
    </div>
  )
}

// ErrorComp.propTypes = {
//   logo: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
// }

export default ErrorComp

function Button({ children, isDisabled, type, version, onClick }) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  isDisabled: false,
  type: 'button',
}

export default Button

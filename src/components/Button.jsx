// import "./Button.css"

const Button = ({ children, className = "", variant = "default", size = "default", ...props }) => {
  const baseClasses = "btn"
  const variantClass = variant === "ghost" ? "btn-ghost" : "btn-default"
  const sizeClass = size === "icon" ? "btn-icon" : "btn-default-size"

  const classes = `${baseClasses} ${variantClass} ${sizeClass} ${className}`

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button
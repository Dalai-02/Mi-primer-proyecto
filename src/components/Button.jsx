function Button({
  children,
  className = "",
  type = "button",
  onClick,
  ariaLabel,
  disabled = false
}) {
  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

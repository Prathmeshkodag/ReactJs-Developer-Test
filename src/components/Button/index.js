import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[21px]" };
const variants = {
  fill: {
    black_900: "bg-black-900 text-white-A700",
    indigo_A700: "bg-indigo-A700 text-white-A700",
  },
};
const sizes = { xs: "p-3", sm: "p-[17px]", md: "p-[21px] sm:px-5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "xs",
  variant = "fill",
  color = "indigo_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf(["black_900", "indigo_A700"]),
};

export { Button };

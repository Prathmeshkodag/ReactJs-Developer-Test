import React from "react";

const sizeClasses = {
  txtInterRegular20: "font-inter font-normal",
  txtInterSemiBold15: "font-inter font-semibold",
  txtInterSemiBold48: "font-inter font-semibold",
  txtInterRegular16WhiteA70099: "font-inter font-normal",
  txtInterBold16: "font-bold font-inter",
  txtInterRegular14Gray80090: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterSemiBold18: "font-inter font-semibold",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterSemiBold16WhiteA700: "font-inter font-semibold",
  txtInterRegular12WhiteA70099: "font-inter font-normal",
  txtInterSemiBold53: "font-inter font-semibold",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterRegular16Black900cc: "font-inter font-normal",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };

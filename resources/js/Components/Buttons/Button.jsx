import React from 'react';
import { config } from './_variable';

export const Button = (props) => {
  const { children, className, type, title, variant, ...other } = props;
  return (
    <div>
        <button
          className={
            `btn
            ${variant}
            ${config.spacer}
            ${config.rounded}
            ${className}`
          }
          type={type}
          {...other}
        >
          {
            children || (
              <span>{title}</span>
          )}
        </button>
    </div>
  );
}

Button.defaultProps = {
  variant: "btn-fill"
}

// export default Button;

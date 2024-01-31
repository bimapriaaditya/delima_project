import React from 'react';
import { config } from './_variable';

const Text = (props) => {
  const { children, className, type, title, ...other } = props;
  return (
    <div>
        <button
            className={
              `btn btn-text
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

Text.defaultProps = {

}

export default Text;

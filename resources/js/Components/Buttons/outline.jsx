import React from 'react';
import { config } from './_variable';

const Outline = (props) => {
  const { children, className, type, title, ...other } = props;
  return (
    <div>
        <button
            className={
              `btn btn-outline
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

Outline.defaultProps = {

}

export default Outline

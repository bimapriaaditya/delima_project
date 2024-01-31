import React from 'react';
import { config } from './_variable';

const Fill = (props) => {
  const { children, className, type, title, ...other } = props;
  return (
    <div>
        <button
            className={
              `btn btn-fill
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

Fill.defaultProps = {

}

export default Fill;

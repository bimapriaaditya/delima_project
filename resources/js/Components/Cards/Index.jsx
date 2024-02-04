import React from 'react';
import { config } from "./_variable";
import { Thumbnail, HeadAction, Header } from './Header';
import { Body } from './Body';

const Card = (props) => {
  const { children, CustomSpacer } = props;
  (CustomSpacer)
    ? config.spacer = CustomSpacer
    : "";

  return (
    <>
      <div className="bg-white rounded-lg shadow">
        {children}
      </div>
    </>
  );
}

// Header
Card.HeadAction = HeadAction;
Card.Header = Header;
Card.Thumbnail = Thumbnail;

// Body
Card.Body = Body;

// Footer
// ...

export default Card;

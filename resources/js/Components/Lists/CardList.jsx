import React, { useState } from 'react';

let body_spacer = "px-4 sm:px-8 py-6";
const default_image = "https://v1.tailwindcss.com/img/card-top.jpg"

function Thumbnail(props) {
  return (
    <img
      className={props.Class + " w-full object-cover"}
      style={{ borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }}
      src={props.Src || default_image}
      alt={props.Alt || "Card Image Thumbnail Not Set"}
    />
  )
}

function HeadAction({children}) {
  return (
    <div className='flex flex-wrap gap-4'>
      {children}
    </div>
  )
}

function Header(props) {
  const { Type, Title, Caption, children } = props;
  return (
    <div className={body_spacer + " border-b"}>
      { Type == "default"
        ? (
          <div className='flex w-full'>
            {/* Header Title & Caption */}
            <div className='flex-grow'>
              <h4 className='font-semibold text-xl'>Lorem Ipsum</h4>
              <span className='font-light text-base'>Caption</span>
            </div>
            {/* Header Action */}
            {children}
          </div>
        )
        : children
      }
    </div>
  )
}

function Body({children}) {
  return (
    <div className={body_spacer}>{children}</div>
  )
}

const CardList = (props) => {
  const { children, CustomSpacer } = props;
  (CustomSpacer)
    ? body_spacer = CustomSpacer
    : "";

  return (
    <>
      <div className="bg-white sm:rounded-lg rounded shadow">
        {children}
      </div>
    </>
  );
}

// Header
CardList.HeadAction = HeadAction;
CardList.Header = Header;
CardList.Thumbnail = Thumbnail;

// Body
CardList.Body = Body;

// Footer
// ...

export default CardList;

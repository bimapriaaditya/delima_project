import { config } from "./_variable";

export const Thumbnail = (props) => {
  const { className, src, alt, draggable } = props;
  return (
    <img
      className={className + " w-full object-cover"}
      style={{ borderTopLeftRadius: "inherit", borderTopRightRadius: "inherit" }}
      src={src}
      alt={alt}
      draggable={draggable}
    />
  )
}

Thumbnail.defaultProps = {
  src: config.defaultImage,
  alt: "Card Image Thumbnail Not Set Yet",
  draggable: true
}


export const HeadAction = ({children}) => {
  return (
    <div className='flex flex-wrap gap-4'>
      {children}
    </div>
  )
}

export const Header = (props) => {
  const { Type, title, caption, children } = props;
  return (
    <div className={config.spacer + " border-b"}>
      { Type == "default"
        ? (
          <div className='flex w-full'>
            {/* Header Title & Caption */}
            <div className='flex-grow'>
              <h4 className='font-semibold text-xl'>{title}</h4>
              <span className='font-light text-base'>{caption}</span>
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

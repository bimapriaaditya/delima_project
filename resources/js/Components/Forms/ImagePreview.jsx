import React, {useRef, useState} from 'react';
import { Button } from "@material-tailwind/react";
import { CiImageOn } from "react-icons/ci";

const ImagePreview = (props) => {
  const { title, caption, defaultImage, handleChange } = props;
  const [thumbnail, setThumbnail] = useState(defaultImage);
  const [dataImage, setDataImage] = useState(defaultImage);

  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setThumbnail(file);
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      setDataImage(reader.result);
    });

    reader.readAsDataURL(file);
    handleChange(file);
  }
  const onLabelClick = () => {
    inputFileRef.current.click();
  }

  return (
    <>
      <input
        type="file"
        name='thumbnail'
        id='id_thumbnail'
        accept='image/*'
        hidden={true}
        onChange={onFileChange}
        required={true}
        ref={inputFileRef}
      />
      <div className='flex items-center gap-4'>
        <label
          htmlFor="id_thumbnail"
          className='cursor-pointer flex bg-gray-50 w-64 h-44 border rounded-xl items-center justify-center shadow-sm overflow-hidden'>
          {
            dataImage
            ? <img
                src={dataImage}
                className='w-full h-full object-contain'
                alt='thumbnail'
                loading='lazy'
              />
            : (
              <div className='text-center leading-tight'>
                <span className='text-base block'>Thumbnail Image</span>
                <small className='text-sm font-light'>Image not selected yet</small>
              </div>
            )
          }
        </label>
        <div className='p-2 mb-4'>
          <div className='mb-6'>
            <p className='text-xl font-semibold'>{ title }</p>
            <span>{ caption }</span>
          </div>
          <label htmlFor="id_thumbnail">
            <Button
              variant='outlined'
              color='indigo'
              className='flex gap-2 items-end'
              onClick={onLabelClick}
              type='button'>
              <CiImageOn className='text-base' />
              <span>Upload image</span>
            </Button>
          </label>
        </div>
      </div>
    </>
  );
}

export default ImagePreview;

ImagePreview.defaultProps = {
  title: "Thumbnail Image",
  caption: "Upload your image here...",
  defaultImage: null
}

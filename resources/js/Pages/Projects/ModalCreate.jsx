import React, { useRef } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea
} from "@material-tailwind/react";
import { CiImageOn } from "react-icons/ci";


const ModalCreate = (props) => {
  const { isOpen, handleOpen } = props;
  const inputFileRef = useRef(null);

  const onFileChange = (e) => {
    console.log(e.taget.files)
  }
  const onLabelClick = () => {
    inputFileRef.current.click();
  }


  return (
    <Dialog
      open={isOpen}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader>Create a new project.</DialogHeader>
      <DialogBody>
        <div className='pb-4'>
          <h5 className='block mb-4'>Create your own server project</h5>
          <hr />
        </div>
        <ul>
          <li className='mb-3'>
            <Input
              type='text'
              size='md'
              label='Project Name'
              name='name'
              color='indigo'
              min={4}
              className='focus:ring-0'
            />
          </li>
          <li className='mb-2'>
            <Textarea
              size='md'
              label='Descriptions'
              name='description'
              color='indigo'
              className='focus:ring-0 mb-0'
            />
          </li>
          <li className='mb-2'>
            <input
              type="file"
              name='thumbnail'
              id='id_thumbnail'
              accept='image/*'
              hidden={true}
              onChange={onFileChange}
              ref={inputFileRef}
            />
            <div className='flex items-center gap-4'>
              <label
                htmlFor="id_thumbnail"
                className='cursor-pointer flex bg-gray-50 w-64 h-44 border rounded-xl items-center justify-center shadow-sm'>
                <div className='text-center leading-tight'>
                  <span className='text-base block'>Thumbnail Image</span>
                  <small className='text-sm font-light'>Image not selected yet</small>
                </div>
              </label>
              <div className='p-2 mb-4'>
                <div className='mb-6'>
                  <p className='text-xl font-semibold'>Thumbnail Project</p>
                  <span>Customize your project image</span>
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
                {/* <label htmlFor="id_thumbnail">
                </label> */}
              </div>
            </div>
          </li>
        </ul>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="indigo"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="indigo" onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
      </Dialog>
  );
}

export default ModalCreate;

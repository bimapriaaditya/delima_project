import React, { useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { BsX } from "react-icons/bs";
import { Button } from '@material-tailwind/react';

const SearchPopup = (props) => {
  const { isOpen, handleOpen } = props;

  const handleSubmit = (e) => {
    handleOpen();
    e.preventDefault();
  };


  return (
    <>
      <div>
        {
          (isOpen) && (
            <form className='w-full absolute top-0 left-0 my-2' onSubmit={handleSubmit}>
              <div className='relative'>
                <CiSearch className='absolute top-1/2 start-4 -translate-y-1/2' />
                <input
                  type="text"
                  className='w-full border-gray-200 rounded-full ps-10 text-sm focus:bg-gray-100 py-4 shadow-md pr-28'
                  placeholder='Press enter for submit or search data...'
                />
                <div className='absolute top-1/2 right-4 -translate-y-1/2 flex gap-2'>
                  <Button
                    variant='filled'
                    size='sm'
                    color='indigo'
                    className='rounded-3xl flex gap-1 items-center'
                    onClick={handleOpen}
                  >
                    <BsX className='text-lg' />
                    <span>Close</span>
                  </Button>
                </div>
              </div>
            </form>
          )
        }
      </div>
    </>
  );
}

SearchPopup.defaultProps = {
  isOpen: false
}

export default SearchPopup;

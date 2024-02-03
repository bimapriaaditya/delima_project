import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { BsX } from "react-icons/bs";
import { Button } from '@material-tailwind/react';

const SearchPopup = (props) => {
  const { isOpen, handleOpen, defaultVal, searchSubmitVal } = props;
  const [ searchVal, setSearchVal ] = useState(defaultVal);

  const handleOnChangeSearch = (e) => {
    setSearchVal(e.target.value);
  }

  const handleSubmit = (e) => {
    handleOpen();
    searchSubmitVal && searchSubmitVal(searchVal);
    e.preventDefault();
  };


  return (
    <>
      <div className={`transition-all ${(isOpen) ? 'scale-100 opacity-100 z-50 visible' : 'opacity-0 z-0 scale-95 invisible'} w-full absolute top-0 left-0 my-2`}>
        {
          (isOpen) && (
            <form className='' onSubmit={handleSubmit}>
              <div className='relative'>
                <CiSearch className='absolute top-1/2 start-4 -translate-y-1/2' />
                <input
                  type="text"
                  className='w-full border-gray-200 rounded-full ps-10 text-sm focus:bg-gray-100 py-4 shadow-md pr-28'
                  placeholder='Press enter for submit or search data...'
                  value={searchVal}
                  onChange={handleOnChangeSearch}
                  name='qs'
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
  isOpen: false,
  defaultVal: ""
}

export default SearchPopup;

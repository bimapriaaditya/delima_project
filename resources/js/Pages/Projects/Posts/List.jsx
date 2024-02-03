import React, {useEffect, useState} from 'react';
import { Head } from '@inertiajs/react';
import {
  Button,
  Alert,
  Typography,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip
} from '@material-tailwind/react';
import {
  CiCircleInfo,
  CiSearch,
  CiBoxList,
  CiGrid41
} from 'react-icons/ci';
import { BsSliders } from "react-icons/bs";
import SearchPopup from '@/Components/Forms/SearchPopup';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Posts", href: route('posts.index', [1]) }
]

const isActiveBtn = (status) => {
  if (status) return "bg-indigo-500 text-indigo-50";
}

const ActionHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className='flex gap-3 items-center'>
        <Button onClick={handleOpen} variant='gradient' color='indigo'>Create new Post +</Button>
      </div>
    </>
  )
}


const List = (props) => {
  const { children, data, active_nav } = props;
  const [softFilter, setSoftFilter] = useState('recent');
  const [display, setDisplay] = useState("List");
  const [openSearch, setOpenSearch] = useState(false);
  const [querySearch, setQuerySearch] = useState("")

  const handleOpenSearch = () => setOpenSearch(!openSearch);
  const searchValue = (data) => setQuerySearch(data);

  return (
    <section>
      <div className='mb-4'>
        <h3 className='text-3xl font-semibold'>Post</h3>
        <p>Menampilkan daftar postingan yang dibuat pada project group ini</p>
      </div>
      <Alert icon={<CiCircleInfo className='text-2xl' />} color='indigo' variant='outlined'>
        <Typography className='font-medium'>Daftar konten yang harus dimuat !</Typography>
        <ul className='list-decimal ps-4'>
          <li className='px-2 py-1'>Filter Tabs (Recent, oldest, yourPost) | Search | Display</li>
          <li className='px-2 py-1'>Post (Title, caption, thumbnail, createdBy, createAt, liked, commented)</li>
          <li className='px-2 py-1'>Pagination or <span className='font-semibold'>Infinite scroll</span>?</li>
        </ul>
      </Alert>
      <div className='relative'>
        <div className={`transition-all ${(openSearch) ? 'opacity-0 z-0 scale-95 invisible' : 'scale-100 opacity-100 z-10 visible'}`}>
          <div className="flex gap-4 flex-wrap py-3">
            <div className="flex gap-2 flex-wrap flex-grow border-r border-r-black/10">
              <Button
                variant='outlined'
                color='indigo'
                className={`!capitalize ${isActiveBtn((softFilter == 'recent'))}`}
                onClick={() => setSoftFilter('recent')}
              >
                Recent
              </Button>
              <Button
                variant='outlined'
                color='indigo'
                className={`!capitalize ${isActiveBtn((softFilter == 'oldest'))}`}
                onClick={() => setSoftFilter('oldest')}
              >
                Oldest
              </Button>
              <Button
                variant='outlined'
                color='indigo'
                className={`!capitalize ${isActiveBtn((softFilter == 'mypost'))}`}
                onClick={() => setSoftFilter('mypost')}
              >
                My Post
              </Button>
            </div>
            <div className='flex'>
              <div>
                <Tooltip content="Search Content" className="bg-gray-300 text-gray-700 shadow-sm border">
                  <IconButton variant="text" color='indigo' onClick={() => setOpenSearch(!openSearch)}>
                    <CiSearch className='text-lg' />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <Tooltip content="Filter Data" className="bg-gray-300 text-gray-700 shadow-sm border">
                  <IconButton variant="text" color='indigo'>
                    <BsSliders className='text-lg' />
                  </IconButton>
                </Tooltip>
              </div>
              <Tooltip content="Display View"className="bg-gray-300 text-gray-700 shadow-sm border">
                <Menu placement='bottom-end'>
                  <MenuHandler>
                    <Button
                      variant='text'
                      color='indigo'
                      className='flex gap-1 items-center !capitalize font-medium !px-3 !outline-none'>
                      {
                        (display == "List")
                          ? <CiBoxList className='text-lg' />
                          : <CiGrid41 className='text-lg' />
                      }
                      <span>{display}</span>
                    </Button>
                  </MenuHandler>
                  <MenuList>
                    <MenuItem
                      className={`flex gap-2 items-center ${(display == "List" ? "!bg-indigo-50 !text-indigo-300" : "")}`}
                      onClick={() => setDisplay('List')}
                    >
                      <CiBoxList />
                      <span>List</span>
                    </MenuItem>
                    <MenuItem
                      className={`flex gap-2 items-center ${(display == "Grid" ? "!bg-indigo-50 !text-indigo-300" : "")}`}
                      onClick={() => setDisplay('Grid')}
                    >
                      <CiGrid41 />
                      <span>Grid</span>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Tooltip>
            </div>
          </div>
        </div>
        <SearchPopup
          isOpen={openSearch}
          handleOpen={handleOpenSearch}
          searchSubmitVal={searchValue}
          defaultVal={querySearch}
        />
      </div>
    </section>
  );
}

List.layout = page => (
  <Authenticated
    user={page.props.auth.user}
    header={breadcrumb}
    BreadAction={ActionHeader}
    activeMenu={'project'}
  >
    <Head title='Post | Spongebob Squarepants' />
    <ProjectLayout active_nav={page.props.active_nav}>
      {page}
    </ProjectLayout>
  </Authenticated>
)

export default List;

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

const SearchBundle = (props) => {
  const { children } = props;

  return ("Halo KK KK");
}

const List = (props) => {
  const { children, data, active_nav } = props;
  const [softFilter, setSoftFilter] = useState('recent');
  const [display, setDisplay] = useState("List");
  const [openSearch, setOpenSearch] = useState(false);

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
          <div className='flex gap-2'>
            <div>
              <Tooltip content="Filter & Search Content" className="bg-gray-300 text-gray-700 shadow-sm border">
                <IconButton variant="text" color='indigo'>
                  <CiSearch className='text-xl' />
                </IconButton>
              </Tooltip>
              <div className='bg-white shadow-xl rounded-xl w-full p-3 absolute top-0 left-0 my-2'>
                <div className='relative'>
                  <CiSearch className='absolute top-1/2 start-4 -translate-y-1/2' />
                  <input
                    type="text"
                    className='w-full border-gray-200 rounded-3xl ps-10 text-sm focus:bg-gray-100'
                    placeholder='Search data...'
                  />
                </div>
              </div>
            </div>
            <Tooltip content="Display View"className="bg-gray-300 text-gray-700 shadow-sm border">
              <Menu placement='bottom-end'>
                <MenuHandler>
                  <Button
                    variant='text'
                    color='indigo'
                    className='flex gap-2 items-center !capitalize font-medium !px-3 !outline-none'>
                    {
                      (display == "List")
                        ? <CiBoxList />
                      :  <CiGrid41 />
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
        {/* Filter & Search */}
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

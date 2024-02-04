import React, {useEffect, useState} from 'react';
import { Head, Link } from '@inertiajs/react';
import {
  IconButton,
  Button,
  Alert,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
  Card,
  CardBody,
  Chip
} from '@material-tailwind/react';
import {
  CiCircleInfo,
  CiSearch,
  CiBoxList,
  CiGrid41,
  CiEdit,
  CiTrash
} from 'react-icons/ci';
import { BsEye } from "react-icons/bs";
import { BsSliders } from "react-icons/bs";
import SearchPopup from '@/Components/Forms/SearchPopup';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const tooltipsStyle = "bg-gray-300 text-gray-700 shadow-sm border";

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
  const { data, active_nav } = props;
  const [softFilter, setSoftFilter] = useState('recent');         // Soft filter yg menjadi filter dari tabs button diatas
  const [display, setDisplay] = useState("List");                 // Ubah tampilan view dari list -> grid
  const [openSearch, setOpenSearch] = useState(false);            // status open/close search bar
  const [querySearch, setQuerySearch] = useState("")              // status value dari search bar

  const handleOpenSearch = () => setOpenSearch(!openSearch);      // Handle open search bar
  const searchValue = (data) => setQuerySearch(data);             // Change search bar value

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
      <div className='relative mb-4'>
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
                <Tooltip content="Search Content" className={tooltipsStyle}>
                  <IconButton variant="text" color='indigo' onClick={() => setOpenSearch(!openSearch)}>
                    <CiSearch className='text-lg' />
                  </IconButton>
                </Tooltip>
              </div>
              <div>
                <Tooltip content="Filter Data" className={tooltipsStyle}>
                  <IconButton variant="text" color='indigo'>
                    <BsSliders className='text-lg' />
                  </IconButton>
                </Tooltip>
              </div>
              <Tooltip content="Display View"className={tooltipsStyle}>
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
      <Card>
        <CardBody className='p-3'>
          <div className='table table-auto w-full'>
            <div className="table-header-group bg-white/50 backdrop-blur-md sticky top-0 z-10">
              <div className="table-row">
                <div className='table-cell p-3 border-b w-44'>
                  <span className='font-semibold'>Thumbnail</span>
                </div>
                <div className='table-cell p-3 border-b'>
                  <span className='font-semibold'>Post</span>
                </div>
                <div className='table-cell p-3 border-b'>
                  <span className='font-semibold whitespace-nowrap'>Created By</span>
                </div>
                <div className='table-cell p-3 border-b'>
                  <span className='font-semibold whitespace-nowrap'>Action</span>
                </div>
              </div>
            </div>
            <ul className="table-row-group">
              <li className="table-row rounded transition-all hover:bg-gray-900/5 overflow-hidden">
                <div className="table-cell p-3">
                  <img
                    src="https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="image"
                    loading='lazy'
                    className='w-full h-24 rounded-md object-cover'
                  />
                </div>
                <div className="table-cell p-3 align-middle">
                  <div className='mb-4'>
                    <h5 className='font-semibold text-lg leading-tight line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, officiis pariatur suscipit laudantium reprehenderit veritatis aliquam.</h5>
                    <p className='line-clamp-3 leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum sapiente at commodi quaerat optio cupiditate accusantium beatae. Modi unde alias, error adipisci praesentium eaque neque velit optio quas vero?</p>
                  </div>
                  <div className='flex gap-2 flex-wrap'>
                    <Chip className='!capitalize' value="Liked : 24"  size='sm'color='indigo' variant="gradient"></Chip>
                    <Chip className='!capitalize' value="Coomented : 3" size='sm' color='indigo' variant="outlined"></Chip>
                  </div>
                </div>
                <div className="table-cell p-3 align-top">
                  <div className='leading-none'>
                    <h6 className='text-base font-medium'>John Doe</h6>
                    <small className='whitespace-nowrap'>02/03/2023 12:41</small>
                  </div>
                </div>
                <div className="table-cell p-3 align-top">
                  <div className='flex gap-2'>
                    <Tooltip content="Lihat Detail" className={tooltipsStyle}>
                      <Link href={route('posts.show', [1, 3])}>
                        <IconButton variant='outlined' color='indigo' size='sm'>
                          <BsEye />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip content="Edit Data" className={tooltipsStyle}>
                      <Link href={route('posts.show', [1, 3])}>
                        <IconButton variant='outlined' color='teal' size='sm'>
                          <CiEdit />
                        </IconButton>
                      </Link>
                    </Tooltip>
                    <Tooltip content="Hapus Data" className={tooltipsStyle}>
                      <Link href={route('posts.show', [1, 3])}>
                        <IconButton variant='outlined' color='red' size='sm'>
                          <CiTrash />
                        </IconButton>
                      </Link>
                    </Tooltip>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </CardBody>
      </Card>
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

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
import { BsEye, BsSliders } from "react-icons/bs";
import SearchPopup from '@/Components/Forms/SearchPopup';
import TableGridCard from '@/Components/Cards/Variant/TableGridCard';
// import ModalCreate from './ModalCreate';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';
import ModalCreate from './ModalCreate';

const tooltipsStyle = "bg-gray-300 text-gray-700 shadow-sm border";

const setBreadCrumb = (project) => {
  return(
    [
      { name: project.name },
      { name: "Projects", href: route('projects.index') },
      { name: "Posts", href: route('posts.index', [project.id]) }
    ]
  )
}

const isActiveBtn = (status) => {
  if (status) return "bg-indigo-500 text-indigo-50";
}

const ActionHeader = (props) => {
  const { data } = props;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className='flex gap-3 items-center'>
        <Button onClick={handleOpen} variant='gradient' color='indigo'>Create new Post +</Button>
      </div>
      <ModalCreate isOpen={open} handleOpen={handleOpen} data={data} />
    </>
  )
}

const RenderBadgeOther = (props) => {
  const {liked, commented} = props;
  return (
    <div className='flex gap-2 flex-wrap'>
      <Chip className='!capitalize' value={`Liked : ${liked}`}  size='sm' color='indigo' variant="gradient"></Chip>
      <Chip className='!capitalize' value={`Coomented : ${commented}`} size='sm' color='indigo' variant="outlined"></Chip>
    </div>
  )
}

const RenderCreateBy = (props) => {
  const { created_by, created_at } = props;
  return(
    <div className='leading-none'>
      <h6 className='text-base font-medium'>{ created_by }</h6>
      <small className='whitespace-nowrap'>{ created_at }</small>
    </div>
  )
}

const RenderActionBtn = (id) => {
  return (
    <div className='flex gap-2'>
      <Tooltip content="Lihat Detail" className={tooltipsStyle}>
        <Link href={route('posts.show', [1, id])}>
          <IconButton variant='outlined' color='indigo' size='sm'>
            <BsEye />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip content="Edit Data" className={tooltipsStyle}>
        <Link href={route('posts.show', [1, id])}>
          <IconButton variant='outlined' color='teal' size='sm'>
            <CiEdit />
          </IconButton>
        </Link>
      </Tooltip>
      <Tooltip content="Hapus Data" className={tooltipsStyle}>
        <Link href={route('posts.show', [1, id])}>
          <IconButton variant='outlined' color='red' size='sm'>
            <CiTrash />
          </IconButton>
        </Link>
      </Tooltip>
    </div>
  )
}

const mapTable = (readData) => {
  const data = readData.map((data, index) => (
    [
      {
        type: "thumbnail",
        src: data.thumbnail
      },
      {
        type: "caption",
        title: data.name,
        caption: data.description,
        children: [
          <RenderBadgeOther
            liked={data.liked}
            commented={data.commented}
          />
        ]
      },
      {
        type: "component",
        children: [
          <RenderCreateBy
            created_by={data.created_by.name}
            created_at={data.created_at}
          />
        ]
      },
      {
        type: "component",
        children: [
          <RenderActionBtn id={data.id} />
        ]
      },
    ]
  ));

  return ({
    "head": [
      { title: "Thumbnail", className: 'w-44' },
      { title: "Post" },
      { title: "Created By", className: 'whitespace-nowrap' },
      { title: "Actions", className: 'whitespace-nowrap' },
    ],
    "datas": data
  })
}

const List = (props) => {
  const {
    projectPosts,
    project,
    active_nav,
    auth
  } = props;
  const [softFilter, setSoftFilter] = useState('recent');         // Soft filter yg menjadi filter dari tabs button diatas
  const [display, setDisplay] = useState("List");                 // Ubah tampilan view dari list -> grid
  const [openSearch, setOpenSearch] = useState(false);            // status open/close search bar
  const [querySearch, setQuerySearch] = useState("")              // status value dari search bar

  const handleOpenSearch = () => setOpenSearch(!openSearch);      // Handle open search bar
  const searchValue = () => setQuerySearch("");                   // Change search bar value

  return (
    <section>
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
      <TableGridCard
        data={mapTable(projectPosts)}
        isGrid={display == "Grid"}
      />
    </section>
  );
}

List.layout = page => (
  <Authenticated
    user={page.props.auth.user}
    header={setBreadCrumb(page.props.project)}
    BreadAction={<ActionHeader data={page.props.project} />}
    activeMenu={'project'}
  >
    <Head title='Post | Spongebob Squarepants' />
    <ProjectLayout active_nav={page.props.active_nav}>
      {page}
    </ProjectLayout>
  </Authenticated>
)

export default List;

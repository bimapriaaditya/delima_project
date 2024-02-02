import React, {useEffect, useState} from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@material-tailwind/react';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index', 1) },
  { name: "Members", href: route('users.index', 1) }
]

const ActionHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className='flex gap-3 items-center'>
        <Button onClick={handleOpen} variant='gradient' color='indigo'>Add Member +</Button>
      </div>
    </>
  )
}

const List = (props) => {
  const { children, data, active_nav } = props;
  return (
    <section>
      <h3 className='text-3xl font-semibold'>Members</h3>
      <p>Menampilkan daftar User pada aplikasi ini</p>
      <ul className='list-decimal ps-6'>
        <li className='p-2'>Filter Tabs (All, Admin, User, Owner) | Search </li>
        <li className='p-2'>List (Photo, Name, Email, Role, joinDate)</li>
        <li className='p-2'>Pagination or <span className='font-semibold'>Infinite scroll</span>?</li>
      </ul>
    </section>
  );
}

List.layout = page => (
  <Authenticated
    user={page.props.auth}
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

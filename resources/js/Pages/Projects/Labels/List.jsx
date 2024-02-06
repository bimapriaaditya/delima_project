import React, {useEffect, useState} from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@material-tailwind/react';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index', 1) },
  { name: "Labels", href: route('labels.index', 1) }
]

const ActionHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className='flex gap-3 items-center'>
        <Button onClick={handleOpen} variant='gradient' color='indigo'>Create new Labels +</Button>
      </div>
    </>
  )
}

const List = (props) => {
  const { children, data, active_nav } = props;
  return (
    <section>
      <h3 className='text-3xl font-semibold'>Labels Category</h3>
      <p>Menampilkan daftar Label pada post yang terdapat pada project ini</p>
      <ul className='list-decimal ps-6'>
        <li className='p-2'>Filter Tabs (All, With Point, No Point, CreatedByMe) | Search </li>
        <li className='p-2'>List (Name, color, point, createdBy, createdAt, preview)</li>
      </ul>
    </section>
  );
}

List.layout = page => (
  <Authenticated
    user={page.props.auth.user}
    header={breadcrumb}
    BreadAction={<ActionHeader />}
    activeMenu={'project'}
  >
    <Head title='Post | Spongebob Squarepants' />
    <ProjectLayout active_nav={page.props.active_nav}>
      {page}
    </ProjectLayout>
  </Authenticated>
)

export default List;

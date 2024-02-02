import React, {useEffect, useState} from 'react';
import { Head } from '@inertiajs/react';
import { Button } from '@material-tailwind/react';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Posts", href: route('posts.index', [1]) }
]

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
  return (
    <section>
      <h3 className='text-3xl font-semibold'>Post</h3>
      <p>Menampilkan daftar data konten seperti</p>
      <ul className='list-decimal ps-6'>
        <li className='p-2'>Filter Tabs (Recent, oldest, yourPost) | Search | Display</li>
        <li className='p-2'>Post (Title, caption, thumbnail, createdBy, createAt, liked, commented)</li>
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

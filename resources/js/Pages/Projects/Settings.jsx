import React from 'react';
import { Head } from '@inertiajs/react';

// Layout
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Detail", href: route('projects.show', 1) }
]

const Detail = (props) => {
  const { children, data, active_nav } = props;

  return (
    <section>
      <h3 className='text-3xl font-semibold'>Settings Server</h3>
      <p>Melakukan edit informasi project seperti :</p>
      <ul className='list-decimal ps-6'>
        <li className='p-2'>Nama Project</li>
        <li className='p-2'>Caption</li>
        <li className='p-2'>CreatedBy</li>
        <li className='p-2'>Owner as Admin (Bool [true])</li>
        <li className='p-2'>Is Public (Bool[true])</li>
        <li className='p-2'>Only Admin can Invite (Bool[true])</li>
        <li className='p-2'>Thumbnail Cover Image</li>
      </ul>
    </section>
  );
}

Detail.layout = page => (
  <Authenticated
    user={page.props.auth}
    header={breadcrumb}
    activeMenu={'project'}
  >
    <Head title='Dashboard | Spongebob Squarepants' />
    <ProjectLayout active_nav={page.props.active_nav}>
      {page}
    </ProjectLayout>
  </Authenticated>
)

export default Detail;

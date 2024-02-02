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
      <h3 className='text-3xl font-semibold'>Dashboard Project</h3>
      <p>Menampilkan daftar data konten seperti</p>
      <ul className='list-decimal ps-6'>
        <li className='p-2'>Jumlah project (Opened / Closed)</li>
        <li className='p-2'>Jumlah Issue (Opened / Closed)</li>
        <li className='p-2'>Jumlah Peserta</li>
        <li className='p-2'>Top Category</li>
        <li className='p-2'>Top 3 Recent Issues</li>
        <li className='p-2'>Top 3 Recent Post</li>
        <li className='p-2'>This Server was created by</li>
      </ul>
    </section>
  );
}

Detail.layout = page => (
  <Authenticated
    user={page.props.auth.user}
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

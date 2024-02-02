import React from 'react';
import { Head } from '@inertiajs/react';

// Layouts
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Detail" }
]

const List = (props) => {
  const { children, data, active_nav } = props;
  return (
    <div>
      <span>Lorem Ipsum Dolor</span>
    </div>
  );
}

List.layout = page => (
  <Authenticated
    user={page.props.auth}
    header={breadcrumb}
    activeMenu={'project'}
  >
    <Head title='Post | Spongebob Squarepants' />
    <ProjectLayout active_nav={page.props.active_nav}>
      {page}
    </ProjectLayout>
  </Authenticated>
)

export default List;

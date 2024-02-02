import React from 'react';
import { Head } from '@inertiajs/react';

// Layout
import Authenticated from '@/Layouts/AuthenticatedLayout';
import ProjectLayout from '@/Layouts/ProjectLayout';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Detail" }
]

const Detail = (props) => {
  const { children, data, active_nav } = props;

  return (
    <section>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi non omnis, cumque tempore voluptatem ex autem! Provident, temporibus voluptatibus at adipisci neque dolorum fugit ea labore aliquid autem. Vitae, tenetur.
      </p>
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

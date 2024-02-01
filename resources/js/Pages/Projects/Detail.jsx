import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Detail" }
]

const Detail = (props) => {
  const {data} = props;
  return (
    <section className="spacer">
      Detail App
    </section>
  );
}

Detail.layout = page => (
  <Authenticated
    user={page.props.auth}
    header={breadcrumb}
    activeMenu={'project'}
  >
    <Head title='Spongebob Squarepants' />
    {page}
  </Authenticated>
)

export default Detail;

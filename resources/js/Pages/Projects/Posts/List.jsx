import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Detail from '../Detail';

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
    <Detail
      active_nav={page.props.active_nav}
    >
      {page}
    </Detail>
  </Authenticated>
)

export default List;

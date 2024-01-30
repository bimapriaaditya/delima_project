import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardList from '@/Components/Lists/CardList';

const breadcrumb = [
  { name: "Project", href: route('dashboard') },
  { name: "List" }
]

const List = ({ auth, data }) => {

  console.log(data)

  return (
    <>
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          {
            data.map()
          }
        </div>
      </div>
    </>
  );
}

List.layout = page => (
  <AuthenticatedLayout
    user={page.props.auth.user}
    header={breadcrumb}>
    <Head title="Project List" />
    {page}
  </AuthenticatedLayout>
)

export default List;

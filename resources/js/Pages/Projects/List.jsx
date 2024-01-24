import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const breadcrumb = [
  { name: "Project", href: route('dashboard') },
  { name: "List" }
]

const List = ({auth, data}) => {

  return (
    <>
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
          <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
            Lorem Ipsum dolor
          </div>
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
      { page }
  </AuthenticatedLayout>
)

export default List;

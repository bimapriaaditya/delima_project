import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

const breadcrumb = [
  { name: "Dashboard", href: route('dashboard') }
]

export default function Dashboard({ auth }) {
    return (
      <>
        <div className="py-12">
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
              <div className="p-6 text-gray-900">You're logged in!</div>
            </div>
          </div>
        </div>
      </>
    );
}

Dashboard.layout = page => (
  <AuthenticatedLayout
    user={page.props.auth.user}
    header={breadcrumb}>
      <Head title="Dashboard" />
  </AuthenticatedLayout>
)

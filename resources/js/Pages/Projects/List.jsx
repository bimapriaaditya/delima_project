import React from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CardList from '@/Components/Lists/CardList';

const breadcrumb = [
  { name: "Project", href: route('dashboard') },
  { name: "List" }
]

const List = ({auth, data}) => {

  return (
    <>
    <section className="spacer">
      <div className='grid grid-cols-3 gap-4'>
        <CardList CustomSpacer="p-4">
          <CardList.Thumbnail
            Class="h-64"
          />
          <CardList.Body>
            <div className='mb-4'>
              <h4 className='font-bold text-2xl mb-2 text-slate-700'>Agus Lembur bu?</h4>
              <p className='line-clamp-3 text-gray-700 text-base'>Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad impedit nam recusandae aperiam laborum, molestias saepe quo similique numquam hic architecto repudiandae! Vitae repellat eum voluptatem similique maxime accusamus.</p>
            </div>
            <div className='flex'>
              <div class="flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" src="https://v1.tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" />
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p class="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </CardList.Body>
        </CardList>
      </div>
    </section>
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

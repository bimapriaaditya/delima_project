import React from 'react';
import Authenticated from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Sidenav from '@/Components/Navigations/Sidenav';
import { CiUser, CiShoppingTag } from "react-icons/ci";

const breadcrumb = [
  { name: "Spongebob Squarepants" },
  { name: "Projects", href: route('projects.index') },
  { name: "Detail" }
]

const Detail = (props) => {
  const {data} = props;

  const sidemenu = [
    {
      name: "Dashboard",
      url: "#"
    },
    {
      name: "Issues",
      type: "chip",
      value: "12",
      url: "#"
    },
    {
      name: "Post",
      type: "chip",
      value: "25",
      url: "#"
    },
    {
      name: "Members",
      type: "label",
      icon: <CiUser />,
      value: "2",
      url: "#"
    },
    {
      name: "Category",
      type: "label",
      icon: <CiShoppingTag />,
      value: "5",
      url: "#"
    },
    {
      name: "Settings",
      url: "#"
    }
  ]

  return (
    <section className="spacer">
      <div className="flex gap-8">
        <Sidenav title="Menus" data={sidemenu} />
        <div className='flex-grow'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab dignissimos, explicabo cumque similique ipsum, adipisci nesciunt enim magnam iusto ratione libero illum saepe iste harum at id a, debitis sapiente.
        </div>
      </div>
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

import {React, useState} from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import ProjectCard from '@/Components/Cards/Variant/ProjectCard';
import { BtnFill, BtnOutline, BtnText, Button } from '@/Components/Buttons/index';
import ModalCreate from './ModalCreate';


const breadcrumb = [
  { name: "Project", href: route('dashboard') },
  { name: "List" }
]

const DataList = [
  {
    title: "Agus Lembur bu?",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad impedit nam recusandae aperiam laborum, molestias saepe quo similique numquam hic architecto repudiandae! Vitae repellat eum voluptatem similique maxime accusamus.",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1619795816735-0b7c5a06ac4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D",
    createdBy: {
      name: "Bima Pria",
      id: 2,
      created_at: "1 Januari 2024"
    },
    userList: [
      { Alt: "Bima Prioa", Href: "#", Src: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1706617724~exp=1706618324~hmac=bc82a5f3fe9aeb3326f7217a68f4ee0da26b9d2cf7db71fbeb4e176732b87c9e" },
      { Alt: "Bima Prioa", Href: "#", Src: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?t=st=1706619796~exp=1706620396~hmac=ca68b5f70ba3bffcc46fe1d5c34329cf1db649bba4027838681b619e952c52ab" },
      { Alt: "Bima Prioa", Href: "#", Src: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg" },
      { Alt: "Bima Prioa", Href: "#", Src: "https://img.freepik.com/free-psd/3d-illustration-person_23-2149436179.jpg?t=st=1706619819~exp=1706620419~hmac=89e236c2aaa20c97af79a361fb1fffc67936392fc4e114117edc9681d161bd0f" },
    ]
  },
  {
    title: "Enggak gus kamu tidur aja deh",
    caption: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A ad impedit nam recusandae aperiam laborum, molestias saepe quo similique numquam hic architecto repudiandae! Vitae repellat eum voluptatem similique maxime accusamus.",
    link: "#",
    thumbnail: "https://images.unsplash.com/photo-1619441207978-3d326c46e2c9?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdBy: {
      name: "Agus Winarto",
      id: 2,
      image: "https://img.freepik.com/free-photo/medium-shot-smiley-man-portrait_23-2149455852.jpg?size=626&ext=jpg&ga=GA1.1.615240867.1706617714&semt=ais",
      created_at: "28 Januari 2024"
    },
    userList: [
      { Alt: "Bima Prioa", Href: "#", Src: "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436180.jpg?w=740&t=st=1706617724~exp=1706618324~hmac=bc82a5f3fe9aeb3326f7217a68f4ee0da26b9d2cf7db71fbeb4e176732b87c9e" },
      { Alt: "Bima Prioa", Href: "#", Src: "https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436190.jpg?t=st=1706619796~exp=1706620396~hmac=ca68b5f70ba3bffcc46fe1d5c34329cf1db649bba4027838681b619e952c52ab" },
    ]
  }
]

const actionHeader = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className='flex gap-3 items-center'>
        <Button onClick={handleOpen}>Create New Project +</Button>
      </div>

      <ModalCreate isOpen={open} handleOpen={handleOpen} />
    </>
  )
}

const List = ({ auth, data }) => {

  return (
    <>
    <section className="spacer">
      <div className="flex items-center gap-4 py-3 border-b">
        <Button>Button Here</Button>
        <BtnFill>All</BtnFill>
        <BtnOutline>Opened</BtnOutline>
        <BtnText>Archived</BtnText>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
        {
          DataList?.map((item, index) => (
            <ProjectCard key={index} {...item} />
          ))
        }
        </div>
    </section>
    </>
  );
}

List.layout = page => (
  <AuthenticatedLayout
    user={page.props.auth.user}
    header={breadcrumb}
    actionHeader={actionHeader}>
    <Head title="Project List" />
    {page}
  </AuthenticatedLayout>
)

export default List;

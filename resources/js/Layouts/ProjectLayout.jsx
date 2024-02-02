import React, { useEffect, useState } from 'react';
import Sidenav from '@/Components/Navigations/Sidenav';
import { CiUser, CiShoppingTag } from "react-icons/ci";

const ProjectLayout = (props) => {
  const { children, data, active_nav } = props;
  const [time, setTime] = useState(0);

  const sidemenu = [
    {
      name: "Dashboard",
      url: route('projects.show', 1),
      isActive: (active_nav == 'side-dashborad')
    },
    {
      name: "Issues",
      type: "chip",
      value: "12",
      url: "#",
      isActive: (active_nav == 'side-issues')
    },
    {
      name: "Post",
      type: "chip",
      value: "25",
      url: route('post.index', 1),
      isActive: (active_nav == 'side-post')
    },
    {
      name: "Members",
      type: "label",
      icon: <CiUser />,
      value: "2",
      url: "#",
      isActive: (active_nav == 'side-member')
    },
    {
      name: "Category",
      type: "label",
      icon: <CiShoppingTag />,
      value: "5",
      url: "#",
      isActive: (active_nav == 'side-category')
    },
    {
      name: "Settings",
      url: "#",
      isActive: (active_nav == 'side-setting')
    }
  ]

  useEffect(() => {
    setInterval(() => {
      setTime((time) => time + 1)
    }, 1000)
  }, [])

  return (
    <section className="spacer">
      <h1>{time}</h1>
      <div className="flex gap-8">
        <Sidenav title="Menus" data={sidemenu} />
        <div className='flex-grow'>
          { children }
        </div>
      </div>
    </section>
  );
}

export default ProjectLayout;

import React from 'react';
import Sidenav from '@/Components/Navigations/Sidenav';
import { CiUser, CiShoppingTag } from "react-icons/ci";

const ProjectLayout = (props) => {
  const { children, data, active_nav } = props;

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
      url: route('posts.index', 1),
      isActive: (active_nav == 'side-issues')
    },
    {
      name: "Post",
      type: "chip",
      value: "25",
      url: route('posts.index', 1),
      isActive: (active_nav == 'side-post')
    },
    {
      name: "Members",
      type: "label",
      icon: <CiUser />,
      value: "2",
      url: route('users.index', 1),
      isActive: (active_nav == 'side-members')
    },
    {
      name: "Label Category",
      type: "label",
      icon: <CiShoppingTag />,
      value: "5",
      url: route('labels.index', 1),
      isActive: (active_nav == 'side-labels')
    },
    {
      name: "Settings",
      url: route('projects.edit', 1),
      isActive: (active_nav == 'side-settings')
    }
  ]

  return (
    <section className="spacer">
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

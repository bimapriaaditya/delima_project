import React from 'react';
import Sidenav from '@/Components/Navigations/Sidenav';
import { CiUser, CiShoppingTag } from "react-icons/ci";
import { useMediaQuery } from "@uidotdev/usehooks";

const ProjectLayout = (props) => {
  const { children, data, active_nav } = props;
  const isSmallDevice = useMediaQuery(
    "only screen and (max-width : 768px)"
  );
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );

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
      <div className={
        (isSmallDevice || isMediumDevice)
        ? "block "
        : "flex "
        + "xl:gap-8 lg:gap-6 gap-4"
      }>
        <Sidenav
          title="Menus"
          data={sidemenu}
          isSmallDevice={isSmallDevice}
          isMediumDevice={isMediumDevice}
          isLargeDevice={isLargeDevice}
          isExtraLargeDevice={isExtraLargeDevice}
        />
        <div className='flex-grow'>
          { children }
        </div>
      </div>
    </section>
  );
}

export default ProjectLayout;

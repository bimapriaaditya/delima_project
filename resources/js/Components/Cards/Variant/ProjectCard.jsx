import React from 'react';
import Card from '@/Components/Cards/Index';
import ImageStack from '@/Components/ImageStack';
import UserThumb from '@/Components/UserThumb';
import { Link } from '@inertiajs/react';

const ProjectCard = (props) => {
  const {
    title, caption, thumbnail, link, createdBy, userList
  } = props;
  return (
    <Card CustomSpacer="p-4">
      <Link href={link} style={{ borderRadius: "inherit" }}>
        <Card.Thumbnail
          src={thumbnail}
          alt={`Banner image of project ${title.substring(0, 50)}`}
          draggable={false}
          className="h-64"
        />
      </Link>
      <Card.Body>
        <div className='mb-4'>
          <Link href={link}>
            <h4 className='font-bold text-xl mb-2 text-slate-700'>{title}</h4>
          </Link>
          <p className='line-clamp-3 text-gray-700 text-base'>{caption}</p>
        </div>
        <div className='flex items-center'>
          <div className='flex-grow'>
            <UserThumb
              alt={createdBy.name + `_${createdBy.id}`}
              title={createdBy.name}
              image={createdBy.image}
              caption={createdBy.created_at}
            />
          </div>
          <div>
            <ImageStack data={userList} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

ProjectCard.defaultProps = {
  title: null,
  caption: null,
  thumbnail: undefined,
  link: "#",
  createdBy: {
    name: null,
    id: null,
    image: null,
    created_at: null
  },
  userList: []
}

export default ProjectCard;

import React from 'react';

const RenderComponent = (props) => {
  const { data } = props;
  return (
    <>
      {
        Array.from(data)?.map((child, index) => (
          <React.Fragment key={index}>
            {child}
          </React.Fragment>
        ))
      }
    </>
  )
}

const RenderCell = (props) => {
  const { data, index } = props;

  switch (data.type) {
    case "thumbnail": {
      return (
        <img
          src={data.src}
          alt={`${data.name}_${index}`}
          loading='lazy'
          className='w-full h-24 rounded-md object-cover'
        />
      )
    }
    case "caption": {
      return(
        <>
          <div className='leading-none mb-4'>
            <h5 className='font-semibold text-lg leading-tight line-clamp-1'>{data.title}</h5>
            <p className='line-clamp-3 leading-tight'>{data.caption}</p>
          </div>
          <RenderComponent data={data.children} />
        </>
      )
    }
    case "component": {
      return <RenderComponent data={data.children} />
    }
    default: {
      return (
        <div className='leading-none'>
          <p className='line-clamp-3 leading-tight'>{data.title}</p>
        </div>
      )
    }
  }
}

const TableGridCard = (props) => {
  const { data } = props;

  return (
    <div className='table table-auto w-full'>
      <div className="table-header-group bg-white/50 backdrop-blur-md sticky top-0 z-10">
        <div className="table-row">
          {
            data.head.map((item, index) => (
              <div className={`table-cell p-3 align-top border-b ${item.className || ''}`} key={index}>
                <span className='font-semibold'>{item.title}</span>
              </div>
            ))
          }
        </div>
      </div>
      <ul className="table-row-group">
        {
          data.datas.map((item, index) => (
            <li className="table-row rounded transition-all hover:bg-gray-900/5 overflow-hidden" key={index}>
              {
                item.map((cell, cell_index) => (
                  <div className={`table-cell p-3 align-top ${cell.className || ''}`} key={cell_index}>
                    <RenderCell data={cell} index={index} />
                  </div>
                ))
              }
            </li>
          ))
        }
        {/* <li className="table-row rounded transition-all hover:bg-gray-900/5 overflow-hidden">
          <div className="table-cell p-3">
            <img
              src="https://images.pexels.com/photos/11107635/pexels-photo-11107635.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="image"
              loading='lazy'
              className='w-full h-24 rounded-md object-cover'
            />
          </div>
          <div className="table-cell p-3 align-middle">
            <div className='leading-none mb-4'>
              <h5 className='font-semibold text-lg leading-tight line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, officiis pariatur suscipit laudantium reprehenderit veritatis aliquam.</h5>
              <p className='line-clamp-3 leading-tight'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae laborum sapiente at commodi quaerat optio cupiditate accusantium beatae. Modi unde alias, error adipisci praesentium eaque neque velit optio quas vero?</p>
            </div>
            <div className='flex gap-2 flex-wrap'>
              <Chip className='!capitalize' value="Liked : 24"  size='sm'color='indigo' variant="gradient"></Chip>
              <Chip className='!capitalize' value="Coomented : 3" size='sm' color='indigo' variant="outlined"></Chip>
            </div>
          </div>
          <div className="table-cell p-3 align-top">
            <div className='leading-none mb-4'>
              <h6 className='text-base font-medium'>John Doe</h6>
              <small className='whitespace-nowrap'>02/03/2023 12:41</small>
            </div>
          </div>
          <div className="table-cell p-3 align-top">
            <div className='flex gap-2'>
              <Tooltip content="Lihat Detail" className={tooltipsStyle}>
                <Link href={route('posts.show', [1, 3])}>
                  <IconButton variant='outlined' color='indigo' size='sm'>
                    <BsEye />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip content="Edit Data" className={tooltipsStyle}>
                <Link href={route('posts.show', [1, 3])}>
                  <IconButton variant='outlined' color='teal' size='sm'>
                    <CiEdit />
                  </IconButton>
                </Link>
              </Tooltip>
              <Tooltip content="Hapus Data" className={tooltipsStyle}>
                <Link href={route('posts.show', [1, 2])}>
                  <IconButton variant='outlined' color='red' size='sm'>
                    <CiTrash />
                  </IconButton>
                </Link>
              </Tooltip>
            </div>
          </div>
        </li> */}
      </ul>
    </div>
  );
}

export default TableGridCard;

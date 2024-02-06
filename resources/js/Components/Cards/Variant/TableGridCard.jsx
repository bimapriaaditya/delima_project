import React from 'react';
import { useMediaQuery } from "@uidotdev/usehooks";
import {
  Card,
  CardBody,
} from '@material-tailwind/react';

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
  const {
    data,
    index,
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
    isExtraLargeDevice
  } = props;

  switch (data.type) {
    case "thumbnail": {
      return (
        <img
          src={data.src}
          alt={`${data.name}_${index}`}
          loading='lazy'
          className={`w-full rounded-md object-cover ${(isSmallDevice) ? 'h-64' : 'h-24'}`}
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
  const { data, isGrid } = props;
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

  const loopCell = (item) => {
    return(
      item.map((cell, cell_index) => (
        <div
          className={`${(isSmallDevice || isGrid) ? 'block' : 'table-cell p-2'} align-top ${cell.className || ''}`} key={cell_index}
        >
          <RenderCell
            data={cell}
            index={cell_index}
            isGrid={isGrid}
            isSmallDevice={isSmallDevice || isGrid}
            isMediumDevice={isMediumDevice}
            isLargeDevice={isLargeDevice}
            isExtraLargeDevice={isExtraLargeDevice}
          />
        </div>
      ))
    );
}


  return (
    <Card className={(isSmallDevice || isGrid) ? 'bg-transparent border-0 shadow-none' : ''}>
      <CardBody className={(isSmallDevice || isGrid) ? 'p-0' : 'p-3'}>
        <div className={(isSmallDevice || isGrid) ? '' : 'table table-auto w-full'}>
          <div className={
            (isSmallDevice || isGrid)
              ? `hidden`
              : `table-header-group bg-white/50 backdrop-blur-md sticky top-0 z-10`
            }>
            <div className="table-row">
              {
                data.head.map((item, index) => (
                  <div className={`table-cell p-2 align-top border-b ${item.className || ''}`} key={index}>
                    <span className='font-semibold'>{item.title}</span>
                  </div>
                ))
              }
            </div>
          </div>
          <ul className={(isSmallDevice || isGrid) ? 'grid md:grid-cols-2 xl:grid-cols-3 gap-4' : 'table-row-group'}>
            {
              data.datas.map((item, index) => (
                <li
                  className={`rounded transition-all overflow-hidden ${(isSmallDevice || isGrid) ? 'flex flex-col gap-3' : 'table-row hover:bg-gray-900/5'}`}
                  key={index}
                >
                  {
                    (isMediumDevice || isGrid)
                    ?
                      <Card>
                        <CardBody className="p-3 flex flex-col gap-3">
                          { loopCell(item) }
                        </CardBody>
                      </Card>
                    : loopCell(item)
                  }
                </li>
              ))
            }
          </ul>
        </div>
      </CardBody>
    </Card>
  );
}

export default TableGridCard;

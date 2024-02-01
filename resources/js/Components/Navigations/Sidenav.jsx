import React from 'react';
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { CiUser, CiShoppingTag } from "react-icons/ci";

const Sidenav = (props) => {
  const { data, title } = props;
  return (
    <nav>
      <Card className="w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="p-3 border-b">
        <Typography variant="h5" color="blue-gray">
          <p className='flex-grow'>{ title }</p>
        </Typography>
      </div>
      <List className='px-0'>
        {
          data?.map((item, index) => (
            <ListItem key={index}>
              <p className='flex-grow'>{item.name}</p>
              {
                (item.type == "chip")
                ? <ListItemSuffix>
                    <Chip value={item.value} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                  </ListItemSuffix>
                : (item.type == "label") ?
                  <div className='flex p-2 gap-1'>
                    {
                      (item.icon) && item.icon
                    }
                    <span className='text-xs'>{item.value}</span>
                  </div>
                : <span>&nbsp;</span>
              }

            </ListItem>
          ))
        }
      </List>
    </Card>
    </nav>
  );
}

export default Sidenav;

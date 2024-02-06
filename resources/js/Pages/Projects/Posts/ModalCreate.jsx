import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
  Textarea,
  Select,
  Option
} from "@material-tailwind/react";
import { CiImageOn } from "react-icons/ci";
import ImagePreview from '@/Components/Forms/ImagePreview';

const ModalCreate = (props) => {
  const { isOpen, handleOpen, data } = props;
  const [thumbnail, setThumbnail] = useState(data.thumbnail);
  const [name, setName] = useState(data.name);
  const [desc, setDesc] = useState(data.description);
  const [postType, setPostType] = useState(data.post_type);
  const [prevPost, setPrevPost] = useState(data.prev_post);
  const [nextPost, setNextPost] = useState(data.next_post);

  return (
    <div>
      <Dialog
      open={isOpen}
      handler={handleOpen}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0.9, y: -100 },
      }}
    >
      <DialogHeader className='!block leading-none'>
        <p className='block'>Create a new post.</p>
        <small className='text-base font-light opacity-50 italic'>at {data.name} Project</small>
      </DialogHeader>
      <DialogBody>
        <ul>
          <li className='mb-3'>
            <Input
              type='text'
              size='md'
              label='Title Post'
              name='name'
              color='indigo'
              min={4}
              className='focus:ring-0'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </li>
          <li className='mb-2'>
            <Textarea
              size='md'
              label='Descriptions'
              name='description'
              color='indigo'
              className='focus:ring-0 mb-0'
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required={true}
            />
          </li>
          <li className='mb-3'>
            <Select
              label='Post Type'
              color='indigo'
              name='post_type'
              className='focus:ring-0 mb-0'
              value={postType}
              onChange={(e) => setPostType(e)}
              required={true}
            >
              <Option value='Post' index={1}>Post</Option>
              <Option value='Issues' index={2}>Issues</Option>
            </Select>
          </li>
          <li className='mb-3 flex gap-4'>
            <Select
              label='Previous Post'
              color='indigo'
              name='prev_post'
              className='focus:ring-0 mb-0 flex-grow'
              value={prevPost}
              onChange={(e) => setPrevPost(e)}
              required={true}
            >
              <Option name="Post 001" index={1}>Post 001</Option>
              <Option name="Post 002" index={2}>Post 002</Option>
              <Option name="Post 003" index={3}>Post 003</Option>
              <Option name="Post 004" index={4}>Post 004</Option>
            </Select>
            <Select
              label='Next Post'
              color='indigo'
              name='next_post'
              className='focus:ring-0 mb-0 flex-grow'
              value={nextPost}
              onChange={(e) => setNextPost(e)}
              required={true}
            >
              <Option name="Post 001" index={1}>Post 001</Option>
              <Option name="Post 002" index={2}>Post 002</Option>
              <Option name="Post 003" index={3}>Post 003</Option>
              <Option name="Post 004" index={4}>Post 004</Option>
            </Select>
          </li>
          <li>
            <ImagePreview
              title="Post Thumbnail"
              caption="Click for upload your post thumbnail image"
              defaultImage={thumbnail}
              handleChange={(val) => setThumbnail(val)}
            />
          </li>
        </ul>
      </DialogBody>
      <DialogFooter>
        <Button
          variant="text"
          color="indigo"
          onClick={handleOpen}
          className="mr-1"
        >
          <span>Cancel</span>
        </Button>
        <Button variant="gradient" color="indigo" onClick={handleOpen}>
          <span>Create one</span>
        </Button>
      </DialogFooter>
      </Dialog>
    </div>
  );
}

export default ModalCreate;

ModalCreate.defaultProps = {
  data: {
    thumbnail: null,
    name: "",
    description: "",
    post_type: "",
    prev_post: "",
    next_post: ""
  }
}

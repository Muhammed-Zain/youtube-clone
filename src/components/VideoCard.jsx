import React from 'react'
import { abbreviateNumber } from 'js-abbreviation-number';
import { Link } from 'react-router-dom';
import { BsFillCheckCirlceFill } from 'react-icons/bs';


const VideoCard = ({video}) => {
  return (
    <Link to={`/video/${video?.postId}`}>
      <div className='flex flex-col mb-8'>
        <div className='relative h-48 md:h-50 rounded-xl overflow-hidden'>
          <img classname="h-full w-full object-cover"  src={video?.submission?.thumbnail} alt="thumbnail"/>
        </div>
        <div className='flex text-white mt-3'>
          <div className='flex items-start'>
            <div className='flex h-9 w-9 rounded-full overflow-hidden'>
              <img src={video?.creator?.pic} className='h-full w-full object-cover'/>
            </div>
          </div>

          <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-sm font-bold line-clamp-2'>
              {video.submission.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white/[0.7] flex items-center'>
              {video?.creator?.name}
            </span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default VideoCard;
import React, { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { abbreviateNumber } from 'js-abbreviation-number';

import { fetchData } from '../utils/api';
import { Context } from '../context/contextAPI';

const VideoDetails = () => {
  const [video, setVideo] = useState({});
  const {id} = useParams();
  const { setLoading, page } = useContext(Context);

  useEffect(() => {
    document.getElementById('root').classList.add('custom-h');
    fetchVideoDetails();
  }, [id])
  
  const fetchVideoDetails =  async () => {
    setLoading(true);
    await fetchData(`page=${page}`).then(({ data }) => {
      data.posts.map( post => {
        if(post.postId === id) {
          setVideo(post);
          setLoading(false);
        }
      });
    })
  }

  return (
    <div className='flex justify-center md:pt-20 pt-5 flex-row md:h-[1290px] h-200px bg-black'>
      <div className='w-full max-w-[1500px] flex flex-col lg:flex-row md:h-[1000px] h-[684px] '>
        <div className='flex flex-col lg:w-[calc(100%-350px)] xl:w-[calc(100%-400px)] px-4 py-3 lg:py-6 overflow-y-auto'>
          <div className='h-[200px] md:h-[400px] lg:h-[400px] xl:h-[550px] ml-[-16px] lg:ml-0 mr-[-16px] lg-mr-0'>
            <ReactPlayer 
              url={video?.submission?.mediaUrl}
              controls
              width="100%"
              height="100%"
              style={{backgroundColor: '#000000'}}
            />  
          </div>

          <div className='text-white font-bold text-md md:text-xl mt-4 md:ml-4 line-clamp-2'>
            {video?.submission?.title}
          </div> 

          <div className='flex justify-between flex-col md:flex-row mt-4 md:ml-4 '>
            <div className='flex'>
              <div className='flex items-start'>
                <div className='flex h-11 w-11 rounded-full overflow-hidden'>
                  <img src={video?.creator?.pic} alt="avatar" className='h-full w-full object-cover'/>
                </div>
              </div>

              <div className='flex flex-col ml-3'>
                <div className='text-white text-md font-semibold flex items-center'> 
                  {video?.creator?.name}
                </div>
              </div>

              <div className='flex text-white mt-4 md:mt-0'>
                <div className='flex items-center justify-center h-11 px-6 rounded-3xl bg-white/[0.15] md:ml-[780px] ml-[125px]'>
                  <span>{`${abbreviateNumber(video?.reaction?.count, 2)} Views`}</span>
                </div>    
              </div>


            </div>  
          </div> 
          <div className=' p-4 text-white mt-6 bg-white/[0.15] rounded-3xl' >
            <div className='font-bold'>
              Description:  
            </div>
            <br />
            {video?.submission?.description}

          </div>
        </div>
      </div>
      {console.log(video?.submission?.mediaUrl)}
    </div>
  )
};

export default VideoDetails;
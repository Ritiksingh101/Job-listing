import React from 'react'

function PostAJob() {
  return (
    <div>
     <div className='h-[30vh] w-full bg-[#FCF4EE] flex items-center justify-center flex-col gap-2'>
    
        <h1 className='text-[28px] font-bold'>Post A Jobs</h1>     
        <div className='h-[1px] w-[10%] bg-gray-200'></div>
        <label className='text-[12px] space-x-2'>  <span className=''> Home</span> <i class="fa fa-briefcase text-[#28A7AC]" aria-hidden="true"></i> <span className='font-semibold text-[#28A7AC] cursor-pointer'>Post A Jobs</span>
</label>

      </div>
    </div>
  )
}

export default PostAJob

import React from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <video src="https://assets-global.website-files.com/5ff65c460ce39f5ec5681c6a/6559085de7571c0eedbf25af_personal_ai_nyc_final_091023 (1080p)_record-transcode.mp4" className='w-full z-[-1] brightness-50 fixed h-full object-cover' loop autoPlay muted></video>
      <main className='relative'>
        <section className='h-screen w-full relative flex items-center z-10'>
          <div className='text-white flex flex-col gap-3 ml-64'>
            <h1 className='font-bold text-[4vw]'>Always Be There</h1>
            <p className='w-3/4 text-2xl font-light'>Private models trained on personlized data of the business.Unique model to each individual.</p>
            <div className='flex gap-3'>
            <Button size='lg' className='rounded-full hover:bg-zinc-400 bg-transparent px-20 py-4 border-2'>Btn-1</Button>
            <Button size='lg' className='bg-[#6566FF] hover:bg-[#4c4cd7] px-20 py-4 border-2 rounded-full'>Btn-1</Button>
          </div>
          </div>
        </section>
        <section className='z-10 min-h-screen w-full bg-gradient-to-r from-violet-500 to-fuchsia-500'>
          <div className='flex gap-8 container mx-auto  items-center justify-between text-white'>
            <div className='mt-32 flex flex-col gap-4'>
              <h1 className='text-4xl font-bold'>The Future of AI is Yours</h1>
              <p className='w-3/4 text-2xl'>A unique model that represents who truly you are</p>
              <Button className='bg-white text-black w-1/2 rounded-full hover:bg-[#8c41e2] border-2 border-black hover:border-gray-200' size='lg'>
                Get Started
              </Button>
            </div>
            <div className='mt-32 relative mr-32'>
              <Image src="/assets/img-1.png" width={500} height={200} className='' alt='img1'/>
              <Image src="/assets/img-2.png" width={400} height={200} className='-top-[-296px] left-[302px]  absolute' alt='img1'/>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default page
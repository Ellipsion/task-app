import Image from 'next/image';

const Profile = () => {
    return (
        <div className='group hover:bg-slate-900 hover:border-gray-800 flex gap-4 items-center m-6 py-4 px-4 rounded-2xl cursor-pointer'>
            <div className='overflow-hidden rounded-full w-[70px] h-[70px]'>
                <Image className='group-hover:scale-110 transition duration-200 ease-in' src="/dp.webp" width={70} height={70}></Image>
            </div>
            <h1 className='text-base font-medium flex flex-col leading-4'>
                <span>Ashish</span>
                <span>Kumawat</span>
            </h1>
        </div>)
}

export default Profile;
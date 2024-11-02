import { HomeIcon, LinkIcon, ClockIcon } from "@heroicons/react/16/solid"


 const navLinks=[
   {name:'Home', icon: <HomeIcon className='h-6'/>,href:'/dashboard'},
   {name:'Link', icon:<LinkIcon className='h-6'/>,href:'/dashboard/link'},
   {name:'History', icon:<ClockIcon className='h-6'/>, href:'/dashboard/history'}
]

export default navLinks;
import { HomeIcon, LinkIcon, ClockIcon } from "@heroicons/react/16/solid"


 const sidenavData=[
   {name:'Home', icon: <HomeIcon className="h-5"/>,href:'/dashboard'},
   {name:'Link', icon:<LinkIcon className="h-5"/>,href:'/dashboard/link'},
   {name:'History', icon:<ClockIcon className="h-5"/>, href:'/dashboard/history'}
]
export default sidenavData
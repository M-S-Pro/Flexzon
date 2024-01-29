import { useAppDispatch, useAppSelector } from "@/app/ReduxHooks"
import { CreditsInsertion } from "@/app/Slices/CredentialSlice"
import { SettingInsert } from "@/app/Slices/SettingsSlice"
import Cookies from "js-cookie"
import {Bell, Briefcase, LogOut, User } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const SettingsSidebar = () => {
        let{tabs,selectedTab} =useAppSelector(state=>state.settings)
        let dispatch =useAppDispatch()
        // let navigate =useNavigate()
  return (
    <div className="h-[95vh] sticky top-0  lg:w-[35vw] max-lg:w-[25vw] max-md:w-[15vw] px-4 md:py-12 max-md:py-4  gap-y-4 border-r flex flex-col">
        <h1 className="text-3xl hFont max-md:hidden">Settings</h1>
        {
                tabs.map(elm=>{
        return <Link to={`/profile/settings${elm.route}`} className={`w-full flex gap-x-2 ${elm.name==selectedTab.name&&"bg-gray-200"} transition md:p-2 max-md:p-0.5 rounded  shadow-sm max-md:rounded-full `} onClick={()=>dispatch(SettingInsert({selectedTab:elm}))}>
                <SideBarIcons route={elm.route}/>
        <p className="max-md:hidden" >
                {elm.name}
        </p>
         </Link>
                })
        }
       <LogOutBtn/>
    </div>
  )
}
const SideBarIcons = ({route}:{route:string})=>{
if (route =="/") {
    return <User/>   
}
else if (route =="/notification") {
    return    <Bell/>
}
else if (route =="/education") {
      return  <Briefcase/>
}
}
const LogOutBtn = ()=>{
  let dispatch =useAppDispatch()
        let navigate =useNavigate()
return (
        <button onClick={()=>{
              Cookies.remove("Records_session")
              dispatch(CreditsInsertion({isLogined:false,Info: {
                _id:"",
              username:"",
              avatar:"",
              email:"",
              Name:"",
              bio:"",
              followers:[],
              following:[],
              Posts:[],
              saved:[],
              liked:[],
              anonymous:[],
              interests:[],
              registeredDate:"",
              }  }))
              navigate("/")
        }
        } className="w-full flex gap-x-2 hover:bg-gray-200 transition md:p-2 max-md:p-0.5 rounded    text-red-500 "><LogOut/> 
        <p className="max-md:hidden">
Log out
        </p>
        </button>

)
}
export default SettingsSidebar

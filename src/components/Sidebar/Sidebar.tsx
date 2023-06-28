import {SidebarItem} from "./SidebarItem";
import {sidebarItemsList} from "./SidebarItemsList";

export const Sidebar = () => {



    return (
        <aside className='sidebar'>
            {sidebarItemsList.map((item) => <SidebarItem to={item.path}><span>{item.text}</span></SidebarItem>)}
        </aside>
    )
}
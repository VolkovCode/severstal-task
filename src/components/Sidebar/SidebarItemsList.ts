interface SidebarItemType {
    path: string;
    text: string;
}

export const sidebarItemsList: SidebarItemType[] = [
    {
        path: 'get',
        text: 'GET страница'
    },
    {
        path: 'post',
        text: 'POST страница'
    },
    {
        path: 'delete',
        text: 'DELETE страница'
    },
]
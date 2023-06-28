import {RouteProps} from "react-router-dom";
import {GetPage} from "../pages/GetPage/GetPage";
import {PostPage} from "../pages/PostPage/PostPage";
import {DeletePage} from "../pages/DeletePage/DeletePage";

export const routes: RouteProps[] = [
    {
        path: '/get',
        element: GetPage,

    },
    {
        path: '/post',
        element: PostPage,
    },
    {
        path: '/delete',
        element: DeletePage,
    },
]

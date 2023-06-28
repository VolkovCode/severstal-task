import {routes} from "../../router/router";
import {Navigate, Route, Routes} from "react-router-dom";

export const AppRouter = () => {
    return (
        <Routes>
            {routes.map((route, index) =>
                <Route
                    key={index}
                    path={route.path}
                    element={<route.element/>}
                >
                </Route>
        )}
            <Route path='/*' element={<Navigate replace to='/get' />}/>
        </Routes>
    )
}
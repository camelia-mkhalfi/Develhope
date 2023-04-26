import { Route, Routes } from "react-router-dom";
import {ShowGithubUser} from './ShowGithubUser';
export function App(){
    return(
        <Routes>
            <Route path="users/:username" element={<ShowGithubUser/>}/>
        </Routes>
    )
}
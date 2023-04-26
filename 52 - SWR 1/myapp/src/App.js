import { Route, Routes } from "react-router-dom";
import React from 'react';
import {ShowGithubUser} from './ShowGithubUser';
export function App(){
    return(
        <Routes>
            <Route path="users/:username" element={<ShowGithubUser/>}/>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

function NotFound() {
    return (
        <div>
            <h1>Page Not Found</h1>
        </div>
    );
}
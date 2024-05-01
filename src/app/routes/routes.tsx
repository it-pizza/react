import { Routes, Route } from 'react-router-dom';
import { PostsPage } from '../../pages/index.ts';


export function App() {
    return (
        <Routes>
            <Route path='/posts' element={<PostsPage />}/>
        </Routes>
    )
}
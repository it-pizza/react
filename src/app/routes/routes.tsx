import { Routes, Route } from 'react-router-dom';
import { LoginPage, PostsPage, SuccessPage } from '../../pages/index.ts';


export function App() {
    return (
        <Routes>
            <Route path='/posts' element={<PostsPage />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/success' element={<SuccessPage />} />
        </Routes>
    )
}
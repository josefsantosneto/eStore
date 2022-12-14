import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getCategoriesAndDocuments } from '../../../utils/firebase/firebase.utils';
import { setCategories} from '../../../assets/store/categories/category.action';

import './shop.styles.scss';
 

const Shop = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        //When you use the useEffect to load a async function you should write it like below
        const getCategoriesMap = async ()=> {
            const categoriesArray = await getCategoriesAndDocuments('categories');
            dispatch(setCategories(categoriesArray));
        };
    
        getCategoriesMap();
        
    },[]);

    return (
            <Routes>
                <Route index element={<CategoriesPreview/>}/>
                <Route path=":category" element={<Category/>}/>
            </Routes>

    );

};

export default Shop;
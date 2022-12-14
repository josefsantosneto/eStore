import { useContext, useState, useEffect, Fragment } from 'react';

import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom';

import ProductCard from '../../product-card/product-card.component';

import { selectCategoriesMap } from '../../../assets/store/categories/category.selector';

import './category.style.scss';


const Category  = ()=> {
    const { category } = useParams();//this param is going to be typed on the address page of the browser
    console.log('render/re-rendering category component')
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        console.log('effect fired calling setProducts');
        setProducts(categoriesMap[category]);
    },[category, categoriesMap]);

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
            <div className='category-container'>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                    ))}
            </div>
        </Fragment>
    );
};

export default Category;
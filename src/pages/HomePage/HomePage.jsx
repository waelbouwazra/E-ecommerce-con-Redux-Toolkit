import React, { useEffect } from 'react'
import './index.scss'
import { HeaderSlider } from '../../components/Slider/HeaderSlider'
import { useSelector, useDispatch } from 'react-redux'
import { getAllCategories } from '../../store/CategorySlice'
import ProductList from '../../components/ProductList/ProductList'
import { fetchAsyncProducts, getAllProducts, getAllProductsStatus } from '../../store/productSlice'
import Loader from '../../components/Loader/Loader'
import { STATUS } from '../../utils/status'

const Home = () => {
    const dispatch = useDispatch();
    const categories = useSelector(getAllCategories)

    useEffect(() => {
        dispatch(fetchAsyncProducts(50))
    }, [])

    const products = useSelector(getAllProducts)
    const productStatus = useSelector(getAllProductsStatus)


    //TODO:  Aleatorio la lista de productos
    const tempProducts = []
    if (products.length > 0) {
        for (let i in products) {
            let randomIndex = Math.floor(Math.random() * products.length)

            while (tempProducts.includes(products[randomIndex])) {
                randomIndex = Math.floor(Math.random() * products.length)
            }
            tempProducts[i] = products[randomIndex]

        }
    }

    let catProductsOne = products.filter(product => product.category === categories[0])
    let catProductsTwo = products.filter(product => product.category === categories[1])
    let catProductsThree = products.filter(product => product.category === categories[2])
    let catProductsFour = products.filter(product => product.category === categories[3])



    return (
        <main>
            <div className='slider-wrapper'>
                <HeaderSlider />
            </div>
            <div className='main-content bg-whitesmoke'>
                <div className='continer'>
                    <div className='categories py-5'>
                        <div className='categories-item'>
                            <div className='title-md'>
                                <h3>See our products</h3>
                            </div>

                            {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={tempProducts} />}
                        </div>

                        <div className='categorias-item'>
                            <div className='title-md'>
                                <h3>{categories[0]}</h3>
                                <div>
                                    {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsOne} />}
                                </div>
                            </div>
                        </div>

                        <div className='categorias-item'>
                            <div className='title-md'>
                                <h3>{categories[1]}</h3>
                                <div>
                                    {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsTwo} />}
                                </div>
                            </div>
                        </div>

                        <div className='categorias-item'>
                            <div className='title-md'>
                                <h3>{categories[2]}</h3>
                                <div>
                                    {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsThree} />}
                                </div>
                            </div>
                        </div>

                        <div className='categorias-item'>
                            <div className='title-md'>
                                <h3>{categories[3]}</h3>
                                <div>
                                    {productStatus === STATUS.LOADING ? <Loader /> : <ProductList products={catProductsFour} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home
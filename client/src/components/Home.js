import React from 'react';
import CategoriesSlider from "./modules/CategoriesSlider.js";
import PopularProducts from "./modules/PopularProducts.js";
import OurStory from './modules/OurStory.js';
import Blog from './modules/Blog.js';
import Instagram from './modules/Instagram.js';
import HomeSlider from './modules/HomeSlider';
import ArtProjects from './modules/ArtProjects';

function Home () {

    return (
        <div className="home-page-container">
            <div className="slider-container">
                <HomeSlider />
                <CategoriesSlider className="categories-slider" /> 
            </div>
            {/* <CategoriesSlider className="categories-slider" /> */}
            <PopularProducts />
            <ArtProjects />
            <OurStory />
            <Blog />
            <Instagram />
        </div>
    )
}

export default Home;
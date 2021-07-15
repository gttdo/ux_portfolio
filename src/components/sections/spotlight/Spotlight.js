import React from 'react';
import spotlight_image from '../../../pictures/spotlight_image.png';

function Spotlight() {
    return (
        <div className="spotlight">
            <div className="spotlight_content">
                <h1>Building digital <br /> products, brands and <br />experiences.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, dolores maiores! Eligendi ab cupiditate sint. Reprehenderit modi nam amet nihil voluptatibus quas quos officiis. Sequi placeat illo excepturi soluta animi!</p>
                <form>
                    <input type="text" placeholder="Email address" />
                    <button><span>Contact</span></button>
                </form>
            </div>
            <div className="spotlight_image"><img src={spotlight_image} alt="ux design tools" /></div>
        </div>
    )
}

export default Spotlight

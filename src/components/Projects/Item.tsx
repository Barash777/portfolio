import React from 'react';
// import todoImage from '../../assets/image/m-portfolio-1.jpeg';

type ItemPropsType = {
    image: string
}

const Item = (props: ItemPropsType) => {
    // console.log(props.image)

    return (
        <div className="grid-item"
            // style="position: absolute; left: 0px; top: 0px;"
            //  style={{position: 'absolute', left: '0px', top: '0px'}}
        >
            <div className="portfolio-box-01">
                <div className="portfolio-info">
                    <h5 className="white-color font-weight-bold">Momb ios App</h5>
                    <span>Broadcasting ios App</span>
                </div>
                <div className="portfolio-img">
                    <img src={props.image} title="" alt=""/>
                    <div className="portfolio-icon">
                        <a href="#" className="gallery-link">
                            <span className="ti-plus"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
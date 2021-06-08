import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <a href="!#" className="ri-arrow-left-s-line left slick-arrow" onClick={onClick}> </a>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <a href="!#" className="ri-arrow-right-s-line right slick-arrow" onClick={onClick} > </a>
    );
}

class SlickSliderStyle1 extends React.Component {
    render() {

        let settings = {
            dots: this.props.dots ? this.props.dots : false,
            infinite: this.props.infinite ? this.props.infinite : true,
            speed: 500,
            slidesToShow: this.props.slidesToShow ? parseInt(this.props.slidesToShow) : 9,
            accessibility:true,
            centerMode:true,
            focusOnSelect:true,
            arrow:true,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 479,
                    settings: {
                        slidesToShow: 1,
                    }
                }
            ]
        };
        return (
            <Slider {...settings}>
                {this.props.children}
            </Slider>
        );
    }
}

export default SlickSliderStyle1;
// NewsCarousel.jsx

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { useDarkMode } from '../DarkModeContext';

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;
    const darkMode = useDarkMode();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=isro OR nasa OR spacex&language=en&apiKey=${apiKey}&sortBy=publishedAt&pageSize=5`
                );
                const data = await response.json();
                if (response.ok) {
                    setNewsData(data.articles);
                } else {
                    console.error(`Error: ${data.message || 'Unknown error'}`);
                }
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, [apiKey]);



    const NextArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <ChevronRight sx={{ fontSize: 40 }} />
            </div>
        );
    };

    const PrevArrow = (props) => {
        const { className, onClick } = props;
        return (
            <div className={className} onClick={onClick}>
                <ChevronLeft sx={{ fontSize: 40 }} />
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };


    return (
        <div id="particles-js" className={`${darkMode ? 'bg-black' : 'bg-white'} text-center mb-20 pt-20`}>
            <h1 className="text-3xl sm:text-6xl font-bold mb-20 ">Latest Space News</h1>
            <div className="max-w-2xl mx-auto p-4 bg-gray-800 rounded">
                <Slider {...settings}>
                    {newsData.map((article, index) => (
                        <a
                            key={index}
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                        >
                            <div className="bg-gray-700 p-4 rounded shadow-md" style={{ minHeight: '400px' }}>
                                {article.urlToImage && (
                                    <img
                                        src={article.urlToImage}
                                        alt="News Thumbnail"
                                        className="mb-4 rounded"
                                        style={{ width: '100%', height: '290px', objectFit: 'cover' }}
                                    />
                                )}
                                <h2 className="text-xl text-left font-bold mb-2">{article.title}</h2>
                                <p className="text-white mb-2 text-left ">{article.description}</p>
                                <p className="absolute text-gray-100 bottom-0">Published At: {article.publishedAt}</p>
                            </div>
                        </a>
                    ))}
                </Slider>
            </div>
        </div>
        // <div class="container">
        //     <div class="carousel-3d carousel-3d-controls">
        //         <div class="carousel-3d-inner">
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(48).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(49).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(50).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(51).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(52).webp" alt="Slide"/></div>
        //             <div class="carousel-3d-item"><img src="https://mdbootstrap.com/img/Photos/Slides/img%20(53).webp" alt="Slide"/></div>
        //         </div>
        //         <div class="carousel-3d-controls">
        //             <a class="prev-btn waves-effect waves-light"><i class="fas fa-chevron-left"></i></a>
        //             <a class="next-btn waves-effect waves-light"><i class="fas fa-chevron-right"></i></a>
        //         </div>
        //     </div>
        // </div>
    );
};


export default News;
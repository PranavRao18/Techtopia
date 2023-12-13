// NewsCarousel.jsx

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';

const NewsCarousel = () => {
    const [newsData, setNewsData] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;

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
        <div className="max-w-2xl mx-auto p-4 bg-gray-100 rounded">
            <h1 className="text-3xl font-bold mb-4">Latest Space News</h1>
            <Slider {...settings}>
                {newsData.map((article, index) => (
                    <a
                        key={index}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none"
                    >
                        <div className="bg-white p-4 rounded shadow-md">
                            <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                            <p className="text-gray-700 mb-2">{article.description}</p>
                            <p className="text-gray-500">Published At: {article.publishedAt}</p>
                        </div>
                    </a>
                ))}
            </Slider>
        </div>
    );
};

export default NewsCarousel;

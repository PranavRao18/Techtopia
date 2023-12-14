import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import ChevronRight from '@mui/icons-material/ChevronRight';
import { useDarkMode } from '../DarkModeContext';
import Navbar from '../components/navbar';

export function AddLibrary(urlOfTheLibrary) {
    const script = document.createElement("script");
    script.src = urlOfTheLibrary;
    script.async = true;
    document.body.appendChild(script);
}

const News = () => {
    const [newsData, setNewsData] = useState([]);
    const apiKey = import.meta.env.VITE_API_KEY;
    const { darkMode } = useDarkMode();

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(
                    `https://newsapi.org/v2/everything?q=rocket AND space&language=en&apiKey=${apiKey}&sortBy=publishedAt&pageSize=5`
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

    console.log(darkMode ? 'Yes' : 'no');

    return (
        <>
            <div id={`${darkMode ? 'particles-js-light' : 'particles-js'}`} className='absolute top-0 z-0 h-screen w-screen overflow-hidden'>{`${darkMode ? AddLibrary("/index-light.js") : AddLibrary("/index.js")}`}</div>
            <div className={`w-screen h-screen flex items-center pt-20 fixed top-0 z-19 bg-clear`}>
                <Navbar />
                <div className={`text-center mb-20 pt-20 sm:pt-40 w-full`}>
                <h1 className={`text-3xl sm:text-6xl font-bold mb-4 sm:mb-20 ${darkMode ? 'text-black' : 'text-white'}`}>Latest Space News</h1>
                <div className="w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
                    <Carousel
                        indicators={true}
                        nextIcon={<NextArrow />}
                        prevIcon={<PrevArrow />}
                    >
                        {newsData.map((article, index) => (
                            <Carousel.Item key={index}>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-decoration-none d-block"
                                >
                                    <div className="bg-gray-700 p-4 rounded shadow-md mx-auto" style={{ minHeight: '400px' }}>
                                        {article.urlToImage && (
                                            <img
                                                src={article.urlToImage}
                                                alt="News Thumbnail"
                                                className="mb-4 rounded"
                                                style={{ width: '100%', height: '290px', objectFit: 'cover' }}
                                            />
                                        )}
                                        <h2 className="text-xl text-left font-bold mb-2 text-white">{article.title}</h2>
                                        <p className="text-white mb-2 text-left ">{article.description}</p>
                                        <p className="text-gray-100 mb-2">Published At: {article.publishedAt}</p>
                                    </div>
                                </a>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
            </div>
        </>
    );
};

export default News;

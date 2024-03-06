import React from 'react';
import "../css/Header.css";
import logo from "../images/logo-h.png";
import CloseMenu from '../images/close_burger.png'
import OpenMenu from '../images/open_burger.png'
import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
// import gsap from "gsap"
// import ScrollToPlugin from "gsap/ScrollToPlugin"

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    // gsap.registerPlugin(ScrollToPlugin);
    // const artRef1 = 'a'

    return (
        <>
            <div className='header'>
                <div className='header__img'>
                    <a href='/'>
                    <svg width="156" height="32" viewBox="0 0 156 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.52 31.7C12.7667 31.7 10.27 31.0467 8.03 29.74C5.79 28.4333 4.01667 26.66 2.71 24.42C1.40333 22.18 0.75 19.6367 0.75 16.79C0.75 13.9433 1.38 11.4233 2.64 9.23C3.94667 6.99 5.74333 5.21666 8.03 3.91C10.3167 2.60333 12.9067 1.95 15.8 1.95C17.8533 1.95 19.6967 2.20667 21.33 2.72C23.01 3.23333 24.55 4.05 25.95 5.17C26.6967 5.77667 27.07 6.57 27.07 7.55C27.07 8.34333 26.79 9.02 26.23 9.58C25.67 10.14 24.9933 10.42 24.2 10.42C23.6867 10.42 23.1033 10.21 22.45 9.79C21.4233 9.13667 20.3733 8.62333 19.3 8.25C18.2267 7.83 17.0833 7.62 15.87 7.62C13.3033 7.62 11.18 8.48333 9.5 10.21C7.86667 11.89 7.05 14.0833 7.05 16.79C7.05 19.59 7.84333 21.83 9.43 23.51C11.0167 25.19 13.0467 26.03 15.52 26.03C17.8067 26.03 19.6733 25.5867 21.12 24.7C22.6133 23.7667 23.36 22.5767 23.36 21.13C23.36 20.7567 23.1967 20.57 22.87 20.57H18.18C17.2933 20.57 16.57 20.3133 16.01 19.8C15.4967 19.2867 15.24 18.61 15.24 17.77C15.24 16.9767 15.4967 16.3233 16.01 15.81C16.57 15.2967 17.2933 15.04 18.18 15.04H25.88C27.14 15.04 28.05 15.3433 28.61 15.95C29.17 16.51 29.45 17.4667 29.45 18.82C29.45 22.74 28.1667 25.8667 25.6 28.2C23.08 30.5333 19.72 31.7 15.52 31.7ZM43.8673 31.7C40.6939 31.7 38.0106 30.7667 35.8173 28.9C33.6706 26.9867 32.5973 24.3733 32.5973 21.06C32.5973 17.6067 33.6473 14.9 35.7473 12.94C37.8939 10.98 40.5773 10 43.7973 10C46.0839 10 47.9739 10.42 49.4673 11.26C50.9606 12.1 52.0806 13.1733 52.8273 14.48C53.5739 15.7867 53.9473 17.1633 53.9473 18.61C53.9473 21.0367 52.8739 22.25 50.7273 22.25H39.1073C38.7339 22.25 38.5473 22.4833 38.5473 22.95C38.5473 24.0233 39.1306 24.8867 40.2973 25.54C41.5106 26.1467 42.8639 26.45 44.3573 26.45C45.2906 26.45 46.2239 26.3333 47.1573 26.1C48.0906 25.82 48.9073 25.4233 49.6073 24.91C50.0739 24.5833 50.5639 24.42 51.0773 24.42C51.7773 24.42 52.3606 24.6767 52.8273 25.19C53.3406 25.7033 53.5973 26.31 53.5973 27.01C53.5973 27.85 53.1539 28.6433 52.2673 29.39C51.4273 30.09 50.1906 30.65 48.5573 31.07C46.9706 31.49 45.4073 31.7 43.8673 31.7ZM47.5073 18.19C47.6006 18.19 47.7173 18.1667 47.8573 18.12C48.0439 18.0733 48.1373 17.91 48.1373 17.63C48.1373 16.93 47.6939 16.3 46.8073 15.74C45.9673 15.1333 44.8706 14.83 43.5173 14.83C42.0706 14.83 40.8806 15.1567 39.9473 15.81C39.0606 16.4167 38.6173 17.0467 38.6173 17.7C38.6173 18.0267 38.8039 18.19 39.1773 18.19H47.5073ZM61.2781 31.49C60.3915 31.49 59.6448 31.2333 59.0381 30.72C58.4315 30.2067 58.1281 29.5533 58.1281 28.76V13.08C58.1281 12.3333 58.4081 11.7033 58.9681 11.19C59.5748 10.63 60.3448 10.35 61.2781 10.35C62.1181 10.35 62.7948 10.6067 63.3081 11.12C63.8681 11.5867 64.1948 12.17 64.2881 12.87C64.8015 12.0767 65.5015 11.4 66.3881 10.84C67.2748 10.28 68.2081 10 69.1881 10C69.7948 10 70.3781 10.07 70.9381 10.21C71.5915 10.3967 72.1281 10.77 72.5481 11.33C72.9681 11.8433 73.1781 12.45 73.1781 13.15C73.1781 14.13 72.8515 14.9467 72.1981 15.6C71.5915 16.2067 70.8681 16.4167 70.0281 16.23C69.4215 16.09 68.8148 16.02 68.2081 16.02C67.1348 16.02 66.2481 16.3933 65.5481 17.14C64.8481 17.8867 64.4281 19.4033 64.2881 21.69V28.69C64.2881 29.4833 63.9848 30.16 63.3781 30.72C62.8181 31.2333 62.1181 31.49 61.2781 31.49ZM84.7281 31.7C81.6015 31.7 79.0581 30.72 77.0981 28.76C75.1848 26.7533 74.2281 24.0933 74.2281 20.78C74.2281 17.4667 75.1615 14.8533 77.0281 12.94C78.9415 10.98 81.4381 10 84.5181 10C86.7115 10 88.6248 10.77 90.2581 12.31C90.4448 11.75 90.7948 11.2833 91.3081 10.91C91.8215 10.5367 92.4281 10.35 93.1281 10.35C94.0615 10.35 94.8081 10.63 95.3681 11.19C95.9748 11.7033 96.2781 12.3333 96.2781 13.08V28.97C96.2781 29.7633 95.9748 30.4167 95.3681 30.93C94.8081 31.4433 94.0615 31.7 93.1281 31.7C91.5881 31.7 90.6315 31.0233 90.2581 29.67C88.7648 31.0233 86.9215 31.7 84.7281 31.7ZM85.2181 26.03C86.7115 26.03 87.9015 25.54 88.7881 24.56C89.6748 23.5333 90.1181 22.2733 90.1181 20.78C90.1181 19.24 89.6748 18.0033 88.7881 17.07C87.9015 16.1367 86.7115 15.67 85.2181 15.67C83.7715 15.67 82.5815 16.1367 81.6481 17.07C80.7615 18.0033 80.3181 19.24 80.3181 20.78C80.3181 22.2733 80.7615 23.5333 81.6481 24.56C82.5815 25.54 83.7715 26.03 85.2181 26.03ZM111.336 31.7C109.19 31.7 107.183 31.35 105.316 30.65C103.45 29.9033 101.98 28.9233 100.906 27.71C100.393 27.15 100.136 26.4967 100.136 25.75C100.136 24.9567 100.44 24.2567 101.046 23.65C101.653 23.0433 102.376 22.74 103.216 22.74C104.01 22.74 104.686 23.02 105.246 23.58C106.04 24.3267 107.043 24.91 108.256 25.33C109.47 25.75 110.66 25.96 111.826 25.96C113.04 25.96 114.09 25.7033 114.976 25.19C115.863 24.63 116.306 23.7667 116.306 22.6C116.306 21.62 115.886 20.8733 115.046 20.36C114.253 19.8 112.9 19.3567 110.986 19.03C107.58 18.47 105.013 17.5367 103.286 16.23C101.56 14.8767 100.696 12.9867 100.696 10.56C100.696 7.94667 101.7 5.87 103.706 4.33C105.713 2.74333 108.35 1.95 111.616 1.95C114.976 1.95 117.66 2.81333 119.666 4.54C120.46 5.19333 120.856 5.96333 120.856 6.85C120.856 7.59666 120.553 8.25 119.946 8.81C119.386 9.32333 118.71 9.58 117.916 9.58C117.31 9.58 116.75 9.41666 116.236 9.09C114.463 7.97 112.596 7.41 110.636 7.41C109.47 7.41 108.49 7.64333 107.696 8.11C106.903 8.57667 106.506 9.27667 106.506 10.21C106.506 11.19 107.113 11.96 108.326 12.52C109.586 13.08 111.406 13.5933 113.786 14.06C115.093 14.2933 116.376 14.7133 117.636 15.32C118.943 15.88 120.016 16.7433 120.856 17.91C121.743 19.0767 122.186 20.6633 122.186 22.67C122.186 25.33 121.16 27.5 119.106 29.18C117.1 30.86 114.51 31.7 111.336 31.7ZM129.911 31.7C129.024 31.7 128.278 31.4433 127.671 30.93C127.064 30.4167 126.761 29.7633 126.761 28.97V2.93C126.761 2.18333 127.041 1.55333 127.601 1.04C128.208 0.479998 128.978 0.199998 129.911 0.199998C130.798 0.199998 131.521 0.479998 132.081 1.04C132.641 1.55333 132.921 2.20667 132.921 3V15.04C132.921 15.6 133.084 15.88 133.411 15.88C133.504 15.88 133.691 15.7867 133.971 15.6L140.761 10.56C141.321 10.1867 141.928 10 142.581 10C143.374 10 144.028 10.28 144.541 10.84C145.054 11.4 145.311 12.0533 145.311 12.8C145.311 13.8267 144.844 14.6433 143.911 15.25L138.381 18.89C137.914 19.2167 137.681 19.5667 137.681 19.94C137.681 20.3133 137.868 20.6167 138.241 20.85L144.611 26.59C145.031 26.9167 145.311 27.29 145.451 27.71C145.591 28.13 145.661 28.5267 145.661 28.9C145.661 29.6467 145.358 30.3 144.751 30.86C144.191 31.42 143.514 31.7 142.721 31.7C141.928 31.7 141.228 31.3967 140.621 30.79L133.761 24.07C133.621 23.93 133.458 23.86 133.271 23.86C133.038 23.86 132.921 24.0467 132.921 24.42V28.9C132.921 29.6933 132.618 30.37 132.011 30.93C131.451 31.4433 130.751 31.7 129.911 31.7ZM152.403 31.7C151.516 31.7 150.769 31.4433 150.163 30.93C149.556 30.4167 149.253 29.7633 149.253 28.97V13.08C149.253 12.3333 149.533 11.7033 150.093 11.19C150.699 10.63 151.469 10.35 152.403 10.35C153.336 10.35 154.059 10.63 154.573 11.19C155.133 11.7033 155.413 12.3567 155.413 13.15V28.9C155.413 29.6933 155.109 30.37 154.503 30.93C153.943 31.4433 153.243 31.7 152.403 31.7ZM152.403 6.85C151.423 6.85 150.583 6.54667 149.883 5.94C149.183 5.28667 148.833 4.47 148.833 3.49C148.833 2.60333 149.183 1.83333 149.883 1.18C150.583 0.526665 151.423 0.199998 152.403 0.199998C153.336 0.199998 154.129 0.526665 154.783 1.18C155.483 1.83333 155.833 2.60333 155.833 3.49C155.833 4.47 155.483 5.28667 154.783 5.94C154.129 6.54667 153.336 6.85 152.403 6.85Z" fill="#292929"/>
                    </svg>
                    </a>
                </div>

                <ul className='header__nav  '>
                    <li><a href="/">Головна</a></li>
                    <li><a href="/#about-us">Про нас</a></li>
                    <li><a href="/galerey">Галерея</a></li>
                    <li><a href= '/price-summer'>Літні прайси</a></li>
                    <li><a href= '/price-winter'>Зимні прайси</a></li>
                    <li><a href="#footer">Контакти</a></li>
                </ul>
                <a className='header__button' href="#footer">зателефонувати</a>
            </div>

            <div className='header_burger'>
                <div className='header_burger_main'>
                        <img src={logo} alt='logo' className='header_burger_logo'/>
                    <article onClick={() => setIsOpen(!isOpen)} className='header_burger_btns'>
                        <img src={isOpen ? OpenMenu : CloseMenu} alt="menu" />
                    </article>
                </div>
                <div className={`header__menu ${isOpen ? "open" : ""}`}>
                    <ul className='header__nav'>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/#about-us">Про нас</a></li>
                        <li><a href="">Тури</a></li>
                        <li><a href= '/price-summer'>Літні прайси</a></li>
                        <li><a href= '/price-winter'>Зимні прайси</a></li>
                        <li><a href="#footer">Контакти</a></li>
                    </ul>
                    <a className='header__button' href="#footer">зателефонувати</a>
                </div>
            </div>
        </>
    )
}

export default Header
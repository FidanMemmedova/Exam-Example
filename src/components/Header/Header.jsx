import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import style from "../Header/Header.module.scss";
const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerTop}>
        <div className={style.headerContainer}>
          <div className={style.headerContact}>
            <p>
              <BsFillTelephoneFill />
              +880 1911 854 378
            </p>
            <p>
              <FaRegEnvelope />
              backpiper.com@gmail.com
            </p>
          </div>
          <div className={style.headerSocialMedias}>
            <ul>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#">
                  <FaFacebookF />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={style.headerBottom}>
        <div className={style.headerContainer}>
          <div className={style.logo}>
            <img
              src="https://preview.colorlib.com/theme/onepro/img/logo.png.webp"
              alt="logo"
            />
          </div>
          <div className={style.navbar}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

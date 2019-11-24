import { createGlobalStyle } from "styled-components"

export const OldAmigoCSS = createGlobalStyle`
.Header {
  background-color: white !important;
  padding-bottom: 1.5rem;
  color: black !important;
}

.Header-nav-folder {
  background-color: white;
}

.Header-nav-item {
  color: black !important;
  font-size: 1.1rem;
}

@media only screen and (min-width: 1150px) {
  .Header-nav-item {
    font-size: 2rem;
  }
}

.Header-nav-item:first-of-type {
  color: #eb2507 !important;
}

#Amigo--Hero-Image {
  z-index: 1;
  height: 70vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-position: bottom;    
}

@media only screen and (max-width: 1000px) {
  #Amigo--Hero-Image {
    height: 50vh;
  }
}

.Amigo--Hero-Image img {
  width: 100%;
  height: auto;
}

.Amigo--Secondary-Nav {
  z-index: 2;
  margin: 0 auto;
  display: flex;
  width: 80%;
  max-width: 1000px;
  justify-content: space-around;
  list-style: none;
  padding: 2rem 1rem;
  background-color: #fe0c07;
  font-size: 1.5rem;
  color: white;
  position: absolute;
  top: -4rem;
}

.Amigo--Secondary-Nav div:hover {
  cursor: pointer;
}

@media only screen and (max-width: 1000px) {
  .Amigo--Secondary-Nav {
    display: none;
  }
}

.Amigo--Secondary-Nav div {
  position: relative;
}

.Amigo--Secondary-Nav div:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 3px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

.Amigo--Secondary-Nav div:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.Amigo--Welcome-TextSlider {
  background-color: #fafaea;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 15rem 2rem;
  position: relative;

  h2 {
    color: #fe0c07;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin: 0;
  }

  h3 {
    font-size: 1.7rem;
    text-align: center;
  }
}

@media only screen and (max-width: 1000px) {
  .Amigo--Welcome-TextSlider {
    padding: 3rem 2.5rem;
    text-align: center;

    h2 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.1rem;
      text-align: justify;
    }
  }
}

.Footer-inner {
  background-color: #fafaea !important;
  max-width: none !important;
  padding: 35px 20px !important;
}

@media only screen and (max-width: 1000px) {
  .Footer-inner {
    width: auto;
    margin: 0 auto !important;
  }
}

.Amigo--Footer-BusinessAddress {
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;

  h4 {
    color: #cbcbcb;
    font-size: 2rem;
    margin: 1rem 0;
    font-weight: 100;
  }
}

@media only screen and (max-width: 1000px) {
  .Amigo--Footer-BusinessAddress {
    h4 {
      font-size: 1rem;
      margin: 0;
    }
  }
}

.Amigo--Footer-Home-Away {
  max-width: 60rem;
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    color: #fe0c07;
    font-size: 3.5rem;
  }

  h3 {
    font-size: 1.5rem;
    color: black;
  }
}

@media only screen and (max-width: 1000px) {
  .Amigo--Footer-Home-Away {
    margin: 2.5rem auto;
    text-align: justify;

    h2 {
      font-size: 2.5rem;
      text-align: center;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
}

.Amigo--Footer-Newsletter {
  background-color: #fafaea !important;
}

.Footer,
.Footer-inner,
.Footer-inner .clear {
  background-color: #fafaea !important;
}

.Footer {
  margin: 0 !important;
}

#_intro {
  display: none;
}

.Mobile--Secondary-Nav {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  background-color: red;
  color: white;
  font-size: 1.5rem;
  text-transform: uppercase;
}

@media only screen and (min-width: 1000px) {
  .Mobile--Secondary-Nav {
    display: none;
    padding: 2rem 0;
  }
}

@media only screen and (max-width: 1000px) {
  .Index-page-content {
    padding-top: 0 !important;
  }
}

a.Header-nav-item {
  position: relative;
}

a.Header-nav-item:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #000;
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}

a.Header-nav-item:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

* {
  word-break: break-word;
}

.Header-nav-folder {
  background-color: white !important;
}

.Header-nav-folder a {
  color: black !important;
}

.tweak-header-primary-nav-hover-style-active .Header-nav .Header-nav-folder-item:hover {
  color: #fe0c07 !important;
}

.Amigo--GalleryPage-ImageGallery-Container {
  display: none;
  flex-direction: column;
  align-items: center;
}

@media only screen and (min-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Container {
    display: flex;
  }
}

.Amigo--GalleryPage-ImageGallery-Header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4rem;
  font-size: 3rem;
  color: red;
  width: 100%;
  text-transform: uppercase;
}

@media only screen and (min-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Header {
    width: 100%;
    max-width: 1235px;
    padding-bottom: 5rem;
  }
}

@media only screen and (max-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Header {
    font-size: 1.5rem;
    padding-top: 1rem;
    padding-bottom: 2rem;
  }
}

.Amigo--GalleryPage-ImageGallery-Header h2 {
  color: red;
}

.Amigo--GalleryPage-ImageGallery-Header-Line {
  border-top: 2px solid black;
  width: 40%;
}

.Amigo--GalleryPage-ImageGallery {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.Amigo--GalleryPage-ImageGallery-Image {
  max-width: 33rem !important;
}

@media only screen and (max-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Image {
    width: 100%;
  }
}

.Amigo--GalleryPage-ImageGallery-Image-Caption {
  max-width: 32rem;
  font-size: 1rem;
}

.Amigo--GalleryPage-ImageGallery-Image-Caption h3 {
  color: red;
  margin-top: 1rem !important;
  font-size: 1.5rem;
  margin-bottom: 0;
}

@media only screen (min-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Image-Caption h3 {
    font-size: 2.5rem;
  }
}

.Amigo--GalleryPage-ImageGallery-Image-Caption p {
  color: black;
}

.Amigo--GalleryPage-ImageGallery-Row {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 3rem;
  text-align: justify;
}

@media only screen and (min-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Row {
    width: 100%;
    max-width: 1235px;
  }
}

.Amigo--GalleryPage-ImageGallery-Row:nth-child(even) {
  justify-content: flex-end;
}

@media only screen and (max-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Row {
    justify-content: center;
  }

  .Amigo--GalleryPage-ImageGallery-Row:nth-child(even) {
    justify-content: center;
  }
}

.Amigo--GalleryPage-Dope-ImageGallery-Container {
  display: flex;
  height: 80vh;
  width: 100%;
  max-width: 1240px;
}

.Amigo--GalleryPage-Dope-ImageGallery-Menu {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 35%;
  align-items: center;
}

.Amigo--GalleryPage-Dope-ImageGallery-MenuItem h2 {
  text-transform: uppercase;
  cursor: pointer;
  color: red;
  font-size: 2rem;
}

#Amigo--GalleryPage-Dope-ImageGallery-Image {
  width: 100%;
  background-image: url(https://res.cloudinary.com/swerg/image/upload/v1566710281/amigob1_wlhfx6.png);
  background-size: cover;
  background-position: center center;
}

.Amigo--GalleryPage-ImageGallery-Container {
  background-color: #fafaea;
}

@media screen and (min-width: 1000px) {
  .Amigo--GalleryPage-ImageGallery-Container {
    padding: 6rem;
  }
}

.Amigo--Secondary-Nav-Btn {
  padding: 1rem 0;
}

.newsletter-block .newsletter-form-wrapper--layoutStack .newsletter-form-field-wrapper {
  max-width: none !important;
}

.newsletter-block .newsletter-form-fields-wrapper {
  width: 100% !important;
}

/* Home Page Text Slider */

#Welcome-TextSlider-Content {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
}

.gallery-arrow {
  font-size: 4rem;
  color: red;
  cursor: pointer;
}

@media screen and (max-width: 1000px) {
  .gallery-arrow {
    font-size: 2rem;
  }

  .TextSlider-Slide {
    width: 30rem;
  }

  #gallery-arrow-prev {
    display: none;
  }
}

.TextSlider-Slide {
  text-align: center;
    padding: 0 2rem;
    width: 100%;
    max-width: 60rem;
    height: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#gallery-arrow-prev {
  margin-right: auto;
}

#gallery-arrow-next {
  margin-left: auto;
}
`

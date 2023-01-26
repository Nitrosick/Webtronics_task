import { FC } from 'react';
import { GalleryBG } from './GalleryBG';
import photo_1 from '../../images/photos/photo_7.jpg';
import photo_2 from '../../images/photos/photo_8.jpg';
import photo_3 from '../../images/photos/photo_9.jpg';
import photo_4 from '../../images/photos/photo_10.jpg';
import './Gallery.css';

export const Gallery: FC = () => {
  return (
    <div className="gallery wrapper" id="gallery_section">
        <GalleryBG />
        <h2>Gallery</h2>
        <div className="gallery_content">
            <p className="gallery_text">
                By the end of this course, you will be able to develop and publish your very own Google Chrome extension! In this course we will focus on coding exercises and projects.
            </p>
            <div
                className="gallery_photo horizontal"
                style={{ backgroundImage: `url(${photo_1})` }}
            ></div>
            <div
                className="gallery_photo"
                style={{ backgroundImage: `url(${photo_2})` }}
            ></div>
            <div
                className="gallery_photo"
                style={{ backgroundImage: `url(${photo_3})` }}
            ></div>
            <div
                className="gallery_photo vertical"
                style={{ backgroundImage: `url(${photo_4})` }}
            ></div>
            <p className="gallery_text wide">
                If you would like to learn web development and get a job in the tech industry, you are going to LOVE this course! Learn HTML, CSS, JavaScript, Bootstrap and more with over 15 hours of HD video tutorials! This course was designed to be extremely beginner friendly. We will begin with the very basics of HTML and build a simple web page.
            </p>
        </div>
    </div>
  );
}

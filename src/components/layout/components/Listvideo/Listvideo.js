import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import styles from './Listvideo.module.scss';
import VideoElement from './VideoElement/VideoElement';
const cx = classNames.bind(styles);

function Listvideo() {
  const [arrListVideo, setArrListVideo] = useState([]);

  // call apis
  useEffect(() => {
    fetch('https://my-json-server.typicode.com/DinhSonpro12/Clone_homePage_YouTube_ReactJS/Topic')
      .then((respon) => respon.json())
      .then((ob) => {
        setArrListVideo(ob);
      });
  }, []);

  return (
    <div class={cx('listvideo')}>
      <div class={cx('listvideo_row')}>
        <VideoElement boolean={false} />

        {arrListVideo.map((value, index) => {
          return <VideoElement key={index} videoProperties={value} />;
        })}
      </div>
    </div>
  );
}

export default Listvideo;

import React from 'react';
import Carousel, { slidesToShowPlugin, slidesToScrollPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

export default function Card() {
    return (
        <Carousel
            plugins={[
                'centered',
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
                {
                    resolve: slidesToScrollPlugin,
                    options: {
                        numberOfSlides: 2,
                    },
                },
            ]}
        >


        </Carousel>
    )
}

// import AwesomeSlider from 'react-awesome-slider';
// import 'react-awesome-slider/dist/styles.css';



// export default function Card() {
//     return (

//         <AwesomeSlider>
//             <div><a href="https://xdewez.github.io/wild-covid/"><img src="../assets/besafe.jpg" alt="" /></a></div>
//             <div><a href="https://xdewez.github.io/PWA_FILMS/"><img src="../assets/pwa.jpg" alt="" /></a></div>
//         </AwesomeSlider>
//     );
// }

// Core
import React, { useEffect } from 'react';

// Styles
import Styles from './styles.module.scss';

// Instruments
import lottie from 'lottie-web';
import animation from 'utils/BlackArchimed.json';

export const Welcome = () => {
    useEffect(() => {
        lottie.loadAnimation({
            container: document.getElementById(Styles.archimed),
            animType: 'svg',
            loop: true,
            autoplay: true,
            animationData: animation,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
            },
        });
    }, []);

    return (
        <section className={Styles.container}>
            <p className={Styles.title}>
                Welcome to the <s>jungle</s> test case!
            </p>
            <div className={Styles.archimed} id={Styles.archimed} />
        </section>
    );
};

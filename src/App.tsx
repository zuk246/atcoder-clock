import Links from './features/links';
import Settings from './features/settings';
import StartButton from './features/startButton';
import SetTime from './features/setTime';
import { useEffect, useRef, useState } from 'react';
import Problems from './features/problems';
import Display from './features/display';
import { useCookies } from 'react-cookie';
import ReactGA from 'react-ga4';
import Guide from './features/guide';

export default function Page() {
    const [time, setTime] = useState<number>(5);
    const [isRunning, setIsRunning] = useState<boolean>(false);
    const intervalRef = useRef<any>(null);
    const [isTimeUp, setIsTimeUp] = useState<boolean>(false);
    const [cookies, setCookie] = useCookies();
    const [sound] = useState(new Audio('/sound/timer.mp3'));

    const seconds = time % 60;
    const minutes = Math.floor((time / 60) % 60);
    const hours = Math.floor(time / 3600);

    const start = () => {
        if (time > 0) {
            Notification.requestPermission();
            setIsRunning(true);
            setIsTimeUp(false);
            if (import.meta.env.MODE === 'production') {
                ReactGA.event('start-timer');
            }
            intervalRef.current = new Worker(
                new URL('./worker/worker.ts', import.meta.url)
            );
            intervalRef.current.addEventListener(
                'message',
                (e: MessageEvent<{ remainTime: number }>) => {
                    if (e.data.remainTime === 0) {
                        setIsRunning(false);
                        setIsTimeUp(true);
                        sound.play();
                        if (import.meta.env.MODE === 'production') {
                            ReactGA.event('done-timer');
                        }
                    }
                    setTime(e.data.remainTime);
                }
            );

            intervalRef.current.postMessage({ time: time });
        }
    };

    const pause = () => {
        setIsRunning(false);
        if (import.meta.env.MODE === 'production') {
            ReactGA.event('stop-timer');
        }
        setCookie('time', time);
        if (intervalRef.current) {
            intervalRef.current.terminate();
        }
    };

    const stopSound = () => {
        sound.pause();
        sound.currentTime = 0;
    };

    useEffect(() => {
        if (!cookies.time) {
            setCookie('time', 50);
            setTime(50);
        } else {
            setTime(Number(cookies.time));
        }

        if (!cookies.background) {
            setCookie('background', 'black');
        }

        if (import.meta.env.MODE === 'production') {
            ReactGA.initialize(import.meta.env.VITE_GA4_ID as string);
            ReactGA.send({
                hitType: 'pageview',
                page: '/',
            });
        }
    }, []);

    return (
        <div>
            <Display
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                blur={!isRunning || isTimeUp}
            />
            <Problems
                display={!isRunning && isTimeUp}
                stopSound={() => stopSound()}
            />
            <Guide display={!isRunning && !isTimeUp} />
            <div className='fixed sm:bottom-10 top-5 sm:top-auto w-full left-0 sm:px-10 px-5 flex justify-between items-center z-40'>
                <div className='flex md:gap-4 gap-2 items-center md:flex-row flex-col'>
                    <StartButton
                        isRunning={isRunning}
                        start={start}
                        pause={pause}
                    />
                    <SetTime
                        time={{ seconds, minutes, hours }}
                        setTime={(h, m, s) => {
                            setCookie('time', s + m * 60 + h * 3600);
                            setTime(s + m * 60 + h * 3600);
                        }}
                        pause={pause}
                        start={start}
                    />
                    <Settings />
                </div>
                <Links />
            </div>
        </div>
    );
}

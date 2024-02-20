import BackgroundImage from './../../assets/background/image.webp';
import BackgroundContent from './../../assets/background/content.webp';
import { memo } from 'react';

type Props = {
    hours: number;
    minutes: number;
    seconds: number;
    blur: Boolean;
};

const Display = memo((props: Props) => {
    const { hours, minutes, seconds } = props;

    const COMMON_CLASS_NAME_NUMBER =
        'w-40 text-center bg-clip-text text-transparent bg-white/40 max-[1200px]:w-[calc(0.25rem*35)] max-[990px]:w-[calc(0.25rem*27)] max-[810px]:w-[calc(0.25rem*20)] max-[560px]:w-[calc(0.25rem*14)] max-[375px]:w-[calc(0.25rem*8)]';
    const COMMON_CLASS_NAME_COLON =
        'w-28 text-center bg-clip-text text-transparent bg-white/40 max-[1200px]:w-16 max-[990px]:w-[calc(0.25rem*14)] max-[810px]:w-[calc(0.25rem*10)] max-[560px]:w-[calc(0.25rem*6)] max-[375px]:w-[calc(0.25rem*4)]';

    return (
        <div>
            <img
                src={BackgroundImage}
                alt=''
                className='fixed top-0 left-0 w-full h-[100svh] object-cover object-center z-0 duration-1000'
                style={{
                    filter: `${!props.blur ? 'blur(0px)' : 'blur(8px)'}`,
                }}
            />
            <img
                src={BackgroundContent}
                alt=''
                className='fixed top-0 left-0 w-full h-[100svh] object-cover object-center z-20 duration-1000'
                style={{
                    filter: `${!props.blur ? 'blur(0px)' : 'blur(8px)'}`,
                }}
            />
            <div className='fixed z-10 left-1/2 -translate-x-1/2 top-28 text-center text-[240px] max-[1200px]:text-[200px] max-[990px]:text-[160px] max-[810px]:text-[120px] max-[560px]:text-[80px] max-[375px]:text-[40px] font-[900] font-poppins flex items-center'>
                <div className={COMMON_CLASS_NAME_NUMBER}>
                    {hours.toString().length == 2 ? hours.toString()[0] : '0'}
                </div>
                <div className={COMMON_CLASS_NAME_NUMBER}>
                    {hours.toString().length == 2 ? hours.toString()[1] : hours}
                </div>
                <div className={COMMON_CLASS_NAME_COLON}>:</div>
                <div className={COMMON_CLASS_NAME_NUMBER}>
                    {minutes.toString().length == 2
                        ? minutes.toString()[0]
                        : '0'}
                </div>
                <div className={COMMON_CLASS_NAME_NUMBER}>
                    {minutes.toString().length == 2
                        ? minutes.toString()[1]
                        : minutes}
                </div>
                <div className={COMMON_CLASS_NAME_COLON}>:</div>
                <div className={COMMON_CLASS_NAME_NUMBER}>
                    {seconds.toString().length == 2
                        ? seconds.toString()[0]
                        : '0'}
                </div>
                <div className={COMMON_CLASS_NAME_NUMBER}>
                    {seconds.toString().length == 2
                        ? seconds.toString()[1]
                        : seconds}
                </div>
            </div>
        </div>
    );
});
export default Display;

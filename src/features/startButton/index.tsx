import { FaPlay, FaStop } from 'react-icons/fa6';
import { Button } from '../../components/Button';
import { memo } from 'react';

type StartButtonProps = {
    isRunning: boolean;
    start: () => void;
    pause: () => void;
};

const StartButton = memo((props: StartButtonProps) => {
    function changeState() {
        if (props.isRunning) {
            props.pause();
        } else {
            props.start();
        }
    }

    return (
        <Button
            className='flex gap-1 items-center bg-white/40 backdrop-blur text-white hover:bg-white/60 md:w-auto w-28 justify-center'
            onClick={changeState}
        >
            {props.isRunning ? <FaStop size={14} /> : <FaPlay size={14} />}
            <span>{props.isRunning ? 'ストップ' : 'スタート'}</span>
        </Button>
    );
});

export default StartButton;

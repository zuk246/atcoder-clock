import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { memo, useState } from 'react';
import { FaClock } from 'react-icons/fa6';
import { Transition } from '@headlessui/react';
import { Input } from '../../components/Input';

type FormType = {
    hours: number;
    minutes: number;
    seconds: number;
};

type SetTimeProps = {
    time: {
        hours: number;
        minutes: number;
        seconds: number;
    };
    setTime: (hours: number, minutes: number, seconds: number) => void;
    pause: () => void;
    start: () => void;
};

const SetTime = memo((props: SetTimeProps) => {
    const { register, handleSubmit, setValue } = useForm<FormType>();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onSubmit = (data: FormType) => {
        data.hours = Number(data.hours);
        data.minutes = Number(data.minutes);
        data.seconds = Number(data.seconds);
        if (!(0 <= data.hours && data.hours < 100)) {
            data.hours = 0;
        }
        if (!(0 <= data.minutes && data.minutes < 60)) {
            data.minutes = 0;
        }
        if (!(0 <= data.seconds && data.seconds < 60)) {
            data.seconds = 0;
        }
        props.setTime(data.hours, data.minutes, data.seconds);
        setIsOpen(false);
    };

    const openModal = () => {
        setValue('hours', props.time.hours);
        setValue('minutes', props.time.minutes);
        setValue('seconds', props.time.seconds);
        props.pause();
        setIsOpen(true);
    };

    return (
        <>
            <Button
                className='flex items-center gap-1 bg-white/40 backdrop-blur text-white hover:bg-white/60 md:w-auto w-28 justify-center'
                onClick={() => openModal()}
            >
                <FaClock size={14} />
                <span>セット</span>
            </Button>
            <Transition
                show={isOpen}
                enter='transition-opacity duration-100'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                className='fixed inset-0 bg-black/30 backdrop-blur-sm z-40'
                aria-hidden='true'
                onClick={() => setIsOpen(false)}
            />
            <Transition
                show={isOpen}
                enter='transition-opacity duration-500'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='transition-opacity duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                className='fixed md:w-full w-[calc(100%-2rem)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white max-w-md p-8 rounded-xl z-50'
            >
                <h1 className='flex gap-2 items-center'>
                    <FaClock size={20} />
                    <span className='text-2xl font-bold'>タイマーセット</span>
                </h1>
                <p className='text-sm'>タイマーのセット</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-4 flex flex-col gap-3'>
                        <div className='flex gap-2 items-center'>
                            <span className='w-8 text-sm'>時間</span>
                            <Input
                                placeholder='時間'
                                type='number'
                                autoComplete='off'
                                {...register('hours')}
                            />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='w-8 text-sm'>分</span>
                            <Input
                                placeholder='分'
                                type='number'
                                autoComplete='off'
                                {...register('minutes')}
                            />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <span className='w-8 text-sm'>秒</span>
                            <Input
                                placeholder='秒'
                                type='number'
                                autoComplete='off'
                                {...register('seconds')}
                            />
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <Button
                            type='submit'
                            className='bg-blue-500 text-white hover:bg-blue-600'
                        >
                            更新
                        </Button>
                        <Button
                            onClick={() => setIsOpen(false)}
                            className='bg-red-100  text-red-500 hover:bg-red-200 hover:text-red-600'
                        >
                            キャンセル
                        </Button>
                    </div>
                </form>
            </Transition>
        </>
    );
});

export default SetTime;

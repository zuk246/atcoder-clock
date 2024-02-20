import { Transition } from '@headlessui/react';
import { memo, useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { FaGear } from 'react-icons/fa6';
import { Input } from '../../components/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useCookies } from 'react-cookie';
import toast from 'react-hot-toast';

type FormType = {
    atcoderId: string;
};

const Settings = memo(() => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { register, handleSubmit, setValue } = useForm<FormType>();
    const [cookies, setCookie] = useCookies();

    const onSubmit: SubmitHandler<FormType> = (data) => {
        setCookie('atcoderId', data.atcoderId);
        setIsOpen(false);
    };

    const openModal = () => {
        setValue('atcoderId', cookies.atcoderId ?? '');
        setIsOpen(true);
    };

    useEffect(() => {
        if (!cookies.atcoderId || cookies.atcoderId === '') {
            setTimeout(() => {
                toast(
                    <div>
                        ようこそ！Atcoder Clockへ！
                        <br />{' '}
                        まずは、設定から自分のAtcoderのIDを登録しましょう😄
                    </div>,
                    {
                        position: 'top-left',
                        icon: '🎉',
                    }
                );
            }, 100);
        }
    }, []);

    return (
        <>
            <Button
                className='flex items-center gap-1 bg-white/40 backdrop-blur text-white hover:bg-white/60 md:w-auto w-28 justify-center'
                onClick={() => openModal()}
            >
                <FaGear size={14} />
                <span>設定</span>
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
                    <FaGear size={20} />
                    <span className='text-2xl font-bold'>設定</span>
                </h1>
                <p className='text-sm'>AtcoderのID設定</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='my-4'>
                        <Input
                            placeholder='Atcoder ID'
                            type='text'
                            autoComplete='off'
                            {...register('atcoderId')}
                        />
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

export default Settings;

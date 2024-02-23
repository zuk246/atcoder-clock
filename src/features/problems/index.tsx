import { memo, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import dayjs from 'dayjs';
import { FaClock, FaRegFaceDizzy, FaRegFaceLaughWink } from 'react-icons/fa6';
import { Transition } from '@headlessui/react';

type Props = {
    display: boolean;
    stopSound: () => void;
};

type Problem = {
    id: number;
    epoch_second: number;
    problem_id: string;
    contest_id: string;
    user_id: string;
    language: string;
    point: number;
    length: number;
    result: 'AC' | 'WA' | 'RE' | 'TLE';
    execution_time: number;
};

const Problems = memo((props: Props) => {
    const [data, setData] = useState<{
        isError: boolean;
        data: Problem | null;
    } | null>();
    const [atcoderId] = useCookies(['atcoderId']);

    const updateData = async () => {
        if (atcoderId.atcoderId === undefined) {
            setData({ isError: true, data: null });
            return;
        }
        const tar_date = dayjs().subtract(2, 'week').unix();

        await fetch(
            `https://kenkoooo.com/atcoder/atcoder-api/v3/user/submissions?user=${atcoderId.atcoderId}&from_second=${tar_date}`
        )
            .then((res) => res.json())
            .then((res: Problem[]) => {
                if (res.length === 0) {
                    setData({ isError: true, data: null });
                    return;
                }
                setData({
                    isError: false,
                    data: res[Math.floor(Math.random() * res.length)],
                });
            })
            .catch(() => {
                setData({ isError: true, data: null });
            });
    };

    useEffect(() => {
        if (props.display) {
            updateData();
        }
    }, [props.display]);

    return (
        <Transition
            show={props.display}
            enter='transition-opacity duration-700'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='sm:max-w-md fixed w-full sm:top-[26rem] sm:bottom-auto bottom-0 sm:p-5 p-5 pt-10 left-1/2 -translate-x-1/2 rounded-xl bg-white/25 shadow ring-1 ring-white/50 backdrop-blur-lg z-40'
        >
            <div className='py-4'>
                {!data?.isError && (
                    <FaClock size={75} className='mx-auto text-white' />
                )}
                {data?.isError && (
                    <FaRegFaceDizzy size={75} className='mx-auto text-white' />
                )}
            </div>
            <div>
                <h1 className='uppercase text-center text-3xl text-white font-bold line-clamp-1'>
                    {data?.data?.contest_id} - {data?.data?.problem_id}
                </h1>
                <div className='text-white p-5 bg-white/20 rounded-xl mt-3'>
                    <p className='text-center'>前回の結果</p>
                    <div className='flex flex-col gap-1 text-sm'>
                        <p>結果: {data?.data?.result}</p>
                        <p>実行時間: {data?.data?.execution_time} ms</p>
                        <p>コード長: {data?.data?.length} bytes</p>
                        <p>言語: {data?.data?.language}</p>
                        <p>得点: {data?.data?.point} 点</p>
                    </div>
                </div>
                <div className='mt-3'>
                    {!data?.isError && (
                        <a
                            href={`https://atcoder.jp/contests/${data?.data?.contest_id}/tasks/${data?.data?.problem_id}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            onClick={() => props.stopSound()}
                            className='w-full bg-blue-500 text-white hover:bg-blue-600 rounded-xl p-3 text-center font-bold block transition-all duration-300'
                        >
                            問題を解く
                        </a>
                    )}
                    {data?.isError && (
                        <div className='w-full bg-red-500 text-white hover:bg-red-600 rounded-xl p-3 text-center font-bold block transition-all duration-300'>
                            ID未設定又は提案する問題が存在しません
                        </div>
                    )}
                </div>
            </div>
        </Transition>
    );
});

export default Problems;

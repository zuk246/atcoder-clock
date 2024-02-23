import { Transition } from '@headlessui/react';

type Props = {
    display: boolean;
};

export default function Guide(props: Props) {
    return (
        <Transition
            show={props.display}
            enter='transition-opacity duration-700'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
            className='sm:max-w-md fixed w-full sm:top-[26rem] sm:bottom-auto bottom-0 sm:p-5 sm:pt-8 p-5 pt-10 left-1/2 -translate-x-1/2 rounded-xl bg-white/25 shadow ring-1 ring-white/50 backdrop-blur-lg z-40'
        >
            <div>
                <h2 className='text-center text-3xl text-white font-bold line-clamp-1'>
                    Atcoder Clockとは？
                </h2>
                <p className='text-center text-white mt-1'>
                    タイマーが完了すると問題を提案するアプリです。n分後に問題を解きたいや、アラームとしても最適です。
                </p>
            </div>
            <ul className='text-white p-5 bg-white/20 rounded-xl mt-3 list-decimal pl-12 pr-6 flex flex-col gap-1'>
                <li>設定からAtcoderのIDを設定します</li>
                <li>セットからタイマーの時間を決めます</li>
                <li>スタートでタイマーが開始します</li>
                <li>タイマーが完了すると問題が提案されます</li>
            </ul>
            <div className='text-white mt-2'>
                <p className='text-sm'>
                    提案される問題は、2週間前までに提出した中からランダムで選択されます。もし、提出したことがない場合はエラーが表示されます。
                </p>
            </div>
        </Transition>
    );
}

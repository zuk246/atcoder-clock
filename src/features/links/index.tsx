import { memo } from 'react';
import { FaGithub, FaQuestion, FaXTwitter } from 'react-icons/fa6';
import { SiBuymeacoffee } from 'react-icons/si';

const Links = memo(() => {
    return (
        <div className='flex gap-3 items-center md:flex-row flex-col'>
            <a
                href='https://twitter.com/zuk246'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/60'
            >
                <FaXTwitter size={24} />
            </a>
            <a
                href='https://github.com/zuk246/atcoder-timer'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/60'
            >
                <FaGithub size={24} />
            </a>
            <a
                href='https://www.buymeacoffee.com/zuk246'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/60'
            >
                <SiBuymeacoffee size={24} />
            </a>
            <a
                href='https://zenn.dev/iizuka0000/articles/atcoder-clock-introduction'
                target='_blank'
                rel='noopener noreferrer'
                className='text-white/60'
            >
                <FaQuestion size={24} />
            </a>
        </div>
    );
});

export default Links;

import fuji_bg from './../assets/background/fuji.webp';
import niagara_bg from './../assets/background/niagara.jpg';
import black_bg from './../assets/background/black.jpg';
import seoul_bg from './../assets/background/seoul.jpg';

export const images: {
    url: string;
    id: string;
    name: string;
    unsplash: string;
}[] = [
    {
        id: 'fuji',
        url: fuji_bg,
        name: '富士山',
        unsplash:
            'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%98%BC%E9%96%93%E3%81%AE%E8%8C%B6%E8%89%B2%E3%81%A8%E7%99%BD%E3%81%AE%E5%B1%B1-KZSDCocsOEE',
    },
    {
        id: 'niagara',
        url: niagara_bg,
        name: 'ナイアガラの滝',
        unsplash:
            'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%AD%A3%E6%96%B9%E5%BD%A2%E3%81%A8%E9%95%B7%E6%96%B9%E5%BD%A2%E3%81%AE%E7%99%BD%E9%BB%92%E5%86%99%E7%9C%9F-Kr6QMTQ1QTw?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
    {
        id: 'black',
        url: black_bg,
        name: 'ブラック',
        unsplash:
            'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E6%BB%9D%E3%81%AE%E3%82%BF%E3%82%A4%E3%83%A0%E3%83%A9%E3%83%97%E3%82%B9%E6%92%AE%E5%BD%B1-wZLsZ9DRLSI',
    },
    // Seoul
    {
        id: 'seoul',
        url: seoul_bg,
        name: 'ソウル',
        unsplash:
            'https://unsplash.com/ja/%E5%86%99%E7%9C%9F/%E5%A4%9C%E6%98%8E%E3%81%91%E3%81%AE%E3%83%A9%E3%82%A4%E3%83%88%E3%82%A2%E3%83%83%E3%83%97%E3%81%95%E3%82%8C%E3%81%9F%E9%83%BD%E5%B8%82%E3%81%AE%E9%AB%98%E5%B1%A4%E3%83%93%E3%83%AB%E3%81%AE%E8%88%AA%E7%A9%BA%E5%86%99%E7%9C%9F-01hH6y7oZFk?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash',
    },
];

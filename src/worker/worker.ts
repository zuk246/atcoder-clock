self.addEventListener('message', (e: MessageEvent<{ time: number }>) => {
    let remainTime = e.data.time;
    const intervalId = setInterval(() => {
        remainTime--;
        self.postMessage({ remainTime });

        if (remainTime <= 0) {
            // stop interval
            clearInterval(intervalId);

            // notification
            const notification = new Notification('タイマー完了', {
                body: '問題を解く時間になりました！',
                icon: '/atcoder-clock.png',
            });
            notification.onclick = () => {
                window.focus();
            };
        }
    }, 1000);
});

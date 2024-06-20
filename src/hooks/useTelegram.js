import {useMemo} from 'react';

const useTelegram = () => {
  const tg = window.Telegram.WebApp;

  return useMemo(() => ({
    tg,
    user: tg.initDataUnsafe?.user || {id: 'defaultUsername', scores: 0, username: 'defaultUsername', val: 'AAAA'},
  }), [tg]);
};

export default useTelegram;

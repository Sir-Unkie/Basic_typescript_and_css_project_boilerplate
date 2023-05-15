import { useSelector } from 'react-redux';

import { CounterControls } from '@features/changeCounter';

import { selectCount } from '@entities/count';

import { ValueViewer } from '@shared/ui';

import Star from '@assets/svg/check-circle-svgrepo-com.svg';

export const CountWidget = () => {
  const counterValue = useSelector(selectCount);

  return (
    <>
      <Star />
      <ValueViewer value={counterValue ?? 0} />
      <CounterControls />
    </>
  );
};

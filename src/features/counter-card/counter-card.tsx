import { useSelector } from 'react-redux';

import { ValueViewer } from '@shared/components';
import { selectCount } from '@shared/store/counter';

import Star from '@assets/svg/check-circle-svgrepo-com.svg';

import { CounterControls } from './counter-controls';

export const CounterCard = () => {
  const counterValue = useSelector(selectCount);

  return (
    <>
      <Star />
      <ValueViewer value={counterValue ?? 0} />
      <CounterControls />
    </>
  );
};

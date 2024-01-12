import { useEffect, useContext } from 'react';
import { CrashGameContext } from '../../../../core/providers/games/crash-game.provider';

import './Style.css';

export default function BetsTab() {
  const { registeredBets, getRegisteredBets } = useContext(CrashGameContext);

  const sum = (bets = []) => {
    let sum = 0;
    bets.forEach((bet) => {
      sum += parseFloat(bet.amount);
    });

    return sum.toFixed(2);
  };

  useEffect(() => {
    getRegisteredBets();
  }, [getRegisteredBets]);

  return (
    <>
      <div>Rodada : <span className='RoundValue'>R$ {sum(registeredBets)}</span></div>
    </>
  );
}

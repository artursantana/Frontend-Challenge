import React, { useContext, useEffect } from 'react';
import { UserIcon } from '@heroicons/react/24/outline';
import { CrashGameContext } from '../../../../../../core/providers/games/crash-game.provider';

export default function Header() {
  const { registeredBets, getRegisteredBets } = useContext(CrashGameContext);

  useEffect(() => {
    getRegisteredBets();
  }, []);

  return (
    <div className="w-full bg-transparent rounded z-10 grid-cols-5 flex items-center text-xs p-2">
      <h1 className="w-1/4 flex gap-3 items-center font-bold">
        <div className="flex items-center gap-1">
          <UserIcon className="h-3.5 w-3.5" />
          <div className="text-sm">{registeredBets.length}</div>
        </div>
      </h1>
      <h1 className="w-1/4 text-center font-bold">Valor</h1>
      <h1 className="w-1/4 text-center font-bold">Odd</h1>
      <div className="w-1/4 text-right font-bold">Lucro</div>
    </div>
  );
}

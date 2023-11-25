export const ACTION_TYPE = {
  INCREASE: 'increase',
  DESCREASE: 'descrease'
} as const;


export const increase = () => ({ type: ACTION_TYPE.INCREASE, payload: 10 });
export const descrease = () => ({ type: ACTION_TYPE.DESCREASE, payload: {} });

export type ActionType = typeof ACTION_TYPE[keyof typeof ACTION_TYPE];
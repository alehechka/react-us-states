import states from 'states-us';

export interface StateObject {
  name: string;
  abbreviation: string;
  territory: boolean;
  contiguous: boolean;
}

export interface StateMap {
  [abbreviation: string]: string;
}

export interface FullStateMap {
  [abbreviation: string]: StateObject;
}

export type StateTuple = [string, string, boolean, boolean];

export const useStates = (): StateObject[] => {
  return states;
};

export const useStateMap = (): StateMap => {
  const states = useStates();
  return states.reduce((obj, state) => {
    obj[state.abbreviation] = state.name;
    return obj;
  }, {} as StateMap);
};

export const useFullStateMap = (): FullStateMap => {
  const states = useStates();
  return states.reduce((obj, state) => {
    obj[state.abbreviation] = state;
    return obj;
  }, {} as FullStateMap);
};

export const useStateTuples = (): StateTuple[] => {
  const states = useStates();
  return states.map(
    state =>
      [
        state.name,
        state.abbreviation,
        state.territory,
        state.contiguous,
      ] as StateTuple
  );
};

export const useStateNameLookup = (abbreviation: string): string => {
  const statesMap = useStateMap();
  return statesMap[abbreviation.toUpperCase()];
};

export const useStateObjectLookup = (abbreviation: string): StateObject => {
  const fullStateMap = useFullStateMap();
  return fullStateMap[abbreviation.toUpperCase()];
};

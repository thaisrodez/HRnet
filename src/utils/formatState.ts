interface State {
  name: string
  abbreviation: string
}

interface FormatedState {
  key: string
  name: string
}

export function formatState(states: State[]): FormatedState[] {
  return states.map((state) => ({
    key: state.name,
    name: state.name,
  }))
}

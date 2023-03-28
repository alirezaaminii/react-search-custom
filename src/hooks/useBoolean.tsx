import * as React from 'react';

export function useBoolean(initialState: boolean = false) {
	const [state, setState] = React.useState(initialState);

	const handlers = React.useMemo(
		() => ({
			setTrue: () => {
				setState(true);
			},
			setFalse: () => {
				setState(false);
			},
			toggle: () => {
				setState(s => !s);
			},
			reset: () => {
				setState(initialState);
			},
			change: (state: boolean) => {
				setState(state);
			},
		}),
		[initialState],
	);

	return [state, handlers] as const;
}

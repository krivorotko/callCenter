import Animated, { Easing } from 'react-native-reanimated';

const { cond, Value, set, clockRunning, startClock, stopClock, timing } = Animated;

export function runTiming(clock, value, dest, startStopClock = true) {
	const state = {
		finished: new Value(0),
		position: new Value(0),
		frameTime: new Value(0),
		time: new Value(0),
	};

	const config = {
		toValue: new Value(0),
		duration: 300,
		easing: Easing.inOut(Easing.cubic),
	};

	return [
		cond(clockRunning(clock), 0, [
			set(state.finished, 0),
			set(state.frameTime, 0),
			set(state.time, 0),
			set(state.position, value),
			set(config.toValue, dest),
			startStopClock && startClock(clock),
		]),
		timing(clock, state, config),
		cond(state.finished, startStopClock && stopClock(clock)),
		state.position,
	];
}

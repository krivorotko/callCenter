import React, { useState, useMemo } from "react";
import Animated from "react-native-reanimated";
import { interpolateColor } from "./animateColor";

const {
  cond,
  eq,
  call,
  Clock,
  Value,
  set,
  clockRunning,
  startClock,
  stopClock,
  spring,
  and,
  useCode,
  block,
  not,
} = Animated;

// Stolen from reanimated example code
function runSpring(clock, value, velocity, dest) {
  const state = {
    finished: new Value(0),
    velocity: new Value(0),
    position: new Value(0),
    time: new Value(0),
  };

  const config = {
    damping: 14,
    mass: 2,
    stiffness: 120,
    overshootClamping: true,
    restSpeedThreshold: 0.001,
    restDisplacementThreshold: 0.001,
    toValue: new Value(0),
  };

  return [
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.velocity, velocity),
      set(state.position, value),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    spring(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ];
}

export const useOpenCloseTransition = ({ animatedValue, from, to }) => {
  const [state, setState] = useState({
    isOpen: true, action: () => {
    },
  });
  const clock = useMemo(() => new Clock(), []);

  useCode(() => {
    return block([
      set(animatedValue, runSpring(clock, animatedValue, 0, state.isOpen ? to : from)),
      cond(and(not(clockRunning(clock)), eq(state.isOpen, false)), [call([], state.action)]),
    ]);
  }, [state.isOpen]);

  const backgroundColor = interpolateColor(animatedValue, {
    inputRange: [to, from],
    outputRange: ["rgba(21,21,21,0.5)", "rgba(0,0,0,0)"],
  });

  return [backgroundColor, setState];
};

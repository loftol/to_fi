import {useRef} from 'react';

import {Animated, Keyboard} from 'react-native';

import {useDispatch} from 'react-redux';

import {openInfo, closeInfo} from '../../../common/infoOpened';

class Vertical {
  public pan = useRef(new Animated.Value(0)).current;

  private unitHeight: number;

  private openDegreeHeight: Array<number>;

  public openDegree: number;

  constructor(windowHeight: number) {
    this.unitHeight = -windowHeight;
    this.openDegreeHeight = [0, -windowHeight * 0.4, -windowHeight * 0.8];
    this.openDegree = 0;
  }

  private changeLevel = (
    val: number,
    dispatch: ReturnType<typeof useDispatch>,
  ) => {
    if (val > this.openDegreeHeight[1]) {
      this.openDegree = 0;
      dispatch(closeInfo(''));
    } else if (
      val < this.openDegreeHeight[1] &&
      val > this.openDegreeHeight[2]
    ) {
      this.openDegree = 1;
      dispatch(closeInfo(''));
    } else if (this.openDegreeHeight[2] >= val) {
      this.openDegree = 2;
      dispatch(openInfo(''));
    }
  };

  public onMove(dy: number) {
    if (this.openDegree === 2 && -this.unitHeight * 0.4 < dy) return;

    const nextPos = this.openDegreeHeight[this.openDegree] + dy;
    if (nextPos >= 0.85 * this.unitHeight) this.pan.setValue(nextPos);
  }

  public onRelease(
    vy: number,
    dy: number,
    dispatch: ReturnType<typeof useDispatch>,
  ) {
    if (vy < -1) {
      this.openDegree = 2;
      dispatch(openInfo(''));
    } else if (vy > 1) {
      this.openDegree = 0;
      dispatch(closeInfo(''));
    } else {
      const nextPos = this.openDegreeHeight[this.openDegree] + dy;
      this.changeLevel(nextPos, dispatch);
    }

    Animated.spring(this.pan, {
      toValue: this.openDegreeHeight[this.openDegree],
      useNativeDriver: true,
    }).start();
  }

  public cleanUp(infoOpened: boolean) {
    if (!infoOpened && this.openDegree === 2) {
      Keyboard.dismiss();
      this.openDegree = 0;
      Animated.spring(this.pan, {
        toValue: this.openDegreeHeight[0],
        useNativeDriver: true,
      }).start();
    }
  }
}

export default Vertical;

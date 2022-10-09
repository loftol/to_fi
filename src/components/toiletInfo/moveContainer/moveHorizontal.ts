import {useRef} from 'react';

import {Animated} from 'react-native';

class Horizontal {
  public pan = useRef(new Animated.Value(0)).current;

  private unitWidth: number;

  private itemSection: Array<number>;

  private selectedItem = 0;

  private itemCount: number;

  constructor(windowWidth: number, itemCount: number) {
    this.unitWidth = windowWidth;
    this.itemSection = [
      windowWidth * 0,
      windowWidth * 1,
      windowWidth * 2,
      windowWidth * 3,
      windowWidth * 4,
    ];
    this.itemCount = itemCount;
  }

  private whichItemSelected(dx: number) {
    if (dx <= -this.unitWidth * 0.4 && this.selectedItem !== 4) {
      this.selectedItem += 1;
    }
    if (this.unitWidth <= dx && this.selectedItem !== 0) {
      this.selectedItem -= 1;
    }
  }

  public onMove(dx: number) {
    this.pan.setValue(-this.itemSection[this.selectedItem] + dx);
  }

  public onRelease(vx: number, dx: number) {
    if (vx < -1) {
      this.selectedItem =
        this.selectedItem === 4 ? this.selectedItem : this.selectedItem + 1;
    } else if (vx > 1) {
      this.selectedItem =
        this.selectedItem === 0 ? this.selectedItem : this.selectedItem - 1;
    } else {
      this.whichItemSelected(dx);
    }
    Animated.spring(this.pan, {
      toValue: -this.itemSection[this.selectedItem],
      useNativeDriver: true,
    }).start();
  }
}

export default Horizontal;

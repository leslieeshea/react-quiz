import React, { PureComponent } from 'react';
import TextSelector from '../TextSelector';
import ColorSelector from '../ColorSelector';
import Shape from '../Shape';

export default class NameTag extends PureComponent {
  render() {
    const { text, color, backgroundColor } = this.state;

    return (
      <>
        <TextSelector text={text} />
        <ColorSelector color={color} backgroundColor={backgroundColor} />
        <Shape />
      </>
    );
  }
}

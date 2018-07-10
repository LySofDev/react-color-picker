import * as React from 'react';
import { Banner, Colors, Container, Swatch, Title } from './color-picker.styles';

interface ColorPickerLayoutProps {
  colors: string[];
  selectedColor: string;
  onColorClear: () => void;
  onColorSelect: (color: string) => () => void;
}

export default (props: ColorPickerLayoutProps) => (
  <Container>

    <Banner color={props.selectedColor}>
      <Title>{ props.selectedColor }</Title>
    </Banner>

    <Colors>
      <Swatch onClick={props.onColorClear} />
      { props.colors.map((color: string) => (
        <Swatch
          color={color}
          onClick={props.onColorSelect(color)}
        />
      ))}
    </Colors>

  </Container>
);

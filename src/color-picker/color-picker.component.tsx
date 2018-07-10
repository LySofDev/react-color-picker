import * as React from 'react';
import { default as ColorPickerLayout } from './color-picker.layout';
import { default as ColorsService } from './colors.service';

interface ColorPickerProps {
    colorsService: ColorsService
}

interface ColorPickerState {
    colors: string[];
    selectedColor: string;
}

export default class ColorPickerComponent extends React.Component<ColorPickerProps, ColorPickerState> {
  public state = {
    colors: [],
    selectedColor: "none"
  };

  public componentWillMount() {
    this.props.colorsService.getColors().then((colors: string[]) => {
      this.setState({ colors });
    });
  }

  public render() {
    return (
      <ColorPickerLayout
        colors={this.state.colors}
        selectedColor={this.state.selectedColor}
        onColorSelect={this.setSelectedColor}
        onColorClear={this.clearSelectedColor}
      />
    );
  }

  private setSelectedColor = (color: string): () => void => {
    return () => this.setState({ selectedColor: color });
  }

  private clearSelectedColor = () => {
    this.setState({ selectedColor: "none" });
  }
}

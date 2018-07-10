import * as React from 'react';
import { default as ColorPickerLayout } from './color-picker.layout';
import { default as ColorsService } from './colors.service';

/**
* Description of values, functions and services for component.
*/
interface ColorPickerProps {
    colorsService: ColorsService
}

/**
* Components internal state
*/
interface ColorPickerState {
    colors: string[];
    selectedColor: string;
}

/*
* Stateful component
*/
export default class ColorPickerComponent extends React.Component<ColorPickerProps, ColorPickerState> {
  // Initiate default values
  public state = {
    colors: [],
    selectedColor: "none"
  };

  /**
  * Request the colors to be displayed before mount.
  */
  public componentWillMount() {
    this.props.colorsService.getColors().then((colors: string[]) => {
      this.setState({ colors });
    });
  }

  /**
  * Render the layout component with props from the component
  */
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

  /**
  * Set a color as the selected color in state
  * @param color The HEX value for the selected color as a string
  * @returns A callback function for the event dispatcher
  */
  private setSelectedColor = (color: string): () => void => {
    return () => this.setState({ selectedColor: color });
  }

  /**
  * Reset the selected color to 'none'
  */
  private clearSelectedColor = () => {
    this.setState({ selectedColor: "none" });
  }
  
}

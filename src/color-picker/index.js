import * as React from 'react';

import { default as ColorPickerComponent } from './color-picker.component';

import { default as ColorsService } from './colors.service';

/**
 * Provide the component with injected services
 */
export const ColorPicker = () => (
  <ColorPickerComponent
    colorsService={new ColorsService()}
  />
);

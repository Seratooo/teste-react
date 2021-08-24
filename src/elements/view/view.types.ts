import { CSSProperties, HTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface ViewProps
  extends ColorProps,
    SpaceProps,
    BorderProps,
    LayoutProps,
    DisplayProps,
    BackgroundProps,
    ShadowProps,
    TypographyProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  transition?: CSSProperties['transition'];
}

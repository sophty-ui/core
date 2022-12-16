import { DetailedHTMLProps, HTMLAttributes, Key, ReactElement, ReactNode } from 'react';

import { CSSDataType } from '../../../typings/css';

export interface IAreaProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  _area?: Key | null;
  children: ReactNode;
  height?: CSSDataType.TrackBreadth | number;
  key: string;
  semantic?: 'div' | 'aside' | 'footer' | 'header' | 'main' | 'nav' | 'section';
  width?: CSSDataType.TrackBreadth | number;
}

const Area = ({ _area, height, width, children, style = {}, semantic = 'div', ...props }: IAreaProps): ReactElement => {
  const Tag = `${semantic}` as typeof semantic;

  return (
    <Tag
      {...props}
      style={{
        ...style,
        gridArea: _area ?? undefined,
        display: 'inline-grid',
        width: typeof width === 'number' ? width : undefined,
        height: typeof height === 'number' ? height : undefined,
      }}
    >
      {children}
    </Tag>
  );
};

export default Area;

import * as React from 'react';
import './icon.scss';
import './importAll';

import { classNames } from '../utils/classNames';

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
}

const Icon: React.FunctionComponent<IconProps> = ({
  className,
  style,
  name,
  ...restProps
}) => {
  return (
    <span {...restProps}>
      <svg className={classNames('m-Icon', className)} style={style}>
        <use xlinkHref={`#${name}`} />
      </svg>
    </span>
  );
};

export default Icon;

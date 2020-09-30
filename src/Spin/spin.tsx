import * as React from 'react';
import { useState, Fragment, useEffect } from 'react';
import './spin.less';
import { createScopedClasses } from '@/utils/classNames';

const sc = createScopedClasses('spin');

interface SpinProps {
  size?: number;
  tip?: string;
  indicator?: React.ReactNode;
  delay?: number;
}

const Spin: React.FunctionComponent<SpinProps> = ({
  size,
  tip,
  indicator,
  delay,
}) => {
  const [spinning, setSpin] = useState(!delay);

  useEffect(() => {
    if (!delay) return;
    const timer = setTimeout(() => {
      setSpin(true);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [delay]);

  const sizeStyle = React.useMemo<React.CSSProperties>(
    () => ({
      width: `${size}px`,
      height: `${size}px`,
    }),
    [],
  );

  return (
    <Fragment>
      {spinning ? (
        <div className={sc()}>
          {indicator ? (
            indicator
          ) : (
            <div className={sc('donut')} style={sizeStyle}></div>
          )}
          <div className={sc('tip')}>{tip}</div>
        </div>
      ) : (
        ''
      )}
    </Fragment>
  );
};

Spin.defaultProps = {
  size: 24,
};

export default Spin;

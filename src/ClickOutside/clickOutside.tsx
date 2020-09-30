import * as React from 'react';
import { HTMLAttributes, PureComponent } from 'react';
import { RefObject } from 'react';
import './clickOutside.less';
import { createScopedClasses } from '@/utils/classNames';

const componentName = 'ClickOutside';
const sc = createScopedClasses(componentName);

export interface IProps extends HTMLAttributes<HTMLDivElement> {
  handler?: (e: React.MouseEvent) => void;
  exclude?: RefObject<Element>;
}

class ClickOutside extends PureComponent<IProps> {
  static displayName = componentName;
  private readonly myRef: RefObject<HTMLDivElement>;

  constructor(props: IProps) {
    super(props);
    this.myRef = React.createRef();
  }

  handler = (e: MouseEvent | TouchEvent) => {
    if (this.myRef.current === null) {
      return;
    }
    if (
      this.props.exclude &&
      this.props.exclude.current &&
      this.props.exclude.current.contains(e.target as Node)
    ) {
      return;
    }
    if (!document.contains(e.target as Node)) {
      return;
    }
    if (!this.myRef.current.contains(e.target as Node)) {
      this.props.handler && this.props.handler.call(e.target, e as any);
    }
  };

  componentDidMount(): void {
    if (this.props.handler) {
      document.addEventListener('click', this.handler);
    }
  }

  componentWillUnmount(): void {
    if (this.props.handler) {
      document.removeEventListener('click', this.handler);
    }
  }

  render() {
    const { handler, exclude, children, ...restProps } = this.props;
    return (
      <div className={sc()} ref={this.myRef} {...restProps}>
        {children}
      </div>
    );
  }
}

export default ClickOutside;

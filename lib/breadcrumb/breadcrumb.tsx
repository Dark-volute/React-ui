import * as React from 'react';
import {createScopedClasses} from '../utils/classNames';
import {ReactChild} from 'react';
import './breadcrumb.scss';

const componentName = 'breadcrumb';
const sc = createScopedClasses(componentName);

export interface xBreadcrumbItem {
    text: string;
    link: string;
}

export type BI = xBreadcrumbItem;

export type Renderer = (item: BI, index: number, items: BI[]) => ReactChild;

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
    routes?: BI[];
    separator?: ReactChild;
    renderer?: Renderer;
}

type AddSeparator = (sum: ReactChild[], item: ReactChild, index: number, array: ReactChild[]) => ReactChild[]

const renderItem: Renderer = (item, index, array) =>
    index === array.length - 1 ?
        <span className={sc('item')} key={item.link}>{item.text}</span> :
        <a className={sc('link')} href={item.link} key={item.link}>{item.text}</a>;

const createSeparator = (key: string | number, separator: ReactChild) =>
    <span className={sc('separator')} key={key}>{separator}</span>;

const Breadcrumb: React.FunctionComponent<BreadcrumbProps> = (props) => {
    const addSeparator: AddSeparator =  (sum, item, index, array) =>  sum.concat(array[index + 1] ? [item, createSeparator(index, props.separator!)] : [item]);

    const content = props.routes && props.routes.map<ReactChild>(props.renderer!).reduce<ReactChild[]>(addSeparator, []);

    return (
        <div className={sc()}>
            {content}
        </div>
    );
};


Breadcrumb.defaultProps = {
    separator: '/',
    renderer: renderItem,
};

export default Breadcrumb;
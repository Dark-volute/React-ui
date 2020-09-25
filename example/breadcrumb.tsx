import * as React from 'react';
import Breadcrumb, { Renderer } from '../lib/breadcrumb/breadcrumb';

export default function(props: any) {
  const routes = [
    { text: 'Home', link: '/#/Icon' },
    { text: 'Application Lis', link: '/#/tab' },
    { text: 'An Application', link: '/#/Index' },
  ];
  const renderer: Renderer = (item, index: number, items) => (
    <span key={item.link}>{item.text}</span>
  );
  return (
    <div className="BreadcrumbExample">
      <Breadcrumb routes={routes} />
      <Breadcrumb routes={routes} renderer={renderer} separator=">" />
    </div>
  );
}

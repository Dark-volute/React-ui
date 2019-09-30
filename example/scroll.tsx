import * as React from 'react';
import {InfiniteScroll} from '../lib/index';

export default class A extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            items: Array.from({length:12}).fill(1),
            hasMore:true
        }
    }


    componentDidMount(): void {

    }

    loadFunc(page) {
        console.log(1,page);
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat([2, 2, 2, 2, 2, 2]),
            })
        }, 500)

        if(page === 10)  this.setState({ hasMore:false })

    }

    render() {


        return (
            <div style={{height:'400px',overflow:'auto'}} className='x-infiniteScroll-demo'>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadFunc.bind(this)}
                    hasMore={this.state.hasMore}
                    // loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}
                >
                    {this.state.items.map((v,i) => <p key={i}>{v}</p>)}
                </InfiniteScroll>
            </div>
        );
    }
}
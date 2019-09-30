import * as React from 'react';
import {Spin} from 'lib'


export default class InfiniteScroll extends React.Component<any, any> {

    static defaultProps = {
        element: 'div',
        hasMore: false,
        initialLoad: true,
        pageStart: 0,
        ref: null,
        threshold: 250,
        useWindow: true,
        isReverse: false,
        useCapture: false,
        loader: null,
        getScrollParent: null
    };

    options: {
        useCapture: boolean,
        passive: boolean
    }
    pageLoaded: number
    scrollComponent: HTMLElement
    loadMore: boolean
    beforeScrollHeight: number
    beforeScrollTop: number
    defaultLoader: React.ReactNode

    constructor(props) {
        super(props);

        this.scrollListener = this.scrollListener.bind(this);
        this.eventListenerOptions = this.eventListenerOptions.bind(this);
        this.mousewheelListener = this.mousewheelListener.bind(this);
    }

    componentDidMount() {
        this.pageLoaded = this.props.pageStart;
        this.options = this.eventListenerOptions();
        this.attachScrollListener();
        this.setDefaultLoader(<Spin  size={24} key={0}/>)
    }

    componentDidUpdate() {
        if (this.props.isReverse && this.loadMore) {
            const parentElement = this.getParentElement(this.scrollComponent);
            parentElement.scrollTop =
                parentElement.scrollHeight -
                this.beforeScrollHeight +
                this.beforeScrollTop;
            this.loadMore = false;
        }
        this.attachScrollListener();
    }

    componentWillUnmount() {
        this.detachScrollListener();
        this.detachMousewheelListener();
    }

    isPassiveSupported() {
        let passive = false;

        const testOptions: any = {
            get passive() {
                passive = true;
                return
            }
        };

        try {
            document.addEventListener!('test', null!, testOptions);
            document.removeEventListener!('test', null!, testOptions);
        } catch (e) {
        }
        return passive;
    }

    eventListenerOptions() {
        let options = this.props.useCapture;

        if (this.isPassiveSupported()) {
            options = {
                useCapture: this.props.useCapture,
                passive: true
            };
        }
        return options;
    }

    // Set a defaut loader for all your `InfiniteScroll` components
    setDefaultLoader(loader) {
        this.defaultLoader = loader;
    }

    detachMousewheelListener() {
        let scrollEl: any = window;
        if (this.props.useWindow === false) {
            scrollEl = this.scrollComponent.parentNode;
        }

        scrollEl.removeEventListener(
            'mousewheel',
            this.mousewheelListener,
            this.options ? this.options : this.props.useCapture
        );
    }

    detachScrollListener() {
        let scrollEl = window;
        if (this.props.useWindow === false) {
            scrollEl = this.getParentElement(this.scrollComponent);
        }

        scrollEl.removeEventListener(
            'scroll',
            this.scrollListener,
            this.options ? this.options : this.props.useCapture
        );
        scrollEl.removeEventListener(
            'resize',
            this.scrollListener,
            this.options ? this.options : this.props.useCapture
        );
    }

    getParentElement(el) {
        const scrollParent =
            this.props.getScrollParent && this.props.getScrollParent();
        if (scrollParent != null) {
            return scrollParent;
        }
        return el && el.parentNode;
    }

    filterProps(props) {
        return props;
    }

    attachScrollListener() {
        const parentElement = this.getParentElement(this.scrollComponent);

        if (!this.props.hasMore || !parentElement) {
            return;
        }

        let scrollEl = window;
        if (this.props.useWindow === false) {
            scrollEl = parentElement;
        }

        scrollEl.addEventListener(
            'mousewheel',
            this.mousewheelListener,
            this.options ? this.options : this.props.useCapture
        );
        scrollEl.addEventListener(
            'scroll',
            this.scrollListener,
            this.options ? this.options : this.props.useCapture
        );
        scrollEl.addEventListener(
            'resize',
            this.scrollListener,
            this.options ? this.options : this.props.useCapture
        );

        if (this.props.initialLoad) {
            this.scrollListener();
        }
    }

    mousewheelListener(e) {
        if (e.deltaY === 1 && !this.isPassiveSupported()) {
            e.preventDefault();
        }
    }

    scrollListener() {
        const el: HTMLElement = this.scrollComponent;
        const scrollEl = window;
        const parentNode = this.getParentElement(el);

        let offset;
        if (this.props.useWindow) {
            const doc =
                document.documentElement || document.body.parentNode || document.body;
            const scrollTop =
                scrollEl.pageYOffset !== undefined
                    ? scrollEl.pageYOffset
                    : doc.scrollTop;
            if (this.props.isReverse) {
                offset = scrollTop;
            } else {
                offset = this.calculateOffset(el, scrollTop);
            }
        } else if (this.props.isReverse) {
            offset = parentNode.scrollTop;
        } else {
            offset = el.scrollHeight - parentNode.scrollTop - parentNode.clientHeight;
        }

        // Here we make sure the element is visible as well as checking the offset
        if (
            offset < Number(this.props.threshold) &&
            (el && el.offsetParent !== null)
        ) {
            this.detachScrollListener();
            this.beforeScrollHeight = parentNode.scrollHeight;
            this.beforeScrollTop = parentNode.scrollTop;
            // Call loadMore after detachScrollListener to allow for non-async loadMore functions
            if (typeof this.props.loadMore === 'function') {
                this.props.loadMore((this.pageLoaded += 1));
                this.loadMore = true;
            }
        }
    }

    calculateOffset(el, scrollTop) {
        if (!el) {
            return 0;
        }

        return (
            this.calculateTopPosition(el) +
            (el.offsetHeight - scrollTop - window.innerHeight)
        );
    }

    calculateTopPosition(el) {
        if (!el) {
            return 0;
        }
        return el.offsetTop + this.calculateTopPosition(el.offsetParent);
    }

    render() {
        const renderProps = this.filterProps(this.props);
        const {
            children,
            element,
            hasMore,
            initialLoad,
            isReverse,
            loader,
            loadMore,
            pageStart,
            ref,
            threshold,
            useCapture,
            useWindow,
            getScrollParent,
            ...props
        } = renderProps;

        props.ref = node => {
            this.scrollComponent = node;
            if (ref) {
                ref(node);
            }
        };

        const childrenArray = [children];
        if (hasMore) {
            if (loader) {
                isReverse ? childrenArray.unshift(loader) : childrenArray.push(loader);
            } else if (this.defaultLoader) {
                isReverse
                    ? childrenArray.unshift(this.defaultLoader)
                    : childrenArray.push(this.defaultLoader);
            }
        }
        return React.createElement(element, props, childrenArray);
    }
}
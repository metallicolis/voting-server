import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    mixins: [PureRenderMixin],

    render: function () {
        return <div className="winner">
            Winner id {this.props.winner}!
        </div>;
    }
});
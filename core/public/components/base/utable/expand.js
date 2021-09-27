export default {
    name: 'TableExpand',
    functionl: true,
    props: {
        row: Object, // 列表信息
        render: Function, // 按钮信息
        index: Number,
        column: {
            type: Object,
            default: null,
        }
    },
    render: (h, ctx) => {
        // eslint-disable-next-line no-console
        console.log('ctx-->',h ,ctx);
        const params = {
            row: ctx.props.row,
            index: ctx.props.index
        };
        if (ctx.props.column) {
            params.column = ctx.props.column;
        }
        return ctx.props.render(h, params, ctx.props.row[ctx.props.column.key]);
    }
}
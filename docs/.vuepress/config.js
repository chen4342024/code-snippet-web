module.exports = {
    base: '/code-snippet/',
    title: '常用代码片段收集',
    description: '常用代码片段收集',
    themeConfig: {
        displayAllHeaders: true,
        sidebar: [{
            title: 'JS 相关',
            collapsable: false,
            children: [
                'js/calcu',
                'js/dom',
                'js/env',
                'js/is',
                'js/reg',
                'js/util',
                'js/date',
                'js/throttled',
                'js/url',
            ]
        }, {
            title: 'CSS 相关',
            collapsable: false,
            children: [
                'css/style'
            ]
        }, ]
    }
}
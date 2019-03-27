module.exports = {
    "extends": "stylelint-config-standard",
    "rules": {
        /**指定小写十六进制的颜色 */
        "color-hex-case": "lower",
        //禁止无效的十六进制颜色
        "color-no-invalid-hex": true,
        //指定小写单位
        "unit-case": "lower",
        //禁止未知的单位
        "unit-no-unknown": true,
        //媒体查询 使用小写
        "media-feature-name-case": "lower",
        //指定tab缩进
        "indentation": "tab",
        //不允许动画名称不对应@keyframes声明。
        "no-unknown-animations": true,
        //不允许关闭括号前空一行
        "block-closing-brace-empty-line-before": "never",
        //伪类选择器指定小写
        "selector-pseudo-element-case": "lower",
        //不允许嵌套规则前空一格
        "rule-empty-line-before": "never",
        //禁止在数量尾随零
        "number-no-trailing-zeros": true,
        //不允许在简写属性冗余值。
        "shorthand-property-no-redundant-values": true
    }
}
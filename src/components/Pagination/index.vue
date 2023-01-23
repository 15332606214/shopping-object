<template>
    <div class="pagination">
        <button>上一页</button>
        <button>1</button>
        <button class="disable">...</button>
        <button>3</button>
        <button>4</button>
        <button class="active">5</button>
        <button>6</button>
        <button>7</button>
        <button class="disable">...</button>
        <button>12</button>
        <button>下一页</button>
        <button class="disable">共35条</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: { //当前页码
            type: Number,
            default: 1
        },
        total: { //总码数
            type: Number,
            default: 0
        },
        pageSize: { //每页最大数量
            type: Number,
            default: 10
        },
        showPageNo: { //最大连续页码数
            type: Number,
            default: 5,
            // 要求传入值为奇数
            validator: function (value) {
                return value % 2 === 1
            }
        }
    },
    data() {
        return {
            myCurrentPage: this.currentPage //初始值由父组件传入的值决定
        }
    },
    computed: {
        // 总页数
        totalPages() {
            const { total, pageSize } = this
            return Math.ceil(total / pageSize)
        },
        // state/end连续页码数的开始页码与结束页码
        stateEnd() {
            let state, end
            const { currentPage, showPageNo, totalPages } = this
            // 计算state

            // 计算end
        }

    }

}

</script>

<style scoped lang="less">
.pagination {
    button {
        margin: 0 5px;
        background-color: #f4f4f5;
        color: #606266;
        outline: none;
        border-radius: 2px;
        padding: 0 4px;
        vertical-align: top;
        display: inline-block;
        font-size: 13px;
        min-width: 35.5px;
        height: 28px;
        line-height: 28px;
        cursor: pointer;
        box-sizing: border-box;
        text-align: center;
        border: 0;

        &.active {
            background-color: skyblue;
            color: white;
            cursor: no-drop;
        }

        &.disable {
            color: #ccc;
            cursor: no-drop;
        }
    }

}
</style>
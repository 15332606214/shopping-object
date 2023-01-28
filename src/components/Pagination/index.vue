<template>
    <div class="pagination">
        <button :disabled="myCurrentPage === 1" :class="{ disable: myCurrentPage === 1 }"
            @click="setCurrentPage(myCurrentPage - 1)">上一页</button>
        <button v-if="startEnd.start != 1">1</button>
        <button class="disable" v-if="startEnd.start > 2">...</button>

        <button v-for="item in startEndArr" :key="item" :class="{ active: item === myCurrentPage }"
            @click="setCurrentPage(item)">{{ item }}</button>

        <button class="disable" v-if="startEnd.end < totalPages - 1">...</button>
        <button v-if="startEnd.end < totalPages" @click="setCurrentPage(totalPages)">{{ totalPages }}</button>
        <button :disabled="myCurrentPage === totalPages" :class="{ disable: myCurrentPage === totalPages }"
            @click="setCurrentPage(myCurrentPage + 1)">下一页</button>
        <button class="disable">共{{ total }}条</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        currentPage: { //当前页码
            type: Number,
            default: 4
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
    watch: {
        // 子组件监视父组件传入的数据变化
        currentPage(value) {
            this.myCurrentPage = value
        }
    },
    data() {
        return {
            myCurrentPage: this.currentPage //初始值由父组件传入的值决定
        }
    },
    methods: {
        /* 切换页码 */
        setCurrentPage(page) {
            // 如果页码没变化
            if (page === this.myCurrentPage) return
            // 更新页码
            this.myCurrentPage = page
            // 分发自定义事件通知父组件
            this.$emit('currrentChange', page)
        }
    },
    computed: {
        // 总页数
        totalPages() {
            const { total, pageSize } = this
            return Math.ceil(total / pageSize)
        },

        // state/end连续页码数的开始页码与结束页码
        startEnd() {
            let start, end
            const { myCurrentPage, showPageNo, totalPages } = this

            // 计算state
            start = myCurrentPage - Math.floor(showPageNo / 2)
            if (start < 1) {
                start = 1
            }

            // 计算end
            end = start + (showPageNo - 1)
            if (end > totalPages) {
                end = totalPages
                // 修正
                start = end - showPageNo + 1
                // 防止总页码数小于最大连续页码数
                if (start < 1) {
                    start = 1
                }
            }

            return { start, end }
        },

        // start到end的数组
        startEndArr() {
            const arr = []
            const { start, end } = this.startEnd
            for (let page = start; page <= end; page++) {
                arr.push(page)
            }
            return arr
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
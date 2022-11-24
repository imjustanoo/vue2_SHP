<template>
	<div class="pagination">
		<button :disabled="pageNo == 1" @click="$emit('currentPage', pageNo-1)">上一页</button>
		<button v-if="startNumAndEndNum.start>1" @click="$emit('currentPage', 1)" :class="{active:pageNo === 1}">1</button>
		<button v-if="startNumAndEndNum.start>2">···</button>

		<button v-for="(item,index) in startNumAndEndNum.end" :key="index" v-show="item >= startNumAndEndNum.start" @click="$emit('currentPage', item)" :class="{ active: pageNo === item }">{{item}}</button>

		<button v-if="startNumAndEndNum.end < totalPage -1">···</button>
		<button v-if="startNumAndEndNum.end != totalPage"  @click="$emit('currentPage', totalPage)"  :class="{ active: pageNo === totalPage }">{{totalPage}}</button>
		<button :disabled="pageNo == totalPage" @click="$emit('currentPage', pageNo+1)">下一页</button>
		<button style="margin-left: 30px">共 {{total}} 条</button>
	</div>
</template>

<script>

export default {
	name: "Pagenation",
	props:["pageNo","pageSize","total","continue"],
	computed:{
		//计算总页码数
		totalPage() {
			return Math.ceil(this.total / this.pageSize)
		},
		//分页器的起始页码和结束页码的计算
		startNumAndEndNum() {
			var start = 0
			var end = 0
			if(this.continue > this.totalPage) {
				start = 1
				end = this.totalPage
			}else {
				start = this.pageNo - Math.floor(this.continue/2)
				end = this.pageNo + Math.floor(this.continue / 2)

				if(start < 1) {
					start = 1
					end = this.continue
				}

				if(end >this.totalPage) {
					end = this.totalPage
					start = this.totalPage - this.continue +1
				}
			}
			return {start,end}
		}
	}
}
</script>

<style lang="less" scoped>
.pagination {
	text-align: center;
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

		&[disabled] {
			color: #c0c4cc;
			cursor: not-allowed;
		}

		&.active {
			cursor: not-allowed;
			background-color: #409eff;
			color: #fff;
		}
	}
}
</style>

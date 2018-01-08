<template>
	<div class="homeShouye1">
		<h2>{{msg}}</h2>
		<p>{{totle}}</p>
		<p>{{computednum}}</p>
		<div class="container">
			<el-date-picker
		      v-model="value2"
		      align="right"
		      type="date"
		      placeholder="选择日期"
		      :picker-options="pickerOptions1">
		    </el-date-picker>
			<div class="dropdown">
				<button class="btn btn-danger" data-toggle="dropdown">
				222
				</button>
				<ul class="dropdown-menu">
					<li class="dropdown-header"><a  href="">helllo0w</a></li>
					<li class="divider"><a  href="">helllo0w</a></li>
					<li class="disabled"><a  href="">helllo0w</a></li>
					<li><a  href="">helllo0w</a></li>
				</ul>
			</div>
			<div class="input-group">
				<span class="input-group-addon">@</span>
				<input type="text "class="form-control">
			</div>
			<ul  class="nav nav-tabs ">
				<li class="active"><a  href="#html"  data-toggle="tab">htmlelllo0w<span class="label label-danger">new label</span></a></li>
				<li><a  href="#js"  data-toggle="tab">jslllo0w<span class="badge ba">2</span></a></li>
				<li ><a  href="#bt" data-toggle="tab">helllo0w</a></li>
				<li><a  href="#vue" data-toggle="tab">helllo0w</a></li>
				<li class="dropdown">
				<button class="btn btn-danger" data-toggle="dropdown">
				222
				</button>
				<ul class="dropdown-menu">
					<li class="dropdown-header"><a  href="">helllo0w</a></li>
					<li class="divider"><a  href="">helllo0w</a></li>
					<li class="disabled"><a  href="">helllo0w</a></li>
					<li><a  href=""data-toggle="tooltip"data-trigger="hover">helllo0w</a></li>
				</ul>
				<div id="section"><a  href=""data-toggle="tooltip"data-trigger="hover" data-template="<b>1111</b>">helllo0w</a></div>
			</li>
			</ul>
			<div class="tab-content">
					<div class="tab-pane active" id="html">htmlhtml</div>
					<div class="tab-pane " id="js" >jsjsj</div>
					<div class="tab-pane" id="bt" >btstra[]</div>
					<div class="tab-pane" id="vue" >vuejss</div>
				</div>
			<div class="alert alert-success">bootstrap<button type="button" class="close" data-dismiss="alert"><span>&times;</span></button></div>
			<div class="progress">
				<div class="progress-bar" style="width:90%">800</div>
			</div>
		
			<div class="modal fade" id="modal">
				<div class="modal-dialog modal-lg">
					<div class="modal-content">
						<div class="modal-header">
							nihao
							<button type="button" class="close" data-dismiss="modal"><span>&times;</span>
							</button>
						</div>
						<div class="modal-body">
							<p>niaho</p>
						</div>
						<div class="modal-footer">
							<p class="text-center">nihaoma</p>
						</div>
					</div>
				</div>
			</div>
			<button class="btn btn-default btn-lg" data-toggle="modal" data-target="#modal" data-backdrop="static">modal</button>
		
			<div id="#view"></div>
			<div class="btn-group" data-toggle="buttons">
				<label class="btn btn-primary active" >
					<input type="radio" name="sex" checked>man
				</label>
				<label class="btn btn-danger" >
					<input type="radio" name="sex" >woman
				</label>
				<label class="btn btn-success" >
					<input type="radio" name="sex" >noman
				</label>
			</div>
			<div class="btn-group btn-group-justified" role="group" aria-label="...">
			  <div class="btn-group" role="group">
			    <button type="button" class="btn btn-default">Left</button>
			  </div>
			  <div class="btn-group" role="group">
			    <button type="button" class="btn btn-default">Middle</button>
			  </div>
			  <div class="btn-group" role="group">
			    <button type="button" class="btn btn-default">Right</button>
			  </div>
			</div>
			<div class="btn-group " role="group" aria-label="...">
		
			    <button type="button" class="btn btn-default">Left</button>
			 
			 
			    <button type="button" class="btn btn-default">Middle</button>
			 
			 
			    <button type="button" class="btn btn-default">Right</button>
			
			</div>
			<button id="pop" class="btn btn-success" data-toggle="popover" title="nihaoma" data-content="zhe shi tanc chu chuang">popover</button>
			<a href="#" data-toggle="tooltip" title="nihao" data-animation="true" data-placement="right">html5</a>
		</div>

		
	</div>
</template>
<script>
	
	export default{
		props:['totle'],
		data(){
			return{
				'msg':'首页一的内容',
				"ntotle": this.totle,
				pickerOptions1:{
					disabledDate(time){
						return time.getTime()<Date.now()-8.64e7;
					}
				},
				value2:""

			}

		},
		computed:{
				"computednum":function(){
					return this.totle+"homeshouye上计算";
				}
		},
		methods:{
			pop(){
				$("#pop").popover();
			}
		},
		mounted(){
			$("#pop").popover();
			$("a").tooltip({delay:{show:500,hide:1000},
				});
		}
	};

</script>
<style scoped lang="less">
@color:fff;
.widthWhole(){
	width:100%;height:100%;background:@color;
}
.homeShouye1{.widthWhole();box-sizing:border-box;padding-top:20px;}
</style>
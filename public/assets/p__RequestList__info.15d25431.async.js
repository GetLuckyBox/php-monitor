(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"6tYJ":function(e,t,a){"use strict";var r=a("tAuX"),n=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var i=n(a("bx4M"));a("/zsF");var l=n(a("PArb"));a("g9YV");var o=n(a("wCAj"));a("bP8k");var u=n(a("gFTJ")),d=n(a("2Taf")),s=n(a("vZ4D")),f=n(a("l4Ni")),m=n(a("ujKo")),c=n(a("MhPg"));a("Znn+");var p=n(a("ZTPi")),b=r(a("q1tI")),g=a("Hx5s"),v=a("Hg0r"),y=a("LLXN"),h=n(a("WHAg")),E=n(a("Yin3")),x=a("+n12"),w=n(a("PA3Q"));a("HoXj");var I=p.default.TabPane,M={url:"",type:"",request_time:"",wt:"",mu:"",ip:""},k=0,q=function(e){function t(){return(0,d.default)(this,t),(0,f.default)(this,(0,m.default)(t).apply(this,arguments))}return(0,c.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"requestListAndinfo/fetchBasic",param:this.props.location.query})}},{key:"render",value:function(){var e=this.props,t=e.requestListAndinfo,a=e.loading,r=t.sql,n=t.funcList,d=t.server,s=t.basic;void 0!==s&&s!==M&&(M=s),void 0!==r&&0===k&&Object.create(r).map(function(e,t){k+=e.time});var f=[{title:"\u65f6\u95f4",dataIndex:"time",render:function(e){return(0,x.time2s)(e)}},{title:"SQL",dataIndex:"sql",render:function(e){return b.default.createElement("div",{className:h.default.pre},b.default.createElement(w.default,{language:"sql"},e))}}],m=[{title:"key",dataIndex:"a",render:function(e,t,a){return b.default.createElement("div",{style:{color:"#e08383"}},e)}},{title:"value",dataIndex:"b"},{title:"key",dataIndex:"c",render:function(e,t,a){return b.default.createElement("div",{style:{color:"#e08383"}},e)}},{title:"value",dataIndex:"d"}],c=[{title:"\u51fd\u6570",dataIndex:"id",key:"id"},{title:(0,y.formatMessage)({id:"monitor.table.ct"}),dataIndex:"ct",sorter:function(e,t){return e.ct-t.ct}},{title:(0,y.formatMessage)({id:"monitor.table.wt"}),dataIndex:"ewt",sorter:function(e,t){return e.ewt-t.ewt},render:function(e){return(0,x.time2s)(e)}},{title:(0,y.formatMessage)({id:"monitor.table.cpu"}),dataIndex:"ecpu",sorter:function(e,t){return e.ecpu-t.ecpu},render:function(e){return(0,x.time2s)(e)}},{title:(0,y.formatMessage)({id:"monitor.table.mu"}),dataIndex:"emu",sorter:function(e,t){return e.emu-t.emu},render:function(e){return(0,x.bit2m)(e)}},{title:(0,y.formatMessage)({id:"monitor.table.pmu"}),dataIndex:"epmu",sorter:function(e,t){return e.epmu-t.epmu},render:function(e){return(0,x.bit2m)(e)}}],v=[],q=[];return void 0!=n&&v!=[]&&q!=[]&&(Object.create(n).map(function(e,t){if(t>5)return!0;v.push({k:e.id,v:e.ewt})}),n.sort(function(e,t){return t.emu-e.emu}),Object.create(n).map(function(e,t){if(t>5)return!0;q.push({k:e.id,v:e.emu})}),n.sort(function(e,t){return t.ewt-e.ewt})),b.default.createElement(g.PageHeaderWrapper,{title:!1},b.default.createElement(i.default,{bordered:!1},b.default.createElement(u.default,{title:M.url},b.default.createElement(u.default.Item,{label:(0,y.formatMessage)({id:"monitor.table.wt"})},(0,x.time2s)(M.wt)),b.default.createElement(u.default.Item,{label:(0,y.formatMessage)({id:"monitor.table.mu"})},(0,x.bit2m)(M.mu)),b.default.createElement(u.default.Item,{label:(0,y.formatMessage)({id:"monitor.table.sqltime"})},(0,x.time2s)(k)),b.default.createElement(u.default.Item,{label:(0,y.formatMessage)({id:"monitor.table.request_time"})},M.request_time),b.default.createElement(u.default.Item,{label:(0,y.formatMessage)({id:"monitor.table.type"})},M.type),b.default.createElement(u.default.Item,{label:(0,y.formatMessage)({id:"monitor.table.ip"})},M.ip)),b.default.createElement(p.default,{defaultActiveKey:"1"},b.default.createElement(I,{tab:"SQL",key:"1"},b.default.createElement(o.default,{pagination:!1,loading:a,dataSource:r,columns:f,rowKey:function(e,t){return"complete".concat(e.id).concat(t)}})),b.default.createElement(I,{tab:"SERVER",key:"2"},b.default.createElement(o.default,{pagination:!1,loading:a,dataSource:d,columns:m,tableLayout:"fixed",rowKey:function(e,t){return"complete".concat(e.id).concat(t)}}))),b.default.createElement(l.default,{style:{marginBottom:20}}),b.default.createElement(E.default,{id:"main_ms",list:v,title:(0,y.formatMessage)({id:"monitor.table.wt"})}),b.default.createElement(E.default,{id:"main_m",list:q,title:(0,y.formatMessage)({id:"monitor.table.mu"})}),b.default.createElement(l.default,{style:{marginBottom:32}}),b.default.createElement("div",{className:h.default.title},"Function"),b.default.createElement(o.default,{style:{marginBottom:24},pagination:{defaultPageSize:15},loading:a,dataSource:n,columns:c,rowKey:"id"})))}}]),t}(b.Component),A=(0,v.connect)(function(e){var t=e.requestListAndinfo,a=e.loading;return{requestListAndinfo:t,loading:a.effects["requestListAndinfo/fetchBasic"]}})(q);t.default=A},WHAg:function(e,t,a){e.exports={title:"antd-pro-pages-request-list-info-style-title",pre:"antd-pro-pages-request-list-info-style-pre"}},Yin3:function(e,t,a){"use strict";var r=a("g09b");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("2Taf")),i=r(a("vZ4D")),l=r(a("l4Ni")),o=r(a("ujKo")),u=r(a("MhPg")),d=r(a("q1tI")),s=r(a("ProS"));a("lLGD"),a("AH3D"),a("Ynxi");var f=function(e){function t(){return(0,n.default)(this,t),(0,l.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidUpdate",value:function(e,t,a){var r=s.default.init(document.getElementById(this.props.id));if(0!==this.props.list.length&&this.props.list!==e.list){var n=[],i=[],l=function(e){return e>1e6?Number(e/1e6).toFixed(1)+"s":e>100?Number(e/1e3).toFixed(1)+"ms":e+"\u03bcs"},o=function(e){return e>1048576?Number(e/1048576).toFixed(1)+"MB":e>1024?Number(e/1024).toFixed(1)+"KB":e+"Bit"},u="";Object.create(this.props.list.reverse()).map(function(e,t){n.push(e["k"]),i.push(e["v"])}),u="main_m"===this.props.id?"m":"ms",r.setOption({color:["#58afff"],title:{text:this.props.title},tooltip:{confine:!0,trigger:"axis",backgroundColor:"rgba(245,245,245,0.9)",color:"black",borderColor:"gray",textStyle:{color:"black"},formatter:function(e){var t=e[0];return t.name+" <br>"+("m"===u?o(t.value):l(t.value))}},grid:{left:200,bottom:100,right:60},yAxis:{data:n,axisLabel:{formatter:function(e,t,a){return e.substring(e.length-30)}}},xAxis:{},series:[{type:"bar",barWidth:30,label:{normal:{color:"#975fe4",show:!0,position:"right",formatter:function(e){return"m"===u?o(e.value):l(e.value)}}},data:i}]})}}},{key:"render",value:function(){return d.default.createElement("div",{id:this.props.id,style:{width:"49%",height:460,position:"relative",float:"left"}})}}]),t}(d.default.Component),m=f;t.default=m}}]);
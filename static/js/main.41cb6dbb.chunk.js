(this["webpackJsonpreact-shopping-list"]=this["webpackJsonpreact-shopping-list"]||[]).push([[0],{38:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(11),i=n.n(c),l=(n(43),n(6)),u=n(7),o=n(9),s=n(8),m=(n(44),n(30)),p=n(35),f=n(31),E=n(36),d=n(20),b=n(13),h="SHOW_ALL",v="SHOW_COMPLETED",O="SHOW_ACTIVE",j=0;var y=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e,t=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(f.a,{className:"mb-5 mt-2"},a.a.createElement(f.a.Body,null,a.a.createElement(E.a,{onSubmit:function(n){var r;(n.preventDefault(),e.value.trim())&&(t.props.dispatch((r=e.value,{type:"ADD_ITEM",id:j++,text:r})),e.value="")}},a.a.createElement("input",{ref:function(t){e=t}}),a.a.createElement(d.a,{className:"ml-5",type:"submit"},"Add Item ")))))}}]),n}(a.a.Component),I=Object(b.b)()(y),g=n(17),k=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a.Item,null,a.a.createElement(g.a.Link,{eventKey:this.props.children,onClick:this.props.onClick,disabled:this.props.active},this.props.children)))}}]),n}(a.a.Component);var C=Object(b.b)((function(e,t){return{active:t.filter===e.visibilityFilter}}),(function(e,t){return{onClick:function(){e({type:"SET_VISIBILITY_FILTER",filter:t.filter})}}}))(k),T=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(g.a,{variant:"tabs",defaultActiveKey:"All"},a.a.createElement(C,{filter:h},"All"),a.a.createElement(C,{filter:O},"To Purchase"),a.a.createElement(C,{filter:v},"Purchased")))}}]),n}(a.a.Component),S=n(34),_=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement("tr",null,a.a.createElement("td",null,this.props.id),a.a.createElement("td",null,a.a.createElement("span",{style:{textDecoration:this.props.completed?"line-through":"none"},onClick:this.props.onClick},this.props.description)),a.a.createElement("td",null,a.a.createElement(d.a,{variant:"danger",onClick:this.props.removeClick},"remove")))}}]),n}(a.a.Component),L=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return a.a.createElement(a.a.Fragment,null,a.a.createElement(S.a,null,a.a.createElement("thead",null,a.a.createElement("tr",null,a.a.createElement("th",null," ID"),a.a.createElement("th",null,"Item"),a.a.createElement("th",null,"Action"))),a.a.createElement("tbody",null,this.props.items.map((function(t){return a.a.createElement(_,Object.assign({key:t.id},t,{onClick:function(){return e.props.onItemClick(t.id)},removeClick:function(){return e.props.removeClick(t.id)}}))})))))}}]),n}(a.a.Component);function A(e,t){switch(t){case"SHOW_COMPLETED":return e.filter((function(e){return e.completed}));case"SHOW_ACTIVE":return e.filter((function(e){return!e.completed}));case"SHOW_ALL":default:return console.log(e),e}}var M=Object(b.b)((function(e){return{items:A(e.items,e.visibilityFilter)}}),(function(e){return{onItemClick:function(t){e(function(e){return{type:"TOGGLE_ITEM",id:e}}(t))},removeClick:function(t){e(function(e){return{type:"REMOVE_ITEM",id:e}}(t))}}}))(L),F=function(e){Object(o.a)(n,e);var t=Object(s.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(m.a,{bg:"info",variant:"dark"},a.a.createElement(m.a.Brand,null,"Shopping List")),a.a.createElement(p.a,null,a.a.createElement(I,null),a.a.createElement(T,null),a.a.createElement(M,null)))}}]),n}(a.a.Component),D=n(16),H=n(37);var V=Object(D.b)({visibilityFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_VISIBILITY_FILTER":return t.filter;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return[].concat(Object(H.a)(e),[{id:t.id,description:t.text,completed:!1}]);case"REMOVE_ITEM":return e.filter((function(e,n){return t.id!==n}));case"TOGGLE_ITEM":return e.map((function(e){return e.id===t.id?Object.assign({},e,{completed:!e.completed}):e}));default:return e}}});var W=function(){var e=localStorage.getItem("state");if(e)return JSON.parse(e)}(),w=Object(D.c)(V,W);w.subscribe((function(){!function(e){var t=JSON.stringify(e);localStorage.setItem("state",t)}(w.getState())})),i.a.render(a.a.createElement(b.a,{store:w},a.a.createElement(a.a.StrictMode,null,a.a.createElement(F,null))),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.41cb6dbb.chunk.js.map
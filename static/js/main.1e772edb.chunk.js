(this["webpackJsonpreact-paint"]=this["webpackJsonpreact-paint"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(1),i=n.n(o),a=n(7),c=n.n(a),s=(n(13),n(2)),l=n(3),h=n(5),u=n(4),d=function(t){var e=t.color;return Object(r.jsxs)("div",{children:[Object(r.jsx)("label",{htmlFor:"exampleColorInput",className:"form-label",children:"Color picker"}),Object(r.jsx)("input",{type:"color",className:"form-control form-control-color",id:"exampleColorInput",value:e,title:"Choose your color",onChange:function(e){t.setColor(e.target.value)}})]})},f=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={drawing:!1},r.px=t.lineWidth,r.color=t.lineColor,r.canvas=i.a.createRef(),r.paintArea=i.a.createRef(),r}return Object(l.a)(n,[{key:"draw",value:function(t,e){var n=this.canvas.current.getContext("2d").canvas.getContext("2d");n.lineWidth=t,n.strokeStyle=e,n.fillStyle=e,n.clearRect(0,0,400,400),n.strokeRect(75,140,150,110),n.fillRect(130,190,40,60),n.moveTo(50,140),n.lineTo(150,60),n.lineTo(250,140),n.closePath(),n.stroke()}},{key:"componentDidMount",value:function(){this.ctx=this.paintArea.current.getContext("2d"),this.ctx.lineWidth=this.px,this.ctx.strokeStyle=this.color,this.draw(this.px)}},{key:"componentDidUpdate",value:function(){this.px=this.props.lineWidth,this.color=this.props.lineColor,this.draw(this.px,this.color),this.ctx.lineWidth=this.px,this.ctx.strokeStyle=this.color}},{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("canvas",{id:"canvas",ref:this.canvas,width:"400",height:"400",style:{borderStyle:"solid",borderColor:"black",borderWidth:2}}),Object(r.jsx)("canvas",{id:"paintArea",ref:this.paintArea,width:600,height:600,style:{borderStyle:"solid",borderColor:"black",borderWidth:2},onMouseDown:function(e){var n=e.pageX-e.currentTarget.offsetLeft,r=e.pageY-e.currentTarget.offsetTop;t.setState({drawing:!0});var o=t.ctx;o.beginPath(),o.moveTo(n,r),o.stroke()},onMouseMove:function(e){var n=e.pageY-e.currentTarget.offsetTop,r=e.pageX-e.currentTarget.offsetLeft;if(t.state.drawing){var o=t.ctx;o.lineTo(r,n),o.stroke()}},onMouseUp:function(e){var n=e.pageY-e.currentTarget.offsetTop,r=e.pageX-e.currentTarget.offsetLeft;t.setState({drawing:!1});var o=t.ctx;o.lineTo(r,n),o.stroke()}})]})}}]),n}(i.a.Component),p=function(t){var e=t.lineWidth;return Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:[e,"px"]}),Object(r.jsx)("p",{children:Object(r.jsx)("input",{value:e,type:"number",onChange:function(e){t.setWidth(Number(e.target.value))}})})]})},j=Object.freeze({LINE_WIDTH:4,LINE_COLOR:"#0040FF"}),b=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(t){var r;return Object(s.a)(this,n),(r=e.call(this,t)).state={lineWidth:j.LINE_WIDTH,lineColor:j.LINE_COLOR},r}return Object(l.a)(n,[{key:"render",value:function(){var t=this;return Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"\u30bf\u30a4\u30c8\u30eb"}),Object(r.jsx)(p,{lineWidth:this.state.lineWidth,setWidth:function(e){return t.setState({lineWidth:e})}}),Object(r.jsx)(d,{color:this.state.lineColor,setColor:function(e){t.setState({lineColor:e})}}),Object(r.jsx)(f,{lineColor:this.state.lineColor,lineWidth:this.state.lineWidth})]})}}]),n}(i.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,r=e.getFID,o=e.getFCP,i=e.getLCP,a=e.getTTFB;n(t),r(t),o(t),i(t),a(t)}))};n(14);c.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(b,{})}),document.getElementById("root")),v()}},[[15,1,2]]]);
//# sourceMappingURL=main.1e772edb.chunk.js.map
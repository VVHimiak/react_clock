(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),l=c(5),r=c(4),s=c(1),u=c.n(s),h=c(0),k=function(t){Object(l.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={date:new Date},t.interval=setInterval((function(){t.setState({date:new Date}),console.log(t.state.date.toLocaleTimeString())}),1e3),t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){return this.interval}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.log('The Clock was renamed from oldName: "'.concat(t.clockName,'" to newName: "').concat(this.props.clockName,'"'))}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var t=this.state.date;return Object(h.jsxs)("div",{id:"clock",children:[Object(h.jsx)("h1",{children:this.props.clockName}),Object(h.jsxs)("p",{children:["Current time:"," ",t.toLocaleTimeString()]})]})}}]),c}(u.a.Component),m=(c(13),function(t){Object(l.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={isClockVisible:!0,clockName:"React clock"},t.hideClock=function(){t.setState({isClockVisible:!1})},t.showClock=function(){t.setState({isClockVisible:!0})},t.setRandomNumber=function(){t.setState({clockName:Math.ceil(100*Math.random())})},t}return Object(i.a)(c,[{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[this.state.isClockVisible&&Object(h.jsx)(k,{clockName:this.state.clockName}),Object(h.jsx)("button",{type:"button",onClick:this.setRandomNumber,children:"Set random name"}),Object(h.jsx)("button",{type:"button",onClick:this.showClock,children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.hideClock,children:"Hide Clock"})]})}}]),c}(u.a.Component));o.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.1373421f.chunk.js.map
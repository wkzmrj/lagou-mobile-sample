"use strict";(self["webpackChunklagou_mobile"]=self["webpackChunklagou_mobile"]||[]).push([[535],{4671:function(t,e,i){i.r(e),i.d(e,{default:function(){return R}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"login"},[e("van-nav-bar",{attrs:{title:"登录","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),e("van-form",{on:{submit:t.onSubmit}},[e("van-field",{attrs:{name:"phone",label:"手机号",placeholder:"请输入手机号",rules:[{required:!0,message:"请填写手机号"},{validator:t.phoneCheck,message:"格式有误，请重新输入"}]},model:{value:t.form.phone,callback:function(e){t.$set(t.form,"phone",e)},expression:"form.phone"}}),e("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"请输入密码",rules:[{required:!0,message:"请填写密码"},{pattern:/^[a-zA-a-zA-Z0-9]{6,12}$/,message:"格式有误，请重新输入"}]},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),e("div",{staticStyle:{margin:"16px"}},[e("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit",loading:t.isLoading}},[t._v("登 录")])],1)],1)],1)},r=[],s=i(124),a=i(8534),o=(i(4916),i(7601),i(7658),i(797)),l=(i(9653),i(7327),i(1539),i(2772),i(5827),i(8783),i(3948),i(1249),i(9554),i(4747),i(5212),i(6786)),u=i(7782),h=(0,l.d)("form"),c=h[0],d=h[1],f=c({props:{colon:Boolean,disabled:Boolean,readonly:Boolean,labelWidth:[Number,String],labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,errorMessageAlign:String,submitOnEnter:{type:Boolean,default:!0},validateTrigger:{type:String,default:"onBlur"},showError:{type:Boolean,default:!0},showErrorMessage:{type:Boolean,default:!0}},provide:function(){return{vanForm:this}},data:function(){return{fields:[]}},methods:{getFieldsByNames:function(t){return t?this.fields.filter((function(e){return-1!==t.indexOf(e.name)})):this.fields},validateSeq:function(t){var e=this;return new Promise((function(i,n){var r=[],s=e.getFieldsByNames(t);s.reduce((function(t,e){return t.then((function(){if(!r.length)return e.validate().then((function(t){t&&r.push(t)}))}))}),Promise.resolve()).then((function(){r.length?n(r):i()}))}))},validateFields:function(t){var e=this;return new Promise((function(i,n){var r=e.getFieldsByNames(t);Promise.all(r.map((function(t){return t.validate()}))).then((function(t){t=t.filter((function(t){return t})),t.length?n(t):i()}))}))},validate:function(t){return t&&!Array.isArray(t)?this.validateField(t):this.validateFirst?this.validateSeq(t):this.validateFields(t)},validateField:function(t){var e=this.fields.filter((function(e){return e.name===t}));return e.length?new Promise((function(t,i){e[0].validate().then((function(e){e?i(e):t()}))})):Promise.reject()},resetValidation:function(t){t&&!Array.isArray(t)&&(t=[t]);var e=this.getFieldsByNames(t);e.forEach((function(t){t.resetValidation()}))},scrollToField:function(t,e){this.fields.some((function(i){return i.name===t&&(i.$el.scrollIntoView(e),!0)}))},addField:function(t){this.fields.push(t),(0,u.e)(this.fields,this)},removeField:function(t){this.fields=this.fields.filter((function(e){return e!==t}))},getValues:function(){return this.fields.reduce((function(t,e){return t[e.name]=e.formValue,t}),{})},onSubmit:function(t){t.preventDefault(),this.submit()},submit:function(){var t=this,e=this.getValues();this.validate().then((function(){t.$emit("submit",e)})).catch((function(i){t.$emit("failed",{values:e,errors:i}),t.scrollToError&&t.scrollToField(i[0].name)}))}},render:function(){var t=arguments[0];return t("form",{class:d(),on:{submit:this.onSubmit}},[this.slots()])}}),g=i(4398),v=(i(7042),i(8701)),m=i.n(v),p=i(9299),b=i(3370);function y(){return!b.sk&&/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())}var x=i(8161),S=y();function k(){S&&(0,x.kn)((0,x.oD)())}var $=i(4535),F=i(5781),B=i(8729),w=i(9858),C=i(6631),T=i(5363),P=(0,l.d)("field"),I=P[0],L=P[1],A=I({inheritAttrs:!1,provide:function(){return{vanField:this}},inject:{vanForm:{default:null}},props:(0,p.Z)({},T.T,{name:String,rules:Array,disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null},autosize:[Boolean,Object],leftIcon:String,rightIcon:String,clearable:Boolean,formatter:Function,maxlength:[Number,String],labelWidth:[Number,String],labelClass:null,labelAlign:String,inputAlign:String,placeholder:String,errorMessage:String,errorMessageAlign:String,showWordLimit:Boolean,value:{type:[Number,String],default:""},type:{type:String,default:"text"},error:{type:Boolean,default:null},colon:{type:Boolean,default:null},clearTrigger:{type:String,default:"focus"},formatTrigger:{type:String,default:"onChange"}}),data:function(){return{focused:!1,validateFailed:!1,validateMessage:""}},watch:{value:function(){this.updateValue(this.value),this.resetValidation(),this.validateWithTrigger("onChange"),this.$nextTick(this.adjustSize)}},mounted:function(){this.updateValue(this.value,this.formatTrigger),this.$nextTick(this.adjustSize),this.vanForm&&this.vanForm.addField(this)},beforeDestroy:function(){this.vanForm&&this.vanForm.removeField(this)},computed:{showClear:function(){var t=this.getProp("readonly");if(this.clearable&&!t){var e=(0,b.Xq)(this.value)&&""!==this.value,i="always"===this.clearTrigger||"focus"===this.clearTrigger&&this.focused;return e&&i}},showError:function(){return null!==this.error?this.error:!!(this.vanForm&&this.vanForm.showError&&this.validateFailed)||void 0},listeners:function(){return(0,p.Z)({},this.$listeners,{blur:this.onBlur,focus:this.onFocus,input:this.onInput,click:this.onClickInput,keypress:this.onKeypress})},labelStyle:function(){var t=this.getProp("labelWidth");if(t)return{width:(0,B.N)(t)}},formValue:function(){return this.children&&(this.$scopedSlots.input||this.$slots.input)?this.children.value:this.value}},methods:{focus:function(){this.$refs.input&&this.$refs.input.focus()},blur:function(){this.$refs.input&&this.$refs.input.blur()},runValidator:function(t,e){return new Promise((function(i){var n=e.validator(t,e);if((0,b.tI)(n))return n.then(i);i(n)}))},isEmptyValue:function(t){return Array.isArray(t)?!t.length:0!==t&&!t},runSyncRule:function(t,e){return(!e.required||!this.isEmptyValue(t))&&!(e.pattern&&!e.pattern.test(t))},getRuleMessage:function(t,e){var i=e.message;return(0,b.mf)(i)?i(t,e):i},runRules:function(t){var e=this;return t.reduce((function(t,i){return t.then((function(){if(!e.validateFailed){var t=e.formValue;return i.formatter&&(t=i.formatter(t,i)),e.runSyncRule(t,i)?i.validator?e.runValidator(t,i).then((function(n){!1===n&&(e.validateFailed=!0,e.validateMessage=e.getRuleMessage(t,i))})):void 0:(e.validateFailed=!0,void(e.validateMessage=e.getRuleMessage(t,i)))}}))}),Promise.resolve())},validate:function(t){var e=this;return void 0===t&&(t=this.rules),new Promise((function(i){t||i(),e.resetValidation(),e.runRules(t).then((function(){e.validateFailed?i({name:e.name,message:e.validateMessage}):i()}))}))},validateWithTrigger:function(t){if(this.vanForm&&this.rules){var e=this.vanForm.validateTrigger===t,i=this.rules.filter((function(i){return i.trigger?i.trigger===t:e}));this.validate(i)}},resetValidation:function(){this.validateFailed&&(this.validateFailed=!1,this.validateMessage="")},updateValue:function(t,e){void 0===e&&(e="onChange"),t=(0,b.Xq)(t)?String(t):"";var i=this.maxlength;if((0,b.Xq)(i)&&t.length>i&&(t=this.value&&this.value.length===+i?this.value:t.slice(0,i)),"number"===this.type||"digit"===this.type){var n="number"===this.type;t=(0,$.u)(t,n,n)}this.formatter&&e===this.formatTrigger&&(t=this.formatter(t));var r=this.$refs.input;r&&t!==r.value&&(r.value=t),t!==this.value&&this.$emit("input",t)},onInput:function(t){t.target.composing||this.updateValue(t.target.value)},onFocus:function(t){this.focused=!0,this.$emit("focus",t);var e=this.getProp("readonly");e&&this.blur()},onBlur:function(t){this.focused=!1,this.updateValue(this.value,"onBlur"),this.$emit("blur",t),this.validateWithTrigger("onBlur"),k()},onClick:function(t){this.$emit("click",t)},onClickInput:function(t){this.$emit("click-input",t)},onClickLeftIcon:function(t){this.$emit("click-left-icon",t)},onClickRightIcon:function(t){this.$emit("click-right-icon",t)},onClear:function(t){(0,F.PF)(t),this.$emit("input",""),this.$emit("clear",t)},onKeypress:function(t){var e=13;if(t.keyCode===e){var i=this.getProp("submitOnEnter");i||"textarea"===this.type||(0,F.PF)(t),"search"===this.type&&this.blur()}this.$emit("keypress",t)},adjustSize:function(){var t=this.$refs.input;if("textarea"===this.type&&this.autosize&&t){t.style.height="auto";var e=t.scrollHeight;if((0,b.Kn)(this.autosize)){var i=this.autosize,n=i.maxHeight,r=i.minHeight;n&&(e=Math.min(e,n)),r&&(e=Math.max(e,r))}e&&(t.style.height=e+"px")}},genInput:function(){var t=this.$createElement,e=this.type,i=this.getProp("disabled"),n=this.getProp("readonly"),r=this.slots("input"),s=this.getProp("inputAlign");if(r)return t("div",{class:L("control",[s,"custom"]),on:{click:this.onClickInput}},[r]);var a={ref:"input",class:L("control",s),domProps:{value:this.value},attrs:(0,p.Z)({},this.$attrs,{name:this.name,disabled:i,readonly:n,placeholder:this.placeholder}),on:this.listeners,directives:[{name:"model",value:this.value}]};if("textarea"===e)return t("textarea",m()([{},a]));var o,l=e;return"number"===e&&(l="text",o="decimal"),"digit"===e&&(l="tel",o="numeric"),t("input",m()([{attrs:{type:l,inputmode:o}},a]))},genLeftIcon:function(){var t=this.$createElement,e=this.slots("left-icon")||this.leftIcon;if(e)return t("div",{class:L("left-icon"),on:{click:this.onClickLeftIcon}},[this.slots("left-icon")||t(w.Z,{attrs:{name:this.leftIcon,classPrefix:this.iconPrefix}})])},genRightIcon:function(){var t=this.$createElement,e=this.slots,i=e("right-icon")||this.rightIcon;if(i)return t("div",{class:L("right-icon"),on:{click:this.onClickRightIcon}},[e("right-icon")||t(w.Z,{attrs:{name:this.rightIcon,classPrefix:this.iconPrefix}})])},genWordLimit:function(){var t=this.$createElement;if(this.showWordLimit&&this.maxlength){var e=(this.value||"").length;return t("div",{class:L("word-limit")},[t("span",{class:L("word-num")},[e]),"/",this.maxlength])}},genMessage:function(){var t=this.$createElement;if(!this.vanForm||!1!==this.vanForm.showErrorMessage){var e=this.errorMessage||this.validateMessage;if(e){var i=this.getProp("errorMessageAlign");return t("div",{class:L("error-message",i)},[e])}}},getProp:function(t){return(0,b.Xq)(this[t])?this[t]:this.vanForm&&(0,b.Xq)(this.vanForm[t])?this.vanForm[t]:void 0},genLabel:function(){var t=this.$createElement,e=this.getProp("colon")?":":"";return this.slots("label")?[this.slots("label"),e]:this.label?t("span",[this.label+e]):void 0}},render:function(){var t,e=arguments[0],i=this.slots,n=this.getProp("disabled"),r=this.getProp("labelAlign"),s={icon:this.genLeftIcon},a=this.genLabel();a&&(s.title=function(){return a});var o=this.slots("extra");return o&&(s.extra=function(){return o}),e(C.Z,{attrs:{icon:this.leftIcon,size:this.size,center:this.center,border:this.border,isLink:this.isLink,required:this.required,clickable:this.clickable,titleStyle:this.labelStyle,valueClass:L("value"),titleClass:[L("label",r),this.labelClass],arrowDirection:this.arrowDirection},scopedSlots:s,class:L((t={error:this.showError,disabled:n},t["label-"+r]=r,t["min-height"]="textarea"===this.type&&!this.autosize,t)),on:{click:this.onClick}},[e("div",{class:L("body")},[this.genInput(),this.showClear&&e(w.Z,{attrs:{name:"clear"},class:L("clear"),on:{touchstart:this.onClear}}),this.genRightIcon(),i("button")&&e("div",{class:L("button")},[i("button")])]),this.genWordLimit(),this.genMessage()])}}),E=i(3099),V={name:"Login",components:{VanNavBar:o.Z,VanForm:f,VanButton:g.Z,VanField:A},data:function(){return{form:{phone:"18201288771",password:"111111"},isLoading:!1}},methods:{phoneCheck:function(t){return/^1\d{10}$/.test(t)},passwordCheck:function(t){return/^[a-zA-Z0-9]{6,12}$/.test(t)},onSubmit:function(){var t=this;return(0,a.Z)((0,s.Z)().mark((function e(){var i,n;return(0,s.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isLoading=!0,e.next=3,(0,E.x)(t.form);case 3:i=e.sent,n=i.data,1===n.state?(t.$store.commit("setUser",n.content),t.$toast.success("登录成功!"),t.$router.push(t.$route.query.redirect||"/")):t.$toast.fail("登录失败!"),t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},onClickLeft:function(){this.$router.go(-1)}}},Z=V,z=i(1001),M=(0,z.Z)(Z,n,r,!1,null,"0e300538",null),R=M.exports},4398:function(t,e,i){i(2772),i(7658);var n=i(9299),r=i(8701),s=i.n(r),a=i(6786),o=i(4771),l=i(1047),u=i(2250),h=i(9858),c=i(4958),d=(0,a.d)("button"),f=d[0],g=d[1];function v(t,e,i,n){var r,a=e.tag,d=e.icon,f=e.type,v=e.color,m=e.plain,p=e.disabled,b=e.loading,y=e.hairline,x=e.loadingText,S=e.iconPosition,k={};function $(t){b||p||((0,o.j8)(n,"click",t),(0,u.fz)(n))}function F(t){(0,o.j8)(n,"touchstart",t)}v&&(k.color=m?v:"white",m||(k.background=v),-1!==v.indexOf("gradient")?k.border=0:k.borderColor=v);var B=[g([f,e.size,{plain:m,loading:b,disabled:p,hairline:y,block:e.block,round:e.round,square:e.square}]),(r={},r[l._K]=y,r)];function w(){return b?i.loading?i.loading():t(c.Z,{class:g("loading"),attrs:{size:e.loadingSize,type:e.loadingType,color:"currentColor"}}):d?t(h.Z,{attrs:{name:d,classPrefix:e.iconPrefix},class:g("icon")}):void 0}function C(){var n,r=[];return"left"===S&&r.push(w()),n=b?x:i.default?i.default():e.text,n&&r.push(t("span",{class:g("text")},[n])),"right"===S&&r.push(w()),r}return t(a,s()([{style:k,class:B,attrs:{type:e.nativeType,disabled:p},on:{click:$,touchstart:F}},(0,o.ED)(n)]),[t("div",{class:g("content")},[C()])])}v.props=(0,n.Z)({},u.g2,{text:String,icon:String,color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:String,loadingText:String,loadingType:String,tag:{type:String,default:"button"},type:{type:String,default:"default"},size:{type:String,default:"normal"},loadingSize:{type:String,default:"20px"},iconPosition:{type:String,default:"left"}}),e["Z"]=f(v)},797:function(t,e,i){i(9653);var n=i(6786),r=i(1047),s=i(9858),a=(0,n.d)("nav-bar"),o=a[0],l=a[1];e["Z"]=o({props:{title:String,fixed:Boolean,zIndex:[Number,String],leftText:String,rightText:String,leftArrow:Boolean,placeholder:Boolean,safeAreaInsetTop:Boolean,border:{type:Boolean,default:!0}},data:function(){return{height:null}},mounted:function(){this.placeholder&&this.fixed&&(this.height=this.$refs.navBar.getBoundingClientRect().height)},methods:{genLeft:function(){var t=this.$createElement,e=this.slots("left");return e||[this.leftArrow&&t(s.Z,{class:l("arrow"),attrs:{name:"arrow-left"}}),this.leftText&&t("span",{class:l("text")},[this.leftText])]},genRight:function(){var t=this.$createElement,e=this.slots("right");return e||(this.rightText?t("span",{class:l("text")},[this.rightText]):void 0)},genNavBar:function(){var t,e=this.$createElement;return e("div",{ref:"navBar",style:{zIndex:this.zIndex},class:[l({fixed:this.fixed,"safe-area-inset-top":this.safeAreaInsetTop}),(t={},t[r.xe]=this.border,t)]},[e("div",{class:l("content")},[this.hasLeft()&&e("div",{class:l("left"),on:{click:this.onClickLeft}},[this.genLeft()]),e("div",{class:[l("title"),"van-ellipsis"]},[this.slots("title")||this.title]),this.hasRight()&&e("div",{class:l("right"),on:{click:this.onClickRight}},[this.genRight()])])])},hasLeft:function(){return this.leftArrow||this.leftText||this.slots("left")},hasRight:function(){return this.rightText||this.slots("right")},onClickLeft:function(t){this.$emit("click-left",t)},onClickRight:function(t){this.$emit("click-right",t)}},render:function(){var t=arguments[0];return this.placeholder&&this.fixed?t("div",{class:l("placeholder"),style:{height:this.height+"px"}},[this.genNavBar()]):this.genNavBar()}})},3099:function(t,e,i){i.d(e,{C:function(){return s},x:function(){return r}});i(6647),i(1539),i(9714),i(8783),i(3948),i(1637);var n=i(4471),r=function(t){return(0,n.Z)({method:"POST",url:"/front/user/login",data:new URLSearchParams(t).toString()})},s=function(){return(0,n.Z)({method:"GET",url:"/front/user/getInfo"})}}}]);
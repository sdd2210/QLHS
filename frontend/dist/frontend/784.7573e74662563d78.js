"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[784],{9784:(J,d,s)=>{s.r(d),s.d(d,{AuthModule:()=>D});var p=s(6814),u=s(8109),C=s(7168),t=s(5879);let x=(()=>{class n{constructor(){}ngOnInit(){}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth-layout"]],decls:7,vars:0,consts:[[1,"wrapper"],[1,"auth-layout"],[1,"auth-layout-banner"],["src","assets/img/logo-billgates.png","alt","",1,"auth-layout-banner-img"],[1,"auth-layout-content"],[1,"auth-layout-content-box"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.TgZ(4,"div",4)(5,"div",5),t._UZ(6,"router-outlet"),t.qZA()()()())},dependencies:[u.lC],styles:[".auth-layout[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column;margin-top:100px}.auth-layout[_ngcontent-%COMP%]   .auth-layout-banner[_ngcontent-%COMP%]   .auth-layout-banner-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.auth-layout[_ngcontent-%COMP%]   .auth-layout-content[_ngcontent-%COMP%]{width:100%;height:50vh;display:flex;align-items:center;justify-content:center}.auth-layout[_ngcontent-%COMP%]   .auth-layout-content[_ngcontent-%COMP%]   .auth-layout-content-box[_ngcontent-%COMP%]{max-width:400px}"]})}return n})(),w=(()=>{class n{constructor(){this.title="VT-HTBH-Admin"}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-auth"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"app-auth-layout")},dependencies:[x],encapsulation:2})}return n})();var c=s(7700);let P=(()=>{class n{constructor(o){this.data=o,this.modalType=h.INFO,this.modalTitle=o.title,this.modalMessage=o.message,console.log(this)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.WI))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-success"]],decls:11,vars:7,consts:[["mat-dialog-title","",1,"title"],["align","end"],["mat-button","","mat-raised-button","","button","",1,"btn-cancel",3,"mat-dialog-close"],["mat-raised-button","","color","warn",1,"btn-save",3,"mat-dialog-close"]],template:function(e,i){1&e&&(t.TgZ(0,"div")(1,"h2",0),t._uU(2),t.qZA(),t.TgZ(3,"mat-dialog-content")(4,"p"),t._uU(5),t.qZA()(),t.TgZ(6,"mat-dialog-actions",1)(7,"button",2),t._uU(8,"Tho\xe1t"),t.qZA(),t.TgZ(9,"button",3),t._uU(10,"\u0110\u1ed3ng \xfd"),t.qZA()()()),2&e&&(t.Gre("custom-dialog ",i.modalType,""),t.xp6(2),t.Oqu(i.data.modalTitle),t.xp6(3),t.hij(" ",i.data.modalMessage," "),t.xp6(2),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0))},dependencies:[c.ZT,c.uh,c.xY,c.H8],styles:[".custom-dialog[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;align-items:center;padding:15px}.custom-dialog[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]{background:#F1F8E9}.custom-dialog[_ngcontent-%COMP%]   .warn[_ngcontent-%COMP%]{background:#FFEBEE}"]})}return n})();var h=function(n){return n.INFO="info",n.WARN="warn",n}(h||{}),m=s(2333),r=s(6223);function y(n,g){1&n&&(t.TgZ(0,"div",6),t._uU(1,"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i kh\xf4ng \u0111\xfang"),t.qZA())}function b(n,g){if(1&n&&(t.TgZ(0,"div",3),t._UZ(1,"input",4),t.YNc(2,y,2,0,"div",5),t.qZA()),2&n){const o=t.oxw();t.xp6(2),t.Q6J("ngIf",o.form.get("email").errors)}}function v(n,g){1&n&&(t.TgZ(0,"div",3),t._UZ(1,"input",7),t.qZA())}function M(n,g){if(1&n&&(t.TgZ(0,"div",3),t._UZ(1,"input",8),t.TgZ(2,"div",6),t._uU(3),t.qZA()()),2&n){const o=t.oxw();t.xp6(3),t.hij(" ",o.loginError," ")}}let f=(()=>{class n{constructor(){this.btnTitle="\u0110\u0103ng nh\u1eadp",this.numberCol=[],this.onSubmit=new t.vpe,this.onForgotPW=new t.vpe,this.form=new r.cw({username:new r.NI(""),password:new r.NI(""),email:new r.NI("",r.kI.pattern("([a-zA-Z0-9_.-]+)@([da-zA-Z.-]+).([a-zA-Z.]{2,6})"))}),this.listLabelSub=[]}ngOnChanges(){}ngOnInit(){}submit(){this.form.invalid||this.onSubmit.emit(this.form.value)}static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-login-form"]],inputs:{loginFormData:"loginFormData",loginFormTitle:"loginFormTitle",loginError:"loginError",btnTitle:"btnTitle",numberCol:"numberCol"},outputs:{onSubmit:"onSubmit",onForgotPW:"onForgotPW"},features:[t.TTD],decls:6,vars:5,consts:[[1,"form-login",3,"formGroup","ngSubmit"],["class","form-group",4,"ngIf"],[1,"form-login-btn"],[1,"form-group"],["type","email","formControlName","email","placeholder","Email \u0111\u0103ng k\xfd",1,"form-login-input"],["class","login-error",4,"ngIf"],[1,"login-error"],["type","tel","formControlName","username","placeholder","T\xean \u0111\u0103ng nh\u1eadp",1,"form-login-input"],["type","password","formControlName","password","placeholder","M\u1eadt kh\u1ea9u",1,"form-login-input"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0),t.NdJ("ngSubmit",function(){return i.submit()}),t.YNc(1,b,3,1,"div",1),t.YNc(2,v,2,0,"div",1),t.YNc(3,M,4,1,"div",1),t.TgZ(4,"button",2),t._uU(5),t.qZA()()),2&e&&(t.Q6J("formGroup",i.form),t.xp6(1),t.Q6J("ngIf","forgot"==i.loginFormData.type.forgot),t.xp6(1),t.Q6J("ngIf","phone"==i.loginFormData.type.phone),t.xp6(1),t.Q6J("ngIf","password"==i.loginFormData.type.password),t.xp6(2),t.hij(" ",i.btnTitle," "))},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".form-login[_ngcontent-%COMP%]{width:320px;display:flex;flex-direction:column}.form-login[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{height:72px;margin-bottom:5px;display:flex;flex-direction:column;justify-content:space-between}.form-login[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .form-login-input[_ngcontent-%COMP%]{border-radius:12px;height:44px;outline:none;font-style:normal;font-weight:400;font-size:16px;line-height:20px;padding:0 16px;border:.5px solid rgba(0,0,0,.5)}.form-login[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{background:#FBFBFB;border:1px solid #EE0033}.form-login[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   .login-error[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:17px;color:#e03;padding-top:10px}.form-login[_ngcontent-%COMP%]   .form-login-btn[_ngcontent-%COMP%]{cursor:pointer;background:#e7ad61;border-radius:8px;font-style:normal;font-weight:700;font-size:16px;line-height:16px;text-align:center;color:#fff;height:44px;outline:none;border:none}.form-login[_ngcontent-%COMP%]   .form-login-btn[_ngcontent-%COMP%]:hover{background:#F2C387;border-radius:8px;font-style:normal;font-weight:700;font-size:16px;line-height:16px;text-align:center;color:#fff;height:44px;outline:none;border:none}.form-login[_ngcontent-%COMP%]   .form-login-forgot[_ngcontent-%COMP%]{text-align:right;font-style:normal;font-weight:400;font-size:16px;line-height:20px;text-decoration-line:underline;color:#222;cursor:pointer}"]})}return n})(),T=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[p.ez,r.u5,r.UX]})}return n})(),A=(()=>{class n{constructor(o,e,i){this.authService=o,this.router=e,this.dialog=i,this.data={type:{forgot:"forgot"}}}ngOnInit(){}forgot(o){const e=this.dialog,i=this.router;this.authService.forgotPassword(o.email).subscribe({next(a){e.open(P,{disableClose:!0,data:{modalTitle:"Th\xf4ng b\xe1o Th\xe0nh c\xf4ng",modalMessage:`M\u1eadt kh\u1ea9u m\u1edbi \u0111\xe3 \u0111\u01b0\u1ee3c t\u1edbi email ${a.email??o.email}. Vui l\xf2ng ki\u1ec3m tra h\u1ed9p th\u01b0!`}}).afterClosed().subscribe(l=>{i.navigateByUrl("/main/member")})},error(a){console.log(a)}})}routeTo(o){console.log(o)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(m.$),t.Y36(u.F0),t.Y36(c.uw))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-forgot"]],decls:6,vars:2,consts:[[1,"login"],[1,"login-text-header"],[3,"loginFormData","btnTitle","onForgotPW","onSubmit"],["routerLink","/login",1,"login-link"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," B\u1ea1n qu\xean m\u1eadt kh\u1ea9u "),t.qZA(),t.TgZ(3,"app-login-form",2),t.NdJ("onForgotPW",function(l){return i.routeTo(l)})("onSubmit",function(l){return i.forgot(l)}),t.qZA(),t.TgZ(4,"a",3),t._uU(5,"\u0110\u0103ng nh\u1eadp"),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("loginFormData",i.data)("btnTitle","L\u1ea5y l\u1ea1i m\u1eadt kh\u1ea9u"))},dependencies:[u.rH,f],styles:[".forgot[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;justify-content:center;align-items:center;flex-direction:column}"]})}return n})();function F(n,g){if(1&n&&(t.TgZ(0,"div",14),t._uU(1),t.qZA()),2&n){const o=t.oxw(3);t.xp6(1),t.hij(" ",o.err,"")}}function O(n,g){if(1&n&&(t.TgZ(0,"form",6)(1,"div",7)(2,"label",8),t._uU(3,"Nh\u1eadn m\u1eadt kh\u1ea9u m\u1edbi: "),t.qZA(),t._UZ(4,"input",9),t.qZA(),t.TgZ(5,"div",7)(6,"label",10),t._uU(7,"X\xe1c nh\u1eadn l\u1ea1i m\u1eadt kh\u1ea9u: "),t.qZA(),t._UZ(8,"input",11),t.qZA(),t.TgZ(9,"div",12),t.YNc(10,F,2,1,"div",13),t.qZA()()),2&n){const o=t.oxw(2);t.Q6J("formGroup",o.form),t.xp6(10),t.Q6J("ngIf",null!=o.err)}}function Z(n,g){if(1&n){const o=t.EpF();t.ynx(0),t.YNc(1,O,11,2,"form",3),t.TgZ(2,"div",4)(3,"button",5),t.NdJ("click",function(){t.CHM(o);const i=t.oxw();return t.KtG(i.change())}),t._uU(4,"X\xe1c nh\u1eadn"),t.qZA()(),t.BQk()}if(2&n){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",!o.success)}}let E=(()=>{class n{constructor(o,e,i,a){this.dialoRef=o,this.data=e,this.authenService=i,this.router=a,this.form=new r.cw({NewPassword:new r.NI(""),ConfirmPassword:new r.NI("")}),this.success=0}ngOnInit(){}change(){this.form.get("NewPassword").value!==this.form.get("ConfirmPassword").value?this.err="M\u1eadt kh\u1ea9u kh\xf4ng tr\xf9ng":this.authenService.resetPassword({new_pwd:this.form.value.NewPassword,id:this.data._id}).subscribe(o=>{localStorage.setItem("access_token",o.accessToken),this.authenService.getPrivilegeList(),localStorage.setItem("access_user",JSON.stringify(o.user)),this.dialoRef.close(),setTimeout(()=>{this.router.navigateByUrl("/main/member")},1e3)},o=>{this.err=o.error.message})}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.so),t.Y36(c.WI),t.Y36(m.$),t.Y36(u.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-recreate-pwd"]],decls:4,vars:1,consts:[[1,"change-pw"],[1,"change-pw-title"],[4,"ngIf"],[3,"formGroup",4,"ngIf"],[1,"change-pw-btn"],[1,"btn-save",3,"click"],[3,"formGroup"],[1,"form-group"],["for","NewPassword"],["type","password","id","NewPassword","formControlName","NewPassword"],["for","ConfirmPassword"],["type","password","id","ConfirmPassword","formControlName","ConfirmPassword"],[1,"change-pw-toast"],["class","err",4,"ngIf"],[1,"err"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._uU(2," Thay \u0111\u1ed5i m\u1eadt kh\u1ea9u "),t.qZA(),t.YNc(3,Z,5,1,"ng-container",2),t.qZA()),2&e&&(t.xp6(3),t.Q6J("ngIf",!i.success))},dependencies:[p.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:[".change-pw[_ngcontent-%COMP%]   .change-pw-title[_ngcontent-%COMP%]{font-size:20px;font-weight:700;align-items:center;padding:15px;text-align:center}.change-pw[_ngcontent-%COMP%]   .change-pw-toast[_ngcontent-%COMP%]{word-break:break-all;display:flex;align-items:center;justify-content:center;padding:20px}.change-pw[_ngcontent-%COMP%]   .change-pw-toast[_ngcontent-%COMP%]   .err[_ngcontent-%COMP%]{height:45px;background:#f2dede;color:#f44336;padding:16px;border-radius:10px;width:500px}.change-pw[_ngcontent-%COMP%]   .change-pw-toast[_ngcontent-%COMP%]   .success[_ngcontent-%COMP%]{height:45px;color:#28a745;padding:16px;border-radius:10px;width:500px}.change-pw[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{padding:16px}.change-pw[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;height:44px;margin:10px 0}.change-pw[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{text-align:right;margin-right:20px;font-style:normal;font-weight:500;font-size:16px;line-height:20px;color:#a7a7a7}.change-pw[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:300px;height:44px;outline:none;background:#FFFFFF;border-radius:12px;border:.5px solid #A7A7A7;text-align:center;font-size:30px;color:#a7a7a7}.change-pw[_ngcontent-%COMP%]   .change-pw-btn[_ngcontent-%COMP%]{margin:20px;height:50px;display:flex;align-items:center;justify-content:center}"]})}return n})(),S=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[p.ez,r.u5,r.UX]})}return n})();var N=s(9222),_=s(4571);const I=[{path:"",component:w,children:[{path:"login",component:(()=>{class n{constructor(o,e,i,a){this.router=o,this.localStorage=e,this.authService=i,this.dialog=a,this.error="",this.data={type:{phone:"phone",password:"password"}}}ngOnInit(){}getPrivilegeList(){this.authService.getPrivilegeList().subscribe({next(o){localStorage.setItem("privilege_list",JSON.stringify(o))},error(o){console.log(o)}})}login(o){this.authService.login(o.username,o.password).subscribe({next:e=>{if(e.accessToken)localStorage.setItem("access_token",e.accessToken),this.getPrivilegeList(),localStorage.setItem("access_user",JSON.stringify(e.user)),localStorage.setItem("current_semester",JSON.stringify(e.semester)),setTimeout(()=>{this.router.navigateByUrl("/main/member")},1e3);else{const i=this.dialog.open(E,{disableClose:!0,autoFocus:!0,data:{_id:e.user._id,test:2}});i&&i.afterClosed().subscribe(a=>{console.log(a)})}},error:e=>{this.error="Sai t\xean \u0111\u0103ng nh\u1eadp ho\u1eb7c m\u1eadt kh\u1ea9u."}})}routeTo(o){console.log(o)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(u.F0),t.Y36(N.n),t.Y36(m.$),t.Y36(c.uw))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-login"]],decls:7,vars:2,consts:[[1,"login"],[1,"login-text-header"],[3,"loginError","loginFormData","onForgotPW","onSubmit"],["routerLink","/forgot",1,"login-link"]],template:function(e,i){1&e&&(t._UZ(0,"app-loader"),t.TgZ(1,"div",0)(2,"div",1),t._uU(3," \u0110\u0103ng nh\u1eadp "),t.qZA(),t.TgZ(4,"app-login-form",2),t.NdJ("onForgotPW",function(l){return i.routeTo(l)})("onSubmit",function(l){return i.login(l)}),t.qZA(),t.TgZ(5,"a",3),t._uU(6,"Qu\xean m\u1eadt kh\u1ea9u"),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("loginError",i.error)("loginFormData",i.data))},dependencies:[u.rH,_.R,f]})}return n})()},{path:"forgot",component:A},{path:"",redirectTo:"login",pathMatch:"full"}]}];var k=s(9602);let D=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({providers:[k.E],imports:[p.ez,u.Bz.forChild(I),C.x,_.q,T,S]})}return n})()}}]);
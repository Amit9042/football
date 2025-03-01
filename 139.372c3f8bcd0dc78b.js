"use strict";(self.webpackChunkfootball=self.webpackChunkfootball||[]).push([[139],{8139:($,f,n)=>{n.r(f),n.d(f,{PlayerModule:()=>D});var u=n(6895),v=n(5354),h=n(8084),r=n(9386),F=n(46);const d={first_name:"first_name",last_name:"last_name",name:"name",club:"club",price:"price",nationality:"nationality",actions:"actions",id:"id",age:"age",height:"height",position:"position"},N=[{displayName:"First Name",columnName:d.first_name},{displayName:"Last Name",columnName:d.last_name},{displayName:"Name",columnName:d.name},{displayName:"Club",columnName:d.club},{displayName:"Nationality",columnName:d.nationality},{displayName:"Action",columnName:d.actions}];var T=n(5413),c=n(3332),s=n(4006),y=n(5412);const m={id:"id",first_name:"first_name",last_name:"last_name",name:"name",age:"age",height:"height",image:"image",nationality:"nationality",position:"position",price:"price",club_id:"club_id"};var e=n(4650),_=n(938);let P=(()=>{class o{constructor(t){this.apiManager=t}addPlayer(t){return this.apiManager.httpHelperMethod(r.Wj.POST,r.g_.PLAYER_ADD,t)}updatePlayer(t){return this.apiManager.httpHelperMethod(r.Wj.PUT,`${r.g_.PLAYER_UPDATE}/${t.id}`,t)}getPlayerList(){return this.apiManager.httpHelperMethod(r.Wj.GET,r.g_.PLAYER_LIST)}getPlayerById(t){return this.apiManager.httpHelperMethod(r.Wj.GET,`${r.g_.PLAYER_BY_ID}/${t}`)}deletePlayer(t){return this.apiManager.httpHelperMethod(r.Wj.DELETE,`${r.g_.PLAYER_DELETE}/${t}`)}}return o.\u0275fac=function(t){return new(t||o)(e.LFG(_.YJ))},o.\u0275prov=e.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var C=n(7392);let Z=(()=>{class o{constructor(t,l,i,p,R){this.dialogRef=t,this.playerModalParams=l,this.sharedService=i,this.playerService=p,this.formBuilder=R,this.playerFormFields=m,this.routes=r.p7,this.clubList=[{label_en:"Club 1",label_fr:"Club 1",value:1},{label_en:"Club 2",label_fr:"Club 2",value:2}]}ngOnInit(){this.initializeForm(),this.playerModalParams.id&&this.getPlayerDetail()}getPlayerDetail(){this.playerService.getPlayerById(this.playerModalParams.id).subscribe(t=>{this.playerModel=t,this.fillForm()})}fillForm(){this.playerForm.reset(this.playerModel)}initializeForm(){this.playerForm=this.formBuilder.group({[m.id]:[null],[m.first_name]:["",[s.kI.required]],[m.last_name]:["",[s.kI.required]],[m.name]:["",[s.kI.required]],[m.age]:["",[s.kI.required]],[m.height]:["",[s.kI.required]],[m.image]:[""],[m.nationality]:["",[s.kI.required]],[m.position]:["",[s.kI.required]],[m.price]:["",[s.kI.required]],[m.club_id]:["",[s.kI.required]]})}saveOrUpdatePlayer(){if(this.playerForm.invalid)this.playerForm.markAllAsTouched();else if(this.playerForm.valid){const t=this.playerForm.value;t.id?this.playerService.updatePlayer(t).subscribe(l=>{this.closeModal(t),this.sharedService.setSnackBar("Player updated successfully")}):this.playerService.addPlayer(t).subscribe(l=>{this.closeModal(t),this.sharedService.setSnackBar("Player created successfully")})}}closeModal(t){this.dialogRef.close(t)}close(){this.dialogRef.close()}get formControls(){return this.playerForm.controls}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(y.so),e.Y36(y.WI),e.Y36(_.F1),e.Y36(P),e.Y36(s.qu))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-edit-player"]],decls:57,vars:42,consts:[[1,"add-edit-player-container"],[3,"formGroup"],[1,"row","add-row"],[1,"col-md-12","lookup-header"],[3,"click"],[1,"col-md-6","form-field"],[3,"formControlName"],[3,"control","fieldName"],[3,"options","formControlName"],[1,"col-md-12","submit-section"],[3,"styleClass","buttonLabel","onClick"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"form",1)(2,"div",2)(3,"div",3)(4,"h1"),e._uU(5),e.qZA(),e.TgZ(6,"mat-icon",4),e.NdJ("click",function(){return l.close()}),e._uU(7,"close"),e.qZA()(),e.TgZ(8,"div",5)(9,"label"),e._uU(10),e.qZA(),e._UZ(11,"ui-input",6)(12,"app-validation-error",7),e.qZA(),e.TgZ(13,"div",5),e._UZ(14,"ui-img-cropper",6),e.qZA(),e.TgZ(15,"div",5)(16,"label"),e._uU(17),e.qZA(),e._UZ(18,"ui-input",6)(19,"app-validation-error",7),e.qZA(),e.TgZ(20,"div",5)(21,"label"),e._uU(22),e.qZA(),e._UZ(23,"ui-input",6)(24,"app-validation-error",7),e.qZA(),e.TgZ(25,"div",5)(26,"label"),e._uU(27),e.qZA(),e._UZ(28,"ui-number",6)(29,"app-validation-error",7),e.qZA(),e.TgZ(30,"div",5)(31,"label"),e._uU(32),e.qZA(),e._UZ(33,"ui-number",6)(34,"app-validation-error",7),e.qZA(),e.TgZ(35,"div",5)(36,"label"),e._uU(37),e.qZA(),e._UZ(38,"ui-input",6)(39,"app-validation-error",7),e.qZA(),e.TgZ(40,"div",5)(41,"label"),e._uU(42),e.qZA(),e._UZ(43,"ui-input",6)(44,"app-validation-error",7),e.qZA(),e.TgZ(45,"div",5)(46,"label"),e._uU(47),e.qZA(),e._UZ(48,"ui-dropdown",8)(49,"app-validation-error",7),e.qZA(),e.TgZ(50,"div",5)(51,"label"),e._uU(52),e.qZA(),e._UZ(53,"ui-input",6)(54,"app-validation-error",7),e.qZA(),e.TgZ(55,"div",9)(56,"ui-button",10),e.NdJ("onClick",function(){return l.saveOrUpdatePlayer()}),e.qZA()()()()()),2&t&&(e.xp6(1),e.Q6J("formGroup",l.playerForm),e.xp6(4),e.Oqu(l.playerModalParams.id?"Update Player":"Add Player"),e.xp6(5),e.Oqu("Name"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.name),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.name])("fieldName","Last Name"),e.xp6(2),e.Q6J("formControlName",l.playerFormFields.image),e.xp6(3),e.Oqu("First Name"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.first_name),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.first_name])("fieldName","First Name"),e.xp6(3),e.Oqu("Last Name"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.last_name),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.last_name])("fieldName","Last Name"),e.xp6(3),e.Oqu("Age"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.age),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.age])("fieldName","First Name"),e.xp6(3),e.Oqu("Height"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.height),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.height])("fieldName","Height"),e.xp6(3),e.Oqu("Nationality"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.nationality),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.nationality])("fieldName","Nationality"),e.xp6(3),e.Oqu("Price"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.price),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.price])("fieldName","Price"),e.xp6(3),e.Oqu("Club"),e.xp6(1),e.Q6J("options",l.clubList)("formControlName",l.playerFormFields.club_id),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.club_id])("fieldName","Club"),e.xp6(3),e.Oqu("Position"),e.xp6(1),e.Q6J("formControlName",l.playerFormFields.position),e.xp6(1),e.Q6J("control",l.formControls[l.playerFormFields.position])("fieldName","Position"),e.xp6(2),e.Q6J("styleClass","primary")("buttonLabel",l.playerModalParams.id?"Update Existing Player":"Add New Player"))},dependencies:[s._Y,s.JJ,s.JL,s.sg,s.u,C.Hw,c.hU,c.ke,c.Al,c.yH,c.du,c.ew],styles:[".add-edit-player-container[_ngcontent-%COMP%]{min-height:100%;background:#f4f5f7;padding:2rem}.add-edit-player-container[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%]{align-items:center}.add-edit-player-container[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%]   .lookup-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:3rem}.add-edit-player-container[_ngcontent-%COMP%]   .add-row[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]{margin-bottom:3rem}"]}),o})();var A=n(266),g=n(6386),M=n(805);const L=["playerTable"];function J(o,a){1&o&&e._UZ(0,"col"),2&o&&e.Tol(a.$implicit.columnName)}function O(o,a){if(1&o&&(e.TgZ(0,"colgroup",10),e.YNc(1,J,1,2,"col",11),e.qZA()),2&o){const t=a.$implicit;e.xp6(1),e.Q6J("ngForOf",t)}}function S(o,a){if(1&o&&e._UZ(0,"p-sortIcon",16),2&o){const t=e.oxw().$implicit;e.Q6J("field",t.columnName)}}const b=function(o){return[o]};function q(o,a){if(1&o&&(e.TgZ(0,"th",13)(1,"div",14)(2,"span"),e._uU(3),e.qZA(),e.YNc(4,S,1,1,"p-sortIcon",15),e.qZA()()),2&o){const t=a.$implicit,l=e.oxw(2);e.Gre("th-",t.columnName,""),e.Q6J("pSortableColumnDisabled",e.VKq(7,b,l.columnNames.actions).includes(t.columnName))("pSortableColumn",t.columnName),e.xp6(3),e.Oqu(t.displayName),e.xp6(1),e.Q6J("ngIf",!e.VKq(9,b,l.columnNames.actions).includes(t.columnName))}}function Q(o,a){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,q,5,11,"th",12),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.columnsArray)}}function U(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"mat-icon",21),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit,p=e.oxw();return e.KtG(p.openPlayerModal(i.id))}),e._uU(2,"edit"),e.qZA(),e.TgZ(3,"mat-icon",22),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2).$implicit,p=e.oxw();return e.KtG(p.deletePlayer(i.id))}),e._uU(4,"delete"),e.qZA()()}if(2&o){const t=e.oxw(3);e.Gre("td-",t.columnNames.actions,""),e.xp6(1),e.Q6J("matTooltip","Edit")("color","primary"),e.xp6(2),e.Q6J("matTooltip","Delete")("color","warn")}}function x(o,a){if(1&o&&(e.TgZ(0,"div"),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit,l=e.oxw().$implicit;e.Gre("td-",t.columnName,""),e.xp6(1),e.hij(" ",l[t.columnName]," ")}}function I(o,a){if(1&o&&(e.TgZ(0,"td"),e.ynx(1,18),e.YNc(2,U,5,7,"div",19),e.YNc(3,x,2,4,"div",20),e.BQk(),e.qZA()),2&o){const t=a.$implicit,l=e.oxw(2);e.xp6(1),e.Q6J("ngSwitch",t.columnName),e.xp6(1),e.Q6J("ngSwitchCase",l.columnNames.actions)}}function w(o,a){if(1&o&&(e.TgZ(0,"tr"),e.YNc(1,I,4,2,"td",17),e.qZA()),2&o){const t=a.columns;e.xp6(1),e.Q6J("ngForOf",t)}}const E=[{path:r.I_.EMPTY,redirectTo:`${r.I_.LIST}`,pathMatch:r.I_.FULL_PATH_MATCH},{path:r.I_.LIST,component:(()=>{class o{constructor(t,l,i){this.playerService=t,this.sharedService=l,this.matDialog=i,this.playerList=[],this.columnsArray=N,this.columnNames=d,this.appConst=r.$x,this.clubList=[{label_en:"Club 1",label_fr:"Club 1",value:1},{label_en:"Club 2",label_fr:"Club 2",value:2}]}ngOnInit(){this.getPlayerList()}getPlayerList(){this.playerService.getPlayerList().subscribe(t=>{this.playerList=t.map(l=>({id:l.id,age:l.age,first_name:l.first_name,height:l.height,image:l.image,last_name:l.last_name,name:l.name,nationality:l.nationality,position:l.position,price:l.price,club_id:l.club_id,club:this.clubList.find(i=>i.value===l.club_id)?.label_en}))})}openPlayerModal(t=""){this.matDialog.open(Z,{panelClass:["width_50","right-modal","content_pad_0","animate__animated","animate__slideInRight"],position:{right:"0",top:"0"},data:{id:t},height:"100%",minHeight:"100%"}).afterClosed().subscribe(p=>{console.log(p,"playerModelplayerModel"),p&&this.getPlayerList()})}deletePlayer(t){this.matDialog.open(c.id,{panelClass:["ui-confirm-alert-container"],data:{text:"Are you sure to want proceed ?",subText:"Player will be deleted"}}).afterClosed().subscribe(i=>{i?.action===r.$x.ACCEPT&&this.callDeleteAPI(t)})}callDeleteAPI(t){this.playerService.deletePlayer(t).subscribe(l=>{this.sharedService.setSnackBar("Player Deleted Successfully"),this.getPlayerList()})}customSort(t){this.playerTable&&this.playerTable.value.sort((0,T.ow)(t))}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(P),e.Y36(_.F1),e.Y36(y.uw))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-player-list"]],viewQuery:function(t,l){if(1&t&&e.Gf(L,5),2&t){let i;e.iGM(i=e.CRH())&&(l.playerTable=i.first)}},decls:12,vars:6,consts:[[1,"player-list-section","list-layout-section"],[1,"row"],[1,"row","col-md-12","add-btn-section"],[3,"buttonSize","styleClass","buttonLabel","onClick"],[1,"col-md-12","player-list","table-list"],[3,"customSort","value","columns","sortFunction"],["playerTable",""],["pTemplate","colgroup"],["pTemplate","header"],["pTemplate","body"],[1,"column-group"],[3,"class",4,"ngFor","ngForOf"],[3,"class","pSortableColumnDisabled","pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumnDisabled","pSortableColumn"],[1,"td-div"],[3,"field",4,"ngIf"],[3,"field"],[4,"ngFor","ngForOf"],[3,"ngSwitch"],[3,"class",4,"ngSwitchCase"],[3,"class",4,"ngSwitchDefault"],[1,"edit-icon",3,"matTooltip","color","click"],[1,"delete-icon",3,"matTooltip","color","click"]],template:function(t,l){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h1"),e._uU(4,"Player List"),e.qZA(),e.TgZ(5,"ui-button",3),e.NdJ("onClick",function(){return l.openPlayerModal()}),e.qZA()(),e.TgZ(6,"div",4)(7,"p-table",5,6),e.NdJ("sortFunction",function(p){return l.customSort(p)}),e.YNc(9,O,2,1,"ng-template",7),e.YNc(10,Q,2,1,"ng-template",8),e.YNc(11,w,2,1,"ng-template",9),e.qZA()()()()),2&t&&(e.xp6(5),e.Q6J("buttonSize","small")("styleClass","primary")("buttonLabel","Add Player"),e.xp6(2),e.Q6J("customSort",!0)("value",l.playerList)("columns",l.columnsArray))},dependencies:[u.sg,u.O5,u.RF,u.n9,u.ED,C.Hw,A.gM,g.iA,M.jx,g.lQ,g.fz,c.yH],styles:[".column-group[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .column-group[_ngcontent-%COMP%]   .first_name[_ngcontent-%COMP%], .column-group[_ngcontent-%COMP%]   .last_name[_ngcontent-%COMP%], .column-group[_ngcontent-%COMP%]   .player_name[_ngcontent-%COMP%]{width:25rem}.column-group[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{width:8rem}"]}),o})(),canActivate:[F.a]}];let k=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.Bz.forChild(E),h.Bz]}),o})(),D=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,k,v.m]}),o})()}}]);
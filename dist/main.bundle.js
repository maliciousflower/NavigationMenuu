webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n\r\n\r\n   \r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_noop_Interceptor__ = __webpack_require__("../../../../../src/app/services/noop.Interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_list_user_list_component__ = __webpack_require__("../../../../../src/app/components/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_category_list_category_list_component__ = __webpack_require__("../../../../../src/app/components/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_post_list_post_list_component__ = __webpack_require__("../../../../../src/app/components/post-list/post-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_authorized_login_login_component__ = __webpack_require__("../../../../../src/app/components/authorized/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_authorized_register_register_component__ = __webpack_require__("../../../../../src/app/components/authorized/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_authorized_add_post_add_post_component__ = __webpack_require__("../../../../../src/app/components/authorized/add-post/add-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_authorized_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/authorized/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_authorized_add_category_add_category_component__ = __webpack_require__("../../../../../src/app/components/authorized/add-category/add-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_view_post_view_post_component__ = __webpack_require__("../../../../../src/app/components/view-post/view-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_loading__ = __webpack_require__("../../../../ngx-loading/ngx-loading/ngx-loading.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_quill_editor__ = __webpack_require__("../../../../ngx-quill-editor/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_chips__ = __webpack_require__("../../../../ngx-chips/dist/ngx-chips.bundle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_chips___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_ngx_chips__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pipes_SafeHtml__ = __webpack_require__("../../../../../src/app/pipes/SafeHtml.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_authorized_remove_post_remove_post_component__ = __webpack_require__("../../../../../src/app/components/authorized/remove-post/remove-post.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_authorized_remove_category_remove_category_component__ = __webpack_require__("../../../../../src/app/components/authorized/remove-category/remove-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';




 // this is needed!




var appRoutes = [
    {
        path: 'dashboard',
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guard_auth_guard__["a" /* AuthGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_18__components_authorized_dashboard_dashboard_component__["a" /* DashboardComponent */]
    },
    {
        path: 'addPost',
        component: __WEBPACK_IMPORTED_MODULE_17__components_authorized_add_post_add_post_component__["a" /* AddPostComponent */]
    },
    {
        path: 'addCategory',
        component: __WEBPACK_IMPORTED_MODULE_19__components_authorized_add_category_add_category_component__["a" /* AddCategoryComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_15__components_authorized_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_16__components_authorized_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'post/:slug',
        component: __WEBPACK_IMPORTED_MODULE_20__components_view_post_view_post_component__["a" /* ViewPostComponent */]
    },
    {
        path: 'removePost',
        component: __WEBPACK_IMPORTED_MODULE_27__components_authorized_remove_post_remove_post_component__["a" /* RemovePostComponent */]
    },
    {
        path: 'removeCategory',
        component: __WEBPACK_IMPORTED_MODULE_28__components_authorized_remove_category_remove_category_component__["a" /* RemoveCategoryComponent */]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_user_list_user_list_component__["a" /* UserListComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_category_list_category_list_component__["a" /* CategoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_post_list_post_list_component__["a" /* PostListComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_authorized_add_post_add_post_component__["a" /* AddPostComponent */],
            __WEBPACK_IMPORTED_MODULE_14__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_authorized_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_18__components_authorized_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_authorized_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_19__components_authorized_add_category_add_category_component__["a" /* AddCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_20__components_view_post_view_post_component__["a" /* ViewPostComponent */],
            __WEBPACK_IMPORTED_MODULE_26__pipes_SafeHtml__["a" /* SafeHtml */],
            __WEBPACK_IMPORTED_MODULE_27__components_authorized_remove_post_remove_post_component__["a" /* RemovePostComponent */],
            __WEBPACK_IMPORTED_MODULE_28__components_authorized_remove_category_remove_category_component__["a" /* RemoveCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_29__shared_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_21_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_23_ngx_quill_editor__["a" /* QuillEditorModule */],
            __WEBPACK_IMPORTED_MODULE_24_ngx_chips__["TagInputModule"],
            __WEBPACK_IMPORTED_MODULE_25__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_22_ngx_loading__["b" /* LoadingModule */].forRoot({
                animationType: __WEBPACK_IMPORTED_MODULE_22_ngx_loading__["a" /* ANIMATION_TYPES */].threeBounce,
                backdropBackgroundColour: 'rgba(0,0,0,0.1)',
                backdropBorderRadius: '4px',
                primaryColour: '#ffffff',
                secondaryColour: '#ffffff',
                tertiaryColour: '#ffffff'
            })
            // FroalaEditorModule.forRoot(), FroalaViewModule.forRoot()
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__guard_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_data_service__["a" /* DataService */], {
                provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_8__services_noop_Interceptor__["a" /* NoopInterceptor */],
                multi: true,
            }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/add-category/add-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/add-category/add-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n            <h1 class=\"display-4\">\r\n                Add New Category\r\n            </h1>\r\n            <form [formGroup]=\"addCategoryForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Category Name\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"pid\" formControlName=\"category_name\" name=\"category_name\" placeholder=\"Category Name\" type=\"text\"/>\r\n                    \r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Category Name\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"category_image\" formControlName=\"category_image\" name=\"category_image\" placeholder=\"Category Image\" type=\"text\"/>\r\n                    \r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                    <label for=\"file\">\r\n                        Choose category image file\r\n                    </label>\r\n                    <input class=\"form-control-file\" id=\"file\" #categoryImage formControlName=\"category_image\" name=\"file\" type=\"file\"/>\r\n                    \r\n                </div> -->\r\n                \r\n                <button class=\"btn btn-primary\" type=\"submit\">\r\n                    Submit\r\n                </button>\r\n\r\n            </form>\r\n        </div>"

/***/ }),

/***/ "../../../../../src/app/components/authorized/add-category/add-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_category__ = __webpack_require__("../../../../../src/app/models/category.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCategoryComponent = (function () {
    function AddCategoryComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.createForm();
    }
    AddCategoryComponent.prototype.createForm = function () {
        this.addCategoryForm = this.fb.group({
            category_name: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            category_image: '',
        });
    };
    AddCategoryComponent.prototype.getCategoryname = function () {
        var nameControl = this.addCategoryForm.get('category_name');
    };
    AddCategoryComponent.prototype.onSubmit = function () {
        var formModel = this.addCategoryForm.value;
        // const image=this.Category_Image.nativeElement;
        // if(image.files && image.files[0]){
        //   this.CategoryImageFile=image.files[0];
        // }
        // const imageFile : File=this.CategoryImageFile;
        // console.log(imageFile);
        var formData = new FormData();
        formData.append('category_name', formModel.category_name);
        formData.append('category_image', formModel.category_image);
        // formData.append('file',imageFile,imageFile.name);
        this.dataService.add_category(formData).subscribe(function (res) {
            console.log("Saved Category");
        }, function (err) {
            console.log("Error occured while save category");
        });
    };
    AddCategoryComponent.prototype.ngOnInit = function () {
    };
    return AddCategoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_category__["a" /* Category */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_category__["a" /* Category */]) === "function" && _a || Object)
], AddCategoryComponent.prototype, "category", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('categoryImage'),
    __metadata("design:type", Object)
], AddCategoryComponent.prototype, "Category_Image", void 0);
AddCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-category',
        template: __webpack_require__("../../../../../src/app/components/authorized/add-category/add-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/add-category/add-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], AddCategoryComponent);

var _a, _b, _c;
//# sourceMappingURL=add-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/add-post/add-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/add-post/add-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n            <h1 class=\"display-4\">\r\n                Add New Post\r\n            </h1>\r\n            <form [formGroup]=\"addPostForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Title\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"title\" formControlName=\"title\" name=\"title\" placeholder=\"Title\" type=\"text\"/>\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('title').touched && addPostForm.get('title').hasError('required')\">\r\n                    Title is required\r\n                  </div>\r\n\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('title').touched && addPostForm.get('title').hasError('minlength')\">\r\n                    Minimum of 4 characters\r\n                  </div>\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('title').touched && addPostForm.get('title').hasError('validateLetters')\">\r\n                    Letters only\r\n                  </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Slug\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"slug\" formControlName=\"slug\" name=\"slug\" placeholder=\"Slug\" type=\"text\"/>\r\n                \r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('slug').touched && addPostForm.get('slug').hasError('required')\">\r\n                    Slug is required\r\n                  </div>\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('slug').touched && addPostForm.get('slug').hasError('validateLetters')\">\r\n                    Letters only\r\n                  </div>\r\n\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('slug').touched && addPostForm.get('slug').hasError('minlength')\">\r\n                    Minimum of 4 characters\r\n                  </div>\r\n\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('slug').touched && addPostForm.get('slug').hasError('validateSpaces')\">\r\n                    Spaces not allowed\r\n                  </div>   \r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Read Time\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"read_time\" formControlName=\"read_time\" name=\"read_time\" placeholder=\"Read Time\" type=\"text\"/>\r\n                \r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('read_time').touched && addPostForm.get('read_time').hasError('required')\">\r\n                    Read Time is required\r\n                  </div>\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('read_time').touched && addPostForm.get('read_time').hasError('validateNumbers')\">\r\n                    Numbers only\r\n                  </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Likes\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"likes\" formControlName=\"likes\" name=\"likes\" placeholder=\"Likes\" type=\"text\"/>\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('likes').touched && addPostForm.get('likes').hasError('validateNumbers')\">\r\n                    Numbers only\r\n                  </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Publish\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"publish\" formControlName=\"publish\" name=\"publish\" placeholder=\"Publish\" type=\"text\"/>\r\n                </div>\r\n\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('publish').touched && addPostForm.get('publish').hasError('required')\">\r\n                    Publish date is required\r\n                  </div>\r\n\r\n                  <div class=\"error\" *ngIf=\"addPostForm.get('publish').touched && addPostForm.get('publish').hasError('validateDate')\">\r\n                    Date format should be yyyy-mm-dd\r\n                  </div>   \r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlInput1\">\r\n                        Picture URL\r\n                    </label>\r\n                    <input class=\"form-control\" id=\"image\" formControlName=\"image\" name=\"image\" placeholder=\"Picture URL\" type=\"text\"/>\r\n                </div>\r\n\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('image').touched && addPostForm.get('image').hasError('required')\">\r\n                    Picture link is required\r\n                  </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlSelect1\">\r\n                        Author\r\n                    </label>\r\n                    <select formControlName=\"author\" class=\"js-example-basic-single btn-block \" id=\"author\" name=\"author\">\r\n                        <option value=\"\">Select User</option>\r\n                        <option *ngFor=\"let user of users\">\r\n                            {{user.username}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('author').touched && addPostForm.get('author').hasError('required')\">\r\n                    Author is required\r\n                  </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlSelect1\">\r\n                        Category\r\n                    </label>\r\n                    <select formControlName=\"category_name\" class=\"js-example-basic-single btn-block\" id=\"category_name\" name=\"category_name\" >\r\n                        <option value=\"\">Select Category</option>\r\n                        <option *ngFor=\"let category of categories\">\r\n                            {{category.category_name}}\r\n                        </option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('category_name').touched && addPostForm.get('category_name').hasError('required')\">\r\n                    Category is required\r\n                  </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlSelect1\">\r\n                        Tags\r\n                    </label>\r\n                    <tag-input\r\n                    [modelAsStrings]='true'\r\n                    formControlName=\"tags\"  >\r\n                </tag-input>\r\n                </div>\r\n                <div class=\"error\" *ngIf=\"addPostForm.get('tags').touched && addPostForm.get('tags').hasError('required')\">\r\n                    Tags are required\r\n                  </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"exampleFormControlTextarea1\">\r\n                        Content\r\n                    </label>\r\n\r\n                    <quill-editor \r\n                    formControlName=\"content\"\r\n                    [options]=\"editorOptions\"\r\n                    (blur)=\"onEditorBlured($event)\"\r\n                    (focus)=\"onEditorFocused($event)\"\r\n                    (ready)=\"onEditorCreated($event)\"\r\n                    (change)=\"onContentChanged($event)\"></quill-editor>\r\n                   \r\n                    \r\n\r\n                </div>\r\n                <!-- <div class=\"form-group\">\r\n                    <label for=\"file\">\r\n                        Choose image file\r\n                    </label>\r\n                    <input class=\"form-control-file\" id=\"fileinput\" #postImage formControlName=\"file\" name=\"file\" type=\"file\" accept=\"image/* \"/>\r\n                \r\n                </div> -->\r\n\r\n              \r\n\r\n                <button class=\"btn btn-primary\" type=\"submit\" >\r\n                    Submit\r\n                </button>\r\n            </form>\r\n            </div>"

/***/ }),

/***/ "../../../../../src/app/components/authorized/add-post/add-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_category__ = __webpack_require__("../../../../../src/app/models/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_date_validator__ = __webpack_require__("../../../../../src/app/validators/date.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__validators_space_validator__ = __webpack_require__("../../../../../src/app/validators/space.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_number_validator__ = __webpack_require__("../../../../../src/app/validators/number.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/filter.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddPostComponent = (function () {
    function AddPostComponent(fb, dataService) {
        this.fb = fb;
        this.dataService = dataService;
        this.categories = [];
        this.users = [];
        this.editorContent = "<h3>I am Example content</h3>";
        this.editorOptions = {
            placeholder: "insert content...",
        };
    }
    AddPostComponent.prototype.onEditorCreated = function (quill) {
        this.editor = quill;
        console.log('quill is ready! this is current quill instance object', quill);
    };
    AddPostComponent.prototype.createForm = function () {
        this.addPostForm = this.fb.group({
            title: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]],
            slug: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_5__validators_space_validator__["a" /* ValidateSpaces */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]],
            author: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            image: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            content: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            read_time: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_6__validators_number_validator__["a" /* ValidateNumbers */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(4)]],
            likes: ['', [__WEBPACK_IMPORTED_MODULE_6__validators_number_validator__["a" /* ValidateNumbers */]]],
            category_name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            publish: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__validators_date_validator__["a" /* ValidateDate */]]],
            editorContent: '',
            tags: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
    };
    AddPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.createForm();
        this.getCategories();
        this.getUsers();
        setTimeout(function () {
            _this.editorContent = '<h1>content changed!</h1>';
            console.log('you can use the quill instance object to do something', _this.editor);
            // this.editor.disable();
        }, 2800);
    };
    AddPostComponent.prototype.getCategories = function () {
        var _this = this;
        this.dataService.get_categories().subscribe(function (res) {
            _this.categories = res['results'];
        });
    };
    AddPostComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.get_users().subscribe(function (res) {
            _this.users = res['results'];
        });
    };
    AddPostComponent.prototype.onSubmit = function () {
        var formModel = this.addPostForm.value;
        // const image=this.Post_Image.nativeElement;
        // if(image.files && image.files[0]){
        //   this.PostImageFile=image.files[0];
        // }
        // const imageFile : File=this.PostImageFile;
        // console.log(imageFile);
        var formData = new FormData();
        formData.append('title', formModel.title);
        formData.append('slug', formModel.slug);
        formData.append('author', formModel.author);
        formData.append('image', formModel.image);
        formData.append('content', formModel.content);
        formData.append('read_time', formModel.read_time);
        formData.append('likes', formModel.likes);
        formData.append('category_name', formModel.category_name);
        formData.append('publish', formModel.publish);
        formData.append('tags', formModel.tags);
        // formData.append('file',imageFile,imageFile.name);
        this.dataService.add_post(formData).subscribe(function (res) {
            console.log("Saved Post");
        }, function (err) {
            console.log("Error occured");
        });
    };
    /////////////
    AddPostComponent.prototype.onEditorBlured = function (quill) {
        console.log('editor blur!', quill);
    };
    AddPostComponent.prototype.onEditorFocused = function (quill) {
        console.log('editor focus!', quill);
    };
    AddPostComponent.prototype.onContentChanged = function (_a) {
        var quill = _a.quill, html = _a.html, text = _a.text;
        console.log('quill content is changed!', quill, html, text);
    };
    return AddPostComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_category__["a" /* Category */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_category__["a" /* Category */]) === "function" && _a || Object)
], AddPostComponent.prototype, "category", void 0);
AddPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'add-post',
        template: __webpack_require__("../../../../../src/app/components/authorized/add-post/add-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/add-post/add-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _c || Object])
], AddPostComponent);

var _a, _b, _c;
//# sourceMappingURL=add-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  app-dashboard works!\r\n  --- You are authenticated ---\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorized/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dataService) {
        this.dataService = dataService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/authorized/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row \">\r\n  <div class=\"col-sm\"></div>\r\n  <div class=\"col-sm \">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\" novalidate >\r\n      <div class=\"form-group \">\r\n        <label for=\"InputEmail\">Email address</label>\r\n        <input type=\"email\" class=\"form-control\" id=\"InputEmail\" ngModel name=\"email\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n        <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n      </div>\r\n      <div class=\"form-group\">\r\n        <label for=\"InputPassword\">Password</label>\r\n        <input type=\"password\" class=\"form-control\" id=\"InputPassword\" ngModel name=\"password\" placeholder=\"Password\">\r\n      </div>\r\n\r\n      <button type=\"submit\" class=\"btn btn-primary\">Login</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"col-sm\"></div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/authorized/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSubmit = function (f) {
        var _this = this;
        var email = f.value.email;
        var password = f.value.password;
        console.log(f.value.email);
        this.dataService.login_user(email, password).subscribe(function (res) {
            var results = res['token'];
            if (results) {
                _this.dataService.setUserLoggedIn();
                console.log('worlds');
                _this.router.navigate(['/dashboard']);
            }
            else {
                console.log('worlds faild');
            }
        }, function (err) {
            console.log("Error occured");
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/authorized/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  register works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/authorized/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/authorized/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [])
], RegisterComponent);

//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/remove-category/remove-category.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/remove-category/remove-category.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <p>Please select the category that you want to remove</p>\n\n\n  <table class=\"table\" id=\"postTable\">\n    <thead>\n      <tr>\n        \n        <th scope=\"col\">Category Name</th>\n      \n      </tr>\n    </thead>\n    <tbody>\n\n      <tr *ngFor=\"let category of categories\" (click)=\"selectRow(category)\">\n        <th scope=\"row\">{{category.category_name}}</th>\n      </tr>\n\n    </tbody>\n  </table>\n\n  <ngx-loading [show]=\"loading\"> </ngx-loading>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/authorized/remove-category/remove-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoveCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RemoveCategoryComponent = (function () {
    function RemoveCategoryComponent(dataService) {
        this.dataService = dataService;
        this.categories = [];
        this.loading = false;
    }
    RemoveCategoryComponent.prototype.getCategories = function () {
        var _this = this;
        this.loading = true;
        this.dataService.get_categories().subscribe(function (res) {
            _this.categories = res['results'];
            _this.loading = false;
        });
    };
    RemoveCategoryComponent.prototype.selectRow = function (category) {
        this.dataService.remove_category(category.category_name).subscribe(function (res) {
            console.log("Cateogory deleted");
        }, function (err) {
            console.log("Error occured while deleting category");
        });
    };
    RemoveCategoryComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    return RemoveCategoryComponent;
}());
RemoveCategoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-remove-category',
        template: __webpack_require__("../../../../../src/app/components/authorized/remove-category/remove-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/remove-category/remove-category.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], RemoveCategoryComponent);

var _a;
//# sourceMappingURL=remove-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/authorized/remove-post/remove-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/authorized/remove-post/remove-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <p>Please select the post that you want to remove</p>\n\n\n  <table class=\"table\" id=\"postTable\">\n    <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Slug</th>\n      </tr>\n    </thead>\n    <tbody>\n      \n        <tr *ngFor=\"let post of cardposts\" (click)=\"selectRow(post)\">\n          <th scope=\"row\">{{post.id}}</th>\n          <td>{{post.title}}</td>\n          <td>{{post.slug}}</td>\n        </tr>\n      \n    </tbody>\n  </table>\n\n  <ngx-loading [show]=\"loading\"> </ngx-loading>\n\n  \n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/components/authorized/remove-post/remove-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemovePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RemovePostComponent = (function () {
    function RemovePostComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.cardposts = [];
        this.loading = false;
        this.loaded = false;
    }
    RemovePostComponent.prototype.getPosts = function () {
        var _this = this;
        this.loading = true;
        this.dataService.get_posts().subscribe(function (res) {
            _this.cardposts = res['results'];
            _this.loading = false;
            _this.loaded = true;
        });
    };
    RemovePostComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    RemovePostComponent.prototype.selectRow = function (row) {
        alert(row.slug);
        var slug = row.slug;
        this.dataService.remove_post(slug).subscribe(function (res) {
            console.log("Post deleted");
        }, function (err) {
            console.log("Error occured while deleting post");
        });
    };
    return RemovePostComponent;
}());
RemovePostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-remove-post',
        template: __webpack_require__("../../../../../src/app/components/authorized/remove-post/remove-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/authorized/remove-post/remove-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], RemovePostComponent);

var _a, _b;
//# sourceMappingURL=remove-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dropdown-item\" *ngFor=\"let category of categories\" href=\"#\">\r\n  <a class=\"dropdown-item\" href=\"#\">{{category.category_name}}</a>   \r\n</div>\r\n\r\n<ngx-loading [show]=\"loading\">  </ngx-loading>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoryListComponent = (function () {
    function CategoryListComponent(dataService) {
        this.dataService = dataService;
        this.categories = [];
        this.loading = false;
    }
    CategoryListComponent.prototype.getCategories = function () {
        var _this = this;
        this.loading = true;
        this.dataService.get_categories().subscribe(function (res) {
            _this.categories = res['results'];
            _this.loading = false;
        });
    };
    CategoryListComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'category-list',
        template: __webpack_require__("../../../../../src/app/components/category-list/category-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/category-list/category-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], CategoryListComponent);

var _a;
//# sourceMappingURL=category-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "  .mobileShow {display: none;} \r\n  .notMobileShow{display: inline;}\r\n\r\n  \r\n  /* Smartphone Portrait and Landscape */ \r\n  @media only screen \r\n    and (min-width : 320px) \r\n    and (max-width : 480px){ \r\n      .mobileShow {display: inline;}\r\n      .notMobileShow{display:none;}\r\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<img [src]=\"mobileImagePath\" class=\"img-fluid rounded headerImage mobileShow\">\r\n<img [src]=\"notMobileImagePath\" class=\"img-fluid rounded headerImage notMobileShow\">\r\n\r\n<div class=\"container\">\r\n\r\n    <hr>\r\n    <post-list></post-list>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.notMobileImagePath = 'assets/images/header.jpg';
        this.mobileImagePath = 'assets/images/mob.png';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".my-space{\r\n    margin-top: 3px;\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"col-lg-10\">\r\n<div class=\"card-columns\" >\r\n  <div class=\"card\" *ngFor=\"let post of cardposts | paginate: { itemsPerPage: 10, currentPage: p }\" (click)=\"viewPost(post.slug)\">\r\n    <img class=\"card-img-top img-fluid\" src=\"{{post.image}}\" alt=\"Card image cap\">\r\n    <div class=\"card-block\">\r\n      \r\n      <h6 class=\"card-title my-space\">{{post.title}}\r\n          <span class=\"card-text my-space pull-right badge badge-pill badge-dark\">{{post.likes}}</span>\r\n      </h6>\r\n      <!-- <div [froalaView]=\"post.content\"></div> -->\r\n      <p class=\"card-text\"><small class=\"text-muted my-space\">{{post.slug}}</small></p>\r\n      <!-- <p class=\"card-text my-space\" >{{post.slug}}</p> -->\r\n\r\n    </div>\r\n   \r\n  </div>\r\n  </div>\r\n</div>\r\n  <ngx-loading [show]=\"loading\">  </ngx-loading>\r\n    <div *ngIf=\"loaded\">\r\n<pagination-controls (pageChange)=\"p = $event\"></pagination-controls></div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/post-list/post-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostListComponent = (function () {
    function PostListComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.cardposts = [];
        this.p = 1;
        this.loading = false;
        this.loaded = false;
    }
    PostListComponent.prototype.getPosts = function () {
        var _this = this;
        this.loading = true;
        this.dataService.get_posts().subscribe(function (res) {
            _this.cardposts = res['results'];
            _this.loading = false;
            _this.loaded = true;
        });
    };
    PostListComponent.prototype.viewPost = function (slug) {
        this.router.navigate(['/post/' + slug]);
    };
    PostListComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    return PostListComponent;
}());
PostListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'post-list',
        template: __webpack_require__("../../../../../src/app/components/post-list/post-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/post-list/post-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], PostListComponent);

var _a, _b;
//# sourceMappingURL=post-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "  <button (click)=\"getUsers()\">GET Users</button>\r\n  \r\n      <div *ngFor=\"let user of users\" >\r\n        <br>\r\n        -- id: {{user.id}} <br>\r\n        -- username: {{user.username}}<br>\r\n        -- email: {{user.email}}<br>\r\n        -- password: {{user.password}}<br>\r\n        -- uid: {{user.uid}}<br>\r\n\r\n      </div>\r\n    \r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserListComponent = (function () {
    function UserListComponent(dataService) {
        this.dataService = dataService;
        this.users = [];
    }
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        this.dataService.get_users().subscribe(function (res) {
            _this.users = res['results'];
        });
    };
    UserListComponent.prototype.ngOnInit = function () {
        console.log('user list component');
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'user-list',
        template: __webpack_require__("../../../../../src/app/components/user-list/user-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-list/user-list.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object])
], UserListComponent);

var _a;
//# sourceMappingURL=user-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/view-post/view-post.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/view-post/view-post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<br><br><br>    \r\n<div *ngFor=\"let post of posts\">\r\n    <img src=\"{{post.image}}\" class=\"img-fluid\" alt=\"Responsive image\">\r\n    <hr>\r\n    <p [innerHTML]=\"post.content | safeHtml\"></p>  \r\n</div>\r\n<ngx-loading [show]=\"loading\">  </ngx-loading>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/view-post/view-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewPostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewPostComponent = (function () {
    function ViewPostComponent(route, dataService) {
        this.route = route;
        this.dataService = dataService;
        this.loading = false;
    }
    ViewPostComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.route.paramMap
            .switchMap(function (params) { return _this.dataService.view_post(params.get('slug')); })
            .subscribe(function (res) { return _this.posts = res['results']; });
        this.loading = false;
        // this.route.params.subscribe((params: Params) => {
        //   let slug = params['slug'];
        //   console.log(slug);
        // });
    };
    return ViewPostComponent;
}());
ViewPostComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view-post',
        template: __webpack_require__("../../../../../src/app/components/view-post/view-post.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/view-post/view-post.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _b || Object])
], ViewPostComponent);

var _a, _b;
//# sourceMappingURL=view-post.component.js.map

/***/ }),

/***/ "../../../../../src/app/guard/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(data, router) {
        this.data = data;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        console.log('You are not authenticated');
        return this.data.getUserLoggedIn();
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/models/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });
var Category = (function () {
    function Category() {
    }
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/SafeHtml.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafeHtml; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafeHtml = (function () {
    function SafeHtml(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafeHtml.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    return SafeHtml;
}());
SafeHtml = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({ name: 'safeHtml', pure: false }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], SafeHtml);

var _a;
//# sourceMappingURL=SafeHtml.js.map

/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(httpClient) {
        this.httpClient = httpClient;
        //get api endpoint url fron environment file
        this.baseUrl = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint;
        this.isUserLoggedIn = false;
    }
    DataService.prototype.setUserLoggedIn = function () {
        this.isUserLoggedIn = true;
    };
    DataService.prototype.getUserLoggedIn = function () {
        return this.isUserLoggedIn;
    };
    DataService.prototype.add_post = function (formGroup) {
        return this.httpClient.post(this.baseUrl + '/addPost', formGroup);
    };
    DataService.prototype.add_category = function (formGroup) {
        return this.httpClient.post(this.baseUrl + '/addCategory', formGroup);
    };
    DataService.prototype.login_user = function (email, password) {
        return this.httpClient.post(this.baseUrl + '/login', {
            email: email,
            password: password
        });
    };
    DataService.prototype.register_user = function () {
        return this.httpClient.get(this.baseUrl + '/signup');
    };
    DataService.prototype.get_users = function () {
        return this.httpClient.get(this.baseUrl + '/users');
    };
    DataService.prototype.get_posts = function () {
        return this.httpClient.get(this.baseUrl + '/posts');
    };
    DataService.prototype.get_categories = function () {
        return this.httpClient.get(this.baseUrl + '/categories');
    };
    DataService.prototype.view_post = function (slug) {
        return this.httpClient.get(this.baseUrl + '/posts/' + slug);
    };
    DataService.prototype.remove_post = function (slug) {
        return this.httpClient.delete(this.baseUrl + '/posts/removePost/' + slug);
    };
    DataService.prototype.remove_category = function (category_name) {
        return this.httpClient.delete(this.baseUrl + '/categories/removeCategory/' + category_name);
    };
    return DataService;
}());
DataService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/noop.Interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoopInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NoopInterceptor = (function () {
    function NoopInterceptor() {
    }
    NoopInterceptor.prototype.intercept = function (req, next) {
        // Change the URL and replace 'http://' with 'https://'
        var secureReq = req.clone({ url: req.url.replace('http://', 'https://') });
        return next.handle(req);
    };
    return NoopInterceptor;
}());
NoopInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], NoopInterceptor);

//# sourceMappingURL=noop.Interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-distributed{\r\n\tbackground-color: #292c2f;\r\n\tbox-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\tbox-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: normal 16px sans-serif;\r\n\r\n\tpadding: 45px 50px;\r\n\tmargin-top: 80px;\r\n}\r\n\r\n.footer-distributed .footer-left p{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tmargin: 0;\r\n}\r\n\r\n/* Footer links */\r\n\r\n.footer-distributed p.footer-links{\r\n\tfont-size:18px;\r\n\tfont-weight: bold;\r\n\tcolor:  #ffffff;\r\n\tmargin: 0 0 10px;\r\n\tpadding: 0;\r\n}\r\n\r\n.footer-distributed p.footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n\r\n.footer-distributed .footer-right{\r\n\tfloat: right;\r\n\tmargin-top: 6px;\r\n\tmax-width: 180px;\r\n}\r\n\r\n.footer-distributed .footer-right a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-left: 3px;\r\n}\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n\r\n@media (max-width: 600px) {\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-right{\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-right{\r\n\t\tfloat: none;\r\n\t\tmargin: 0 auto 20px;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left p.footer-links{\r\n\t\tline-height: 1.8;\r\n\t}\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer-distributed\">\n\n    <div class=\"footer-right\">\n\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n      <a href=\"#\"><i class=\"fa fa-github\"></i></a>\n\n    </div>\n\n    <div class=\"footer-left\">\n\n      <p class=\"footer-links\">\n        <a href=\"#\">Home</a>\n        ·\n        <a href=\"#\">Blog</a>\n        ·\n        <a href=\"#\">About</a>\n        ·\n        <a href=\"#\">Contact</a>\n      </p>\n\n      <p>Katha Potha &copy; 2018</p>\n    </div>\n\n  </footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n      <a class=\"navbar-brand\" href=\"#\">Katha Potha</a>\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" href=\"#\">Home <span class=\"sr-only\">(current)</span></a>\r\n          </li>\r\n          \r\n          <li class=\"nav-item dropdown\" ngbDropdown>\r\n            <a class=\"nav-link dropdown-toggle\" id=\"dropdown01\" ngbDropdownToggle>Categories</a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"dropdown01\" ngbDropdownMenu>\r\n              <category-list></category-list>\r\n              \r\n            </div>\r\n          </li>\r\n        </ul>\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\r\n        </form>\r\n      </div>\r\n    </nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/validators/date.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidateDate;
function ValidateDate(c) {
    var DATE_REGEXP = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
    return DATE_REGEXP.test(c.value) ? null : {
        validateDate: {
            valid: false
        }
    };
}
//# sourceMappingURL=date.validator.js.map

/***/ }),

/***/ "../../../../../src/app/validators/number.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidateNumbers;
function ValidateNumbers(c) {
    var NUMBERS_REGEXP = /^\d+$/;
    return NUMBERS_REGEXP.test(c.value) ? null : {
        validateNumbers: {
            valid: false
        }
    };
}
//# sourceMappingURL=number.validator.js.map

/***/ }),

/***/ "../../../../../src/app/validators/space.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ValidateSpaces;
function ValidateSpaces(c) {
    var SPACES_REGEXP = /^\S*$/;
    return SPACES_REGEXP.test(c.value) ? null : {
        validateSpaces: {
            valid: false
        }
    };
}
//# sourceMappingURL=space.validator.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiEndpoint: 'https://sinhalakatha.herokuapp.com/sinhalakatha/api'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
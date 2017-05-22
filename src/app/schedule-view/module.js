"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
// this is added so that an ngFor in the schools html will work.
var common_1 = require("@angular/common");
var component_1 = require("./component");
var component_2 = require("./schedule/component");
var ScheduleViewModule = (function () {
    function ScheduleViewModule() {
    }
    return ScheduleViewModule;
}());
ScheduleViewModule = __decorate([
    core_1.NgModule({
        declarations: [
            component_1.ScheduleViewComponent,
            component_2.ScheduleComponent,
        ],
        imports: [
            common_1.CommonModule
        ],
        providers: []
    })
], ScheduleViewModule);
exports.ScheduleViewModule = ScheduleViewModule;

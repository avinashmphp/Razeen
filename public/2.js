(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../form.js */ "./resources/js/form.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "ProductComponent",
  data: function data() {
    return {
      product: new _form_js__WEBPACK_IMPORTED_MODULE_0__["Form"]({
        id: "",
        nameEn: "",
        nameAr: "",
        percentage: "",
        bank: ""
      }),
      filterBank: "",
      showModal: false,
      isEditMode: false,
      success: "",
      bankProducts: {}
    };
  },
  computed: {
    products: function products() {
      return this.$store.getters.getProducts;
    },
    banks: function banks() {
      return this.$store.getters.getBanks;
    },
    isLoading: function isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    onAdd: function onAdd() {
      this.showModal = true;
      this.product.reset();
    },
    onEdit: function onEdit(item) {
      var data = Object.entries(item).reduce(function (c, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        if (_typeof(v) === "object") c[k] = v.id;else c[k] = v;
        return c;
      }, {});
      this.onAdd();
      this.isEditMode = true;
      this.product.fill(data);
    },
    onClose: function onClose() {
      this.showModal = false;
      this.isEditMode = false;
      this.success = "";
    },
    onCreate: function onCreate(e) {
      var _this = this;

      this.$store.dispatch("createProduct", this.product).then(function (response) {
        _this.success = response.data.success;
      })["catch"](function (error) {
        _this.product.errors.record(error.response.data.errors);
      });
    },
    onUpdate: function onUpdate(e) {
      var _this2 = this;

      this.$store.dispatch("updateProduct", this.product).then(function (response) {
        _this2.success = response.data.success;
      })["catch"](function (error) {
        _this2.product.errors.record(error.response.data.errors);
      });
    },
    onDelete: function onDelete(item) {
      var _this3 = this;

      this.$store.dispatch("deleteProduct", item).then()["catch"](function (error) {
        _this3.product.errors.record(error.response.data.errors);
      });
    },
    onFilter: function onFilter() {
      var _this4 = this;

      this.bankProducts = {};
      this.$store.dispatch("bankProducts", this.filterBank).then(function (response) {
        _this4.bankProducts = response.data;
      })["catch"](function (error) {
        _this4.product.errors.record(error.response.data.errors);
      });
    }
  },
  mounted: function mounted() {
    if (Object.entries(this.$store.getters.getProducts).length === 0) this.$store.dispatch("fetchProduct");
    if (Object.entries(this.$store.getters.getBanks).length === 0) this.$store.dispatch("fetchBank");
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductComponent.vue?vue&type=template&id=9e91ef8e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ProductComponent.vue?vue&type=template&id=9e91ef8e& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "index-product" }, [
    _c("div", { staticClass: "row justify-content-end" }, [
      _c("div", { staticClass: "col-3 border-bottom pb-2" }, [
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.filterBank,
                expression: "filterBank"
              }
            ],
            staticClass: "form-control",
            on: {
              change: [
                function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.filterBank = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                },
                _vm.onFilter
              ]
            }
          },
          [
            _c("option", { attrs: { disabled: "", value: "" } }, [
              _vm._v("--Filter Bank Products--")
            ]),
            _vm._v(" "),
            _vm._l(_vm.banks, function(_bank) {
              return _c(
                "option",
                { key: _bank.id, domProps: { value: _bank.id } },
                [_vm._v(_vm._s(_bank.nameEn))]
              )
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-9 border-bottom text-right pb-2" }, [
        _c(
          "button",
          {
            staticClass: "btn btn-success",
            attrs: {
              type: "button",
              "data-toggle": "modal",
              "data-target": "#bankModal",
              "data-backdrop": "static",
              "data-keyboard": "false"
            },
            on: { click: _vm.onAdd }
          },
          [
            _c("i", { staticClass: "fas fa-plus" }),
            _vm._v(" Add Product\n      ")
          ]
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row my-4", attrs: { id: "list-product" } }, [
      _c(
        "div",
        { staticClass: "col-12" },
        [
          _vm.isLoading
            ? _c("i", {
                staticClass:
                  "fas fa-spinner fa-spin loader fa-3x text-center d-block"
              })
            : _vm._e(),
          _vm._v(" "),
          Object.entries(_vm.bankProducts).length === 0
            ? _c("table", { staticClass: "table table-striped table-hover" }, [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "tbody",
                  _vm._l(_vm.products, function(item, index) {
                    return _c("tr", { key: index }, [
                      _c(
                        "th",
                        {
                          staticClass: "align-middle",
                          attrs: { scope: "row" }
                        },
                        [_vm._v(_vm._s(index + 1))]
                      ),
                      _vm._v(" "),
                      _c("td", { staticClass: "align-middle" }, [
                        _vm._v(_vm._s(item.nameEn))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "align-middle" }, [
                        _vm._v(_vm._s(item.nameAr))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "align-middle" }, [
                        _vm._v(_vm._s(item.percentage))
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "align-middle" }, [
                        _vm._v(_vm._s(item.bank.nameEn))
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-success btn-sm",
                            attrs: {
                              type: "button",
                              "data-toggle": "modal",
                              "data-target": "#bankModal",
                              "data-backdrop": "static",
                              "data-keyboard": "false"
                            },
                            on: {
                              click: function($event) {
                                return _vm.onEdit(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "far fa-edit" })]
                        ),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-danger btn-sm",
                            attrs: { type: "button" },
                            on: {
                              click: function($event) {
                                return _vm.onDelete(item)
                              }
                            }
                          },
                          [_c("i", { staticClass: "far fa-trash-alt" })]
                        )
                      ])
                    ])
                  }),
                  0
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.bankProducts, function(bank) {
            return _c(
              "div",
              { key: bank.id, staticClass: "row" },
              _vm._l(bank.products, function(product) {
                return _c("div", { key: product.id, staticClass: "col-sm-3" }, [
                  _c("div", { staticClass: "card text-center" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c("img", {
                        staticClass: "img-fluid",
                        attrs: { src: "/storage/" + bank.logo }
                      }),
                      _vm._v(" "),
                      _c("h5", { staticClass: "card-title" }, [
                        _vm._v(
                          _vm._s(product.nameEn) + " " + _vm._s(product.nameAr)
                        )
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "card-text" }, [
                        _vm._v("Interest Rate " + _vm._s(product.percentage))
                      ])
                    ])
                  ])
                ])
              }),
              0
            )
          })
        ],
        2
      )
    ]),
    _vm._v(" "),
    _vm.showModal
      ? _c(
          "div",
          {
            staticClass: "modal fade",
            attrs: {
              id: "bankModal",
              tabindex: "-1",
              role: "dialog",
              "aria-hidden": "true"
            }
          },
          [
            _c(
              "div",
              { staticClass: "modal-dialog", attrs: { role: "document" } },
              [
                _c("div", { staticClass: "modal-content" }, [
                  _c("div", { staticClass: "modal-header" }, [
                    _c("h5", { staticClass: "modal-title" }, [
                      _vm._v(
                        _vm._s(!_vm.isEditMode ? "Add New" : "Update") + " Bank"
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "form",
                    {
                      attrs: { autocomplete: "off" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          _vm.isEditMode ? _vm.onUpdate() : _vm.onCreate()
                        },
                        keydown: function($event) {
                          return _vm.product.errors.clear($event.target.name)
                        }
                      }
                    },
                    [
                      _c("div", { staticClass: "modal-body" }, [
                        _vm.success !== ""
                          ? _c("div", {
                              staticClass: "alert alert-success",
                              domProps: { innerHTML: _vm._s(_vm.success) }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "nameEn" } }, [
                            _vm._v("Name English")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product.nameEn,
                                expression: "product.nameEn"
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.product.errors.has("nameEn")
                                ? "is-invalid "
                                : ""
                            ],
                            attrs: {
                              type: "text",
                              id: "nameEn",
                              name: "nameEn"
                            },
                            domProps: { value: _vm.product.nameEn },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.product,
                                  "nameEn",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.product.errors.has("nameEn")
                            ? _c("small", {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.product.errors.get("nameEn")
                                  )
                                }
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "nameAr" } }, [
                            _vm._v("Name Arabic")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product.nameAr,
                                expression: "product.nameAr"
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.product.errors.has("nameAr")
                                ? "is-invalid "
                                : ""
                            ],
                            attrs: {
                              type: "text",
                              id: "nameAr",
                              name: "nameAr"
                            },
                            domProps: { value: _vm.product.nameAr },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.product,
                                  "nameAr",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.product.errors.has("nameAr")
                            ? _c("small", {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.product.errors.get("nameAr")
                                  )
                                }
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "bank" } }, [
                            _vm._v("Bank")
                          ]),
                          _vm._v(" "),
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.product.bank,
                                  expression: "product.bank"
                                }
                              ],
                              class: [
                                "form-control",
                                _vm.product.errors.has("bank")
                                  ? "is-invalid "
                                  : ""
                              ],
                              attrs: { id: "bank", name: "bank" },
                              on: {
                                change: [
                                  function($event) {
                                    var $$selectedVal = Array.prototype.filter
                                      .call($event.target.options, function(o) {
                                        return o.selected
                                      })
                                      .map(function(o) {
                                        var val =
                                          "_value" in o ? o._value : o.value
                                        return val
                                      })
                                    _vm.$set(
                                      _vm.product,
                                      "bank",
                                      $event.target.multiple
                                        ? $$selectedVal
                                        : $$selectedVal[0]
                                    )
                                  },
                                  function($event) {
                                    return _vm.product.errors.clear("bank")
                                  }
                                ]
                              }
                            },
                            [
                              _c(
                                "option",
                                { attrs: { disabled: "", value: "" } },
                                [_vm._v("--Bank--")]
                              ),
                              _vm._v(" "),
                              _vm._l(_vm.banks, function(_bank) {
                                return _c(
                                  "option",
                                  {
                                    key: _bank.id,
                                    domProps: {
                                      value: _bank.id,
                                      selected: _bank.id === _vm.product.bank.id
                                    }
                                  },
                                  [_vm._v(_vm._s(_bank.nameEn))]
                                )
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _vm.product.errors.has("bank")
                            ? _c("small", {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.product.errors.get("bank")
                                  )
                                }
                              })
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group" }, [
                          _c("label", { attrs: { for: "percentage" } }, [
                            _vm._v("Percentage")
                          ]),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.product.percentage,
                                expression: "product.percentage"
                              }
                            ],
                            class: [
                              "form-control",
                              _vm.product.errors.has("percentage")
                                ? "is-invalid "
                                : ""
                            ],
                            attrs: {
                              type: "text",
                              id: "percentage",
                              name: "percentage"
                            },
                            domProps: { value: _vm.product.percentage },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.$set(
                                  _vm.product,
                                  "percentage",
                                  $event.target.value
                                )
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.product.errors.has("percentage")
                            ? _c("small", {
                                staticClass: "form-text text-danger",
                                domProps: {
                                  textContent: _vm._s(
                                    _vm.product.errors.get("percentage")
                                  )
                                }
                              })
                            : _vm._e()
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "modal-footer" }, [
                        _c(
                          "button",
                          {
                            staticClass: "btn btn-secondary",
                            attrs: { type: "button", "data-dismiss": "modal" },
                            on: { click: _vm.onClose }
                          },
                          [_vm._v("Close")]
                        ),
                        _vm._v(" "),
                        !_vm.isEditMode
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: {
                                  type: "submit",
                                  disabled: _vm.product.errors.any()
                                }
                              },
                              [_vm._v("Create")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isEditMode
                          ? _c(
                              "button",
                              {
                                staticClass: "btn btn-success",
                                attrs: {
                                  type: "submit",
                                  disabled: _vm.product.errors.any()
                                }
                              },
                              [_vm._v("Update")]
                            )
                          : _vm._e()
                      ])
                    ]
                  )
                ])
              ]
            )
          ]
        )
      : _vm._e()
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", { staticClass: "thead-light" }, [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name English")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Name Arabic")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Rate of Interest")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Product of Bank")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ProductComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ProductComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductComponent_vue_vue_type_template_id_9e91ef8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=template&id=9e91ef8e& */ "./resources/js/components/ProductComponent.vue?vue&type=template&id=9e91ef8e&");
/* harmony import */ var _ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductComponent_vue_vue_type_template_id_9e91ef8e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductComponent_vue_vue_type_template_id_9e91ef8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ProductComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ProductComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ProductComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ProductComponent.vue?vue&type=template&id=9e91ef8e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ProductComponent.vue?vue&type=template&id=9e91ef8e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_9e91ef8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ProductComponent.vue?vue&type=template&id=9e91ef8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ProductComponent.vue?vue&type=template&id=9e91ef8e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_9e91ef8e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductComponent_vue_vue_type_template_id_9e91ef8e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/errors.js":
/*!********************************!*\
  !*** ./resources/js/errors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "set",
    value: function set(field, messages) {
      if (_typeof(field) === "object") {
        this.errors = field;
      } else {
        this.set(_objectSpread({}, this.errors, _defineProperty({}, field, this.arrayWrap(messages))));
      }
    }
  }, {
    key: "all",
    value: function all() {
      return this.errors;
    }
  }, {
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) return this.errors[field][0];
    }
  }, {
    key: "getall",
    value: function getall(field) {
      if (this.errors[field]) return this.errors[field] || [];
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "record",
    value: function record(errors) {
      this.errors = errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }, {
    key: "arrayWrap",
    value: function arrayWrap(value) {
      return Array.isArray(value) ? value : [value];
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/form.js":
/*!******************************!*\
  !*** ./resources/js/form.js ***!
  \******************************/
/*! exports provided: Form */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return Form; });
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./errors */ "./resources/js/errors.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Form =
/*#__PURE__*/
function () {
  function Form(data) {
    _classCallCheck(this, Form);

    this.originalData = data;

    for (var field in data) {
      this[field] = data[field];
    }

    this.errors = new _errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }
  /**
   * Fill form data.
   *
   * @param {Object} data
   */


  _createClass(Form, [{
    key: "fill",
    value: function fill(data) {
      for (var field in this.originalData) {
        this[field] = data[field];
      }
    }
    /**
      * Reset the form fields.
      */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = '';
      }

      this.errors.clear();
    }
  }]);

  return Form;
}();

/***/ })

}]);
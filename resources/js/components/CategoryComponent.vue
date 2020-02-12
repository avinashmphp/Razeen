<template>
  <div class="index-category">
    <div class="row justify-content-end">
      <div class="col-12 border-bottom text-right pb-2">
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#bankModal"
          data-backdrop="static"
          data-keyboard="false"
          @click="onAdd"
        >
          <i class="fas fa-plus"></i> Add Category
        </button>
      </div>
    </div>
    <div class="row my-4" id="list-categories">
      <div class="col-sm-12">
        <i class="fas fa-spinner fa-spin loader fa-3x text-center d-block" v-if="isLoading"></i>
      </div>
      <div class="col-sm-12">
        <div class="row">
          <div class="col-sm-4" v-for="(category,index) in categories" :key="index">
            <div class="card text-center">
              <div class="card-body">
                <h5 class="card-title">{{category.nameEn}}</h5>
                <p class="card-text">{{category.descriptionEn}}</p>
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  data-toggle="modal"
                  data-target="#bankModal"
                  data-backdrop="static"
                  data-keyboard="false"
                  @click="onEdit(category)"
                >
                  <i class="far fa-edit"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm" @click="onDelete(category)">
                  <i class="far fa-trash-alt"></i>
                </button>
                <table class="table table-striped table-hover">
                  <thead class="thead-light">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Products</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(product,index) in category.products" :key="index">
                      <th class="align-middle" scope="row">{{index+1}}</th>
                      <td class="align-middle">{{product.nameEn}}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
    <div
      class="modal fade"
      id="bankModal"
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
      v-if="showModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">{{!isEditMode ? "Add New" : "Update"}} Category</h5>
          </div>
          <form
            autocomplete="off"
            @submit.prevent="isEditMode ? onUpdate() : onCreate()"
            @keydown="category.errors.clear($event.target.name)"
          >
            <div class="modal-body">
              <div class="alert alert-success" v-if="success !== ''" v-html="success"></div>
              <div class="form-group">
                <label for="nameEn">Name English</label>
                <input
                  type="text"
                  id="nameEn"
                  v-model="category.nameEn"
                  :class="['form-control', category.errors.has('nameEn') ? 'is-invalid ' : '']"
                  name="nameEn"
                />
                <small
                  class="form-text text-danger"
                  v-if="category.errors.has('nameEn')"
                  v-text="category.errors.get('nameEn')"
                ></small>
              </div>

              <div class="form-group">
                <label for="descriptionEn">Description English</label>
                <textarea
                  name="descriptionEn"
                  id="descriptionEn"
                  cols="30"
                  rows="2"
                  v-model="category.descriptionEn"
                  :class="['form-control', category.errors.has('descriptionEn') ? 'is-invalid ' : '']"
                  style="resize:none;"
                ></textarea>
                <small
                  class="form-text text-danger"
                  v-if="category.errors.has('descriptionEn')"
                  v-text="category.errors.get('descriptionEn')"
                ></small>
              </div>

              <div class="form-group">
                <label for="nameAr">Name Arabic</label>
                <input
                  type="text"
                  id="nameAr"
                  v-model="category.nameAr"
                  :class="['form-control', category.errors.has('nameAr') ? 'is-invalid ' : '']"
                  name="nameAr"
                />
                <small
                  class="form-text text-danger"
                  v-if="category.errors.has('nameAr')"
                  v-text="category.errors.get('nameAr')"
                ></small>
              </div>

              <div class="form-group">
                <label for="descriptionAr">Description Arabic</label>
                <textarea
                  name="descriptionAr"
                  id="descriptionAr"
                  cols="30"
                  rows="2"
                  v-model="category.descriptionAr"
                  :class="['form-control', category.errors.has('descriptionAr') ? 'is-invalid ' : '']"
                  style="resize:none;"
                ></textarea>
                <small
                  class="form-text text-danger"
                  v-if="category.errors.has('descriptionAr')"
                  v-text="category.errors.get('descriptionAr')"
                ></small>
              </div>

              <div class="form-group">
                <label for="products">Products</label>
                <select
                  :class="['form-control', category.errors.has('products') ? 'is-invalid ' : '']"
                  v-model="category.products"
                  id="products"
                  name="products"
                  multiple="multiple"
                  @change="category.errors.clear('products')"
                >
                  <option disabled value>--Products--</option>
                  <option
                    v-for="(item,index) in products"
                    :key="index"
                    :value="item.id"
                  >{{item.nameEn}}</option>
                </select>
                <small
                  class="form-text text-danger"
                  v-if="category.errors.has('products')"
                  v-text="category.errors.get('products')"
                ></small>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
                @click="onClose"
              >Close</button>
              <button
                type="submit"
                class="btn btn-success"
                v-if="!isEditMode"
                :disabled="category.errors.any()"
              >Create</button>
              <button
                type="submit"
                class="btn btn-success"
                :disabled="category.errors.any()"
                v-if="isEditMode"
              >Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Form } from "../form.js";
export default {
  name: "CategoryComponent",
  data() {
    return {
      category: new Form({
        id: "",
        nameEn: "",
        nameAr: "",
        descriptionEn: "",
        descriptionAr: "",
        products: []
      }),
      showModal: false,
      isEditMode: false,
      success: ""
    };
  },
  computed: {
    isLoading() {
      return this.$store.getters.isLoading;
    },
    products() {
      return this.$store.getters.getProducts;
    },
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  methods: {
    onAdd() {
      this.showModal = true;
      this.category.reset();
    },
    onClose() {
      this.showModal = false;
      this.isEditMode = false;
      this.success = "";
    },
    onEdit(item) {
      const data = Object.entries(item).reduce((c, [k, v]) => {
        if (typeof v === "object") {
          {
            c[k] = Object.entries(v).reduce((acc, [key, val]) => {
              if (typeof val === "object") acc[key] = val.id;
              else acc[key] = val;
              return acc;
            }, []);
          }
        } else c[k] = v;
        return c;
      }, {});
      this.onAdd();
      this.isEditMode = true;
      this.category.fill(data);
    },
    onCreate(e) {
      this.$store
        .dispatch("createCategory", this.category)
        .then(response => {
          this.success = response.data.success;
        })
        .catch(error => {
          this.category.errors.record(error.response.data.errors);
        });
    },
    onUpdate(e) {
      this.$store
        .dispatch("updateCategory", this.category)
        .then(response => {
          this.success = response.data.success;
        })
        .catch(error => {
          this.category.errors.record(error.response.data.errors);
        });
    },
    onDelete(item) {
      this.$store
        .dispatch("deleteCategory", item)
        .then()
        .catch(error => {
          this.category.errors.record(error.response.data.errors);
        });
    }
  },
  mounted() {
    if (Object.entries(this.$store.getters.getProducts).length === 0)
      this.$store.dispatch("fetchProduct");

    if (Object.entries(this.$store.getters.getCategories).length === 0)
      this.$store.dispatch("fetchCategory");
  }
};
</script>

<style>
</style>
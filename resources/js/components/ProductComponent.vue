<template>
  <div class="index-product">
    <div class="row justify-content-end">
      <div class="col-3 border-bottom pb-2">
        <select class="form-control" v-model="filterBank" @change="onFilter">
          <option disabled value>--Filter Bank Products--</option>
          <option v-for="_bank in banks" :key="_bank.id" :value="_bank.id">{{ _bank.nameEn }}</option>
        </select>
      </div>
      <div class="col-9 border-bottom text-right pb-2">
        <button
          type="button"
          class="btn btn-success"
          data-toggle="modal"
          data-target="#bankModal"
          data-backdrop="static"
          data-keyboard="false"
          @click="onAdd"
        >
          <i class="fas fa-plus"></i> Add Product
        </button>
      </div>
    </div>
    <div class="row my-4" id="list-product">
      <div class="col-12">
        <i class="fas fa-spinner fa-spin loader fa-3x text-center d-block" v-if="isLoading"></i>
        <table
          class="table table-striped table-hover"
          v-if="Object.entries(bankProducts).length === 0"
        >
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name English</th>
              <th scope="col">Name Arabic</th>
              <th scope="col">Rate of Interest</th>
              <th scope="col">Product of Bank</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in products" :key="index">
              <th class="align-middle" scope="row">{{index+1}}</th>
              <td class="align-middle">{{item.nameEn}}</td>
              <td class="align-middle">{{item.nameAr}}</td>
              <td class="align-middle">{{item.percentage}}</td>
              <td class="align-middle">{{item.bank.nameEn}}</td>
              <td>
                <button
                  type="button"
                  class="btn btn-success btn-sm"
                  data-toggle="modal"
                  data-target="#bankModal"
                  data-backdrop="static"
                  data-keyboard="false"
                  @click="onEdit(item)"
                >
                  <i class="far fa-edit"></i>
                </button>
                <button type="button" class="btn btn-danger btn-sm" @click="onDelete(item)">
                  <i class="far fa-trash-alt"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="row" v-for="bank in bankProducts" :key="bank.id">
          <div class="col-sm-3" v-for="product in bank.products" :key="product.id">
            <div class="card text-center">
              <div class="card-body">
                <img :src="'/storage/' + bank.logo" class="img-fluid" />
                <h5 class="card-title">{{product.nameEn}} {{product.nameAr}}</h5>
                <p class="card-text">Interest Rate {{product.percentage}}</p>
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
            <h5 class="modal-title">{{!isEditMode ? "Add New" : "Update"}} Bank</h5>
          </div>
          <form
            autocomplete="off"
            @submit.prevent="isEditMode ? onUpdate() : onCreate()"
            @keydown="product.errors.clear($event.target.name)"
          >
            <div class="modal-body">
              <div class="alert alert-success" v-if="success !== ''" v-html="success"></div>
              <div class="form-group">
                <label for="nameEn">Name English</label>
                <input
                  type="text"
                  id="nameEn"
                  v-model="product.nameEn"
                  :class="['form-control', product.errors.has('nameEn') ? 'is-invalid ' : '']"
                  name="nameEn"
                />
                <small
                  class="form-text text-danger"
                  v-if="product.errors.has('nameEn')"
                  v-text="product.errors.get('nameEn')"
                ></small>
              </div>
              <div class="form-group">
                <label for="nameAr">Name Arabic</label>
                <input
                  type="text"
                  id="nameAr"
                  v-model="product.nameAr"
                  :class="['form-control', product.errors.has('nameAr') ? 'is-invalid ' : '']"
                  name="nameAr"
                />
                <small
                  class="form-text text-danger"
                  v-if="product.errors.has('nameAr')"
                  v-text="product.errors.get('nameAr')"
                ></small>
              </div>
              <div class="form-group">
                <label for="bank">Bank</label>
                <select
                  :class="['form-control', product.errors.has('bank') ? 'is-invalid ' : '']"
                  v-model="product.bank"
                  id="bank"
                  name="bank"
                  @change="product.errors.clear('bank')"
                >
                  <option disabled value>--Bank--</option>
                  <option
                    v-for="_bank in banks"
                    :key="_bank.id"
                    :value="_bank.id"
                    :selected="_bank.id === product.bank.id"
                  >{{ _bank.nameEn }}</option>
                </select>
                <small
                  class="form-text text-danger"
                  v-if="product.errors.has('bank')"
                  v-text="product.errors.get('bank')"
                ></small>
              </div>
              <div class="form-group">
                <label for="percentage">Percentage</label>
                <input
                  type="text"
                  id="percentage"
                  v-model="product.percentage"
                  :class="['form-control', product.errors.has('percentage') ? 'is-invalid ' : '']"
                  name="percentage"
                />
                <small
                  class="form-text text-danger"
                  v-if="product.errors.has('percentage')"
                  v-text="product.errors.get('percentage')"
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
                :disabled="product.errors.any()"
              >Create</button>
              <button
                type="submit"
                class="btn btn-success"
                :disabled="product.errors.any()"
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
  name: "ProductComponent",
  data() {
    return {
      product: new Form({
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
    products() {
      return this.$store.getters.getProducts;
    },
    banks() {
      return this.$store.getters.getBanks;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    onAdd() {
      this.showModal = true;
      this.product.reset();
    },
    onEdit(item) {
      const data = Object.entries(item).reduce((c, [k, v]) => {
        if (typeof v === "object") c[k] = v.id;
        else c[k] = v;
        return c;
      }, {});
      this.onAdd();
      this.isEditMode = true;
      this.product.fill(data);
    },
    onClose() {
      this.showModal = false;
      this.isEditMode = false;
      this.success = "";
    },
    onCreate(e) {
      this.$store
        .dispatch("createProduct", this.product)
        .then(response => {
          this.success = response.data.success;
        })
        .catch(error => {
          this.product.errors.record(error.response.data.errors);
        });
    },
    onUpdate(e) {
      this.$store
        .dispatch("updateProduct", this.product)
        .then(response => {
          this.success = response.data.success;
        })
        .catch(error => {
          this.product.errors.record(error.response.data.errors);
        });
    },
    onDelete(item) {
      this.$store
        .dispatch("deleteProduct", item)
        .then()
        .catch(error => {
          this.product.errors.record(error.response.data.errors);
        });
    },
    onFilter() {
      this.bankProducts = {};
      this.$store
        .dispatch("bankProducts", this.filterBank)
        .then(response => {
          this.bankProducts = response.data;
        })
        .catch(error => {
          this.product.errors.record(error.response.data.errors);
        });
    }
  },
  mounted() {
    if (Object.entries(this.$store.getters.getProducts).length === 0)
      this.$store.dispatch("fetchProduct");
    if (Object.entries(this.$store.getters.getBanks).length === 0)
      this.$store.dispatch("fetchBank");
  }
};
</script>

<style>
</style>
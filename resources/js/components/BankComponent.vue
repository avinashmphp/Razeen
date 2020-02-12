<template>
  <div class="index-bank">
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
          <i class="fas fa-plus"></i> Add Bank
        </button>
      </div>
    </div>
    <div class="row my-4" id="list-bank">
      <div class="col-12">
        <i class="fas fa-spinner fa-spin loader fa-3x text-center d-block" v-if="isLoading"></i>
        <table class="table table-striped table-hover">
          <thead class="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name English</th>
              <th scope="col">Name Arabic</th>
              <th scope="col">Logo</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in banks" :key="index">
              <th class="align-middle" scope="row">{{index+1}}</th>
              <td class="align-middle">{{item.nameEn}}</td>
              <td class="align-middle">{{item.nameAr}}</td>
              <td>
                <img :src="'/storage/' + item.logo" class="img-fluid" width="180" />
              </td>
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
            @keydown="bank.errors.clear($event.target.name)"
          >
            <div class="modal-body">
              <div class="alert alert-success" v-if="success !== ''" v-html="success"></div>
              <div class="form-group">
                <label for="nameEn">Name English</label>
                <input
                  type="text"
                  id="nameEn"
                  v-model="bank.nameEn"
                  :class="['form-control', bank.errors.has('nameEn') ? 'is-invalid ' : '']"
                  name="nameEn"
                />
                <small
                  class="form-text text-danger"
                  v-if="bank.errors.has('nameEn')"
                  v-text="bank.errors.get('nameEn')"
                ></small>
              </div>
              <div class="form-group">
                <label for="nameAr">Name Arabic</label>
                <input
                  type="text"
                  id="nameAr"
                  v-model="bank.nameAr"
                  :class="['form-control', bank.errors.has('nameAr') ? 'is-invalid ' : '']"
                  name="nameAr"
                />
                <small
                  class="form-text text-danger"
                  v-if="bank.errors.has('nameAr')"
                  v-text="bank.errors.get('nameAr')"
                ></small>
              </div>
              <div class="form-group">
                <label for="logo">Upload Bank Logo</label>
                <input
                  type="file"
                  id="logo"
                  class="form-control-file"
                  @change="processImg"
                  name="logo"
                />
                <small
                  class="form-text text-danger"
                  v-if="inValidImgTxt != ''"
                  v-text="inValidImgTxt"
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
                :disabled="bank.errors.any()"
              >Create</button>
              <button
                type="submit"
                class="btn btn-success"
                :disabled="bank.errors.any()"
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
  name: "BankComponent",
  data() {
    return {
      bank: new Form({
        id: "",
        nameEn: "",
        nameAr: "",
        logo: ""
      }),
      showModal: false,
      isEditMode: false,
      success: "",
      inValidImgTxt: ""
    };
  },
  computed: {
    banks() {
      return this.$store.getters.getBanks;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    }
  },
  methods: {
    onClose() {
      this.showModal = false;
      this.isEditMode = false;
      this.inValidImgTxt = "";
      this.success = "";
    },
    onAdd() {
      this.showModal = true;
      this.bank.reset();
    },
    onEdit(item) {
      this.onAdd();
      this.isEditMode = true;
      this.bank.fill(item);
    },
    processImg(e) {
      const file = e.target.files[0];
      var types = ["image/jpeg", "image/jpg", "image/png", "image/svg"];

      if (file.size > 1024 * 1024)
        return (this.inValidImgTxt = "Image must be below 1MB of size!");

      if (!types.includes(file.type))
        return (this.inValidImgTxt =
          "Following extensions are allowed! (.png,.svg,.jpg,.jpeg)");

      this.bank.errors.clear("logo");

      var fr = new FileReader();
      fr.readAsDataURL(e.target.files[0]);
      fr.onload = e => {
        this.bank.logo = e.target.result;
      };
      this.inValidImgTxt = "";
    },
    onCreate(e) {
      this.$store
        .dispatch("createBank", this.bank)
        .then(response => {
          this.success = response.data.success;
        })
        .catch(error => {
          this.bank.errors.record(error.response.data.errors);
          if ("logo" in error.response.data.errors)
            this.inValidImgTxt = error.response.data.errors.logo.toString();
        });
    },
    onUpdate(e) {
      this.$store
        .dispatch("updateBank", this.bank)
        .then(response => {
          this.success = response.data.success;
        })
        .catch(error => {
          this.bank.errors.record(error.response.data.errors);
          if ("logo" in error.response.data.errors)
            this.inValidImgTxt = error.response.data.errors.logo.toString();
        });
    },
    onDelete(item) {
      this.$store
        .dispatch("deleteBank", item)
        .then()
        .catch(error => {
          this.bank.errors.record(error.response.data.errors);
        });
    }
  },
  mounted() {
    if (Object.entries(this.$store.getters.getBanks).length === 0)
      this.$store.dispatch("fetchBank");
  }
};
</script>

<style>
</style>
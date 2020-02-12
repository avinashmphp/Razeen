<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 px-0">
        <div class="banner">
          <img :src="bannerImg" alt class="img-fluid d-block mx-auto w-100" />
          <h1>Title</h1>
        </div>
      </div>
    </div>
    <div class="row justify-content-center" style="margin-top:-30px;">
      <div class="col-md-6 bg-cal rounded-lg">
        <br />
        <h4 class="text-white">Get an instant mortgage calculation</h4>
        <h6 class="text-white-50">Calculate based on:</h6>
        <ul class="nav-steps row justify-content-around">
          <li
            v-for="(category,index) in categories"
            :key="index"
            :class="[{ 'active':  step == index },  step == index ? setCat(category.slug) : '']"
            @click="setStep(index)"
          >
            <a class="nav-link text-white" style="cursor:pointer;">
              <span>{{category.nameEn}}</span>
              <small v-html="category.descriptionEn"></small>
            </a>
          </li>
        </ul>
        <div class="nav-body mt-2" style="min-height:250px;">
          <form autocomplete="off" @submit.prevent="onSubmit" @input="clear($event.target.name)">
            <!-- <div class="row" v-if="step === 0">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    :class="['form-control form-control-xl', errors.includes('amount') ? 'is-invalid ' : '']"
                    id="amount"
                    placeholder="Enter Your Loan Amount"
                    v-model.number="amount"
                    name="amount"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    :class="['form-control form-control-xl', errors.includes('age') ? 'is-invalid ' : '']"
                    id="age"
                    placeholder="Enter Your Age"
                    v-model.number="age"
                    name="age"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <select
                    name="sector"
                    :class="['form-control form-control-xl', errors.includes('sector') ? 'is-invalid ' : '']"
                    id="sector"
                    v-model="sector"
                  >
                    <option disabled value>Sector</option>
                    <option value="private">Private</option>
                    <option value="government">Government</option>
                    <option value="military">Military</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-lg btn-success d-block w-100 btn-xl"
                    style="background:#15b292;"
                  >Get Your Offer!</button>
                </div>
              </div>
            </div>-->
            <div class="row" v-if="step === 0">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    :class="['form-control form-control-lg form-control-xl', errors.includes('amount') ? 'is-invalid ' : '']"
                    id="amount"
                    placeholder="Enter Your Monthly Salary"
                    v-model.number="amount"
                    name="amount"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control form-control-lg form-control-xl"
                    id="downpayment"
                    placeholder="Downpayment Amount (Optional)"
                    v-model.number="downpayment"
                    name="downpayment"
                  />
                </div>
              </div>
              <!-- <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    :class="['form-control form-control-lg form-control-xl', errors.includes('age') ? 'is-invalid ' : '']"
                    id="age"
                    placeholder="Enter Your Age"
                    v-model.number="age"
                    name="age"
                  />
                </div>
              </div>-->
              <!-- <div class="col-md-12">
                <div class="form-group">
                  <select
                    name="sector"
                    :class="['form-control form-control-lg form-control-xl', errors.includes('sector') ? 'is-invalid ' : '']"
                    id="sector"
                    v-model="sector"
                  >
                    <option disabled value>Sector</option>
                    <option value="private">Private</option>
                    <option value="government">Government</option>
                    <option value="military">Military</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
              </div>-->
              <div class="col-md-12">
                <div class="form-group">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <span class="text-light mb-2 d-block">Loan Duration: {{duration}} Years</span>
                      <input type="text" v-model="duration" id="range" />
                      <div class="minmax">
                        <small class="text-white-50">5 Years</small>
                        <small class="text-white-50">30 Years</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- <div class="col-md-12">
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-lg btn-success d-block w-100 btn-xl"
                    style="background:#15b292;"
                  >Get Your Offer!</button>
                </div>
              </div>-->
            </div>
            <div class="row" v-if="step === 1">
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    :class="['form-control form-control-lg form-control-xl', errors.includes('amount') ? 'is-invalid ' : '']"
                    id="amount"
                    placeholder="Enter House Cost Amount"
                    v-model.number="amount"
                    name="amount"
                  />
                </div>
              </div>
              <!-- <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    :class="['form-control form-control-lg form-control-xl', errors.includes('age') ? 'is-invalid ' : '']"
                    id="age"
                    placeholder="Enter Your Age"
                    v-model.number="age"
                    name="age"
                  />
                </div>
              </div>-->
              <!-- <div class="col-md-12">
                <div class="form-group">
                  <select
                    name="sector"
                    :class="['form-control form-control-lg form-control-xl', errors.includes('sector') ? 'is-invalid ' : '']"
                    id="sector"
                    v-model="sector"
                  >
                    <option disabled value>Sector</option>
                    <option value="private">Private</option>
                    <option value="government">Government</option>
                    <option value="military">Military</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
              </div>-->
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="tel"
                    class="form-control form-control-lg form-control-xl"
                    id="downpayment"
                    placeholder="Downpayment Amount (Optional)"
                    v-model.number="downpayment"
                    name="downpayment"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <div class="row align-items-center">
                    <div class="col-12">
                      <span class="text-light mb-2 d-block">Loan Duration: {{duration}} Years</span>
                      <input type="text" v-model="duration" id="range" />
                      <div class="minmax">
                        <small class="text-white-50">5 Years</small>
                        <small class="text-white-50">30 Years</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- <div class="col-md-12">
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-lg btn-success d-block w-100 btn-xl"
                    style="background:#15b292;"
                  >Get Your Offer!</button>
                </div>
              </div>-->
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-lg btn-success d-block w-100 btn-xl"
                    style="background:#15b292;"
                  >Get Your Offer!</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      step: 0,
      amount: null,
      age: null,
      sector: "",
      downpayment: null,
      duration: 5,
      errors: [],
      bannerImg: "/img/banner.jpg",
      cat: null
    };
  },
  methods: {
    setCat(slug) {
      this.cat = slug;
    },
    setStep(index) {
      this.step = index;
      this.amount = null;
      this.downpayment = null;
      this.duration = 5;
      this.errors = [];
      $("#range").slider("refresh");
    },
    clear(event) {
      const index = this.errors.indexOf(event);
      if (index > -1) this.errors.splice(index, 1);
    },
    onSubmit(e) {
      this.errors = [];
      const amount = this.amount;
      // const age = this.age;
      // const sector = this.sector;
      const downpayment = this.downpayment;
      const duration = this.duration;
      const validAmount = typeof amount === "number" && !!amount;
      // const validAge =
      //   typeof age === "number" && !!age && age >= 18 && age <= 60;

      if (!validAmount) this.errors.push("amount");
      // if (!validAge) this.errors.push("age");
      // if (sector == "") this.errors.push("sector");

      // if (!validAmount || !validAge || sector == "") {
      //   e.preventDefault();
      //   return false;
      // }

      if (!validAmount) {
        e.preventDefault();
        return false;
      }

      const payload = {
        step: this.step,
        amount,
        downpayment,
        duration,
        cat: this.cat
      };

      this.$store
        .dispatch("calculate", payload)
        .then(() => this.$router.push({ name: "result" }))
        .catch(error => {
          this.errors.push(error.response.data.errors);
        });
    }
  },
  computed: {
    categories() {
      return this.$store.getters.getCategories;
    }
  },
  created() {
    if (Object.entries(this.$store.getters.getCategories).length === 0)
      this.$store.dispatch("fetchCategory");
  },
  mounted() {
    const _this = this;
    $("#range").slider({
      step: 5,
      min: 5,
      max: 30,
      value: 5,
      tooltip: "hide",
      formatter: function(value) {
        _this.duration = value;
      }
    });
  }
};
</script>

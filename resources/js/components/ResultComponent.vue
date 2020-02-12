<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-4 px-0">
        <button type="button" class="text-dark btn btn-light" @click="goBack">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-4 bg-cal rounded-lg pb-2">
        <br />
        <h6 class="text-white-50">You Entered:</h6>
        <form
          autocomplete="off"
          @submit.prevent="$event.preventDefault()"
          @keydown="errors.clear($event.target.value)"
        >
          <div class="row">
            <div class="col-4">
              <div class="form-group bg-cal-light rounded-lg">
                <label for="amount" class="text-white-50 mb-0">
                  <small class="pl-2">Monthly Salary</small>
                </label>
                <input
                  type="text"
                  class="form-control form-control border-0 bg-transparent text-white"
                  id="amount"
                  v-model="amount"
                  style="outline:0;"
                />
              </div>
            </div>
            <div class="col-4">
              <div class="bg-cal-light rounded-lg">
                <div class="form-group bg-cal-light rounded-lg">
                  <label for="duration" class="text-white-50 mb-0">
                    <small class="pl-2">Loan Duration</small>
                  </label>
                  <input
                    type="text"
                    class="form-control form-control border-0 bg-transparent text-white"
                    id="duration"
                    v-model="duration"
                    style="outline:0;"
                  />
                </div>
              </div>
            </div>
            <div class="col-4">
              <div class="form-group bg-cal-light rounded-lg">
                <label for="downpayment" class="text-white-50 mb-0">
                  <small class="pl-2">Downpayment</small>
                </label>
                <input
                  type="text"
                  class="form-control form-control border-0 bg-transparent text-white"
                  id="downpayment"
                  v-model="downpayment"
                  style="outline:0;"
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <h6 class="text-white">Select Desired Loan Amount:</h6>
              <div class="bg-cal-light rounded-lg px-1 pt-1">
                <small class="text-white-50 pl-2">House Value</small>
                <!-- <input type="range" min="5" max="30" value="5" step="5" id="range"  /> -->
                <input type="text" v-model="duration" id="range" class="my-2" />
              </div>
              <small class="text-white-50 pl-2">You are eligible for a maximum amount of 600,000 SAR</small>
            </div>
          </div>
        </form>
      </div>
    </div>
    <br />
    <div class="row justify-content-center">
      <div class="col-md-4">
        <h3 class="text-dark">Preliminary Offers:</h3>
      </div>
    </div>
    <template v-for="result in results">
      <div
        class="row justify-content-center my-4"
        v-for="(product,index) in result.products"
        :key="index"
      >
        <div class="col-md-4">
          <div class="bg-white rounded-lg p-2 shadow">
            <div class="media border-bottom">
              <img class="mr-3" :src="'/storage/' + product.bank.logo" alt width="76" height="29" />
              <div class="media-body">
                <h6 class="my-0 text-muted">{{product.bank.nameEn}}</h6>
                <h5 class="text-dark font-weight-bold">{{product.nameEn}}</h5>
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <h6 class="text-muted">Interest Rate:</h6>
                    <h5 class="text-dark font-weight-bold">{{product.percentage}}</h5>
                  </li>
                  <li class="list-inline-item">
                    <h6 class="text-muted">Monthly Installment:</h6>
                    <h5 class="text-dark font-weight-bold">3400 SAR</h5>
                  </li>
                </ul>
              </div>
            </div>
            <small class="text-mute">This company offers you a max loan amount of 558,000 SAR</small>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Result",
  methods: {
    goBack() {
      this.$router.push({ name: "calculator" });
    }
  },
  computed: {
    amount() {
      return this.$store.getters.amount;
    },
    age() {
      return this.$store.getters.age;
    },
    sector() {
      return this.$store.getters.sector;
    },
    downpayment() {
      return this.$store.getters.downpayment;
    },
    duration() {
      return this.$store.getters.duration;
    },
    results() {
      return this.$store.getters.getResults;
    }
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
        // _this.duration = value;
      }
    });
  }
};
</script>

<style>
</style>
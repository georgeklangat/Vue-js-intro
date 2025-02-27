const app = Vue.createApp({
    data() {
        return {

            premium: true,
            cartCountPhone: 0,
            cartCountLaptop: 0,
            cartCountSocks: 0,
        };
    },
    methods: {
        updateCart(productType) {
            if (productType === 'socks') this.cartCountSocks++;
            else if (productType === 'laptop') this.cartCountLaptop++;
            else if (productType === 'phone') this.cartCountPhone++;
        }
    }
});

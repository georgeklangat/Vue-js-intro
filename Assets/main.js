const app = Vue.createApp({
        data() {
            return {
                cartCountPhone: 0,
                cartCountLaptop: 0,
                cartCountSocks: 0,
                brand: 'vue',

                socksDetails: ['50% Cotton', '30% Wool', '20% Polyester'],
                socksVariants: [
                    { id: 2234, color: 'green', image: '/Assets/Images/socks_green.jpg', stock: 15 },
                    { id: 2235, color: 'darkblue', image: '/Assets/Images/socks_blue.jpg', stock: 8 }
                ],

                laptopVariants: [
                    { id: 45, color: 'black', image: '/Assets/Images/black-lenovo-v15.jpg', stock: 12 },
                    { id: 46, color: 'blue', image: '/Assets/Images/blue-lenovo-v15.jpg', stock: 8 }
                ],

                phoneVariants: [
                    { id: 50, color: 'black', image: '/Assets/Images/samsung-galaxy-black.jpg', stock: 15 },
                    { id: 51, color: 'blue', image: '/Assets/Images/samsung-galaxy-blue.jpg', stock: 5 }
                ],

                availableSizes: [
                    { id: 1, value: 56 },
                    { id: 2, value: 57 }
                ],

                selectedSocksIndex: 0,
                selectedLaptopIndex: 0,
                selectedPhoneIndex: 0
            };
        },
        computed: {
            socksTitle() {
                return `${this.brand} Socks`;
            },
            laptopTitle() {
                return `${this.brand} Laptops`;
            },
            phoneTitle(){
                return `${this.brand} Phones`
            },
            currentSocks() {
                return this.socksVariants[this.selectedSocksIndex];
            },
            currentLaptop(){
                return this.laptopVariants[this.selectedLaptopIndex];
            },
             currentPhone(){
                return this.phoneVariants[this.selectedPhoneIndex];
             }
        },
        methods: {
            addToCart(productType) {
                if (productType === 'socks' && this.currentSocks.stock > 0) {
                    this.cartCountSocks++;
                    this.currentSocks.stock--;
                } else if (productType === 'laptop' && this.currentLaptop.stock > 0) {
                    this.cartCountLaptop++;
                    this.currentLaptop.stock--;
                } else if (productType === 'phone' && this.currentPhone.stock > 0) {
                    this.cartCountPhone++;
                    this.currentPhone.stock--;
                }
            },
            selectSocksVariant(index) {
                this.selectedSocksIndex = index;
            },
            selectLaptopVariant(index) {
                this.selectedLaptopIndex = index;
            },
            selectPhoneVariant(index){
                this.selectedPhoneIndex = index;
            }
        }
    });

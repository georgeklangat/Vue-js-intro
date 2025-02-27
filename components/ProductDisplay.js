app.component('product-display', {
   props:{
       premium:{
           type: Boolean,
           require: true
       }
   },
    template: /*html*/ `
    <div>
        <!-- Product: Socks -->
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="currentSocks.image" alt="Socks">
                </div>
                <div class="product-info">
                    <h2>{{ socksTitle }}</h2>
                    <p>shipping: {{shipping}}</p>
                    <p v-if="currentSocks.stock > 10">In Stock</p>
                    <p v-else-if="currentSocks.stock > 0">Almost Sold Out!</p>
                    <p v-else>Out of Stock</p>

                    <ul>
                        <li v-for="detail in socksDetails" :key="detail">{{ detail }}</li>
                    </ul>

                    <div v-for="(variant, index) in socksVariants" 
                        :key="variant.id"
                        @mouseover="selectSocksVariant(index)"
                        class="color-circle"
                        :style="{ backgroundColor: variant.color }">
                    </div>

                    <ul>
                        <li v-for="size in availableSizes" :key="size.id">{{ size.value }}</li>
                    </ul>

                    <button class="button"
                        @click="addToCart('socks')"
                        :class="{ disabledButton: !currentSocks.stock }"
                        :disabled="!currentSocks.stock">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <!-- Product: Laptops -->
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="currentLaptop.image" alt="Laptop">
                </div>
                <div class="product-info">
                    <h2>{{ laptopTitle }}</h2>
                    <p v-if="currentLaptop.stock > 0">In Stock</p>
                    <p v-else>Sold Out!</p>

                    <div v-for="(variant, index) in laptopVariants"
                         :key="variant.id"
                         @mouseover="selectLaptopVariant(index)"
                         class="color-circle"
                         :style="{ backgroundColor: variant.color }">
                    </div>

                    <button class="button"
                        @click="addToCart('laptop')"
                        :class="{ disabledButton: !currentLaptop.stock }"
                        :disabled="!currentLaptop.stock">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>

        <!-- Product: Phones -->
        <div class="product-display">
            <div class="product-container">
                <div class="product-image">
                    <img :src="currentPhone.image" alt="Phone">
                </div>
                <div class="product-info">
                    <h2>{{ phoneTitle }}</h2>
                    <p v-if="currentPhone.stock > 10">In Stock</p>
                    <p v-else-if="currentPhone.stock > 0">Almost Sold Out!</p>
                    <p v-else>Sold Out!</p>

                    <div v-for="(variant, index) in phoneVariants"
                         :key="variant.id"
                         @mouseover="selectPhoneVariant(index)"
                         class="color-circle"
                         :style="{ backgroundColor: variant.color }">
                    </div>

                    <button class="button"
                        @click="addToCart('phone')"
                        :class="{ disabledButton: !currentPhone.stock }"
                        :disabled="!currentPhone.stock">
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,

    data() {
        return {
            brand: 'Vue Mastery',

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
        phoneTitle() {
            return `${this.brand} Phones`;
        },
        currentSocks() {
            return this.socksVariants[this.selectedSocksIndex];
        },
        currentLaptop() {
            return this.laptopVariants[this.selectedLaptopIndex];
        },
        currentPhone() {
            return this.phoneVariants[this.selectedPhoneIndex];
        },
        shipping(){
            if(this.premium){
                return 'Free'
            }
            return 132
        }
    },

    methods: {
        addToCart(productType) {
            if (productType === 'socks' && this.currentSocks.stock > 0) {
                this.$root.updateCart('socks');
                this.currentSocks.stock--;
            } else if (productType === 'laptop' && this.currentLaptop.stock > 0) {
                this.$root.updateCart('laptop');
                this.currentLaptop.stock--;
            } else if (productType === 'phone' && this.currentPhone.stock > 0) {
                this.$root.updateCart('phone');
                this.currentPhone.stock--;
            }
        },
        selectSocksVariant(index) {
            this.selectedSocksIndex = index;
        },
        selectLaptopVariant(index) {
            this.selectedLaptopIndex = index;
        },
        selectPhoneVariant(index) {
            this.selectedPhoneIndex = index;
        }
    }
});

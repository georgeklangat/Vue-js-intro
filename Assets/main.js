const app = Vue.createApp({
        data() {
            return {
                cartCount: 0,
                brand: 'Vue Mastery',
                socksDetails: ['50% Cotton', '30% Wool', '20% Polyester'],
                socksVariants: [
                    { id: 2234, color: 'green', image: '/Assets/Images/socks_green.jpg', stock: 50 },
                    { id: 2235, color: 'darkblue', image: '/Assets/Images/socks_blue.jpg', stock: 0 }
                ],
                laptopVariants: [
                    { id: 45, color: 'black', image: '/Assets/Images/black_laptop.jpg', stock: 50 },
                    { id: 46, color: 'white', image: '/Assets/Images/white_laptop.jpg', stock: 0 }
                ],
                availableSizes: [
                    { id: 1, value: 56 },
                    { id: 2, value: 57 }
                ],
                selectedSocksIndex: 0,
                selectedLaptopIndex: 0
            };
        },
        computed: {
            socksTitle() {
                return `${this.brand} Socks`;
            },
            laptopTitle() {
                return `${this.brand} Laptops`;
            },
            currentSocks() {
                return this.socksVariants[this.selectedSocksIndex];
            },
            currentLaptop() {
                return this.laptopVariants[this.selectedLaptopIndex];
            }
        },
        methods: {
            addToCart(productType) {
                if (productType === 'socks' && this.currentSocks.stock > 0) {
                    this.cartCount++;
                    this.currentSocks.stock--;
                } else if (productType === 'laptop' && this.currentLaptop.stock > 0) {
                    this.cartCount++;
                    this.currentLaptop.stock--;
                }
            },
            selectSocksVariant(index) {
                this.selectedSocksIndex = index;
            },
            selectLaptopVariant(index) {
                this.selectedLaptopIndex = index;
            }
        }
    });

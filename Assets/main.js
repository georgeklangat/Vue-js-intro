const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Black Elitebook',
            product1: 'Socks',
            // image1: '/Assets/Images/socks_blue.jpg',
            // image:'/Assets/Images/black_laptop.jpg',
            url: 'https://georgeslangat.netlify.app',
            inventory: 1,
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green',image: '/Assets/Images/socks_green.jpg'},
                {id: 2235, color: 'blue', image: '/Assets/Images/socks_blue.jpg'},
            ],
            sizes: [
                {id:'black', size: 56},
                {id:'blue',size: 57},
            ],
            onSale:true,

        }
    },
    methods: {
        addToCart(){
            this.cart +=1
        },
        updateImage(variantImage){
            this.image = variantImage
        }
    }

} 
)

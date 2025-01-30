const app = Vue.createApp({
    data(){
        return {
            cart:0,
            product: 'Laptops',
            product1: 'Socks',
            image: '/Assets/Images/socks_blue.jpg',
            image1:'/Assets/Images/black_laptop.jpg',
            url: 'https://georgeslangat.netlify.app',
            inventory: 1,
            details: ['50% cotton', '30% wool','20% polyester'],
            socksVariants:[
                {id: 2234, color:'green', socksImage: '/Assets/Images/socks_green.jpg'},
                {id: 2235, color: 'blue', socksImage: '/Assets/Images/socks_blue.jpg'},
            ],
            laptopVariants:[
                {id:45, color:'black', laptopImage : '/Assets/Images/black_laptop.jpg'},
                {id:46,color:'white', laptopImage : '/Assets/Images/white_laptop.jpg'}
            ],
            sizes: [
                {id:1, size: 56},
                {id:2,size: 57},
            ],
            onSale:true,

        }
    },
    methods: {
        addToCart(){
            this.cart +=1
        },
        socksImageUpdate(socksvariant){
            this.image = socksvariant
        },
        laptopImageUpdate(laptopvariant){
            this.image1 = laptopvariant
        }
    }

} 
)

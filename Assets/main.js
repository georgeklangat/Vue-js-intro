const app = Vue.createApp({
    data(){
        return {
            product: 'Black Elitebook',
            product1: 'Socks',
            image1: '/Assets/Images/socks_blue.jpg',
            image:'/Assets/Images/black_laptop.jpg',
            url: 'https://georgeslangat.netlify.app',
            inStock: false,
            details: ['50% cotton', '30% wool','20% polyester'],
            variants:[
                {id: 2234, color:'green'},
                {id: 2235, color: 'blue'},
            ],
            sizes: [
                {id:'black', size: [23,45,12,56,78,45]},
                {id:'blue',size: [31,32,34,45,56,32]},
            ]

        }
    }

}
)

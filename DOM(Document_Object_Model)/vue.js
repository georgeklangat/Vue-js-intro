const item = Vue.createApp({
    data() {
        return {
            items: ['Item 1', 'Item 2', 'Item 3']
        };
    },
        methods:{
            addItem(){
                const newItem = `item ${this.items.length + 1}`;
                this.items.push(newItem);
            }
        }
    });

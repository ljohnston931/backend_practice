<template>
<div class="container">
            <div class="main">
                <div class="banner">
                    <img src="./yserve.jpg" alt="people serving" style="width:100%">
                    <div class="bottom-left">How can I help?</div>
                </div>
                <p id="subtitle"><em>An easy way to find volunteer opportunities in Provo, Utah</em></p>
                <a class="button" href="/pages/which_day.html">Get Started</a>
            </div>
            <div class="footer">
                <p>Created by: Lucy Johnston 
                <br> GitHub URL: https://github.com/ljohnston931/backend_practice</p>        
            </div>
        </div>   
</template>

<script>
import axios from 'axios';
export default {
    name: 'Home',
    data () {
        return {
            items: [],
        
        }
    },
    computed: {
        notCommittedItems: function() {
            if (this.show === 'notCommitted')
                return this.items.filter(function(item) {
                    return !item.committed;
                });
        },
        filteredItems: function() {
            if (this.show === 'notCommitted')
            return this.items.filter(function(item) {
                return !item.committed;
            });
            if (this.show === 'committed')
            return this.items.filter(function(item) {
                return item.committed;
            });
            return this.items;
        },
    },
    created: function() {
        this.getItems();
    },
    methods: {
        getItems: function() {
            axios.get("/api/items").then(response => {
                this.items = response.data;
                return true;
            }).catch(err => {
            });
        },
        addItem: function() {
            axios.post("/api/items", {
                text: this.text,
                committed: false
            }).then(response => {
                this.text = "";
                this.getItems();
                return true;
            }).catch(err => {
            });
        },
        commitItem: function(item) {
            axios.put("/api/items/" + item.id, {
                text: item.text,
                committed: !item.committed
            }).then(response => {
                return true;
            }).catch(err => {
            });
        },
        deleteItem: function(item) {
            axios.delete("/api/items/" + item.id).then(response => {
                this.getItems();
                return true;
            }).catch(err => {
            });
        },
        showAll: function() {
            this.show = 'all';
        },
        showNotCommitted: function() {
            this.show = 'notCommitted';
        },
        showCommitted: function() {
            this.show = 'committed';
        }
    }
}
</script>

<style scoped>
body {
    color: #303846;
    background-color: #f5f5f5;
    font-size: 16px;
    font-family: 'Monserrat', sans-serif;
    padding: 20px 50px 50px 50px;
}
.container {
    display: grid;
    grid-template-rows: 40px 1fr 40px;
    grid-template-columns: 100% 100% 100%;
    grid-template-areas:
    "header"
    "main"
    "footer";
    grid-gap: 20px;
    font-size: 20px;
}
.header {
    grid-area: header;
    display: inline-block;
    padding:0px;
    height:40px;
    position: relative;
    z-index: 3000;
}
.header ul {
    list-style-type:none;
    margin:0;
    padding:0;
    position:absolute;

}

.header li {
    display:inline-block;
    float: left;
    margin-right:10px;
}

.header li a {
    display: block;
    min-width: 140px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    text-decoration: none;
    background-color: #4e595d;
    color: #f5f5f5;
}

.here  {
    background-color: #e5b121 !important;
}

.header a:hover {
    background: #e5b121;
}

.header li:hover ul a {
    background-color: #4e595d;
    color: #f5f5f5;
    height: 40px;
    line-height: 40px;
}

.header li:hover ul a:hover {
    background-color: #e5b121;
}

.header li ul {
    display: none;
}

.header li ul li {
    display: block ;
    float: none;
    z-index: 1000;
}

.header ul li a:hover + .hidden, .hidden:hover {
    display: block;
}

.banner {
    position: relative;
    z-index: 1000;
    text-align: center;
    color:#e5b121;
    font-size:  150px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;

}

.bottom-left {
    position: absolute;
    bottom: 30px;
    left: 30px;
}
.main {
    grid-area: main;
    padding: 0px;
    min-height: 600px
}

.main p {
    max-width: 800px;
    
}

#subtitle{
    font-size: 40px;
    margin-top: 10px;
}

.button {
    background-color: #e5b121;
    border:none;
    color:#f5f5f5;
    padding: 15px 32px;
    text-align: center;
    display:inline-block;
    font-size: 16px;
    text-decoration: none;
}

.days {
    min-width: 170px;
    margin-bottom: 10px;
    margin-right: 5px;
    background-color: #4e595d;
    border:none;
    color:#f5f5f5;
    padding: 15px 32px;
    text-align: center;
    display:inline-block;
    font-size: 20px;
    text-decoration: none;
}

.days:hover {
    background: #e5b121;
}

.footer {
    grid-area: footer;
    text-align: center;
}

h2 {
    font-size: 60px;
    color: #e5b121;
}

.box {
    width: 300px;
    height: 30px;
    display: block;
}
</style>
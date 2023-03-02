import{_ as I,o,c as n,a as i,d as t,F as _,f as g,g as m,t as c,h as f,v as x}from"./index-fe6acd2d.js";const{VITE_APP_URL:u,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"ufo060204",BASE_URL:"/Vue-Week6-Homework/",MODE:"production",DEV:!1,PROD:!0},C={data(){return{products:[],productId:"",cart:{},loadingItem:"",form:{user:{name:"",mail:"",tel:"",address:""},message:""}}},methods:{getCarts(){this.$http.get(`${u}/v2/api/${h}/cart`).then(e=>{this.cart=e.data.data}).catch(e=>{alert(e.data.message)})},updateCartItem(e){const d={product_id:e.product.id,qty:e.qty};this.loadingItem=e.id,this.$http.put(`${u}/v2/api/${h}/cart/${e.id}`,{data:d}).then(r=>{this.getCarts(),this.loadingItem="",alert(r.data.message)}).catch(r=>{alert(r.data.message)})},deleteCartItem(e){this.loadingItem=e.id,this.$http.delete(`${u}/v2/api/${h}/cart/${e.id}`).then(d=>{this.loadingItem="",this.getCarts(),alert(d.data.message)}).catch(d=>{alert(d.data.message)})},deleteAllCart(){this.$http.delete(`${u}/v2/api/${h}/carts`).then(e=>{this.getCarts(),alert(e.data.message)}).catch(e=>{alert(e.data.message)})}},mounted(){this.getCarts()}},v={class:"table align-middle"},b=t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"150px"}},"數量/單位"),t("th",null,"單價")])],-1),y=["onClick","disabled"],V={key:0,class:"fas fa-spinner fa-pulse"},P=t("div",{class:"text-success"},"已套用優惠券",-1),$={class:"input-group input-group-sm"},k=["onUpdate:modelValue","onChange","disabled"],A=["value"],E={class:"text-end"},T=t("small",{class:"text-success"},"折扣價：",-1),D=t("td",{colspan:"3",class:"text-end"},"總計",-1),U={class:"text-end"},q=t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1),w={class:"text-end text-success"};function B(e,d,r,L,a,p){return o(),n(_,null,[i(" 這是購物車頁面 "),t("table",v,[b,t("tbody",null,[a.cart.carts?(o(!0),n(_,{key:0},g(a.cart.carts,s=>(o(),n("tr",{key:s.id},[t("td",null,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:l=>p.deleteCartItem(s),disabled:s.id===a.loadingItem},[a.loadingItem===s.id?(o(),n("i",V)):m("",!0),i(" x ")],8,y)]),t("td",null,[i(c(s.product.title)+" ",1),P]),t("td",null,[t("div",$,[f(t("select",{name:"",id:"",class:"form-control","onUpdate:modelValue":l=>s.qty=l,onChange:l=>p.updateCartItem(s),disabled:s.id===a.loadingItem},[(o(),n(_,null,g(20,l=>t("option",{value:l,key:l+"1234"},c(l),9,A)),64))],40,k),[[x,s.qty]])])]),t("td",E,[T,i(" "+c(s.total),1)])]))),128)):m("",!0)]),t("tfoot",null,[t("tr",null,[D,t("td",U,c(a.cart.total),1)]),t("tr",null,[q,t("td",w,c(a.cart.final_total),1)])])])],64)}const H=I(C,[["render",B]]);export{H as default};

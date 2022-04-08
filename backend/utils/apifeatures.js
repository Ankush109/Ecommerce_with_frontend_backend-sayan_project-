class Apifeatures {
    constructor(query,querystr){
        this.query =query;
        this.querystr=querystr;
    }
    search(){
        const keyword =this.querystr.keyword
         ? {
            name:{
                $reqex:this.querystr.keyword,
                $options:"i",
             
            },
        }:{};
        console.log(keyword);
        this.query = this.query.find({...keyword})
        return this;
    }
    filter(){
const quertcopy ={...this.querystr}
console.log(quertcopy);
//removing some feilds for the cateogory:-
const removefeilds =["keyword","page","limit"]
removefeilds.forEach(key=>delete quertcopy[key])
//filter for price
console.log(quertcopy);
let querystr =JSON.stringify(quertcopy)
querystr =querystr.replace(/\b(gt|gre|it|ite)\b/g,key=>`$${key}`)

this.query =this.query.find(JSON.parse(querystr))
return this; 
    }
     pagination(resultperpage){
         const currentpage =Number(this.querystr.page )|| 1;
         const skip = resultperpage * (currentpage-1)
         this.query = this.query.limit(resultperpage).skip(skip)
         return this
     }
} 
module.exports = Apifeatures
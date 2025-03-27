require('dotenv').config()
const app =require('./src/App')





app.listen(3000,()=>{
    console.log('Servwer is running on http://localhost:3000')
})
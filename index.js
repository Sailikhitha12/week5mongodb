const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/studentsData')
.then(()=>{
    console.log('database connected successfully')  
})
.catch(()=>{
    console.log('not connected')
})

const academicScheme=new mongoose.Schema({
    student_id:Number,
    name: String,
    grade: String,
    subject: String
})
const activityScheme=new mongoose.Schema({
    student_id: Number,
    name: String,
    activitytype: String,
    duration: String,
    achievement: Number
})

const academicRecord=new mongoose.model('studentRecord',academicScheme)
const activityRecord=new mongoose.model('studentsRecord',activityScheme)

const createDocument1=async () =>{
    try{
        const allData1=await academicRecord.create([
            {
                student_id: 9999,
                name:"Jhon",
                grade: "A",
                subject: "javascript"
            },
            {
                student_id: 8888,
                name:"Marvel",
                grade: "b",
                subject: "javascript"
            }
        ])
    }
    catch(e){
        console.log('error')
    }
}
createDocument1();

const getDocument1=async ()=>{
    const result1=await academicRecord.find({student_id:9999},{subject:1})
    console.log(result1);
}
getDocument1();

const createDocument2=async ()=>{

    try{
        const allData2=new academicRecord.create([
            {
                student_id: 9999,
                name: "jhon",
                activitytype: "designing",
                duration: "2 hours",
                achievement: 2
            },
            {
                student_id: 8888,
                name: "Marvel",
                activitytype: "Animation",
                duration: "3 hours",
                achievement: 3
            }
        ])

    }
    catch(e){
        console.log('error')
    }
}

const getDocument2=async ()=>{
    const result2=await activityRecord.find({student_id:9999},{activitytype:1});
    console.log(result2);
}
getDocument2();
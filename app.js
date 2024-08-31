let stdInfo=[
{
    name:"Muneeb",
    seatno:"201",
    department:"ubit",
    isFeesPaid:true,
    subjects:["urdu","maths","english","pst"]
},
{
    name:"Ahmed",
    seatno:"202",
    department:"ubit",
    isFeesPaid:false,
    subjects:["urdu","maths","english","pst"]
},
{
    name:"Abdullah",
    seatno:"203",
    department:"ubit",
    isFeesPaid:true,
    subjects:["urdu","maths","english","pst"]
}
]
console.log(stdInfo)
    function printStudentInfo(){
        let mainDiv=document.getElementById("main");
        for(let i=0;i<stdInfo.length;i++){
            let std=stdInfo[i];

            let h3ForName=document.createElement("h3");
            h3ForName.innerText=std.name;
            mainDiv.appendChild(h3ForName);

            let h3ForSeat=document.createElement("h3");
            h3ForSeat.innerText=std.seatno;
            mainDiv.appendChild(h3ForSeat);

            let h3ForDepartment=document.createElement("h3");
            h3ForDepartment.innerText=std.department;
            mainDiv.appendChild(h3ForDepartment);

            let h3ForFees=document.createElement("h3");
            h3ForFees.innerText=std.isFeesPaid;
            mainDiv.appendChild(h3ForFees);

            let ulForCourses=document.createElement("ul");
            for(let j=0;j<std.subjects.length;j++){
                let courseList=document.createElement("li");
                courseList.innerText=std.subjects[j];
                ulForCourses.appendChild(courseList);
            }
            console.log(ulForCourses)
            mainDiv.appendChild(ulForCourses)
            console.log(h3ForName);
            }
            console.log(mainDiv)
    }
    printStudentInfo();

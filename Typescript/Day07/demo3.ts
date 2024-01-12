//json Object
// key & value format 

let obj={
    id:9,
    'fname':'Sumit',
    lname:'Raokhande'
}

// 1 dot operator 
// 2 square operator 


// 1 dot operator 

// console.log(`
//     ID          :: ${obj.id}
//     First Name  :: ${obj.fname}
//     Last name   :: ${obj.lname}
// `);

// 2 square operator 
// console.log(`
//     ID          :: ${obj['id']}
//     First Name  :: ${obj["fname"]}
//     Last name   :: ${obj['lname']}
// `);


//array of Object 

let arrObj=[
    {
        id:9,
        'fname':'Sumit',
         lname:'Raokhande',
         country:{
            cid:1,
            cname:'India'
         },
         month:['Jan','March','Dec'],
         result:[
            {
                Subj:"M1",
                marks:40
            },
            {
                Subj:"M2",
                marks:42
            },
            {
                Subj:"M3",
                marks:55
            }
         ]
    },
    {
        id:6,
        'fname':'Kiran',
         lname:'Raokhande',
         country:{
            cid:2,
            cname:'US'
         },
         month:['Feb','May','Aug'],
         result:[
            {
                Subj:"M1",
                marks:50
            },
            {
                Subj:"M2",
                marks:52
            },
            {
                Subj:"M3",
                marks:65
            }
         ]
    },
    {
        id:3,
        'fname':'Spruha',
         lname:'Raokhande',
         country:{
            cid:3,
            cname:'Japan'
         },
         month:['April','July','Oct'],
         result:[
            {
                Subj:"M1",
                marks:45
            },
            {
                Subj:"M2",
                marks:48
            },
            {
                Subj:"M3",
                marks:75
            }
         ]
    }
];


for(let i=0;i<arrObj.length;i++){
    console.log(`
        ID          :: ${arrObj[i].id}
        First Name  :: ${arrObj[i].fname}
        Last Name   :: ${arrObj[i].lname}
        Country     :: ${arrObj[i].country.cname}
        Month       :: ${arrObj[i].month.join(" ")}
        ------------ Result---------------
    `);

    arrObj[i].result.forEach((item)=>{
        console.log(`
            Subject ::  ${item.Subj}
            Marks   ::  ${item.marks}
        `)
    });

}



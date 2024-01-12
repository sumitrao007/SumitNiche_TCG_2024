//json Object
// key & value format 
var obj = {
    id: 9,
    'fname': 'Sumit',
    lname: 'Raokhande'
};
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
var arrObj = [
    {
        id: 9,
        'fname': 'Sumit',
        lname: 'Raokhande',
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ['Jan', 'March', 'Dec'],
        result: [
            {
                Subj: "M1",
                marks: 40
            },
            {
                Subj: "M2",
                marks: 42
            },
            {
                Subj: "M3",
                marks: 55
            }
        ]
    },
    {
        id: 6,
        'fname': 'Kiran',
        lname: 'Raokhande',
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ['Feb', 'May', 'Aug'],
        result: [
            {
                Subj: "M1",
                marks: 50
            },
            {
                Subj: "M2",
                marks: 52
            },
            {
                Subj: "M3",
                marks: 65
            }
        ]
    },
    {
        id: 3,
        'fname': 'Spruha',
        lname: 'Raokhande',
        country: {
            cid: 3,
            cname: 'Japan'
        },
        month: ['April', 'July', 'Oct'],
        result: [
            {
                Subj: "M1",
                marks: 45
            },
            {
                Subj: "M2",
                marks: 48
            },
            {
                Subj: "M3",
                marks: 75
            }
        ]
    }
];
for (var i = 0; i < arrObj.length; i++) {
    console.log("\n        ID          :: ".concat(arrObj[i].id, "\n        First Name  :: ").concat(arrObj[i].fname, "\n        Last Name   :: ").concat(arrObj[i].lname, "\n        Country     :: ").concat(arrObj[i].country.cname, "\n        Month       :: ").concat(arrObj[i].month.join(" "), "\n        ------------ Result---------------\n    "));
    arrObj[i].result.forEach(function (item) {
        console.log("\n            Subject ::  ".concat(item.Subj, "\n            Marks   ::  ").concat(item.marks, "\n        "));
    });
}

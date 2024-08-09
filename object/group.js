//input
const obj = [{
    sam: "Sample 1",
    data :"Data1"
},
{
    sam : "Sample 2",
    data :"Data2"
},{
    sam : "Sample 1",
    data :"Data1"
},{
    sam : "Sample 3",
    data :"Data3"
},{
    sam : "Sample 1",
    data :"Data1"
},
]
//output
// {
//     'Sample 1': [
//         { key: 'Sample 1', data: 'Data1' },
//         { key: 'Sample 1', data: 'Data1' },
//         { key: 'Sample 1', data: 'Data1' }
//       ],
//       'Sample 2': [ { key: 'Sample 2', data: 'Data2' } ],
//       'Sample 3': [ { key: 'Sample 3', data: 'Data3' } ]
//     }
const output = {}

//[item.sam] array ullile sadanm edukan
//numberCount[number] number count object numbers access 
obj.forEach(item=> {
    if(output[item.sam]){  
        //if key is available
        output[item.sam].push(item);
    }else{
        output[item.sam] = [item];
    }
});
console.log(output)
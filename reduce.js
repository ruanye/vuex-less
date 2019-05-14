const data = [{
  id: '1',
  name: 'XXX一司',
  children: [{
    id: '1-1',
    name: 'XXX一处',
    children: [{
      id: '1-1-1',
      name: 'XXX办公室',
      children: [{
        id: '1-1-1-1',
        name: 'XXX物资科'
      }
      ]
    }, {
      id: '1-1-2',
      name: 'XXX局'
    }]
  }, {
    id: '1-2',
    name: 'XXX二处'
  }]
}, {
  id: '2',
  name: 'XXX二司'
}, {
  id: '3',
  name: 'XXX三司'
}]

function flattern(ary){
     let flatary =[]
      return flatary.concat(...ary.map(x =>{
		 if(x.children){
		  let c = x.children;
		  delete x.children 
		  return [...flatary,...flattern(c),x]
		}
        return x
	}))
}
 let res =flattern(JSON.parse(JSON.stringify(data)))
 console.log(res)

console.log(res)

function flattern1(arr){
  return arr.reduce((prev, next) => {
	  if(next.children){
		  let {children} = next;
		  delete next.children
         prev = [...prev,...flattern1(children)] 
	  }
	   prev=prev.concat(next)
	 return prev
   },[]) 
}
console.log(flattern1(JSON.parse(JSON.stringify(data))))

// function re(pre, cut) {
//   var children = cut.children;
//   if (children) {
//     delete cut.children;
//     pre=pre.concat(cut);
//     return pre.concat(children.reduce(re, []))
//   } else 
//     return pre.concat(cut);
// }
// console.log(data.reduce(re, []));


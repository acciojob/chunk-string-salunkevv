function stringChop(str,length) {
  // your code here
	let ans=str.match(/.{1,n}/g);
	// for(let i=0;i<str.length;i=i+size)
	// 	{
	// 		let n=i+size;
	// 		if(n>str.length)
	// 		{
	// 			n=str.length+1;
	// 		}
	// 		ans.push(str.slice(i,n));
	// 	}
	return str.match(new RegExp('.{1,' + length + '}', 'g'));;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));

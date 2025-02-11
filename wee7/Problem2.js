function deepClone(obj){
    return JSON.parse(JSON.stringify(obj));
  }
  
  let original = { name: "alice", hobbies: ["reading", "traveling"] };
  let clone = deepClone(original);
  
  // Modify the clone to add a new hobby
  clone.hobbies.push("coding");
  
  console.log("Original: " + JSON.stringify(original));
  console.log("Clone: " + JSON.stringify(clone));
var assert = chai.assert;
var expect = chai.expect;
describe('ds-hash-table', function() {
	
  it('should insert values correctly', function() {
  	var hashTable = makeHashTable();	
   	hashTable.insert("k1", "v1");
   	hashTable.insert("k2", "v2");
   	var result = hashTable.retrieve("k1");
   	expect(result).to.eql("v1");
  });

  it('should not add new key if its already exists', function() {
  	var hashTable = makeHashTable();	
   	hashTable.insert("k1", "v1");
   	hashTable.insert("k1", "v2");
   	var result = hashTable.retrieve("k1");
   	expect(result).to.eql("v2");
  });

  it('should not have collisions of same index', function() {
  	var hashTable = makeHashTable();	
   	hashTable.insert("k", "v1"); // generate index 3 same as "kk"
   	hashTable.insert("kk", "v2");
   	var result = hashTable.retrieve("kk");
   	expect(result).to.eql("v2");
  });

});

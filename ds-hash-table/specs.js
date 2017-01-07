var assert = chai.assert;

describe('ds-hash-table', function() {
	
  it('should insert values correctly', function() {
  	var hashTable = makeHashTable();	
   	hashTable.insert("k1", "v1");
   	hashTable.insert("k2", "v2");
   	var result = hashTable.retrieve("k1");
   	expect(result).to.eql("v1");
  });

});

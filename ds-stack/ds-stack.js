var Stack = function() {
	var obj = {};
	obj._storage=[];
	return _.extend(obj, stackMethods);
};

var stackMethods = {};

// i was wondering is it this simple you want ?! because you requested just these three properties.

stackMethods.add = function(value){
	this._storage.push(value);
}

stackMethods.remove = function(){
	return this._storage.pop();
}
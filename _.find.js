if(typeof require !== 'undefined') {
	var _ = require('underscore');
}

(function() {
	

	
/** found in a gist somewhere
*/
var setPrototypeOf = function(obj, proto) {
    var p = proto;
    do {
        if (obj === p) {
            throw Error('Circular prototype chain');
        }
    } while (p = Object.getPrototypeOf(p));
    
    obj.__proto__ = proto;
    return obj; 
}

//series of tests, accepting q (query) matching against s (subject), returning true or false.
var test = {

	//match each param exactly
	param: function(q,s) {
		for(var i in q) {
			//if subject doesnt have the property, return false
			if(! i in s) {
				return false;
			}
			//if this property is an object, call param on the object and only return if that is false
			if( _(q[i]).isObject() ) {
				if( !this.param(q[i],s[i]) ) {
					return false;
				}
				continue;
			}
			//if the properties dont match, die.
			if( s[i] !== q[i] ) {
				return false;
			}
		}
		return true;
	}
}

/** find function. Accepts objects, w properties as objects.
*/
var find =  function(q) {
	var res = _(typeof this.length === 'undefined' ? [this] : this).filter(function(s) {
		return test.param(q,s);
	},this);
	if(!this.wasArray) {
		if(res.length === 1) { 
			res = _.find(res[0]);
		} else if(res.length === 0) {
			res = false;
		}
	} else {
		res = _.find(res);
	}
	return res;
}

/** return first result... rather like the _.find method we're overwriting.
*/
var findOne = function(q) {	
	var res = this.find(q);
	
	//must have started as an array. take the first object, then run through _.find make it queryable.
	if(typeof res.length !== 'undefined') {
		return _.find(res[0]);	
	}
	return res;
}

underscoreDotFind = function(subject,query) {

	if(query) {
		var handle = this.find(subject);
		return handle.find(query);
	}

	if(subject === null) {
		throw 'require object';
	}

	var array = true;
	if(typeof subject.length === 'undefined') {
		var array = false;
	}

	setPrototypeOf(subject,{
		find: find,
		findOne: findOne,
		wasArray: array
	});
	return subject;
}

_.mixin({
	find: underscoreDotFind
});

})();



if(typeof module !== 'undefined' && 'exports' in module) {
	module.exports = _.find;
}
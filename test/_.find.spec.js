var _ = require('../lib/_');



_.find = require('../_.find');

describe('_.find', function() {
	it('exists', function() {
		var handle = _.find({});
		expect(typeof handle).toEqual('object');
	});
});

describe('find', function() {

	it('returns true if a single parameter matches', function() {
		var handle = _.find([{'hello':'world'}]);
		var t = handle.find({'hello':'world'});
		expect(t[0]).toEqual({'hello':'world'});
	});
	
	it('returns false if a single parameter doesnt match', function() {
		var j = _.find([{'hello':'world'}]);
		var t = j.find({'hello':'wold'});
		expect(t.length).toEqual(0);
	});
	
	it('returns an array of matches if created as an array', function() {
		var j = _.find([{'hello':'world'}]);
		var t = j.find({'hello':'world'});
		expect(t[0]).toEqual({'hello':'world'});
	});
	
	it('returns an object of match if created as an object', function() {
		var j = _.find({'hello':'world'});
		var t = j.find({'hello':'world'});
		expect(t.hello).toEqual('world');
	});
	
	it('returns false if an object is subject and test is false', function() {
		var j = _.find({'hello':'world'});
		var t = j.find({'hello':'dolly'});
		expect(t).toEqual(false);
	})
	
	it('returns true if two parameters match', function() {
		var j = _.find([{
			'hello':'world',
			'goodnight':'moon'
		}]);
		var t = j.find({
			'hello':'world',
			'goodnight':'moon'
		});
		expect(t[0]).toEqual({
			'hello':'world',
			'goodnight':'moon'
		});
	});
	
	it('returns false if two parameters dont match', function() {
		var j = _.find([{
			'hello':'world',
			'goodnight':'moon'
		}]);
		var t = j.find({
			'hello':'dolly',
			'goodnight':'saturn'
		});
		expect(t.length).toEqual(0);
	});
	
	it('returns true if a nested parameter matches', function() {
		var j = _.find([{ 'check': 
			{
				'second':'level'
			}
		}]);
		var t = j.find({ 'check': 
			{
				'second':'level'
			}
		});
		expect(t[0]).toEqual({ 'check': 
			{
				'second':'level'
			}
		});
	});
	
	it('returns false if a nested parameter doesnt match', function() {
		var j = _.find([{ 'check': 
			{
				'second':'level'
			}
		}]);
		var t = j.find({ 'check': 
			{
				'second':'life'
			}
		});
		expect(t.length).toEqual(0);
	});
	
});

describe("findOne", function() {
	
	it('returns the first result', function() {
		
		var res = _.find([{a:1},{a:1}]);
		res = res.findOne({a:1});
		expect(res.a).toEqual(1);
	});
	
});
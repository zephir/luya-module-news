zaa.factory('ApiCmsNav', function($resource) {
	return $resource('admin/api-cms-nav/:id', { id: '@_id' }, {
		save : {
			method : 'POST',
			isArray : false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		}
	});
});

zaa.factory('ApiCmsNavItemPage', function($resource) {
	return $resource('admin/api-cms-navitempage/:id', { id : '@_id' }, {
		save : {
			method : 'POST',
			isArray : false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		}
	});
});

zaa.factory('ApiCmsMenu', function($resource) {
	return $resource('admin/api-cms-menu/:id');
});

zaa.factory('ApiCmsBlock', function($resource) {
	return $resource('admin/api-cms-block/:id');
});

zaa.factory('ApiCmsNavItemPageBlockItem', function($resource) {
	return $resource('admin/api-cms-navitemplageblockitem/:id', { id : '@_id' }, {
		save : {
			method : 'POST',
			isArray : false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		},
		update : {
			method : 'PUT',
			isArray : false,
			headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
		}
	});
});

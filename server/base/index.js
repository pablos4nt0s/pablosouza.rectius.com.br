// Base routes for default index/root path, about page, 404 error pages, and others..
exports.register = function(server, options, next){

    server.route([       
        {
            method: 'GET',
            path: '/{languageCode?}',
            config: {
                handler: function(request, reply){
                    var locale = request.params.languageCode ? encodeURIComponent(request.params.languageCode) : 'en';
					request.i18n.setLocale(reply, locale, true);					
					reply.view('index', {
                        title: request.i18n.__( "Home Title" )
                    });
                },
                id: 'index'
            }
        },
		{
            method: 'GET',
            path: '/resume',
            config: {
                handler: function(request, reply){
                    reply.redirect('http://s3.pablosouza.rectius.com.br/resume.pdf');
                },
                id: 'resume'
            }
        },
        {
            method: 'GET',
            path: '/{path*}',
            config: {
                handler: function(request, reply){
                    reply.view('404', {
                        title: '404 Page not found'
                    }).code(404);
                },
                id: '404'
            }
        }
    ]);

    next();
}

exports.register.attributes = {
    name: 'base'
};
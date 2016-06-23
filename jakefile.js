FGRN="\033[32m";
RS="\033[0m";
END="\n\n";

desc('compile stylus files.');
task('stylus', {async: true, breakOnError: true}, function () {
  var cmds = [
    'cd build; watch "bash compile-stylus.sh" ../stylus/;'
  ];
  jake.exec(cmds,  {printStdout: true}, function () {
    console.log(FGRN + 'Completed: compile styls' + RS + END);
    complete();
    console.log(FGRN + 'Completed: compile styls' + RS + END);
  });
});

desc('build js files');
task('js', ['hbs'], {async: true, breakOnError: false}, function(arg) {
  arg = arg || 'shop'; // defaults to shop.js
  console.log('building', arg + '.js ...');
  var cmds = [
    'cd build; r.js -o r.js/' + arg + '.js optimize=none'
  ];
  jake.exec(cmds, {printStdout: true}, function(){
    console.log(FGRN + 'Completed: build shop.js' + RS + END);
    complete();
  });
});

desc('optimize Js files');
task('js-prod', ['hbs'], {async: true}, function() {
  var cmds = [
    'cd build; bash optimize-js.sh'
  ];
  jake.exec(cmds, {printStdout: true}, function(){
    console.log(FGRN + 'Completed: optimize js' + RS + END);
    complete();
  });
});

desc("Precompile the handlebars templates");
task('hbs', {async: true, breakOnError: false}, function(){
	var cmds = [
		'handlebars --amd -m js/templates/*.hbs -f js/templates/templates.js'
	];
	jake.exec(cmds, {printStdout: true}, function(){
		console.log(FGRN + 'Completed: compile handlebars' + RS + END);
    complete();
	});
});



watchTask(['hbs', 'js'], function () {
  this.watchFiles.include([
    './js/templates/*.hbs',
    './js/**/*.js'
  ]);
  this.watchFiles.exclude([
      './js/build/*.js'
  ]);
});


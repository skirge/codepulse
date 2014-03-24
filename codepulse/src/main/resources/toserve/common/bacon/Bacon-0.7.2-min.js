!function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb=[].slice,hb={}.hasOwnProperty,ib=function(a,b){function c(){this.constructor=a}for(var d in b)hb.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},jb=function(a,b){return function(){return a.apply(b,arguments)}};a={toString:function(){return"Bacon"}},a.version="0.7.2",a.fromBinder=function(b,c){return null==c&&(c=cb.id),new j(y(a,"fromBinder",b,c),function(d){var e;return e=b(function(){var b,f,g,h,j,k;for(b=1<=arguments.length?gb.call(arguments,0):[],h=c.apply(null,b),F(h)&&cb.last(h)instanceof i||(h=[h]),g=a.more,j=0,k=h.length;k>j;j++)if(f=h[j],g=d(f=X(f)),g===a.noMore||f.isEnd())return null!=e?e():a.scheduler.setTimeout(function(){return e()},0),g;return g})})},a.$={asEventStream:function(b,c,d){var e,f=this;return H(c)&&(e=[c,null],d=e[0],c=e[1]),ab(this,"asEventStream",b,a.fromBinder(function(a){return f.on(b,c,a),function(){return f.off(b,c,a)}},d))}},null!=(db="undefined"!=typeof jQuery&&null!==jQuery?jQuery:"undefined"!=typeof Zepto&&null!==Zepto?Zepto:null)&&(db.fn.asEventStream=a.$.asEventStream),a.fromEventTarget=function(b,c,d){var e,f,g,h,i,j;return e=null!=(g=b.addEventListener)?g:null!=(h=b.addListener)?h:b.bind,f=null!=(i=b.removeEventListener)?i:null!=(j=b.removeListener)?j:b.unbind,ab(a,"fromEventTarget",b,c,a.fromBinder(function(a){return e.call(b,c,a),function(){return f.call(b,c,a)}},d))},a.fromPromise=function(b,c){return ab(a,"fromPromise",b,a.fromBinder(function(a){return b.then(a,function(b){return a(new h(b))}),function(){return c?"function"==typeof b.abort?b.abort():void 0:void 0}},function(a){return[a,z()]}))},a.noMore=["<no-more>"],a.more=["<more>"],a.later=function(b,c){return ab(a,"later",b,c,a.sequentially(b,[c]))},a.sequentially=function(b,c){var d;return d=0,ab(a,"sequentially",b,c,a.fromPoll(b,function(){var a;return a=c[d++],d<c.length?a:d===c.length?[a,z()]:z()}))},a.repeatedly=function(b,c){var d;return d=0,ab(a,"repeatedly",b,c,a.fromPoll(b,function(){return c[d++%c.length]}))},a.spy=function(a){return V.push(a)},V=[],U=function(a){var b,c,d,e;if(V.length&&!U.running)try{for(U.running=!0,e=[],c=0,d=V.length;d>c;c++)b=V[c],e.push(b(a));return e}finally{delete U.running}},bb=function(a){return function(){var b,c,d,e;return d=arguments[0],b=2<=arguments.length?gb.call(arguments,1):[],"object"==typeof d&&b.length&&(c=d,e=b[0],d=function(){return c[e].apply(c,arguments)},b=b.slice(1)),a.apply(null,[d].concat(gb.call(b)))}},K=function(b,c){return bb(function(){var d,e,f;return e=arguments[0],d=2<=arguments.length?gb.call(arguments,1):[],f=S(c,[function(a,b){return e.apply(null,gb.call(a).concat([b]))}]),ab.apply(null,[a,b,e].concat(gb.call(d),[a.combineAsArray(d).flatMap(f)]))})},a.fromCallback=K("fromCallback",function(){var b,c;return c=arguments[0],b=2<=arguments.length?gb.call(arguments,1):[],a.fromBinder(function(a){return L(c,b)(a),R},function(a){return[a,z()]})}),a.fromNodeCallback=K("fromNodeCallback",function(){var b,c;return c=arguments[0],b=2<=arguments.length?gb.call(arguments,1):[],a.fromBinder(function(a){return L(c,b)(a),R},function(a,b){return a?[new h(a),z()]:[b,z()]})}),a.fromPoll=function(b,c){return ab(a,"fromPoll",b,c,a.fromBinder(function(c){var d;return d=a.scheduler.setInterval(c,b),function(){return a.scheduler.clearInterval(d)}},c))},a.interval=function(b,c){return null==c&&(c={}),ab(a,"interval",b,c,a.fromPoll(b,function(){return Q(c)}))},a.constant=function(b){return new o(y(a,"constant",b),function(a){return a(E(b)),a(z()),R})},a.never=function(){return ab(a,"never",a.fromArray([]))},a.once=function(b){return ab(a,"once",b,a.fromArray([b]))},a.fromArray=function(b){return b=u(b),new j(y(a,"fromArray",b),function(c){var d,e;return e=!1,d=function(){var f,g;return cb.empty(b)?c(z()):(g=b.splice(0,1)[0],f=c(X(g)),f===a.noMore||e?void 0:d())},d(),function(){return e=!0}})},a.mergeAll=function(){var b;return b=1<=arguments.length?gb.call(arguments,0):[],F(b[0])&&(b=b[0]),ab.apply(null,[a,"mergeAll"].concat(gb.call(b),[cb.fold(b,a.never(),function(a,b){return a.merge(b)})]))},a.zipAsArray=function(){var b;return b=1<=arguments.length?gb.call(arguments,0):[],F(b[0])&&(b=b[0]),ab.apply(null,[a,"zipAsArray"].concat(gb.call(b),[a.zipWith(b,function(){var a;return a=1<=arguments.length?gb.call(arguments,0):[]})]))},a.zipWith=function(){var b,c,d;return b=arguments[0],c=2<=arguments.length?gb.call(arguments,1):[],H(b)||(d=[b,c[0]],c=d[0],b=d[1]),c=cb.map(function(a){return a.toEventStream()},c),ab.apply(null,[a,"zipWith",b].concat(gb.call(c),[a.when(c,b)]))},a.groupSimultaneous=function(){var c,d,e;return e=1<=arguments.length?gb.call(arguments,0):[],1===e.length&&F(e[0])&&(e=e[0]),d=function(){var a,d,f;for(f=[],a=0,d=e.length;d>a;a++)c=e[a],f.push(new b(c));return f}(),ab.apply(null,[a,"groupSimultaneous"].concat(gb.call(e),[a.when(d,function(){var a;return a=1<=arguments.length?gb.call(arguments,0):[]})]))},a.combineAsArray=function(){var b,c,d,e,f,g,h;for(f=1<=arguments.length?gb.call(arguments,0):[],1===f.length&&F(f[0])&&(f=f[0]),b=g=0,h=f.length;h>g;b=++g)e=f[b],I(e)||(f[b]=a.constant(e));return f.length?(d=function(){var a,b,d;for(d=[],a=0,b=f.length;b>a;a++)c=f[a],d.push(new r(c,!0,!1,c.subscribeInternal));return d}(),ab.apply(null,[a,"combineAsArray"].concat(gb.call(f),[a.when(d,function(){var a;return a=1<=arguments.length?gb.call(arguments,0):[]}).toProperty()]))):a.constant([])},a.onValues=function(){var b,c,d;return c=2<=arguments.length?gb.call(arguments,0,d=arguments.length-1):(d=0,[]),b=arguments[d++],a.combineAsArray(c).onValues(b)},a.combineWith=function(){var b,c;return b=arguments[0],c=2<=arguments.length?gb.call(arguments,1):[],ab.apply(null,[a,"combineWith",b].concat(gb.call(c),[a.combineAsArray(c).map(function(a){return b.apply(null,a)})]))},a.combineTemplate=function(b){var c,d,e,f,g,h,i,j,k,l;return i=[],l=[],h=function(a){return a[a.length-1]},k=function(a,b,c){return h(a)[b]=c},c=function(a,b){return function(c,d){return k(c,a,d[b])}},g=function(a,b){return function(c){return k(c,a,b)}},j=function(a){return F(a)?[]:{}},e=function(a,b){var d,e;return I(b)?(l.push(b),i.push(c(a,l.length-1))):b===Object(b)&&"function"!=typeof b?(e=function(a){return function(c){var d;return d=j(b),k(c,a,d),c.push(d)}},d=function(a){return a.pop()},i.push(e(a)),f(b),i.push(d)):i.push(g(a,b))},f=function(a){return cb.each(a,e)},f(b),d=function(a){var c,d,e,f,g;for(e=j(b),c=[e],f=0,g=i.length;g>f;f++)d=i[f],d(c,a);return e},ab(a,"combineTemplate",b,a.combineAsArray(l).map(d))},A=0,i=function(){function a(){this.id=++A}return a.prototype.isEvent=function(){return!0},a.prototype.isEnd=function(){return!1},a.prototype.isInitial=function(){return!1},a.prototype.isNext=function(){return!1},a.prototype.isError=function(){return!1},a.prototype.hasValue=function(){return!1},a.prototype.filter=function(){return!0},a.prototype.inspect=function(){return this.toString()},a}(),l=function(a){function b(a){b.__super__.constructor.call(this),this.value=H(a)?cb.cached(a):cb.always(a)}return ib(b,a),b.prototype.isNext=function(){return!0},b.prototype.hasValue=function(){return!0},b.prototype.fmap=function(a){var b=this;return this.apply(function(){return a(b.value())})},b.prototype.apply=function(a){return new b(a)},b.prototype.filter=function(a){return a(this.value())},b.prototype.toString=function(){return cb.toString(this.value())},b}(i),k=function(a){function b(){return eb=b.__super__.constructor.apply(this,arguments)}return ib(b,a),b.prototype.isInitial=function(){return!0},b.prototype.isNext=function(){return!1},b.prototype.apply=function(a){return new b(a)},b.prototype.toNext=function(){return new l(this.value)},b}(l),g=function(a){function b(){return fb=b.__super__.constructor.apply(this,arguments)}return ib(b,a),b.prototype.isEnd=function(){return!0},b.prototype.fmap=function(){return this},b.prototype.apply=function(){return this},b.prototype.toString=function(){return"<end>"},b}(i),h=function(a){function b(a){this.error=a}return ib(b,a),b.prototype.isError=function(){return!0},b.prototype.fmap=function(){return this},b.prototype.apply=function(){return this},b.prototype.toString=function(){return"<error> "+cb.toString(this.error)},b}(i),D=0,n=function(){function b(a){this.combine=jb(this.combine,this),this.flatMapLatest=jb(this.flatMapLatest,this),this.fold=jb(this.fold,this),this.scan=jb(this.scan,this),this.id=++D,this.assign=this.onValue,ab(a,this)}return b.prototype.onValue=function(){var a;return a=M(arguments),this.subscribe(function(b){return b.hasValue()?a(b.value()):void 0})},b.prototype.onValues=function(a){return this.onValue(function(b){return a.apply(null,b)})},b.prototype.onError=function(){var a;return a=M(arguments),this.subscribe(function(b){return b.isError()?a(b.error):void 0})},b.prototype.onEnd=function(){var a;return a=M(arguments),this.subscribe(function(b){return b.isEnd()?a():void 0})},b.prototype.errors=function(){return ab(this,"errors",this.filter(function(){return!1}))},b.prototype.filter=function(){var b,c;return c=arguments[0],b=2<=arguments.length?gb.call(arguments,1):[],x(this,c,b,function(b){return ab(this,"filter",b,this.withHandler(function(c){return c.filter(b)?this.push(c):a.more}))})},b.prototype.takeWhile=function(){var b,c;return c=arguments[0],b=2<=arguments.length?gb.call(arguments,1):[],x(this,c,b,function(b){return ab(this,"takeWhile",b,this.withHandler(function(c){return c.filter(b)?this.push(c):(this.push(z()),a.noMore)}))})},b.prototype.endOnError=function(){var a,b;return b=arguments[0],a=2<=arguments.length?gb.call(arguments,1):[],null==b&&(b=!0),x(this,b,a,function(a){return ab(this,"endOnError",this.withHandler(function(b){return b.isError()&&a(b.error)?(this.push(b),this.push(z())):this.push(b)}))})},b.prototype.take=function(b){return 0>=b?a.never():ab(this,"take",b,this.withHandler(function(c){return c.hasValue()?(b--,b>0?this.push(c):(0===b&&this.push(c),this.push(z()),a.noMore)):this.push(c)}))},b.prototype.map=function(){var a,b;return b=arguments[0],a=2<=arguments.length?gb.call(arguments,1):[],b instanceof o?b.sampledBy(this,C):x(this,b,a,function(a){return ab(this,"map",a,this.withHandler(function(b){return this.push(b.fmap(a))}))})},b.prototype.mapError=function(){var a;return a=M(arguments),ab(this,"mapError",a,this.withHandler(function(b){return b.isError()?this.push(Q(a(b.error))):this.push(b)}))},b.prototype.mapEnd=function(){var b;return b=M(arguments),ab(this,"mapEnd",b,this.withHandler(function(c){return c.isEnd()?(this.push(Q(b(c))),this.push(z()),a.noMore):this.push(c)}))},b.prototype.doAction=function(){var a;return a=M(arguments),ab(this,"doAction",a,this.withHandler(function(b){return b.hasValue()&&a(b.value()),this.push(b)}))},b.prototype.skip=function(b){return ab(this,"skip",b,this.withHandler(function(c){return c.hasValue()?b>0?(b--,a.more):this.push(c):this.push(c)}))},b.prototype.skipDuplicates=function(a){return null==a&&(a=function(a,b){return a===b}),ab(this,"skipDuplicates",this.withStateMachine(m,function(b,c){return c.hasValue()?c.isInitial()||b===m||!a(b.get(),c.value())?[new q(c.value()),[c]]:[b,[]]:[b,[c]]}))},b.prototype.skipErrors=function(){return ab(this,"skipErrors",this.withHandler(function(b){return b.isError()?a.more:this.push(b)}))},b.prototype.withStateMachine=function(b,c){var d;return d=b,ab(this,"withStateMachine",b,c,this.withHandler(function(b){var e,f,g,h,i,j,k;for(e=c(d,b),f=e[0],h=e[1],d=f,i=a.more,j=0,k=h.length;k>j;j++)if(g=h[j],i=this.push(g),i===a.noMore)return i;return i}))},b.prototype.scan=function(b,c,d){var e,f,g,h,i,j=this;return f=W(c),c=d?f:function(a,b){return f(a(),b())},e=$(b).map(function(a){return cb.always(a)}),h=this,i=function(b){var d,f,h,i;return d=!1,i=R,f=a.more,h=function(){return d?void 0:e.forEach(function(c){return d=!0,f=b(new k(c)),f===a.noMore?(i(),i=R):void 0})},i=j.subscribe(function(g){var i,j;return g.hasValue()?d&&g.isInitial()?a.more:(g.isInitial()||h(),d=!0,j=e.getOrElse(function(){return void 0}),i=cb.cached(function(){return c(j,g.value)}),e=new q(i),b(g.apply(i))):(g.isEnd()&&(f=h()),f!==a.noMore?b(g):void 0)}),s.whenDone(g,h),i},g=new o(y(this,"scan",b,c),i)},b.prototype.fold=function(a,b){return ab(this,"fold",a,b,this.scan(a,b).sampledBy(this.filter(!1).mapEnd().toProperty()))},b.prototype.zip=function(b,c){return null==c&&(c=Array),ab(this,"zip",b,a.zipWith([this,b],c))},b.prototype.diff=function(a,b){return b=W(b),ab(this,"diff",a,b,this.scan([a],function(a,c){return[c,b(a[0],c)]}).filter(function(a){return 2===a.length}).map(function(a){return a[1]}))},b.prototype.flatMap=function(){return B(this,P(arguments))},b.prototype.flatMapFirst=function(){return B(this,P(arguments),!0)},b.prototype.flatMapLatest=function(){var a,b;return a=P(arguments),b=this.toEventStream(),ab(this,"flatMapLatest",a,b.flatMap(function(c){return O(a(c)).takeUntil(b)}))},b.prototype.not=function(){return ab(this,"not",this.map(function(a){return!a}))},b.prototype.log=function(){var a;return a=1<=arguments.length?gb.call(arguments,0):[],this.subscribe(function(b){return"undefined"!=typeof console&&null!==console?"function"==typeof console.log?console.log.apply(console,gb.call(a).concat([b.toString()])):void 0:void 0}),this},b.prototype.slidingWindow=function(a,b){return null==b&&(b=0),ab(this,"slidingWindow",a,b,this.scan([],function(b,c){return b.concat([c]).slice(-a)}).filter(function(a){return a.length>=b}))},b.prototype.combine=function(b,c){var d;return d=W(c),ab(this,"combine",b,c,a.combineAsArray(this,b).map(function(a){return d(a[0],a[1])}))},b.prototype.decode=function(b){return ab(this,"decode",b,this.combine(a.combineTemplate(b),function(a,b){return b[a]}))},b.prototype.awaiting=function(b){return ab(this,"awaiting",b,a.groupSimultaneous(this,b).map(function(a){var b,c;return b=a[0],c=a[1],0===c.length}).toProperty(!1).skipDuplicates())},b.prototype.name=function(a){return this.toString=function(){return a},this},b}(),n.prototype.reduce=n.prototype.fold,B=function(b,c,e){return new j(y(b,"flatMap"+(e?"First":""),c),function(f){var g,h;return h=new d,g=function(a){return a(),h.empty()?f(z()):void 0},h.add(function(d,i){return b.subscribe(function(b){var d;return b.isEnd()?g(i):b.isError()?f(b):e&&h.count()>1?a.more:h.unsubscribed?a.noMore:(d=O(c(b.value())),h.add(function(b,c){return d.subscribe(function(d){var e;return d.isEnd()?(g(c),a.noMore):(d instanceof k&&(d=d.toNext()),e=f(d),e===a.noMore&&b(),e)})}))})}),h.unsubscribe})},j=function(b){function c(a,b){this.takeUntil=jb(this.takeUntil,this),this.sampledBy=jb(this.sampledBy,this);var d;H(a)&&(b=a,a=[]),c.__super__.constructor.call(this,a),d=new f(b),this.subscribe=d.subscribe,this.subscribeInternal=this.subscribe,this.hasSubscribers=d.hasSubscribers,U(this)}return ib(c,b),c.prototype.delay=function(b){return ab(this,"delay",b,this.flatMap(function(c){return a.later(b,c)}))},c.prototype.debounce=function(b){return ab(this,"debounce",b,this.flatMapLatest(function(c){return a.later(b,c)}))},c.prototype.debounceImmediate=function(b){return ab(this,"debounceImmediate",b,this.flatMapFirst(function(c){return a.once(c).concat(a.later(b).filter(!1))}))},c.prototype.throttle=function(a){return ab(this,"throttle",a,this.bufferWithTime(a).map(function(a){return a[a.length-1]}))},c.prototype.bufferWithTime=function(a){return ab(this,"bufferWithTime",a,this.bufferWithTimeOrCount(a,Number.MAX_VALUE))},c.prototype.bufferWithCount=function(a){return ab(this,"bufferWithCount",a,this.bufferWithTimeOrCount(void 0,a))},c.prototype.bufferWithTimeOrCount=function(a,b){var c;return c=function(c){return c.values.length===b?c.flush():void 0!==a?c.schedule():void 0},ab(this,"bufferWithTimeOrCount",a,b,this.buffer(a,c,c))},c.prototype.buffer=function(b,c,d){var e,f,g;return null==c&&(c=function(){}),null==d&&(d=function(){}),e={scheduled:!1,end:null,values:[],flush:function(){var b;if(this.scheduled=!1,this.values.length>0){if(b=this.push(Q(this.values)),this.values=[],null!=this.end)return this.push(this.end);if(b!==a.noMore)return d(this)}else if(null!=this.end)return this.push(this.end)},schedule:function(){var a=this;return this.scheduled?void 0:(this.scheduled=!0,b(function(){return a.flush()}))}},g=a.more,H(b)||(f=b,b=function(b){return a.scheduler.setTimeout(b,f)}),ab(this,"buffer",this.withHandler(function(a){return e.push=this.push,a.isError()?g=this.push(a):a.isEnd()?(e.end=a,e.scheduled||e.flush()):(e.values.push(a.value()),c(e)),g}))},c.prototype.merge=function(b){var d;return d=this,new c(y(d,"merge",b),function(c){var e,f;return e=0,f=function(b){return function(d){return b.subscribe(function(b){var f;return b.isEnd()?(e++,2===e?c(z()):a.more):(f=c(b),f===a.noMore&&d(),f)})}},v(f(d),f(b))})},c.prototype.toProperty=function(a){return 0===arguments.length&&(a=m),ab(this,"toProperty",a,this.scan(a,J,!0))},c.prototype.toEventStream=function(){return this},c.prototype.sampledBy=function(a,b){return ab(this,"sampledBy",a,b,this.toProperty().sampledBy(a,b))},c.prototype.concat=function(a){var b;return b=this,new c(y(b,"concat",a),function(c){var d,e;return e=R,d=b.subscribe(function(b){return b.isEnd()?e=a.subscribe(c):c(b)}),function(){return d(),e()}})},c.prototype.takeUntil=function(b){var c;return c={},ab(this,"takeUntil",b,a.groupSimultaneous(this.mapEnd(c),b.skipErrors()).withHandler(function(d){var e,f,g,h,i,j;if(d.hasValue()){if(j=d.value(),e=j[0],b=j[1],b.length)return this.push(z());for(f=a.more,h=0,i=e.length;i>h;h++)g=e[h],f=g===c?this.push(z()):this.push(Q(g));return f}return this.push(d)}))},c.prototype.skipUntil=function(a){var b;return b=a.take(1).map(!0).toProperty(!1),ab(this,"skipUntil",a,this.filter(b))},c.prototype.skipWhile=function(){var b,c,d;return c=arguments[0],b=2<=arguments.length?gb.call(arguments,1):[],d=!1,x(this,c,b,function(b){return ab(this,"skipWhile",b,this.withHandler(function(c){return!d&&c.hasValue()&&b(c.value())?a.more:(c.hasValue()&&(d=!0),this.push(c))}))})},c.prototype.startWith=function(b){return ab(this,"startWith",b,a.once(b).concat(this))},c.prototype.withHandler=function(a){var b;return b=new f(this.subscribe,a),new c(y(this,"withHandler",a),b.subscribe)},c}(n),o=function(b){function c(b,d,e){this.toEventStream=jb(this.toEventStream,this),this.toProperty=jb(this.toProperty,this),this.changes=jb(this.changes,this),this.sample=jb(this.sample,this);var f=this;H(b)&&(e=d,d=b,b=[]),c.__super__.constructor.call(this,b),this.subscribeInternal=e===!0?d:new p(this,d,e).subscribe,this.sampledBy=function(b,d){var e,g,h,i,j;return null!=d?d=W(d):(e=!0,d=function(a){return a()}),j=new r(f,!1,!1,f.subscribeInternal,e),h=new r(b,!0,!1,b.subscribe,e),i=a.when([j,h],d),g=b instanceof c?i.toProperty():i,ab(f,"sampledBy",b,d,g)},this.subscribe=this.subscribeInternal,U(this)}return ib(c,b),c.prototype.sample=function(b){return ab(this,"sample",b,this.sampledBy(a.interval(b,{})))},c.prototype.changes=function(){var a=this;return new j(y(this,"changes"),function(b){return a.subscribe(function(a){return a.isInitial()?void 0:b(a)})})},c.prototype.withHandler=function(a){return new c(y(this,"withHandler",a),this.subscribeInternal,a)},c.prototype.toProperty=function(){return this},c.prototype.toEventStream=function(){var a=this;return new j(y(this,"toEventStream"),function(b){return a.subscribe(function(a){return a.isInitial()&&(a=a.toNext()),b(a)})})},c.prototype.and=function(a){return ab(this,"and",a,this.combine(a,function(a,b){return a&&b}))},c.prototype.or=function(a){return ab(this,"or",a,this.combine(a,function(a,b){return a||b}))},c.prototype.delay=function(a){return this.delayChanges("delay",a,function(b){return b.delay(a)})},c.prototype.debounce=function(a){return this.delayChanges("debounce",a,function(b){return b.debounce(a)})},c.prototype.throttle=function(a){return this.delayChanges("throttle",a,function(b){return b.throttle(a)})},c.prototype.delayChanges=function(){var a,b,c;return a=2<=arguments.length?gb.call(arguments,0,c=arguments.length-1):(c=0,[]),b=arguments[c++],ab.apply(null,[this].concat(gb.call(a),[t(this,b(this.changes()))]))},c.prototype.takeUntil=function(a){var b;return b=this.changes().takeUntil(a),ab(this,"takeUntil",a,t(this,b))},c.prototype.startWith=function(a){return ab(this,"startWith",a,this.scan(a,function(a,b){return b}))},c}(n),x=function(a,b,c,d){var e;return b instanceof o?(e=b.sampledBy(a,function(a,b){return[a,b]}),d.apply(e,[function(a){var b,c;return b=a[0],c=a[1],b}]).map(function(a){var b,c;return b=a[0],c=a[1]})):(b=L(b,c),d.apply(a,[b]))},t=function(b,c){var d;return d=new j(y(b,"justInitValue"),function(c){var e,f;return f=null,e=b.subscribe(function(b){return b.hasValue()&&(f=b),a.noMore}),s.whenDone(d,function(){return null!=f&&c(f),c(z())}),e}),d.concat(c).toProperty()},f=function(){function b(b,c){var d,e,f,g,h,i,j,k,l,m,n=this;null==b&&(b=function(){return R}),k=[],i=null,h=!1,e=!1,this.hasSubscribers=function(){return k.length>0},f=null,l=R,j=function(a){return k=cb.without(a,k)},m=null,d=function(){var a,b,c,d,e;if(null!=m){for(b=m,m=null,e=[],c=0,d=b.length;d>c;c++)a=b[c],e.push(a());return e}},g=function(b){var c,e,g,l,m,n;if(h)return i=(i||[]).concat([b]),a.more;if(b!==f){b.isError()&&(f=b),g=!1;try{for(h=!0,l=k,m=0,n=l.length;n>m;m++)e=l[m],c=e.sink(b),(c===a.noMore||b.isEnd())&&j(e);g=!0}finally{h=!1,g||(i=null)}for(g=!0;null!=i?i.length:void 0;)b=cb.head(i),i=cb.tail(i),this.push(b);return d(b),this.hasSubscribers()?a.more:a.noMore}},this.push=function(a){return s.inTransaction(a,n,g,[a])},null==c&&(c=function(a){return this.push(a)}),this.handleEvent=function(a){return a.isEnd()&&(e=!0),c.apply(n,[a])},this.subscribe=function(a){var c;return e?(a(z()),R):(c={sink:a},k=k.concat(c),1===k.length&&(l=b(n.handleEvent)),function(){return j(c),n.hasSubscribers()?void 0:l()})}}return b}(),p=function(b){function c(b,d,e){var f,g,h,i,j=this;c.__super__.constructor.call(this,d,e),f=m,g=void 0,i=this.push,d=this.subscribe,h=!1,this.push=function(a){return a.isEnd()&&(h=!0),a.hasValue()&&(f=new q(a),g=s.currentEventId()),i.apply(j,[a])},this.subscribe=function(c){var e,i,k,l,m;return i=!1,l=a.more,k=function(){return l===a.noMore?R:h?(c(z()),R):d.apply(this,[c])},f.isDefined&&(j.hasSubscribers()||h)?(e=s.currentEventId(),m=g,!h&&m&&e&&e!==m?(s.whenDone(b,function(){return g===m?c(E(f.get().value())):void 0}),k()):(s.inTransaction(void 0,j,function(){return l=c(E(f.get().value()))},[]),k())):k()}}return ib(c,b),c}(f),c=function(b){function c(){var b,d,e,f,g,i,j,k;e=void 0,i=[],b=!1,d=function(b){return function(c){return c.isEnd()?(k(b),a.noMore):e(c)}},j=function(){var a,b,c,d;for(d=[],b=0,c=i.length;c>b;b++)a=i[b],d.push("function"==typeof a.unsub?a.unsub():void 0);return d},g=function(a){return a.unsub=a.input.subscribe(d(a.input))},k=function(a){var b,c,d,e;for(b=d=0,e=i.length;e>d;b=++d)if(c=i[b],c.input===a)return"function"==typeof c.unsub&&c.unsub(),i.splice(b,1),void 0},f=function(a){var b,c,d,f;for(e=a,f=u(i),c=0,d=f.length;d>c;c++)b=f[c],g(b);return j},c.__super__.constructor.call(this,y(a,"Bus"),f),this.plug=function(a){var c;if(!b)return c={input:a},i.push(c),null!=e&&g(c),function(){return k(a)}},this.push=function(a){return"function"==typeof e?e(Q(a)):void 0},this.error=function(a){return"function"==typeof e?e(new h(a)):void 0},this.end=function(){return b=!0,j(),"function"==typeof e?e(z()):void 0}}return ib(c,b),c}(j),r=function(){function a(a,b,c,d,e,f){var g;this.obs=a,this.sync=b,this.subscribe=d,null==e&&(e=!1),null==f&&(f=[]),g=e?cb.id:function(a){return a()},null==this.subscribe&&(this.subscribe=a.subscribe),this.markEnded=function(){return this.ended=!0},this.toString=this.obs.toString,c?(this.consume=function(){return g(f.shift())},this.push=function(a){return f.push(a)},this.mayHave=function(a){return!this.ended||f.length>=a},this.hasAtLeast=function(a){return f.length>=a},this.flatten=!1):(this.consume=function(){return g(f[0])},this.push=function(a){return f=[a]},this.mayHave=function(){return!0},this.hasAtLeast=function(){return f.length},this.flatten=!0)}return a}(),b=function(a){function b(a){var c;this.obs=a,c=[],b.__super__.constructor.call(this,this.obs,!0,!1,this.obs.subscribe,!1,c),this.consume=function(){var a;return a=c,c=[],a},this.push=function(a){return c.push(a())},this.hasAtLeast=function(){return!0}}return ib(b,a),b}(r),r.fromObservable=function(a){return a instanceof r?a:a instanceof o?new r(a,!1,!1):new r(a,!0,!0)},y=function(){var a,b,c;return b=arguments[0],c=arguments[1],a=3<=arguments.length?gb.call(arguments,2):[],(b||c)instanceof e?b||c:new e(b,c,a)},e=function(){function a(a,b,c){var d,e,f,g;f=function(a){return F(a)?cb.flatMap(f,a):I(a)?[a]:a instanceof r?[a.obs]:[]},g=null,d=function(a){var b,c,e,f,h;for(c=a.internalDeps(),h=[],e=0,f=c.length;f>e;e++)b=c[e],g[b.id]=!0,h.push(d(b));return h},e=function(a){return null==g&&(g={},d(this)),g[a.id]},this.apply=function(d){var g;return g=cb.cached(function(){return f([a].concat(c))}),d.internalDeps=d.internalDeps||g,d.dependsOn=e,d.deps=g,d.toString=function(){return cb.toString(a)+"."+cb.toString(b)+"("+cb.map(cb.toString,c)+")"},d.inspect=function(){return d.toString()},d.desc=function(){return{context:a,method:b,args:c}},d}}return a}(),ab=function(){var a,b,c;return a=2<=arguments.length?gb.call(arguments,0,c=arguments.length-1):(c=0,[]),b=arguments[c++],y.apply(null,a).apply(b)},a.when=function(){var b,c,d,e,f,g,h,i,k,l,m,n,o,p,q,t,u,x,A;if(l=1<=arguments.length?gb.call(arguments,0):[],0===l.length)return a.never();for(f=l.length,p="when: expecting arguments in the form (Observable+,function)+",o=[],k=[],c=0;f>c;){for(i=cb.toArray(l[c]),b=l[c+1],h={f:H(b)?b:function(){return b},ixs:[]},q=0,u=i.length;u>q;q++){for(n=i[q],d=cb.indexOf(o,n),0>d&&(o.push(n),d=o.length-1),A=h.ixs,t=0,x=A.length;x>t;t++)e=A[t],e.index===d&&e.count++;h.ixs.push({index:d,count:1})}i.length>0&&k.push(h),c+=2}return o.length?(o=cb.map(r.fromObservable,o),g=cb.any(o,function(a){return a.flatten})&&w(cb.map(function(a){return a.obs},o)),m=new j(y.apply(null,[a,"when"].concat(gb.call(l))),function(b){var d,e,f,h,i,j,l;return l=[],f=!1,h=function(a){var b,d,e;for(e=a.ixs,b=0,d=e.length;d>b;b++)if(c=e[b],!o[c.index].hasAtLeast(c.count))return!1;return!0},e=function(a){return!a.sync||a.ended},d=function(a){var b,d,e;for(e=a.ixs,b=0,d=e.length;d>b;b++)if(c=e[b],!o[c.index].mayHave(c.count))return!0},i=function(a){return!a.source.flatten},j=function(j){return function(n){var p,q,r;return q=function(){return s.whenDone(m,p)},r=function(){var d,e,f,j,m,n;if(!(l.length>0))return a.more;for(e=a.more,f=l.pop(),m=0,n=k.length;n>m;m++)if(d=k[m],h(d))return j=function(){return d.f.apply(d,function(){var a,b,e,f;for(e=d.ixs,f=[],a=0,b=e.length;b>a;a++)c=e[a],f.push(o[c.index].consume());return f}())},e=b(f.e.apply(j)),l.length&&g&&(l=cb.filter(i,l)),e===a.noMore?e:r()},p=function(){var c;return c=r(),f&&(f=!1,(cb.all(o,e)||cb.all(k,d))&&(c=a.noMore,b(z()))),c===a.noMore&&n(),c},j.subscribe(function(c){var d;return c.isEnd()?(f=!0,j.markEnded(),q()):c.isError()?d=b(c):(j.push(c.value),j.sync&&(l.push({source:j,e:c}),g?q():p())),d===a.noMore&&n(),d||a.more})}},v.apply(null,function(){var a,b,c;for(c=[],a=0,b=o.length;b>a;a++)n=o[a],c.push(j(n));return c}())})):a.never()},w=function(b,c){var d;return null==c&&(c=[]),d=function(b){var e;return a._.contains(c,b)?!0:(e=b.internalDeps(),e.length?(c.push(b),a._.any(e,d)):(c.push(b),!1))},a._.any(b,d)},a.update=function(){var b,c,d,e;for(c=arguments[0],e=2<=arguments.length?gb.call(arguments,1):[],d=function(a){return function(){var b;return b=1<=arguments.length?gb.call(arguments,0):[],function(c){return a.apply(null,[c].concat(b))}}},b=e.length-1;b>0;)e[b]instanceof Function||(e[b]=function(a){return function(){return a}}(e[b])),e[b]=d(e[b]),b-=2;return ab.apply(null,[a,"update",c].concat(gb.call(e),[a.when.apply(a,e).scan(c,function(a,b){return b(a)})]))},v=function(){var a;return a=1<=arguments.length?gb.call(arguments,0):[],new d(a).unsubscribe},d=function(){function a(a){var b,c,d;for(null==a&&(a=[]),this.empty=jb(this.empty,this),this.count=jb(this.count,this),this.unsubscribe=jb(this.unsubscribe,this),this.add=jb(this.add,this),this.unsubscribed=!1,this.subscriptions=[],this.starting=[],c=0,d=a.length;d>c;c++)b=a[c],this.add(b)}return a.prototype.add=function(a){var b,c,d,e=this;if(!this.unsubscribed)return b=!1,c=R,this.starting.push(a),d=function(){return e.unsubscribed?void 0:(b=!0,e.remove(c),cb.remove(a,e.starting))},c=a(this.unsubscribe,d),this.unsubscribed||b||this.subscriptions.push(c),cb.remove(a,this.starting),c},a.prototype.remove=function(a){return this.unsubscribed?void 0:void 0!==cb.remove(a,this.subscriptions)?a():void 0},a.prototype.unsubscribe=function(){var a,b,c,d;if(!this.unsubscribed){for(this.unsubscribed=!0,d=this.subscriptions,b=0,c=d.length;c>b;b++)a=d[b],a();return this.subscriptions=[],this.starting=[]}},a.prototype.count=function(){return this.unsubscribed?0:this.subscriptions.length+this.starting.length},a.prototype.empty=function(){return 0===this.count()},a}(),a.CompositeUnsubscribe=d,q=function(){function a(a){this.value=a}return a.prototype.getOrElse=function(){return this.value},a.prototype.get=function(){return this.value},a.prototype.filter=function(b){return b(this.value)?new a(this.value):m},a.prototype.map=function(b){return new a(b(this.value))},a.prototype.forEach=function(a){return a(this.value)},a.prototype.isDefined=!0,a.prototype.toArray=function(){return[this.value]},a.prototype.inspect=function(){return"Some("+this.value+")"},a.prototype.toString=function(){return this.inspect()},a}(),m={getOrElse:function(a){return a},filter:function(){return m},map:function(){return m},forEach:function(){},isDefined:!1,toArray:function(){return[]},inspect:function(){return"None"},toString:function(){return this.inspect()}},s=function(){var a,b,c,d,e,f,g,h;return f=void 0,g=[],e=function(a){return!cb.any(g,function(b){return a.obs.dependsOn(b.obs)})},h=function(a,b){return f?g.push({obs:a,f:b}):b()},b=function(){for(;!e(g[0]);)g.push(g.splice(0,1)[0]);return g.splice(0,1)[0]},c=function(){return g.length?(b().f(),c()):void 0},d=function(a,b,d,e){var g;if(f)return d.apply(b,e);f=a;try{g=d.apply(b,e),c()}finally{f=void 0}return g},a=function(){return f?f.id:void 0},{whenDone:h,inTransaction:d,currentEventId:a}}(),a.EventStream=j,a.Property=o,a.Observable=n,a.Bus=c,a.Initial=k,a.Next=l,a.End=g,a.Error=h,R=function(){},J=function(a,b){return b()},C=function(a){return a},E=function(a){return new k(cb.always(a))},Q=function(a){return new l(cb.always(a))},z=function(){return new g},X=function(a){return a instanceof i?a:Q(a)},u=function(a){return a.slice(0)},H=function(a){return"function"==typeof a},F=function(a){return a instanceof Array},I=function(a){return a instanceof n},S=function(a,b){return function(){var c;return c=1<=arguments.length?gb.call(arguments,0):[],a.apply(null,b.concat(c))}},P=function(a){return 1===a.length&&I(a[0])?cb.always(a[0]):M(a)},M=function(a){return a=Array.prototype.slice.call(a),N.apply(null,a)},N=bb(function(){var a,b;return b=arguments[0],a=2<=arguments.length?gb.call(arguments,1):[],H(b)?a.length?S(b,a):b:G(b)?Y(b,a):cb.always(b)}),L=function(a,b){return N.apply(null,[a].concat(gb.call(b)))},O=function(b){return I(b)?b:a.once(b)},G=function(a){return"string"==typeof a&&a.length>1&&"."===a.charAt(0)},a.isFieldKey=G,Y=function(a,b){var c,d;return d=a.slice(1).split("."),c=cb.map(_(b),d),function(b){var d,e;for(d=0,e=c.length;e>d;d++)a=c[d],b=a(b);return b}},_=function(a){return function(b){return function(c){var d;return null==c?void 0:(d=c[b],H(d)?d.apply(c,a):d)}}},Z=function(a){return a.slice(1)},W=function(a){var b;return H(a)?a:G(a)?(b=Z(a),function(a,c){return a[b](c)}):void 0},$=function(a){return a instanceof q||a===m?a:new q(a)},cb={indexOf:Array.prototype.indexOf?function(a,b){return a.indexOf(b)}:function(a,b){var c,d,e,f;
for(c=e=0,f=a.length;f>e;c=++e)if(d=a[c],b===d)return c;return-1},indexWhere:function(a,b){var c,d,e,f;for(c=e=0,f=a.length;f>e;c=++e)if(d=a[c],b(d))return c;return-1},head:function(a){return a[0]},always:function(a){return function(){return a}},negate:function(a){return function(b){return!a(b)}},empty:function(a){return 0===a.length},tail:function(a){return a.slice(1,a.length)},filter:function(a,b){var c,d,e,f;for(c=[],e=0,f=b.length;f>e;e++)d=b[e],a(d)&&c.push(d);return c},map:function(a,b){var c,d,e,f;for(f=[],d=0,e=b.length;e>d;d++)c=b[d],f.push(a(c));return f},each:function(a,b){var c,d,e;e=[];for(c in a)d=a[c],e.push(b(c,d));return e},toArray:function(a){return F(a)?a:[a]},contains:function(a,b){return-1!==cb.indexOf(a,b)},id:function(a){return a},last:function(a){return a[a.length-1]},all:function(a,b){var c,d,e;for(null==b&&(b=cb.id),d=0,e=a.length;e>d;d++)if(c=a[d],!b(c))return!1;return!0},any:function(a,b){var c,d,e;for(null==b&&(b=cb.id),d=0,e=a.length;e>d;d++)if(c=a[d],b(c))return!0;return!1},without:function(a,b){return cb.filter(function(b){return b!==a},b)},remove:function(a,b){var c;return c=cb.indexOf(b,a),c>=0?b.splice(c,1):void 0},fold:function(a,b,c){var d,e,f;for(e=0,f=a.length;f>e;e++)d=a[e],b=c(b,d);return b},flatMap:function(a,b){return cb.fold(b,[],function(b,c){return b.concat(a(c))})},cached:function(a){var b;return b=m,function(){return b===m&&(b=a(),a=null),b}},toString:function(a){var b,c,d,e;try{return T++,null==a?"undefined":H(a)?"function":F(a)?T>5?"[..]":"["+cb.map(cb.toString,a).toString()+"]":null!=(null!=a?a.toString:void 0)&&a.toString!==Object.prototype.toString?a.toString():"object"==typeof a?T>5?"{..}":(c=function(){var c;c=[];for(d in a)hb.call(a,d)&&(e=function(){try{return a[d]}catch(c){return b=c}}(),c.push(cb.toString(d)+":"+cb.toString(e)));return c}(),"{"+c+"}"):a}finally{T--}}},T=0,a._=cb,a.scheduler={setTimeout:function(a,b){return setTimeout(a,b)},setInterval:function(a,b){return setInterval(a,b)},clearInterval:function(a){return clearInterval(a)},now:function(){return(new Date).getTime()}},"undefined"!=typeof module&&null!==module?(module.exports=a,a.Bacon=a):("undefined"!=typeof define&&null!==define&&null!=define.amd&&define([],function(){return a}),this.Bacon=a)}.call(this);
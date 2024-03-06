"use strict";(self.webpackChunksikka_admin_app=self.webpackChunksikka_admin_app||[]).push([[917],{2917:function(e,t,r){r.d(t,{a:function(){return A}});var n=r(3734),s=r(1413),i=r(5987),u=r(5671),a=r(3144),o=r(136),c=r(9388),l=r(9538),h=r(1771),d=r(5511),f=r(3075),p=["refetchPage"],v=function(e){(0,o.Z)(r,e);var t=(0,c.Z)(r);function r(e,n){var s;return(0,u.Z)(this,r),(s=t.call(this)).client=e,s.options=n,s.trackedProps=new Set,s.selectError=null,s.bindMethods(),s.setOptions(n),s}return(0,a.Z)(r,[{key:"bindMethods",value:function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)}},{key:"onSubscribe",value:function(){1===this.listeners.size&&(this.currentQuery.addObserver(this),y(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())}},{key:"onUnsubscribe",value:function(){this.hasListeners()||this.destroy()}},{key:"shouldFetchOnReconnect",value:function(){return R(this.currentQuery,this.options,this.options.refetchOnReconnect)}},{key:"shouldFetchOnWindowFocus",value:function(){return R(this.currentQuery,this.options,this.options.refetchOnWindowFocus)}},{key:"destroy",value:function(){this.listeners=new Set,this.clearStaleTimeout(),this.clearRefetchInterval(),this.currentQuery.removeObserver(this)}},{key:"setOptions",value:function(e,t){var r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryOptions(e),(0,n.VS)(r,this.options)||this.client.getQueryCache().notify({type:"observerOptionsUpdated",query:this.currentQuery,observer:this}),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var i=this.hasListeners();i&&k(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),!i||this.currentQuery===s&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout();var u=this.computeRefetchInterval();!i||this.currentQuery===s&&this.options.enabled===r.enabled&&u===this.currentRefetchInterval||this.updateRefetchInterval(u)}},{key:"getOptimisticResult",value:function(e){var t=this.client.getQueryCache().build(this.client,e),r=this.createResult(t,e);return function(e,t,r){if(r.keepPreviousData)return!1;if(void 0!==r.placeholderData)return t.isPlaceholderData;if(!(0,n.VS)(e.getCurrentResult(),t))return!0;return!1}(this,r,e)&&(this.currentResult=r,this.currentResultOptions=this.options,this.currentResultState=this.currentQuery.state),r}},{key:"getCurrentResult",value:function(){return this.currentResult}},{key:"trackResult",value:function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){return t.trackedProps.add(n),e[n]}})})),r}},{key:"getCurrentQuery",value:function(){return this.currentQuery}},{key:"remove",value:function(){this.client.getQueryCache().remove(this.currentQuery)}},{key:"refetch",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.refetchPage,r=(0,i.Z)(e,p);return this.fetch((0,s.Z)((0,s.Z)({},r),{},{meta:{refetchPage:t}}))}},{key:"fetchOptimistic",value:function(e){var t=this,r=this.client.defaultQueryOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.isFetchingOptimistic=!0,n.fetch().then((function(){return t.createResult(n,r)}))}},{key:"fetch",value:function(e){var t,r=this;return this.executeFetch((0,s.Z)((0,s.Z)({},e),{},{cancelRefetch:null==(t=e.cancelRefetch)||t})).then((function(){return r.updateResult(),r.currentResult}))}},{key:"executeFetch",value:function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return null!=e&&e.throwOnError||(t=t.catch(n.ZT)),t}},{key:"updateStaleTimeout",value:function(){var e=this;if(this.clearStaleTimeout(),!n.sk&&!this.currentResult.isStale&&(0,n.PN)(this.options.staleTime)){var t=(0,n.Kp)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}}},{key:"computeRefetchInterval",value:function(){var e;return"function"===typeof this.options.refetchInterval?this.options.refetchInterval(this.currentResult.data,this.currentQuery):null!=(e=this.options.refetchInterval)&&e}},{key:"updateRefetchInterval",value:function(e){var t=this;this.clearRefetchInterval(),this.currentRefetchInterval=e,!n.sk&&!1!==this.options.enabled&&(0,n.PN)(this.currentRefetchInterval)&&0!==this.currentRefetchInterval&&(this.refetchIntervalId=setInterval((function(){(t.options.refetchIntervalInBackground||h.j.isFocused())&&t.executeFetch()}),this.currentRefetchInterval))}},{key:"updateTimers",value:function(){this.updateStaleTimeout(),this.updateRefetchInterval(this.computeRefetchInterval())}},{key:"clearStaleTimeout",value:function(){this.staleTimeoutId&&(clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0)}},{key:"clearRefetchInterval",value:function(){this.refetchIntervalId&&(clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0)}},{key:"createResult",value:function(e,t){var r,s=this.currentQuery,i=this.options,u=this.currentResult,a=this.currentResultState,o=this.currentResultOptions,c=e!==s,l=c?e.state:this.currentQueryInitialState,h=c?this.currentResult:this.previousQueryResult,d=e.state,p=d.dataUpdatedAt,v=d.error,R=d.errorUpdatedAt,b=d.fetchStatus,S=d.status,Q=!1,g=!1;if(t._optimisticResults){var I=this.hasListeners(),C=!I&&y(e,t),E=I&&k(e,s,t,i);(C||E)&&(b=(0,f.Kw)(e.options.networkMode)?"fetching":"paused",p||(S="loading")),"isRestoring"===t._optimisticResults&&(b="idle")}if(t.keepPreviousData&&!d.dataUpdatedAt&&null!=h&&h.isSuccess&&"error"!==S)r=h.data,p=h.dataUpdatedAt,S=h.status,Q=!0;else if(t.select&&"undefined"!==typeof d.data)if(u&&d.data===(null==a?void 0:a.data)&&t.select===this.selectFn)r=this.selectResult;else try{this.selectFn=t.select,r=t.select(d.data),r=(0,n.oE)(null==u?void 0:u.data,r,t),this.selectResult=r,this.selectError=null}catch(P){0,this.selectError=P}else r=d.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&"loading"===S){var O;if(null!=u&&u.isPlaceholderData&&t.placeholderData===(null==o?void 0:o.placeholderData))O=u.data;else if(O="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof O)try{O=t.select(O),this.selectError=null}catch(P){0,this.selectError=P}"undefined"!==typeof O&&(S="success",r=(0,n.oE)(null==u?void 0:u.data,O,t),g=!0)}this.selectError&&(v=this.selectError,r=this.selectResult,R=Date.now(),S="error");var T="fetching"===b,U="loading"===S,F="error"===S;return{status:S,fetchStatus:b,isLoading:U,isSuccess:"success"===S,isError:F,isInitialLoading:U&&T,data:r,dataUpdatedAt:p,error:v,errorUpdatedAt:R,failureCount:d.fetchFailureCount,failureReason:d.fetchFailureReason,errorUpdateCount:d.errorUpdateCount,isFetched:d.dataUpdateCount>0||d.errorUpdateCount>0,isFetchedAfterMount:d.dataUpdateCount>l.dataUpdateCount||d.errorUpdateCount>l.errorUpdateCount,isFetching:T,isRefetching:T&&!U,isLoadingError:F&&0===d.dataUpdatedAt,isPaused:"paused"===b,isPlaceholderData:g,isPreviousData:Q,isRefetchError:F&&0!==d.dataUpdatedAt,isStale:m(e,t),refetch:this.refetch,remove:this.remove}}},{key:"updateResult",value:function(e){var t=this,r=this.currentResult,i=this.createResult(this.currentQuery,this.options);if(this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!(0,n.VS)(i,r)){this.currentResult=i;var u={cache:!0};!1!==(null==e?void 0:e.listeners)&&function(){if(!r)return!0;var e=t.options.notifyOnChangeProps,n="function"===typeof e?e():e;if("all"===n||!n&&!t.trackedProps.size)return!0;var s=new Set(null!=n?n:t.trackedProps);return t.options.useErrorBoundary&&s.add("error"),Object.keys(t.currentResult).some((function(e){var n=e;return t.currentResult[n]!==r[n]&&s.has(n)}))}()&&(u.listeners=!0),this.notify((0,s.Z)((0,s.Z)({},u),e))}}},{key:"updateQuery",value:function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}}},{key:"onQueryUpdate",value:function(e){var t={};"success"===e.type?t.onSuccess=!e.manual:"error"!==e.type||(0,f.DV)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()}},{key:"notify",value:function(e){var t=this;l.V.batch((function(){var r,n,s,i;if(e.onSuccess)null==(r=(n=t.options).onSuccess)||r.call(n,t.currentResult.data),null==(s=(i=t.options).onSettled)||s.call(i,t.currentResult.data,null);else if(e.onError){var u,a,o,c;null==(u=(a=t.options).onError)||u.call(a,t.currentResult.error),null==(o=(c=t.options).onSettled)||o.call(c,void 0,t.currentResult.error)}e.listeners&&t.listeners.forEach((function(e){(0,e.listener)(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))}}]),r}(d.l);function y(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||e.state.dataUpdatedAt>0&&R(e,t,t.refetchOnMount)}function R(e,t,r){if(!1!==t.enabled){var n="function"===typeof r?r(e):r;return"always"===n||!1!==n&&m(e,t)}return!1}function k(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&(!r.suspense||"error"!==e.state.status)&&m(e,r)}function m(e,t){return e.isStaleByTime(t.staleTime)}var b=r(9439),S=r(2791),Q=r(7413);function g(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var I=S.createContext(g()),C=function(){return S.useContext(I)},E=r(6403),O=S.createContext(!1),T=function(){return S.useContext(O)},U=(O.Provider,r(9608)),F=function(e,t){(e.suspense||e.useErrorBoundary)&&(t.isReset()||(e.retryOnMount=!1))},P=function(e){S.useEffect((function(){e.clearReset()}),[e])},w=function(e){var t=e.result,r=e.errorResetBoundary,n=e.useErrorBoundary,s=e.query;return t.isError&&!r.isReset()&&!t.isFetching&&(0,U.L)(n,[t.error,s])},D=function(e){e.suspense&&"number"!==typeof e.staleTime&&(e.staleTime=1e3)},Z=function(e,t,r){return(null==e?void 0:e.suspense)&&function(e,t){return e.isLoading&&e.isFetching&&!t}(t,r)},x=function(e,t,r){return t.fetchOptimistic(e).then((function(t){var r=t.data;null==e.onSuccess||e.onSuccess(r),null==e.onSettled||e.onSettled(r,null)})).catch((function(t){r.clearReset(),null==e.onError||e.onError(t),null==e.onSettled||e.onSettled(void 0,t)}))};function A(e,t,r){return function(e,t){var r=(0,E.NL)({context:e.context}),n=T(),s=C(),i=r.defaultQueryOptions(e);i._optimisticResults=n?"isRestoring":"optimistic",i.onError&&(i.onError=l.V.batchCalls(i.onError)),i.onSuccess&&(i.onSuccess=l.V.batchCalls(i.onSuccess)),i.onSettled&&(i.onSettled=l.V.batchCalls(i.onSettled)),D(i),F(i,s),P(s);var u=S.useState((function(){return new t(r,i)})),a=(0,b.Z)(u,1)[0],o=a.getOptimisticResult(i);if((0,Q.$)(S.useCallback((function(e){var t=n?function(){}:a.subscribe(l.V.batchCalls(e));return a.updateResult(),t}),[a,n]),(function(){return a.getCurrentResult()}),(function(){return a.getCurrentResult()})),S.useEffect((function(){a.setOptions(i,{listeners:!1})}),[i,a]),Z(i,o,n))throw x(i,a,s);if(w({result:o,errorResetBoundary:s,useErrorBoundary:i.useErrorBoundary,query:a.getCurrentQuery()}))throw o.error;return i.notifyOnChangeProps?o:a.trackResult(o)}((0,n._v)(e,t,r),v)}}}]);
//# sourceMappingURL=917.1860f1ce.chunk.js.map

/*+-------------------------------------------------------------------------------+*/
/*+----------------------------------- LT-PANEL ----------------------------------+*/
/*+-------------------------------------------------------------------------------+*/
Vue.component("lt-panel", {
    props: ['header', 'children'],
    template: 
        "<div class='lt-panel'>"+
        "   <div class='lt-panel-header' :v-html='header' />" +
        "   <lt-slot class='lt-panel-body' :children='children' />"+
        "</div>"
});

/*+-------------------------------------------------------------------------------+*/
/*+------------------------------- LT-PANEL-SHADOW -------------------------------+*/
/*+-------------------------------------------------------------------------------+*/
Vue.component("lt-panel-shadow", {
    props: ['children'],
    template: 
        "<div class='lt-panel-shadow'>" +
        "   <lt-slot class='lt-panel-shadow-body' :children='children' />" +
        "</div>"
});

/*+-------------------------------------------------------------------------------+*/
/*+------------------------------------ LT-BOOK ----------------------------------+*/
/*+-------------------------------------------------------------------------------+*/
Vue.component("lt-book", {
    props: ['left', 'right', 'number'],
    template: 
        "<div class='lt-book'>"+
        "   <lt-slot class='lt-book-left' :children='left' />"+
        "   <lt-slot class='lt-book-right' :children='right' />" +
        "   <div class='lt-book-number'>{{number}}</div>"+
        "</div>"
});
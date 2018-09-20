// componente padrão para todos os cursos
Vue.component("lt-slot",
{
    props: {
        children:
        {
            type: Array | String,
            default: ""
        },
        tagName:
        {
            type: String,
            default: "div"
        }
    },
    render: function (createElement) 
    {
        if (typeof (this.children) === 'string')
        {
            return createElement(
                this.tagName,
                { class: "lt-text", domProps: { innerHTML: this.children }, }
            );
        }
        else
        {
            return createElement(
                this.tagName,
                {},
                this.children.map(function (child) 
                {
                    if (child.template)
                        return createElement(child.template, { key: child.id, props: child }, '');
                    else
                        return createElement("div", { class: "lt-text", domProps: { innerHTML: child } });
                })
            );
        }
    },
});

// componente padrão para todos os cursos
Vue.component("lt-text",
{
    props: ['text'],
    template: "<div class='lt-text' v-html='text' />"
});


window.onload = function()
{
    // página mestre
    var masterPage = "<div class='master-page'><lt-slot :children='body' /></div>";

    // element que será substituido pelo VUE
    var app = document.createElement("DIV");
    app.setAttribute("id", "app");
    document.body.appendChild(app);

    // criando página
    new Vue({
        el: app,
        template: masterPage,
        data: window.page
    });
};

({
    block: 'b-page',
    title: 'i-bem • TodoMVC',
    head: [
        { elem: 'css', url: '_todos.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'meta', attrs: { name: 'description', content: 'Demo example' }},
        { elem: 'meta', attrs: { name: 'keywords', content: 'todo demo' }}
    ],
    content:[
        {
            block: 'todos',
            js: {
                modelName: 'todos',
                modelData: {
                    list: [
                        { text: 'milk', done: true },
                        { text: 'bread', done: false }
                    ]
                }
            },
            content: [
                {
                    elem: 'title',
                    content: 'todos'
                },

                {
                    elem: 'body',
                    content: [
                        {
                            elem: 'new-todo',
                            content: [
                                {
                                    block: 'checkbox',
                                    mix: [
                                        {
                                            block: 'todos',
                                            elem: 'all-done'
                                        },
                                        {
                                            block: 'todos',
                                            elem: 'model-field',
                                            js: {
                                                type: 'mod',
                                                name: 'allDone',
                                                block: 'checkbox',
                                                modName: 'checked'
                                            }
                                        }
                                    ],
                                    mods: { size: 'm' },
                                    checkboxAttrs: { autocomplete: 'off' }
                                },
                                {
                                    block: 'input',
                                    mix: [{ block: 'todos', elem: 'new-todo-input' }],
                                    name: 'text',
                                    mods: { size: 'm' },
                                    content: [
                                        { elem: 'hint', content: 'What needs to be done?' },
                                        { elem: 'control' }
                                    ]
                                }
                            ]
                        },

                        {
                            elem: 'todo-items',
                            mix: [{
                                block: 'todos',
                                elem: 'model-field',
                                js: {
                                    type: 'mod',
                                    name: 'show',
                                    block: 'todos',
                                    elem: 'todo-items',
                                    modName: 'show'
                                }
                            }],
                            content: []
                        }

                    ]
                },

                {
                    elem: 'footer',
                    content: [
                        {
                            elem: 'items-left',
                            content: '<b>1</b> item left'
                        },
                        {
                            elem: 'filters',
                            content: [
                                {
                                    elem: 'filter',
                                    mods: { type: 'all' },
                                    url: '#/',
                                    content: 'All'
                                },
                                {
                                    elem: 'filter',
                                    mods: { type: 'active' },
                                    url: '#/active',
                                    content: 'Active'
                                },
                                {
                                    elem: 'filter',
                                    mods: { type: 'completed' },
                                    url: '#/completed',
                                    content: 'Completed'
                                }
                            ]
                        },
                        {
                            block: 'button',
                            mix: [
                                {
                                    block: 'todos',
                                    elem: 'clear-completed',
                                    mods: { visible: 'yes' }
                                },
                                {
                                    block: 'todos',
                                    elem: 'model-field',
                                    js: {
                                        type: 'mod',
                                        name: 'hasCompleted',
                                        block: 'todos',
                                        elem: 'clear-completed',
                                        modName: 'visible'
                                    }
                                }
                            ],
                            url: '#',
                            mods: { size: 'xs', pseudo: 'yes' },
                            content: [
                                'Clear completed (',
                                {
                                    block: 'todos',
                                    elem: 'completed-count',
                                    mix: [{
                                        block: 'todos',
                                        elem: 'model-field',
                                        js: {
                                            name: 'itemsCompleted',
                                            type: 'inline'
                                        }
                                    }],
                                    content: 1
                                },
                                ')'
                            ]
                        }
                    ]
                }

            ]
        },

        { elem: 'js', url: '_todos.js' },
        { elem: 'js', url: '_todos.bemhtml.js' },
    ]
})
